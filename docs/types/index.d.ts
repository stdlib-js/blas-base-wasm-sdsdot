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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ModuleWrapper, Memory } from '@stdlib/types/wasm';

/**
* Interface defining a module constructor which is both "newable" and "callable".
*/
interface ModuleConstructor {
	/**
	* Returns a new WebAssembly module wrapper instance which uses the provided WebAssembly memory instance as its underlying memory.
	*
	* @param mem - WebAssembly memory instance
	* @returns module wrapper instance
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
	* var mod = new sdsdot.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
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
	* mod.write( xptr, oneTo( N, dtype ) );
	* mod.write( yptr, ones( N, dtype ) );
	*
	* // Perform computation:
	* var dot = mod.main( N, 0.0, xptr, 1, yptr, 1 );
	* // returns 15.0
	*/
	new( mem: Memory ): Module; // newable

	/**
	* Returns a new WebAssembly module wrapper instance which uses the provided WebAssembly memory instance as its underlying memory.
	*
	* @param mem - WebAssembly memory instance
	* @returns module wrapper instance
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
	* var mod = sdsdot.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
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
	* mod.write( xptr, oneTo( N, dtype ) );
	* mod.write( yptr, ones( N, dtype ) );
	*
	* // Perform computation:
	* var dot = mod.main( N, 0.0, xptr, 1, yptr, 1 );
	* // returns 15.0
	*/
	( mem: Memory ): Module; // callable
}

/**
* Interface describing a `sdsdot` WebAssembly module.
*/
interface Module extends ModuleWrapper {
	/**
	* Computes the dot product of two single-precision floating-point vectors with extended accumulation.
	*
	* @param N - number of indexed elements
	* @param scalar - scalar constant to add to dot product
	* @param xptr - first input array pointer (i.e., byte offset)
	* @param strideX - `x` stride length
	* @param yptr - second input array pointer (i.e., byte offset)
	* @param strideY - `y` stride length
	* @returns dot product
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
	* var mod = new sdsdot.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
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
	* mod.write( xptr, oneTo( N, dtype ) );
	* mod.write( yptr, ones( N, dtype ) );
	*
	* // Perform computation:
	* var dot = mod.main( N, 5.0, xptr, 1, yptr, 1 );
	* // returns 15.0
	*/
	main( N: number, scalar: number, xptr: number, strideX: number, yptr: number, strideY: number ): number;

	/**
	* Computes the dot product of two single-precision floating-point vectors with extended accumulation using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param scalar - scalar constant to add to dot product
	* @param xptr - first input array pointer (i.e., byte offset)
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param yptr - second input array pointer (i.e., byte offset)
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns dot product
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
	* var mod = new sdsdot.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
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
	* mod.write( xptr, oneTo( N, dtype ) );
	* mod.write( yptr, ones( N, dtype ) );
	*
	* // Perform computation:
	* var dot = mod.ndarray( N, 5.0, xptr, 1, 0, yptr, 1, 0 );
	* // returns 15.0
	*/
	ndarray( N: number, scalar: number, xptr: number, strideX: number, offsetX: number, yptr: number, strideY: number, offsetY: number ): number;
}

/**
* Interface describing `sdsdot`.
*/
interface Routine extends ModuleWrapper {
	/**
	* Computes the dot product of two single-precision floating-point vectors with extended accumulation.
	*
	* @param N - number of indexed elements
	* @param scalar - scalar constant to add to dot product
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param y - second input array
	* @param strideY - `y` stride length
	* @returns dot product
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	*
	* var dot = sdsdot.main( x.length, 0.0, x, 1, y, 1 );
	* // returns 15.0
	*/
	main( N: number, scalar: number, x: Float32Array, strideX: number, y: Float32Array, strideY: number ): number;

	/**
	* Computes the dot product of two single-precision floating-point vectors with extended accumulation using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param scalar - scalar constant to add to dot product
	* @param x - first input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - second input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @returns dot product
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	*
	* sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
	* // returns 15.0
	*/
	ndarray( N: number, scalar: number, x: Float32Array, strideX: number, offsetX: number, y: Float32Array, strideY: number, offsetY: number ): number;

	/**
	* Returns a new WebAssembly module wrapper instance which uses the provided WebAssembly memory instance as its underlying memory.
	*
	* @param mem - WebAssembly memory instance
	* @returns module wrapper instance
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
	* var mod = new sdsdot.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
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
	* mod.write( xptr, oneTo( N, dtype ) );
	* mod.write( yptr, ones( N, dtype ) );
	*
	* // Perform computation:
	* var dot = mod.main( N, 0.0, xptr, 1, yptr, 1 );
	* // returns 15.0
	*/
	Module: ModuleConstructor;
}

/**
* Computes the dot product of two single-precision floating-point vectors with extended accumulation.
*
* @param N - number of indexed elements
* @param scalar - scalar constant to add to dot product
* @param x - first input array
* @param strideX - `x` stride length
* @param y - second input array
* @param strideY - `y` stride length
* @returns dot product
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* var dot = sdsdot.main( x.length, 0.0, x, 1, y, 1 );
* // returns 15.0
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
*
* var dot = sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
* // returns 15.0
*/
declare var sdsdot: Routine;


// EXPORTS //

export = sdsdot;
