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

/* eslint-disable node/no-sync */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Memory = require( '@stdlib/wasm-memory' );
var Float32Array = require( '@stdlib/array-float32' );
var Module = require( './../lib' ).Module;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Module, 'function', 'main export is a function' );
	t.end();
});

tape( 'a module instance has a `main` method which has an arity of 6', function test( t ) {
	var mem;
	var mod;

	mem = new Memory({
		'initial': 0
	});
	mod = new Module( mem );
	t.strictEqual( mod.main.length, 6, 'returns expected value' );
	t.end();
});

tape( 'a module instance has a `main` method which computes the dot product of `x` and `y` with extended accumulation', function test( t ) {
	var dot;
	var mem;
	var mod;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 64;

	mod.write( xp, new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] ) ); // eslint-disable-line max-len
	mod.write( yp, new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] ) ); // eslint-disable-line max-len

	dot = mod.main( 8, 0.0, xp, 1, yp, 1 );
	t.strictEqual( dot, -17.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method supports providing a scalar constant to add to the dot product', function test( t ) {
	var dot;
	var mem;
	var mod;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 64;

	mod.write( xp, new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] ) ); // eslint-disable-line max-len
	mod.write( yp, new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] ) ); // eslint-disable-line max-len

	dot = mod.main( 8, 10.0, xp, 1, yp, 1 );
	t.strictEqual( dot, -7.0, 'returns expected value' );

	mod.write( xp, new Float32Array( [ 3.0, -4.0, 1.0 ] ) );
	mod.write( yp, new Float32Array( [ 1.0, -2.0, 3.0 ] ) );

	dot = mod.main( 3, -10.0, xp, 1, yp, 1 );
	t.strictEqual( dot, 4.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports an `x` stride', function test( t ) {
	var dot;
	var mem;
	var mod;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float32Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]));
	mod.write( yp, new Float32Array([
		8.0,  // 0
		2.0,  // 1
		-3.0, // 2
		3.0,
		-4.0,
		1.0
	]));

	dot = mod.main( 3, 0.0, xp, 2, yp, 1 );
	t.strictEqual( dot, -12.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports a `y` stride', function test( t ) {
	var dot;
	var mem;
	var mod;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float32Array([
		2.0,  // 0
		-3.0, // 1
		-5.0, // 2
		7.0,
		6.0
	]));
	mod.write( yp, new Float32Array([
		8.0,  // 0
		2.0,
		-3.0, // 1
		3.0,
		-4.0, // 2
		1.0
	]));

	dot = mod.main( 3, 0.0, xp, 1, yp, 2 );
	t.strictEqual( dot, 45.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, a module instance has a `main` method which returns `0.0`', function test( t ) {
	var dot;
	var mem;
	var mod;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] ) );
	mod.write( yp, new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] ) );

	dot = mod.main( -1, 0.0, xp, 1, yp, 1 );
	t.strictEqual( dot, 0.0, 'returns expected value' );

	dot = mod.main( 0, 0.0, xp, 1, yp, 1 );
	t.strictEqual( dot, 0.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports negative strides', function test( t ) {
	var dot;
	var mem;
	var mod;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float32Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]));
	mod.write( yp, new Float32Array([
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	]));

	dot = mod.main( 3, 0.0, xp, -2, yp, -1 );
	t.strictEqual( dot, 67.0, 'returns expected value' );

	t.end();
});

tape( 'a module instance has a `main` method which supports complex access patterns', function test( t ) {
	var dot;
	var mem;
	var mod;
	var xp;
	var yp;

	mem = new Memory({
		'initial': 1
	});
	mod = new Module( mem );
	mod.initializeSync();

	xp = 0;
	yp = 40;

	mod.write( xp, new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]));
	mod.write( yp, new Float32Array([
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	]));

	dot = mod.main( 3, 0.0, xp, 2, yp, -1 );
	t.strictEqual( dot, 59.0, 'returns expected value' );

	t.end();
});
