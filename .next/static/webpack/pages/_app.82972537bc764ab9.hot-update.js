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

/***/ "./components/Navbar/index.js":
/*!************************************!*\
  !*** ./components/Navbar/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/logo.png */ \"./public/images/logo.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleDropdown = ()=>{\n        console.log(\"menu open\");\n        return setIsMenuOpen(!isMenuOpen);\n    };\n    const handleLogoClick = ()=>{\n        return setIsMenuOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/\",\n                        onClick: handleLogoClick,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            alt: \"Anthony Duque - Front-End Engineer\",\n                            priority: true,\n                            src: _public_images_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src,\n                            width: 75,\n                            height: 31\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Navbar/index.js\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Navbar/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Navbar/index.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dropdown-cta hamburger\".concat(isMenuOpen ? \" is-active\" : \"\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hamburger-box\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"hamburger-inner\",\n                                    onClick: handleDropdown\n                                }, void 0, false, {\n                                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Navbar/index.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Navbar/index.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Navbar/index.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"menu \".concat(isMenuOpen ? \" open\" : \"\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            onClick: isMenuOpen ? handleDropdown : \"\",\n                                            href: \"/About\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Navbar/index.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Navbar/index.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            onClick: isMenuOpen ? handleDropdown : \"\",\n                                            children: \"Work\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Navbar/index.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Navbar/index.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: isMenuOpen ? \"\" : \"nav-cta\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            onClick: isMenuOpen ? handleDropdown : \"\",\n                                            href: \"/Contact\",\n                                            children: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Navbar/index.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 59\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Navbar/index.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Navbar/index.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Navbar/index.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Navbar/index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Navbar/index.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Navbar/index.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"vK10R+uCyHfZ4DZVnxbYkMWJB8g=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQWdEO0FBQ2xCO0FBQ2lCO0FBQ25CO0FBRTVCLE1BQU1NLFNBQVMsSUFBTTs7SUFDbkIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFFbEQsTUFBTVEsaUJBQWlCLElBQU07UUFDM0JDLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU9ILGNBQWMsQ0FBQ0Q7SUFDeEI7SUFFQSxNQUFNSyxrQkFBa0IsSUFBTTtRQUM1QixPQUFPSixjQUFjLEtBQUs7SUFDNUI7SUFFQSxxQkFDRSw4REFBQ0s7a0JBQ0MsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDs4QkFDQyw0RUFBQ1Qsa0RBQUlBO3dCQUFDVyxNQUFLO3dCQUFJQyxTQUFTTDtrQ0FDdEIsNEVBQUNULG1EQUFLQTs0QkFBQ2UsS0FBSTs0QkFBcUNDLFFBQVE7NEJBQUNDLEtBQUtoQixtRUFBUTs0QkFBRWlCLE9BQU87NEJBQUlDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBRy9GLDhEQUFDQzs7c0NBQ0MsOERBQUNUOzRCQUFJQyxXQUFXLHlCQUF3RCxPQUEvQlIsYUFBYSxlQUFlLEVBQUU7c0NBQ3JFLDRFQUFDTztnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0Q7b0NBQUlDLFdBQVU7b0NBQWtCRSxTQUFTUjs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHOUMsOERBQUNLOzRCQUFJQyxXQUFXLFFBQWtDLE9BQTFCUixhQUFhLFVBQVUsRUFBRTtzQ0FDL0MsNEVBQUNpQjs7a0RBQ0MsOERBQUNDO2tEQUFHLDRFQUFDcEIsa0RBQUlBOzRDQUFDWSxTQUFTVixhQUFhRSxpQkFBaUIsRUFBRTs0Q0FBRU8sTUFBSztzREFBUzs7Ozs7Ozs7Ozs7a0RBQ25FLDhEQUFDUztrREFBRyw0RUFBQ3BCLGtEQUFJQTs0Q0FBQ1ksU0FBU1YsYUFBYUUsaUJBQWlCLEVBQUU7c0RBQUU7Ozs7Ozs7Ozs7O2tEQUNyRCw4REFBQ2dCO3dDQUFHVixXQUFXUixhQUFhLEtBQUssU0FBUztrREFBRSw0RUFBQ0Ysa0RBQUlBOzRDQUFDWSxTQUFTVixhQUFhRSxpQkFBaUIsRUFBRTs0Q0FBRU8sTUFBSztzREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzNIO0dBckNNVjtLQUFBQTtBQXVDTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcz9hOGFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBsb2dvIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvbG9nby5wbmcnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgW2lzTWVudU9wZW4sIHNldElzTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZURyb3Bkb3duID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdtZW51IG9wZW4nKVxuICAgIHJldHVybiBzZXRJc01lbnVPcGVuKCFpc01lbnVPcGVuKTtcbiAgfVxuICBcbiAgY29uc3QgaGFuZGxlTG9nb0NsaWNrID0gKCkgPT4ge1xuICAgIHJldHVybiBzZXRJc01lbnVPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybihcbiAgICA8aGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtYmV0d2VlblwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIG9uQ2xpY2s9e2hhbmRsZUxvZ29DbGlja30+XG4gICAgICAgICAgICA8SW1hZ2UgYWx0PSdBbnRob255IER1cXVlIC0gRnJvbnQtRW5kIEVuZ2luZWVyJyBwcmlvcml0eSBzcmM9e2xvZ28uc3JjfSB3aWR0aD17NzV9IGhlaWdodD17MzF9Lz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZHJvcGRvd24tY3RhIGhhbWJ1cmdlciR7aXNNZW51T3BlbiA/ICcgaXMtYWN0aXZlJyA6ICcnfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXItYm94XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWlubmVyXCIgb25DbGljaz17aGFuZGxlRHJvcGRvd259PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtZW51ICR7aXNNZW51T3BlbiA/ICcgb3BlbicgOiAnJ31gfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIG9uQ2xpY2s9e2lzTWVudU9wZW4gPyBoYW5kbGVEcm9wZG93biA6ICcnfSBocmVmPScvQWJvdXQnPkFib3V0PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48TGluayBvbkNsaWNrPXtpc01lbnVPcGVuID8gaGFuZGxlRHJvcGRvd24gOiAnJ30+V29yazwvTGluaz48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtpc01lbnVPcGVuID8gJycgOiBcIm5hdi1jdGFcIn0+PExpbmsgb25DbGljaz17aXNNZW51T3BlbiA/IGhhbmRsZURyb3Bkb3duIDogJyd9IGhyZWY9Jy9Db250YWN0Jz5Db250YWN0PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhciJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJsb2dvIiwiTGluayIsIk5hdmJhciIsImlzTWVudU9wZW4iLCJzZXRJc01lbnVPcGVuIiwiaGFuZGxlRHJvcGRvd24iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTG9nb0NsaWNrIiwiaGVhZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsIm9uQ2xpY2siLCJhbHQiLCJwcmlvcml0eSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwibmF2IiwidWwiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar/index.js\n"));

/***/ })

});