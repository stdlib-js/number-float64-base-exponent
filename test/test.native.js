/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var BIAS = require( '@stdlib/constants-float64-exponent-bias' );
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var pow = require( '@stdlib/math-base-special-pow' );
var bits = require( '@stdlib/number-float64-base-to-binary-string' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var exponent = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( exponent instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof exponent, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a number', opts, function test( t ) {
	t.equal( typeof exponent( 3.14e240 ), 'number', 'returns a number' );
	t.end();
});

tape( 'the function returns an integer corresponding to the unbiased exponent of a double-precision floating-point number', opts, function test( t ) {
	var expected;
	var actual;
	var sign;
	var frac;
	var exp;
	var x;
	var b;
	var i;

	for ( i = 0; i < 1e4; i++ ) {
		if ( randu() < 0.5 ) {
			sign = -1.0;
		} else {
			sign = 1.0;
		}
		frac = randu() * 10.0;
		exp = round( randu()*646.0 ) - 323;
		x = sign * frac * pow( 10.0, exp );

		b = bits( x );
		expected = parseInt( b.substring( 1, 12 ), 2 ) - BIAS;

		actual = exponent( x );
		t.equal( actual, expected, 'returns the unbiased exponent for ' + x );
	}
	t.end();
});

tape( 'the function returns the unbiased exponent for `+-0`', opts, function test( t ) {
	t.equal( exponent( 0.0 ), -BIAS, 'returns -1023' );
	t.equal( exponent( -0.0 ), -BIAS, 'returns -1023' );
	t.end();
});

tape( 'the function returns the unbiased exponent for `+infinity`', opts, function test( t ) {
	t.equal( exponent( PINF ), BIAS+1, 'returns 1024' );
	t.end();
});

tape( 'the function returns the unbiased exponent for `-infinity`', opts, function test( t ) {
	t.equal( exponent( NINF ), BIAS+1, 'returns 1024' );
	t.end();
});

tape( 'the function returns the unbiased exponent for `NaN`', opts, function test( t ) {
	t.equal( exponent( NaN ), BIAS+1, 'returns 1024' );
	t.end();
});

tape( 'the function returns the unbiased exponent for subnormals', opts, function test( t ) {
	t.equal( exponent( 3.14e-320 ), -BIAS, 'returns -1023' );
	t.end();
});
