"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_images_anthony_duque_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/anthony-duque-logo.png */ \"./public/images/anthony-duque-logo.png\");\n\nvar _s = $RefreshSig$();\n\n\n// import { NavLink } from \"react-router-dom\";\n\n\nconst Header = (prop)=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [menuState, setMenuState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    console.log(router.pathname);\n    const handleClick = ()=>{\n        return setMenuState(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"logo-container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        className: \"logo\",\n                        style: _public_images_anthony_duque_logo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"] ? {\n                            backgroundImage: \"url(\".concat(_public_images_anthony_duque_logo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src, \")\")\n                        } : \"\",\n                        children: \"DigiMedia Creatives\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 41\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    onClick: handleClick,\n                    class: \"btn-menu\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"\".concat(menuState == true ? \"show\" : \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mobile-dropdown\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"nav-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: navLinks.map((item, index)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/\".concat(item.page),\n                                            className: \"\".concat(router.pathname == \"/\".concat(item.name) ? \"current-menu-item\" : undefined),\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, \"header-link__\".concat(item.name), false, {\n                                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 17\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"d39yh/WxXcAG7fAfaCCq5gGVcnU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nconst navLinks = [\n    {\n        name: \"work\",\n        page: \"work\"\n    },\n    {\n        name: \"expertise\",\n        page: \"expertise\"\n    },\n    {\n        name: \"about\",\n        page: \"about\"\n    }\n];\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQXVDO0FBQ0E7QUFDdkMsOENBQThDO0FBQ2pCO0FBQ2dDO0FBRTdELE1BQU1LLFNBQVMsQ0FBQ0MsT0FBUTs7SUFDdEIsTUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBRU0sV0FBV0MsYUFBYyxHQUFHUiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2xEUyxRQUFRQyxHQUFHLENBQUNKLE9BQU9LLFFBQVE7SUFFM0IsTUFBTUMsY0FBYyxJQUFLO1FBQ3ZCLE9BQU9KLGFBQWEsSUFBSTtJQUMxQjtJQUVBLHFCQUNFLDhEQUFDSztrQkFDQyw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzhCQUFpQiw0RUFBQ2Isa0RBQUlBO3dCQUNyQ2MsTUFBSzt3QkFBSUQsV0FBVTt3QkFDbkJFLE9BQU9kLDZFQUFJQSxHQUFHOzRCQUFDZSxpQkFBaUIsT0FBZ0IsT0FBVGYsaUZBQVEsRUFBQzt3QkFBRSxJQUFJLEVBQUU7a0NBQUc7Ozs7Ozs7Ozs7OzhCQUMzRCw4REFBQ2lCO29CQUFFQyxTQUFTVDtvQkFBYVUsT0FBTTs4QkFDbEMsNEVBQUNDOzs7Ozs7Ozs7OzhCQUVFLDhEQUFDQztvQkFBSVQsV0FBVyxHQUFtQyxPQUFoQ1IsYUFBYSxJQUFJLEdBQUcsU0FBUyxFQUFFOztzQ0FDaEQsOERBQUNPOzRCQUFJQyxXQUFVOzs7Ozs7c0NBQ2YsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDVTswQ0FDRUMsU0FBU0MsR0FBRyxDQUFFLENBQUNDLE1BQUtDLFFBQVU7b0NBQUUscUJBQy9CLDhEQUFDQztrREFDQyw0RUFBQzVCLGtEQUFJQTs0Q0FDTGMsTUFBTSxJQUFjLE9BQVZZLEtBQUtHLElBQUk7NENBQ25CaEIsV0FBVyxHQUF3RSxPQUFyRVQsT0FBT0ssUUFBUSxJQUFJLElBQWMsT0FBVmlCLEtBQUtJLElBQUksSUFBSyxzQkFBc0JDLFNBQVM7c0RBRS9FTCxLQUFLSSxJQUFJOzs7Ozs7dUNBTEwsZ0JBQTBCLE9BQVZKLEtBQUtJLElBQUk7Ozs7O2dDQVFuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9mO0dBdENNNUI7O1FBQ1dILGtEQUFTQTs7O0tBRHBCRztBQXdDTiwrREFBZUEsTUFBTUEsRUFBQTtBQUVyQixNQUFNc0IsV0FBVztJQUNmO1FBQUNNLE1BQU07UUFBUUQsTUFBTTtJQUFNO0lBQzNCO1FBQUNDLE1BQU07UUFBYUQsTUFBTTtJQUFXO0lBQ3JDO1FBQUNDLE1BQU07UUFBU0QsTUFBTTtJQUFPO0NBRTlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzP2RlMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG4vLyBpbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL2FudGhvbnktZHVxdWUtbG9nby5wbmcnXG5cbmNvbnN0IEhlYWRlciA9IChwcm9wKSA9PntcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFsgbWVudVN0YXRlLCBzZXRNZW51U3RhdGUgXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zb2xlLmxvZyhyb3V0ZXIucGF0aG5hbWUpXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PntcbiAgICByZXR1cm4gc2V0TWVudVN0YXRlKHRydWUpXG4gIH1cblxuICByZXR1cm4oXG4gICAgPGhlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1jb250YWluZXJcIj48TGluayBcbiAgICAgICAgaHJlZj0nLycgY2xhc3NOYW1lPSdsb2dvJyBcbiAgICAgICAgc3R5bGU9e2xvZ28gPyB7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7bG9nby5zcmN9KWB9IDogJycgfT5EaWdpTWVkaWEgQ3JlYXRpdmVzPC9MaW5rPjwvZGl2PlxuICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3M9XCJidG4tbWVudVwiPlxuXHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cblx0XHRcdFx0PC9hPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17YCR7bWVudVN0YXRlID09IHRydWUgPyAnc2hvdycgOiAnJ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1kcm9wZG93blwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXYtY29udGFpbmVyJz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge25hdkxpbmtzLm1hcCggKGl0ZW0saW5kZXgpID0+IHsgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2BoZWFkZXItbGlua19fJHtpdGVtLm5hbWV9YH0+XG4gICAgICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtpdGVtLnBhZ2V9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cm91dGVyLnBhdGhuYW1lID09IGAvJHtpdGVtLm5hbWV9YCA/ICdjdXJyZW50LW1lbnUtaXRlbScgOiB1bmRlZmluZWR9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvTGluayA+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKX0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuY29uc3QgbmF2TGlua3MgPSBbXG4gIHtuYW1lOiAnd29yaycsIHBhZ2U6ICd3b3JrJ30sXG4gIHtuYW1lOiAnZXhwZXJ0aXNlJywgcGFnZTogJ2V4cGVydGlzZSd9LFxuICB7bmFtZTogJ2Fib3V0JywgcGFnZTogJ2Fib3V0J30sXG4gIC8vIHtuYW1lOiAnY2FyZWVycycsIHBhZ2U6ICdjYXJlZXJzJ30sXG5dIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwibG9nbyIsIkhlYWRlciIsInByb3AiLCJyb3V0ZXIiLCJtZW51U3RhdGUiLCJzZXRNZW51U3RhdGUiLCJjb25zb2xlIiwibG9nIiwicGF0aG5hbWUiLCJoYW5kbGVDbGljayIsImhlYWRlciIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInNyYyIsImEiLCJvbkNsaWNrIiwiY2xhc3MiLCJzcGFuIiwibmF2IiwidWwiLCJuYXZMaW5rcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImxpIiwicGFnZSIsIm5hbWUiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/index.js\n"));

/***/ })

});