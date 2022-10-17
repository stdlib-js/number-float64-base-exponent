<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Exponent

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an integer corresponding to the unbiased exponent of a [double-precision floating-point number][ieee754].



<section class="usage">

## Usage

To use in Observable,

```javascript
exponent = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-exponent@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var exponent = require( 'path/to/vendor/umd/number-float64-base-exponent/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-exponent@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.exponent;
})();
</script>
```

#### exponent( x )

Returns an `integer` corresponding to the unbiased exponent of a [double-precision floating-point number][ieee754].

```javascript
var exp = exponent( 3.14e307 ); // => 2**1021 ~ 1e307
// returns 1021

exp = exponent( 3.14e-307 ); // => 2**-1019 ~ 1e-307
// returns -1019

exp = exponent( -3.14 );
// returns 1

exp = exponent( 0.0 );
// returns -1023

exp = exponent( NaN );
// returns 1024
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-exponent@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var frac;
var exp;
var x;
var e;
var i;

// Generate random numbers and extract their exponents...
for ( i = 0; i < 100; i++ ) {
    frac = randu() * 10.0;
    exp = round( randu()*646.0 ) - 323;
    x = frac * pow( 10.0, exp );
    e = exponent( x );
    console.log( 'x: %d. unbiased exponent: %d.', x, e );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float64-base-exponent.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float64-base-exponent

[test-image]: https://github.com/stdlib-js/number-float64-base-exponent/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/number-float64-base-exponent/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float64-base-exponent/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float64-base-exponent?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float64-base-exponent.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float64-base-exponent/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float64-base-exponent/tree/deno
[umd-url]: https://github.com/stdlib-js/number-float64-base-exponent/tree/umd
[esm-url]: https://github.com/stdlib-js/number-float64-base-exponent/tree/esm
[branches-url]: https://github.com/stdlib-js/number-float64-base-exponent/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float64-base-exponent/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
