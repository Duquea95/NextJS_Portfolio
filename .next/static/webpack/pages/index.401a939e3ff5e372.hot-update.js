"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Banner/index.js":
/*!************************************!*\
  !*** ./components/Banner/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_anthony_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/anthony.png */ \"./public/images/anthony.png\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst titleSlider = ()=>{\n    _s();\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    let texts = [\n        \"People\",\n        \"Impact\",\n        \"Change\",\n        \"Action\",\n        \"Good\",\n        \"People\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            if (activeIndex == texts.length - 1) {\n                setCount(count + 1);\n                return setActiveIndex(0);\n            } else {\n                return setActiveIndex(activeIndex + 1);\n            }\n        }, 2500);\n        return ()=>clearInterval(interval);\n    }, [\n        activeIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Anthony Duque\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"dsktp-only\",\n                        children: \" - Frontend Engineer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Banner/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 23\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Banner/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"main-lg\",\n                children: [\n                    \"Creating\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Banner/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 39\n                    }, undefined),\n                    \"For\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Banner/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 47\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Banner/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"title-slider\",\n                children: texts.map((text, idx)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"main-lg \".concat(idx == 0 && count == 0 ? \"slideIn-start\" : \"\", \" \").concat(idx == 0 ? \"start\" : \"hide-slide\", \" \").concat(idx == activeIndex ? \"active\" : \"inactive\", \" \").concat(idx <= activeIndex ? \"hide-slideUp\" : \"\", \" \").concat(idx == text.length - 1 ? \"last\" : \"\"),\n                        children: text\n                    }, idx, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Banner/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Banner/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Banner/index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(titleSlider, \"0Grncn6LBl1AFzBd2bBkn7/oIYk=\");\nconst Banner = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-center banner grad\",\n        style: {\n            willChange: \"opacity\",\n            opacity: 1\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"padding content\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Web Developer & Designer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Banner/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            fontSize: \"1.4rem\"\n                        },\n                        children: \"Developing user-friendly and memorable experiences with every design.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Banner/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"banner-image\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            alt: \"Anthony Duque - Front-End Engineer\",\n                            priority: true,\n                            src: _public_images_anthony_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src,\n                            width: 240,\n                            height: 300\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Banner/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 41\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Banner/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Banner/index.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Banner/index.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Banner/index.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jhbm5lci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFnRDtBQUNsQjtBQUNzQjtBQUVwRCxNQUFNSyxjQUFjLElBQU07O0lBQ3hCLE1BQUssQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUM5QyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkMsSUFBSVMsUUFBUTtRQUFDO1FBQVU7UUFBVTtRQUFVO1FBQVU7UUFBUTtLQUFTO0lBRXRFUixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTVMsV0FBV0MsWUFBWSxJQUFNO1lBQ2pDLElBQUdOLGVBQWVJLE1BQU1HLE1BQU0sR0FBQyxHQUFFO2dCQUMvQkosU0FBU0QsUUFBTTtnQkFDZixPQUFPRCxlQUFlO1lBRXhCLE9BQUs7Z0JBQ0gsT0FBT0EsZUFBZUQsY0FBWTtZQUNwQyxDQUFDO1FBQ0gsR0FBRztRQUVILE9BQU8sSUFBTVEsY0FBY0g7SUFDN0IsR0FBRztRQUFDTDtLQUFZO0lBRWhCLHFCQUNFLDhEQUFDUzs7MEJBQ0MsOERBQUNDOztvQkFBRTtrQ0FBYSw4REFBQ0M7d0JBQUtDLFdBQVU7a0NBQWE7Ozs7Ozs7Ozs7OzswQkFDN0MsOERBQUNDO2dCQUFHRCxXQUFVOztvQkFBVTtrQ0FBUSw4REFBQ0U7Ozs7O29CQUFJO2tDQUFHLDhEQUFDQTs7Ozs7Ozs7Ozs7MEJBQ3pDLDhEQUFDTDtnQkFBSUcsV0FBVTswQkFDWlIsTUFBTVcsR0FBRyxDQUFDLENBQUNDLE1BQUtDLE1BQVE7b0JBQUMscUJBQ3hCLDhEQUFDSjt3QkFBYUQsV0FBVyxXQUE4REssT0FBbkQsT0FBUSxLQUFLZixTQUFTLElBQUssa0JBQWtCLEVBQUUsRUFBQyxLQUF3Q2UsT0FBckNBLE9BQU8sSUFBSSxVQUFVLFlBQVksRUFBQyxLQUE4Q0EsT0FBM0NBLE9BQUtqQixjQUFjLFdBQVUsVUFBVSxFQUFDLEtBQStDaUIsT0FBNUNBLE9BQU9qQixjQUFjLGlCQUFpQixFQUFFLEVBQUMsS0FBc0MsT0FBbkNpQixPQUFPRCxLQUFLVCxNQUFNLEdBQUMsSUFBSSxTQUFTLEVBQUU7a0NBQUtTO3VCQUFqUEM7Ozs7O2dCQUNWOzs7Ozs7Ozs7Ozs7QUFJVDtHQTlCTWxCO0FBZ0NOLE1BQU1tQixTQUFTLElBQU07SUFFbkIscUJBQ0UsOERBQUNUO1FBQUlHLFdBQVU7UUFBK0JPLE9BQU87WUFBQ0MsWUFBWTtZQUFXQyxTQUFTO1FBQUM7a0JBQ3JGLDRFQUFDWjtZQUFJRyxXQUFVO3NCQUNiLDRFQUFDSDs7a0NBRUMsOERBQUNJO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNIO3dCQUFFUyxPQUFPOzRCQUFDRyxVQUFVO3dCQUFRO2tDQUFHOzs7Ozs7a0NBQ2hDLDhEQUFDYjt3QkFBSUcsV0FBVTtrQ0FBZSw0RUFBQ2YsbURBQUtBOzRCQUFDMEIsS0FBSTs0QkFBcUNDLFFBQVE7NEJBQUNDLEtBQUszQixzRUFBVzs0QkFBRTRCLE9BQU87NEJBQUtDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2STtLQWRNVDtBQWdCTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jhbm5lci9pbmRleC5qcz9mZDIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgYW50aG9ueSBmcm9tJy4uLy4uL3B1YmxpYy9pbWFnZXMvYW50aG9ueS5wbmcnIFxuXG5jb25zdCB0aXRsZVNsaWRlciA9ICgpID0+IHtcbiAgY29uc3RbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApOyBcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKVxuICBsZXQgdGV4dHMgPSBbJ1Blb3BsZScsICdJbXBhY3QnLCAnQ2hhbmdlJywgJ0FjdGlvbicsICdHb29kJywgJ1Blb3BsZSddO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZihhY3RpdmVJbmRleCA9PSB0ZXh0cy5sZW5ndGgtMSl7XG4gICAgICAgIHNldENvdW50KGNvdW50KzEpO1xuICAgICAgICByZXR1cm4gc2V0QWN0aXZlSW5kZXgoMCk7XG4gICAgICAgIFxuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBzZXRBY3RpdmVJbmRleChhY3RpdmVJbmRleCsxKTtcbiAgICAgIH1cbiAgICB9LCAyNTAwKTtcbiAgICBcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFthY3RpdmVJbmRleF0pXG5cbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgICA8cD5BbnRob255IER1cXVlPHNwYW4gY2xhc3NOYW1lPSdkc2t0cC1vbmx5Jz4gLSBGcm9udGVuZCBFbmdpbmVlcjwvc3Bhbj48L3A+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdtYWluLWxnJz5DcmVhdGluZzxici8+Rm9yPGJyLz48L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlLXNsaWRlcic+XG4gICAgICAgIHt0ZXh0cy5tYXAoKHRleHQsaWR4KSA9PiB7cmV0dXJuIChcbiAgICAgICAgICA8aDEga2V5PXtpZHh9IGNsYXNzTmFtZT17YG1haW4tbGcgJHsoaWR4ID09IDAgJiYgY291bnQgPT0gMCkgPyAnc2xpZGVJbi1zdGFydCcgOiAnJ30gJHtpZHggPT0gMCA/ICdzdGFydCcgOiAnaGlkZS1zbGlkZSd9ICR7aWR4PT1hY3RpdmVJbmRleCA/ICdhY3RpdmUnOiAnaW5hY3RpdmUnfSAke2lkeCA8PSBhY3RpdmVJbmRleCA/ICdoaWRlLXNsaWRlVXAnIDogJyd9ICR7aWR4ID09IHRleHQubGVuZ3RoLTEgPyAnbGFzdCcgOiAnJ31gfT57dGV4dH08L2gxPlxuICAgICAgICApfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBCYW5uZXIgPSAoKSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY2VudGVyIGJhbm5lciBncmFkJyBzdHlsZT17e3dpbGxDaGFuZ2U6ICdvcGFjaXR5Jywgb3BhY2l0eTogMX19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BhZGRpbmcgY29udGVudCc+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgey8qIDxoMj5IaSwgSSdtIEFudGhvbnkhPC9oMj4gKi99XG4gICAgICAgICAgPGgxPldlYiBEZXZlbG9wZXIgJiBEZXNpZ25lcjwvaDE+XG4gICAgICAgICAgPHAgc3R5bGU9e3tmb250U2l6ZTogJzEuNHJlbSd9fT5EZXZlbG9waW5nIHVzZXItZnJpZW5kbHkgYW5kIG1lbW9yYWJsZSBleHBlcmllbmNlcyB3aXRoIGV2ZXJ5IGRlc2lnbi48L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jhbm5lci1pbWFnZSc+PEltYWdlIGFsdD0nQW50aG9ueSBEdXF1ZSAtIEZyb250LUVuZCBFbmdpbmVlcicgcHJpb3JpdHkgc3JjPXthbnRob255LnNyY30gd2lkdGg9ezI0MH0gaGVpZ2h0PXszMDB9Lz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsImFudGhvbnkiLCJ0aXRsZVNsaWRlciIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJjb3VudCIsInNldENvdW50IiwidGV4dHMiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsInAiLCJzcGFuIiwiY2xhc3NOYW1lIiwiaDEiLCJiciIsIm1hcCIsInRleHQiLCJpZHgiLCJCYW5uZXIiLCJzdHlsZSIsIndpbGxDaGFuZ2UiLCJvcGFjaXR5IiwiZm9udFNpemUiLCJhbHQiLCJwcmlvcml0eSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Banner/index.js\n"));

/***/ })

});