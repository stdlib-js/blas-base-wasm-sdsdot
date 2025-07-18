/*
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

/* eslint-disable space-in-parens */

import Memory = require( '@stdlib/wasm-memory' );
import sdsdot = require( './index' );


// TESTS //

// Attached to the main export is a `main` method which returns a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sdsdot.main( x.length, 0.0, x, 1, y, 1 ); // $ExpectType number
}

// The compiler throws an error if the `main` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sdsdot.main( '10', 0.0, x, 1, y, 1 ); // $ExpectError
	sdsdot.main( true, 0.0, x, 1, y, 1 ); // $ExpectError
	sdsdot.main( false, 0.0, x, 1, y, 1 ); // $ExpectError
	sdsdot.main( null, 0.0, x, 1, y, 1 ); // $ExpectError
	sdsdot.main( undefined, 0.0, x, 1, y, 1 ); // $ExpectError
	sdsdot.main( [], 0.0, x, 1, y, 1 ); // $ExpectError
	sdsdot.main( {}, 0.0, x, 1, y, 1 ); // $ExpectError
	sdsdot.main( ( x: number ): number => x, 0.0, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sdsdot.main( x.length, '10', x, 1, y, 1 ); // $ExpectError
	sdsdot.main( x.length, true, x, 1, y, 1 ); // $ExpectError
	sdsdot.main( x.length, false, x, 1, y, 1 ); // $ExpectError
	sdsdot.main( x.length, null, x, 1, y, 1 ); // $ExpectError
	sdsdot.main( x.length, undefined, x, 1, y, 1 ); // $ExpectError
	sdsdot.main( x.length, [], x, 1, y, 1 ); // $ExpectError
	sdsdot.main( x.length, {}, x, 1, y, 1 ); // $ExpectError
	sdsdot.main( x.length, ( x: number ): number => x, x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sdsdot.main( x.length, 0.0, 10, 1, y, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, '10', 1, y, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, true, 1, y, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, false, 1, y, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, null, 1, y, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, undefined, 1, y, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, [], 1, y, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, {}, 1, y, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, ( x: number ): number => x, 1, y, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sdsdot.main( x.length, 0.0, x, '10', y, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, true, y, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, false, y, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, null, y, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, undefined, y, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, [], y, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, {}, y, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, ( x: number ): number => x, y, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a fifth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	sdsdot.main( x.length, 0.0, x, 1, 10, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, 1, '10', 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, 1, true, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, 1, false, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, 1, null, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, 1, undefined, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, 1, [], 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, 1, {}, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided a sixth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sdsdot.main( x.length, 0.0, x, 1, y, '10' ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, 1, y, true ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, 1, y, false ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, 1, y, null ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, 1, y, undefined ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, 1, y, [] ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, 1, y, {} ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, 1, y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `main` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sdsdot.main(); // $ExpectError
	sdsdot.main( x.length ); // $ExpectError
	sdsdot.main( x.length, 0.0 ); // $ExpectError
	sdsdot.main( x.length, 0.0, x ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, 1 ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, 1, y ); // $ExpectError
	sdsdot.main( x.length, 0.0, x, 1, y, 1, 10 ); // $ExpectError
}

// Attached to main export is an `ndarray` method which returns a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method is provided a first argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sdsdot.ndarray( '10', 0.0, x, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( true, 0.0, x, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( false, 0.0, x, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( null, 0.0, x, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( undefined, 0.0, x, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( [], 0.0, x, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( {}, 0.0, x, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( ( x: number ): number => x, 0.0, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a second argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sdsdot.ndarray( x.length, '10', x, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, true, x, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, false, x, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, null, x, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, undefined, x, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, [], x, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, {}, x, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a third argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sdsdot.ndarray( x.length, 0.0, 10, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, '10', 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, true, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, false, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, null, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, undefined, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, [], 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, {}, 1, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, ( x: number ): number => x, x, 1, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fourth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sdsdot.ndarray( x.length, 0.0, x, '10', 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, true, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, false, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, null, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, undefined, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, [], 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, {}, 0, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, ( x: number ): number => x, 0, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a fifth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sdsdot.ndarray( x.length, 0.0, x, 1, '10', y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, true, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, false, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, null, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, undefined, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, [], y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, {}, y, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, ( x: number ): number => x, y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a sixth argument which is not a Float32Array...
{
	const x = new Float32Array( 10 );

	sdsdot.ndarray( x.length, 0.0, x, 1, 0, 10, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, '10', 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, true, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, false, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, null, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, undefined, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, [], 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, {}, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided a seventh argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, '10', 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, true, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, false, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, null, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, undefined, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, [], 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, {}, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an eighth argument which is not a number...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, '10' ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, true ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, false ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, null ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, undefined ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, [] ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, {} ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is provided an unsupported number of arguments...
{
	const x = new Float32Array( 10 );
	const y = new Float32Array( 10 );

	sdsdot.ndarray(); // $ExpectError
	sdsdot.ndarray( x.length ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1 ); // $ExpectError
	sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0, 10 ); // $ExpectError
}

// Attached to the main export is a `Module` constructor which returns a module...
{
	const mem = new Memory({
		'initial': 0
	});

	sdsdot.Module( mem ); // $ExpectType Module
}

// The compiler throws an error if the `Module` constructor is not provided a WebAssembly memory instance...
{
	sdsdot.Module( '10' ); // $ExpectError
	sdsdot.Module( true ); // $ExpectError
	sdsdot.Module( false ); // $ExpectError
	sdsdot.Module( null ); // $ExpectError
	sdsdot.Module( undefined ); // $ExpectError
	sdsdot.Module( [] ); // $ExpectError
	sdsdot.Module( {} ); // $ExpectError
	sdsdot.Module( ( x: number ): number => x ); // $ExpectError
}

// The `Module` constructor returns a module instance having a `main` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = sdsdot.Module( mem );

	mod.main( 10, 1, 0, 1, 80, 1 ); // $ExpectType number
}

// The compiler throws an error if the `main` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = sdsdot.Module( mem );

	mod.main( '10', 1, 10, 1, 80, 1 ); // $ExpectError
	mod.main( true, 1, 10, 1, 80, 1 ); // $ExpectError
	mod.main( false, 1, 10, 1, 80, 1 ); // $ExpectError
	mod.main( null, 1, 10, 1, 80, 1 ); // $ExpectError
	mod.main( undefined, 1, 10, 1, 80, 1 ); // $ExpectError
	mod.main( [], 1, 10, 1, 80, 1 ); // $ExpectError
	mod.main( {}, 1, 10, 1, 80, 1 ); // $ExpectError
	mod.main( ( x: number ): number => x, 1, 10, 1, 80, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a second argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = sdsdot.Module( mem );

	mod.main( 10, '10', 10, 1, 80, 1 ); // $ExpectError
	mod.main( 10, true, 10, 1, 80, 1 ); // $ExpectError
	mod.main( 10, false, 10, 1, 80, 1 ); // $ExpectError
	mod.main( 10, null, 10, 1, 80, 1 ); // $ExpectError
	mod.main( 10, undefined, 10, 1, 80, 1 ); // $ExpectError
	mod.main( 10, [], 10, 1, 80, 1 ); // $ExpectError
	mod.main( 10, {}, 10, 1, 80, 1 ); // $ExpectError
	mod.main( 10, ( x: number ): number => x, 10, 1, 80, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a third argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = sdsdot.Module( mem );

	mod.main( 10, 1, '10', 1, 80, 1 ); // $ExpectError
	mod.main( 10, 1, true, 1, 80, 1 ); // $ExpectError
	mod.main( 10, 1, false, 1, 80, 1 ); // $ExpectError
	mod.main( 10, 1, null, 1, 80, 1 ); // $ExpectError
	mod.main( 10, 1, undefined, 1, 80, 1 ); // $ExpectError
	mod.main( 10, 1, [], 1, 80, 1 ); // $ExpectError
	mod.main( 10, 1, {}, 1, 80, 1 ); // $ExpectError
	mod.main( 10, 1, ( x: number ): number => x, 1, 80, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a fourth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = sdsdot.Module( mem );

	mod.main( 10, 1, 0, '10', 80, 1 ); // $ExpectError
	mod.main( 10, 1, 0, true, 80, 1 ); // $ExpectError
	mod.main( 10, 1, 0, false, 80, 1 ); // $ExpectError
	mod.main( 10, 1, 0, null, 80, 1 ); // $ExpectError
	mod.main( 10, 1, 0, undefined, 80, 1 ); // $ExpectError
	mod.main( 10, 1, 0, [], 80, 1 ); // $ExpectError
	mod.main( 10, 1, 0, {}, 80, 1 ); // $ExpectError
	mod.main( 10, 1, 0, ( x: number ): number => x, 80, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a fifth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = sdsdot.Module( mem );

	mod.main( 10, 1, 0, 1, '10', 1 ); // $ExpectError
	mod.main( 10, 1, 0, 1, true, 1 ); // $ExpectError
	mod.main( 10, 1, 0, 1, false, 1 ); // $ExpectError
	mod.main( 10, 1, 0, 1, null, 1 ); // $ExpectError
	mod.main( 10, 1, 0, 1, undefined, 1 ); // $ExpectError
	mod.main( 10, 1, 0, 1, [], 1 ); // $ExpectError
	mod.main( 10, 1, 0, 1, {}, 1 ); // $ExpectError
	mod.main( 10, 1, 0, 1, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided a sixth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = sdsdot.Module( mem );

	mod.main( 10, 1, 0, 1, 80, '10' ); // $ExpectError
	mod.main( 10, 1, 0, 1, 80, true ); // $ExpectError
	mod.main( 10, 1, 0, 1, 80, false ); // $ExpectError
	mod.main( 10, 1, 0, 1, 80, null ); // $ExpectError
	mod.main( 10, 1, 0, 1, 80, undefined ); // $ExpectError
	mod.main( 10, 1, 0, 1, 80, [] ); // $ExpectError
	mod.main( 10, 1, 0, 1, 80, {} ); // $ExpectError
	mod.main( 10, 1, 0, 1, 80, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `main` method of a module instance is provided an unsupported number of arguments...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = sdsdot.Module( mem );

	mod.main(); // $ExpectError
	mod.main( 10 ); // $ExpectError
	mod.main( 10, 1 ); // $ExpectError
	mod.main( 10, 1,0 ); // $ExpectError
	mod.main( 10, 1, 0, 1 ); // $ExpectError
	mod.main( 10, 1, 0, 1, 80 ); // $ExpectError
	mod.main( 10, 1, 0, 1, 80, 1, 10 ); // $ExpectError
}

// The `Module` constructor returns a module instance having an `ndarray` method which returns a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = sdsdot.Module( mem );

	mod.ndarray( 10, 0, 0, 1, 0, 80, 1, 0 ); // $ExpectType number
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a first argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = sdsdot.Module( mem );

	mod.ndarray( '10', 0, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( true, 0, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( false, 0, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( null, 0, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( undefined, 0, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( [], 0, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( {}, 0, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( ( x: number ): number => x, 0, 0, 1, 0, 80, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a second argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = sdsdot.Module( mem );

	mod.ndarray( 10, '10', 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, true, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, false, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, null, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, undefined, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, [], 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, {}, 0, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, ( x: number ): number => x, 0, 1, 0, 80, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a third argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = sdsdot.Module( mem );

	mod.ndarray( 10, 0, '10', 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, true, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, false, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, null, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, undefined, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, [], 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, {}, 1, 0, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, ( x: number ): number => x, 1, 0, 80, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a fourth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = sdsdot.Module( mem );

	mod.ndarray( 10, 0, 0, '10', 1, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, true, 1, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, false, 1, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, null, 1, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, undefined, 1, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, [], 1, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, {}, 1, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, ( x: number ): number => x, 1, 80, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a fifth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = sdsdot.Module( mem );

	mod.ndarray( 10, 0, 0, 1, '10', 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, true, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, false, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, null, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, undefined, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, [], 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, {}, 80, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, ( x: number ): number => x, 80, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a sixth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = sdsdot.Module( mem );

	mod.ndarray( 10, 0, 0, 1, 0, '10', 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, true, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, false, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, null, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, undefined, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, [], 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, {}, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, ( x: number ): number => x, 0, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided a seventh argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = sdsdot.Module( mem );

	mod.ndarray( 10, 0, 0, 1, 0, 80, '10', 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, 80, true, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, 80, false, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, 80, null, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, 80, undefined, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, 80, [], 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, 80, {}, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, 80, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided an eighth argument which is not a number...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = sdsdot.Module( mem );

	mod.ndarray( 10, 0, 0, 1, 0, 80, 1, '10' ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, 80, 1, true ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, 80, 1, false ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, 80, 1, null ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, 80, 1, undefined ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, 80, 1, [] ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, 80, 1, {} ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, 80, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method of a module instance is provided an unsupported number of arguments...
{
	const mem = new Memory({
		'initial': 1
	});
	const mod = sdsdot.Module( mem );

	mod.ndarray(); // $ExpectError
	mod.ndarray( 10 ); // $ExpectError
	mod.ndarray( 10, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, 80 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, 80, 1 ); // $ExpectError
	mod.ndarray( 10, 0, 0, 1, 0, 80, 1, 0, 10 ); // $ExpectError
}
