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

var tape = require( 'tape' );
var Float32Array = require( '@stdlib/array-float32' );
var sdsdot = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sdsdot, 'object', 'main export is an object' );
	t.end();
});

tape( 'the `ndarray` method has an arity of 8', function test( t ) {
	t.strictEqual( sdsdot.ndarray.length, 8, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method computes the dot product of `x` and `y` with extended accumulation', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	dot = sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	t.strictEqual( dot, -17.0, 'returns expected value' );

	x = new Float32Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float32Array( [ 1.0, -2.0, 3.0 ] );

	dot = sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	t.strictEqual( dot, 14.0, 'returns expected value' );

	t.end();
});

tape( 'the `ndarray` method supports providing a scalar constant to add to the dot product', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	dot = sdsdot.ndarray( x.length, 10.0, x, 1, 0, y, 1, 0 );
	t.strictEqual( dot, -7.0, 'returns expected value' );

	x = new Float32Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float32Array( [ 1.0, -2.0, 3.0 ] );

	dot = sdsdot.ndarray( x.length, -10.0, x, 1, 0, y, 1, 0 );
	t.strictEqual( dot, 4.0, 'returns expected value' );

	t.end();
});

tape( 'the `ndarray` method supports an `x` stride', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]);
	y = new Float32Array([
		8.0,  // 0
		2.0,  // 1
		-3.0, // 2
		3.0,
		-4.0,
		1.0
	]);

	dot = sdsdot.ndarray( 3, 0.0, x, 2, 0, y, 1, 0 );
	t.strictEqual( dot, -12.0, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method supports an `x` offset', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	y = new Float32Array([
		6.0,  // 0
		7.0,  // 1
		8.0,  // 2
		9.0,
		10.0,
		11.0
	]);

	dot = sdsdot.ndarray( 3, 0.0, x, 2, 1, y, 1, 0 );
	t.strictEqual( dot, 88.0, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method supports a `y` stride', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array([
		2.0,  // 0
		-3.0, // 1
		-5.0, // 2
		7.0,
		6.0
	]);
	y = new Float32Array([
		8.0,  // 0
		2.0,
		-3.0, // 1
		3.0,
		-4.0, // 2
		1.0
	]);

	dot = sdsdot.ndarray( 3, 0.0, x, 1, 0, y, 2, 0 );
	t.strictEqual( dot, 45.0, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method supports a `y` offset', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	]);
	y = new Float32Array([
		6.0,
		7.0,
		8.0,
		9.0,  // 0
		10.0, // 1
		11.0  // 2
	]);

	dot = sdsdot.ndarray( 3, 0.0, x, 2, 0, y, 1, 3 );
	t.strictEqual( dot, 94.0, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `ndarray` method returns `0.0`', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float32Array( [ 1.0, -2.0, 3.0 ] );

	dot = sdsdot.ndarray( 0, 0.0, x, 1, 0, y, 1, 0 );
	t.strictEqual( dot, 0.0, 'returns expected value' );

	dot = sdsdot.ndarray( -4, 0.0, x, 1, 0, y, 1, 0 );
	t.strictEqual( dot, 0.0, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method supports negative strides', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float32Array([
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	]);

	dot = sdsdot.ndarray( 3, 0.0, x, -2, x.length-1, y, -1, 2 );
	t.strictEqual( dot, 67.0, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method supports complex access patterns', function test( t ) {
	var dot;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float32Array([
		6.0,
		7.0, // 2
		8.0, // 1
		9.0, // 0
		10.0
	]);

	dot = sdsdot.ndarray( 3, 0.0, x, 2, 0, y, -1, y.length-2 );
	t.strictEqual( dot, 68.0, 'returns expected value' );
	t.end();
});
