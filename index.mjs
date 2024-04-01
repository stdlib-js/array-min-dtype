// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@v0.2.3-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-like@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-smallest-subnormal@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-max-safe-integer@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-min-safe-integer@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int8-min@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int16-min@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int32-min@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-uint8-max@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-uint16-max@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-uint32-max@v0.2.1-esm/index.mjs";function c(s){return s!=s||s===e||s===i?"float32":t(s)?s>=r&&s<=o?"float32":"float64":s>-m&&s<m?"float64":"float32"}function h(o){return"number"!=typeof o?n(o)?"float64"===c(o.re)||"float64"===c(o.im)?"complex128":"complex64":"generic":o!=o||o===e||o===i?"float32":t(o)?0===o&&s(o)?"float32":o<0?o>=d?"int8":o>=l?"int16":o>=a?"int32":"float64":o<=j?"uint8":o<=f?"uint16":o<=p?"uint32":"float64":o>-m&&o<m?"float64":"float32"}export{h as default};
//# sourceMappingURL=index.mjs.map
