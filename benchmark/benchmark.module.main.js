/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var hasWebAssemblySupport = require( '@stdlib/assert-has-wasm-support' );
var Memory = require( '@stdlib/wasm-memory' );
var bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );
var uniform = require( '@stdlib/random-array-uniform' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var pow = require( '@stdlib/math-base-special-pow' );
var pkg = require( './../package.json' ).name;
var sdsdot = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasWebAssemblySupport()
};
var options = {
	'dtype': 'float32'
};


// FUNCTIONS //

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var xptr;
		var yptr;
		var mod;
		var mem;
		var nb;
		var d;
		var i;

		// Create a new BLAS routine interface:
		mem = new Memory({
			'initial': 0
		});
		mod = new sdsdot.Module( mem );

		// Initialize the module:
		mod.initializeSync(); // eslint-disable-line node/no-sync

		// Reallocate the underlying memory to allow storing two vectors:
		nb = bytesPerElement( options.dtype );
		mod.realloc( len*2*nb );

		// Define pointers (i.e., byte offsets) to the first vector elements:
		xptr = 0;
		yptr = len * nb;

		// Write random values to module memory:
		mod.write( xptr, uniform( len, -100.0, 100.0, options ) );
		mod.write( yptr, uniform( len, -100.0, 100.0, options ) );

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			d = mod.main( len, 0.0, xptr, 1, yptr, 1 );
			if ( isnan( d ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( d ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );
		f = createBenchmark( len );
		bench( pkg+'::module,pointers:len='+len, opts, f );
	}
}

main();
