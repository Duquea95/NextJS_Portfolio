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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_images_anthony_duque_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/anthony-duque-logo.png */ \"./public/images/anthony-duque-logo.png\");\n\nvar _s = $RefreshSig$();\n\n\n// import { NavLink } from \"react-router-dom\";\n\n\nconst Header = (prop)=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [menuState, setMenuState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    console.log(router.pathname);\n    const handleClick = ()=>{\n        return setMenuState(!menuState);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"logo-container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        className: \"logo\",\n                        style: _public_images_anthony_duque_logo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"] ? {\n                            backgroundImage: \"url(\".concat(_public_images_anthony_duque_logo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src, \")\")\n                        } : \"\",\n                        children: \"DigiMedia Creatives\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 41\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    onClick: handleClick,\n                    class: \"btn-menu\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"\".concat(menuState == true ? \"show\" : \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mobile-dropdown\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"nav-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: navLinks.map((item, index)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/\".concat(item.page),\n                                            className: \"\".concat(router.pathname == \"/\".concat(item.name) ? \"current-menu-item\" : undefined),\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, \"header-link__\".concat(item.name), false, {\n                                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 17\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Header/index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"d39yh/WxXcAG7fAfaCCq5gGVcnU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nconst navLinks = [\n    {\n        name: \"work\",\n        page: \"work\"\n    },\n    {\n        name: \"expertise\",\n        page: \"expertise\"\n    },\n    {\n        name: \"about\",\n        page: \"about\"\n    }\n];\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQXVDO0FBQ0E7QUFDdkMsOENBQThDO0FBQ2pCO0FBQ2dDO0FBRTdELE1BQU1LLFNBQVMsQ0FBQ0MsT0FBUTs7SUFDdEIsTUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBRU0sV0FBV0MsYUFBYyxHQUFHUiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2xEUyxRQUFRQyxHQUFHLENBQUNKLE9BQU9LLFFBQVE7SUFFM0IsTUFBTUMsY0FBYyxJQUFLO1FBQ3ZCLE9BQU9KLGFBQWEsQ0FBQ0Q7SUFDdkI7SUFFQSxxQkFDRSw4REFBQ007a0JBQ0MsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFBaUIsNEVBQUNiLGtEQUFJQTt3QkFDckNjLE1BQUs7d0JBQUlELFdBQVU7d0JBQ25CRSxPQUFPZCw2RUFBSUEsR0FBRzs0QkFBQ2UsaUJBQWlCLE9BQWdCLE9BQVRmLGlGQUFRLEVBQUM7d0JBQUUsSUFBSSxFQUFFO2tDQUFHOzs7Ozs7Ozs7Ozs4QkFDM0QsOERBQUNpQjtvQkFBRUMsU0FBU1Q7b0JBQWFVLE9BQU07OEJBQ2xDLDRFQUFDQzs7Ozs7Ozs7Ozs4QkFFRSw4REFBQ0M7b0JBQUlULFdBQVcsR0FBbUMsT0FBaENSLGFBQWEsSUFBSSxHQUFHLFNBQVMsRUFBRTs7c0NBQ2hELDhEQUFDTzs0QkFBSUMsV0FBVTs7Ozs7O3NDQUNmLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ1U7MENBQ0VDLFNBQVNDLEdBQUcsQ0FBRSxDQUFDQyxNQUFLQyxRQUFVO29DQUFFLHFCQUMvQiw4REFBQ0M7a0RBQ0MsNEVBQUM1QixrREFBSUE7NENBQ0xjLE1BQU0sSUFBYyxPQUFWWSxLQUFLRyxJQUFJOzRDQUNuQmhCLFdBQVcsR0FBd0UsT0FBckVULE9BQU9LLFFBQVEsSUFBSSxJQUFjLE9BQVZpQixLQUFLSSxJQUFJLElBQUssc0JBQXNCQyxTQUFTO3NEQUUvRUwsS0FBS0ksSUFBSTs7Ozs7O3VDQUxMLGdCQUEwQixPQUFWSixLQUFLSSxJQUFJOzs7OztnQ0FRbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZjtHQXRDTTVCOztRQUNXSCxrREFBU0E7OztLQURwQkc7QUF3Q04sK0RBQWVBLE1BQU1BLEVBQUE7QUFFckIsTUFBTXNCLFdBQVc7SUFDZjtRQUFDTSxNQUFNO1FBQVFELE1BQU07SUFBTTtJQUMzQjtRQUFDQyxNQUFNO1FBQWFELE1BQU07SUFBVztJQUNyQztRQUFDQyxNQUFNO1FBQVNELE1BQU07SUFBTztDQUU5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcz9kZTM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuLy8gaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9hbnRob255LWR1cXVlLWxvZ28ucG5nJ1xuXG5jb25zdCBIZWFkZXIgPSAocHJvcCkgPT57XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbIG1lbnVTdGF0ZSwgc2V0TWVudVN0YXRlIF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc29sZS5sb2cocm91dGVyLnBhdGhuYW1lKVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT57XG4gICAgcmV0dXJuIHNldE1lbnVTdGF0ZSghbWVudVN0YXRlKVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxoZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tY29udGFpbmVyXCI+PExpbmsgXG4gICAgICAgIGhyZWY9Jy8nIGNsYXNzTmFtZT0nbG9nbycgXG4gICAgICAgIHN0eWxlPXtsb2dvID8ge2JhY2tncm91bmRJbWFnZTogYHVybCgke2xvZ28uc3JjfSlgfSA6ICcnIH0+RGlnaU1lZGlhIENyZWF0aXZlczwvTGluaz48L2Rpdj5cbiAgICAgICAgPGEgb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzPVwiYnRuLW1lbnVcIj5cblx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+XG5cdFx0XHRcdDwvYT5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Ake21lbnVTdGF0ZSA9PSB0cnVlID8gJ3Nob3cnIDogJyd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtZHJvcGRvd25cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2LWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtuYXZMaW5rcy5tYXAoIChpdGVtLGluZGV4KSA9PiB7IHJldHVybihcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtgaGVhZGVyLWxpbmtfXyR7aXRlbS5uYW1lfWB9PlxuICAgICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICBocmVmPXtgLyR7aXRlbS5wYWdlfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3JvdXRlci5wYXRobmFtZSA9PSBgLyR7aXRlbS5uYW1lfWAgPyAnY3VycmVudC1tZW51LWl0ZW0nIDogdW5kZWZpbmVkfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L0xpbmsgPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICl9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cbmNvbnN0IG5hdkxpbmtzID0gW1xuICB7bmFtZTogJ3dvcmsnLCBwYWdlOiAnd29yayd9LFxuICB7bmFtZTogJ2V4cGVydGlzZScsIHBhZ2U6ICdleHBlcnRpc2UnfSxcbiAge25hbWU6ICdhYm91dCcsIHBhZ2U6ICdhYm91dCd9LFxuICAvLyB7bmFtZTogJ2NhcmVlcnMnLCBwYWdlOiAnY2FyZWVycyd9LFxuXSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTGluayIsImxvZ28iLCJIZWFkZXIiLCJwcm9wIiwicm91dGVyIiwibWVudVN0YXRlIiwic2V0TWVudVN0YXRlIiwiY29uc29sZSIsImxvZyIsInBhdGhuYW1lIiwiaGFuZGxlQ2xpY2siLCJoZWFkZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzcmMiLCJhIiwib25DbGljayIsImNsYXNzIiwic3BhbiIsIm5hdiIsInVsIiwibmF2TGlua3MiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaSIsInBhZ2UiLCJuYW1lIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/index.js\n"));

/***/ })

});