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

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var isWebAssemblyMemory = require( '@stdlib/assert-is-wasm-memory' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var inherits = require( '@stdlib/utils-inherit' );
var WasmModule = require( '@stdlib/wasm-module-wrapper' );
var format = require( '@stdlib/string-format' );
var wasmBinary = require( './binary.js' );


// MAIN //

/**
* BLAS routine WebAssembly module wrapper constructor.
*
* @constructor
* @param {Object} memory - WebAssembly memory instance
* @throws {TypeError} must provide a WebAssembly memory instance
* @returns {Module} module instance
*
* @example
* var Memory = require( '@stdlib/wasm-memory' );
* var oneTo = require( '@stdlib/array-one-to' );
* var ones = require( '@stdlib/array-ones' );
* var zeros = require( '@stdlib/array-zeros' );
* var bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );
*
* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var sdsdot = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* sdsdot.initializeSync();
*
* // Define a vector data type:
* var dtype = 'float32';
*
* // Specify a vector length:
* var N = 5;
*
* // Define pointers (i.e., byte offsets) for storing two vectors:
* var xptr = 0;
* var yptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* sdsdot.write( xptr, oneTo( N, dtype ) );
* sdsdot.write( yptr, ones( N, dtype ) );
*
* // Perform computation:
* var dot = sdsdot.main( N, 0.0, xptr, 1, yptr, 1 );
* // returns 15.0
*/
function Module( memory ) {
	if ( !( this instanceof Module ) ) {
		return new Module( memory );
	}
	if ( !isWebAssemblyMemory( memory ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a WebAssembly memory instance. Value: `%s`.', memory ) );
	}
	// Call the parent constructor:
	WasmModule.call( this, wasmBinary, memory, {
		'env': {
			'memory': memory
		}
	});

	return this;
}

// Inherit from the parent constructor:
inherits( Module, WasmModule );

/**
* Computes the dot product of two single-precision floating-point vectors with extended accumulation.
*
* @name main
* @memberof Module.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {number} scalar - scalar constant to add to dot product
* @param {NonNegativeInteger} xptr - first input array pointer (i.e., byte offset)
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} yptr - second input array pointer (i.e., byte offset)
* @param {integer} strideY - `y` stride length
* @returns {number} dot product
*
* @example
* var Memory = require( '@stdlib/wasm-memory' );
* var oneTo = require( '@stdlib/array-one-to' );
* var ones = require( '@stdlib/array-ones' );
* var zeros = require( '@stdlib/array-zeros' );
* var bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );
*
* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var sdsdot = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* sdsdot.initializeSync();
*
* // Define a vector data type:
* var dtype = 'float32';
*
* // Specify a vector length:
* var N = 5;
*
* // Define pointers (i.e., byte offsets) for storing two vectors:
* var xptr = 0;
* var yptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* sdsdot.write( xptr, oneTo( N, dtype ) );
* sdsdot.write( yptr, ones( N, dtype ) );
*
* // Perform computation:
* var dot = sdsdot.main( N, 0.0, xptr, 1, yptr, 1 );
* // returns 15.0
*/
setReadOnly( Module.prototype, 'main', function sdsdot( N, scalar, xptr, strideX, yptr, strideY ) {
	return this._instance.exports.c_sdsdot( N, scalar, xptr, strideX, yptr, strideY );
});

/**
* Computes the dot product of two single-precision floating-point vectors with extended accumulation using alternative indexing semantics.
*
* @name ndarray
* @memberof Module.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {number} scalar - scalar constant to add to dot product
* @param {NonNegativeInteger} xptr - first input array pointer (i.e., byte offset)
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {NonNegativeInteger} yptr - second input array pointer (i.e., byte offset)
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @returns {number} dot product
*
* @example
* var Memory = require( '@stdlib/wasm-memory' );
* var oneTo = require( '@stdlib/array-one-to' );
* var ones = require( '@stdlib/array-ones' );
* var zeros = require( '@stdlib/array-zeros' );
* var bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );
*
* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var sdsdot = new Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* sdsdot.initializeSync();
*
* // Define a vector data type:
* var dtype = 'float32';
*
* // Specify a vector length:
* var N = 5;
*
* // Define pointers (i.e., byte offsets) for storing two vectors:
* var xptr = 0;
* var yptr = N * bytesPerElement( dtype );
*
* // Write vector values to module memory:
* sdsdot.write( xptr, oneTo( N, dtype ) );
* sdsdot.write( yptr, ones( N, dtype ) );
*
* // Perform computation:
* var sdsdot = sdsdot.ndarray( N, 0.0, xptr, 1, 0, yptr, 1, 0 );
* // returns 15.0
*/
setReadOnly( Module.prototype, 'ndarray', function sdsdot( N, scalar, xptr, strideX, offsetX, yptr, strideY, offsetY ) {
	return this._instance.exports.c_sdsdot_ndarray( N, scalar, xptr, strideX, offsetX, yptr, strideY, offsetY ); // eslint-disable-line max-len
});


// EXPORTS //

module.exports = Module;
