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

/***/ "./components/UserMining/index.js":
/*!****************************************!*\
  !*** ./components/UserMining/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LocatorButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LocatorButton */ \"./components/LocatorButton/index.js\");\n/* harmony import */ var _UserMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UserMap */ \"./components/UserMap/index.js\");\n/* harmony import */ var _hooks_getUserGeolocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/getUserGeolocation */ \"./hooks/getUserGeolocation/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar UserMining = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), mapObject = ref[0], setMapObject = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), userPermission = ref1[0], setUserPermission = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), userGeolocation = ref2[0], setUserGeolocation = ref2[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"section flex flex-center user-learning\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"padding content\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    margin: \"0 auto\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        className: userPermission ? \"hide\" : \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Want to see something cool?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/Documents/MyPortfolio/components/UserMining/index.js\",\n                                lineNumber: 16,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"I'm currently working on various personal projects. One of them involving user data exctraction for visual analsis. If you don't mind, I'd love to learn a little about you.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/Documents/MyPortfolio/components/UserMining/index.js\",\n                                lineNumber: 17,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LocatorButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                mapObject: mapObject,\n                                setUserPermission: setUserPermission,\n                                setUserGeolocation: setUserGeolocation\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/Documents/MyPortfolio/components/UserMining/index.js\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/UserMining/index.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: userPermission ? \"flex user-data\" : \"hide\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"data-copy\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Was I able to find you?\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/UserMining/index.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Longitude: \",\n                                            userLongitude\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/UserMining/index.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Latitude: \",\n                                            userLatitude\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/UserMining/index.js\",\n                                        lineNumber: 24,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"Range of Error: \",\n                                            accuracy,\n                                            \" meters\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/UserMining/index.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"disclaimer\",\n                                        children: \"Don't be alarmed, I am not storing any of this data. I respect your privacy, and am merely showing a glimpse of what to expect in future projects. Check back later to see what else I can extract ^__^\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/UserMining/index.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/anthony/Documents/MyPortfolio/components/UserMining/index.js\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserMap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                setMapObject: setMapObject\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/Documents/MyPortfolio/components/UserMining/index.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/UserMining/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anthony/Documents/MyPortfolio/components/UserMining/index.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/anthony/Documents/MyPortfolio/components/UserMining/index.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/anthony/Documents/MyPortfolio/components/UserMining/index.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_s(UserMining, \"TL8E465fr4catADo/10LYvdU9FM=\");\n_c = UserMining;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserMining);\nvar _c;\n$RefreshReg$(_c, \"UserMining\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJNaW5pbmcvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O0FBQWlDO0FBQ1k7QUFDWjtBQUMrQjtBQUVoRSxJQUFNSSxVQUFVLEdBQUcsV0FBSzs7SUFDdEIsSUFBa0NKLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBekNLLFNBQVMsR0FBa0JMLEdBQWMsR0FBaEMsRUFBRU0sWUFBWSxHQUFJTixHQUFjLEdBQWxCO0lBQzlCLElBQTRDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXBETyxjQUFjLEdBQXVCUCxJQUFlLEdBQXRDLEVBQUVRLGlCQUFpQixHQUFJUixJQUFlLEdBQW5CO0lBQ3hDLElBQThDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQW5EUyxlQUFlLEdBQXdCVCxJQUFZLEdBQXBDLEVBQUVVLGtCQUFrQixHQUFJVixJQUFZLEdBQWhCO0lBRTFDLHFCQUNFLDhEQUFDVyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx3Q0FBd0M7a0JBQ3JELDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxpQkFBaUI7c0JBQzlCLDRFQUFDRCxLQUFHO2dCQUFDRSxLQUFLLEVBQUU7b0JBQUNDLE1BQU0sRUFBRSxRQUFRO2lCQUFDOztrQ0FDNUIsOERBQUNILEtBQUc7d0JBQUNFLEtBQUssRUFBRTs0QkFBQ0UsU0FBUyxFQUFFLFFBQVE7eUJBQUM7d0JBQUVILFNBQVMsRUFBRUwsY0FBYyxHQUFHLE1BQU0sR0FBRSxFQUFFOzswQ0FDdkUsOERBQUNTLElBQUU7MENBQUMsNkJBQTJCOzs7OztxQ0FBSzswQ0FDcEMsOERBQUNDLEdBQUM7MENBQUMsOEtBQTRLOzs7OztxQ0FBSTswQ0FDbkwsOERBQUNoQixzREFBYTtnQ0FBQ0ksU0FBUyxFQUFFQSxTQUFTO2dDQUFFRyxpQkFBaUIsRUFBRUEsaUJBQWlCO2dDQUFFRSxrQkFBa0IsRUFBRUEsa0JBQWtCOzs7OztxQ0FBRzs7Ozs7OzZCQUNoSDtrQ0FDTiw4REFBQ0MsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFTCxjQUFjLEdBQUcsZ0JBQWdCLEdBQUUsTUFBTTs7MENBQ3ZELDhEQUFDSSxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsV0FBVzs7a0RBQ3hCLDhEQUFDSSxJQUFFO2tEQUFDLHlCQUF1Qjs7Ozs7NkNBQUs7a0RBQ2hDLDhEQUFDQyxHQUFDOzs0Q0FBQyxhQUFXOzRDQUFDQyxhQUFhOzs7Ozs7NkNBQUs7a0RBQ2pDLDhEQUFDRCxHQUFDOzs0Q0FBQyxZQUFVOzRDQUFDRSxZQUFZOzs7Ozs7NkNBQUs7a0RBQy9CLDhEQUFDRixHQUFDOzs0Q0FBQyxrQkFBZ0I7NENBQUNHLFFBQVE7NENBQUMsU0FBTzs7Ozs7OzZDQUFJO2tEQUN4Qyw4REFBQ0MsTUFBSTt3Q0FBQ1QsU0FBUyxFQUFDLFlBQVk7a0RBQUMseU1BQXVNOzs7Ozs2Q0FBTzs7Ozs7O3FDQUN2TzswQ0FDTiw4REFBQ1YsZ0RBQU87Z0NBQUNJLFlBQVksRUFBRUEsWUFBWTs7Ozs7cUNBQUc7Ozs7Ozs2QkFDbEM7Ozs7OztxQkFDRjs7Ozs7aUJBQ0Y7Ozs7O2FBQ0YsQ0FDUDtBQUNILENBQUM7R0E1QktGLFVBQVU7QUFBVkEsS0FBQUEsVUFBVTtBQThCaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VzZXJNaW5pbmcvaW5kZXguanM/MzFmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2NhdG9yQnV0dG9uIGZyb20gJy4uL0xvY2F0b3JCdXR0b24nO1xuaW1wb3J0IFVzZXJNYXAgZnJvbSAnLi4vVXNlck1hcCc7XG5pbXBvcnQgZ2V0VXNlckdlb2xvY2F0aW9uIGZyb20gJy4uLy4uL2hvb2tzL2dldFVzZXJHZW9sb2NhdGlvbic7XG5cbmNvbnN0IFVzZXJNaW5pbmcgPSAoKSA9PntcbiAgY29uc3QgW21hcE9iamVjdCwgc2V0TWFwT2JqZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdXNlclBlcm1pc3Npb24sIHNldFVzZXJQZXJtaXNzaW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VzZXJHZW9sb2NhdGlvbiwgc2V0VXNlckdlb2xvY2F0aW9uXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbiBmbGV4IGZsZXgtY2VudGVyIHVzZXItbGVhcm5pbmcnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BhZGRpbmcgY29udGVudCc+XG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46ICcwIGF1dG8nfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fSBjbGFzc05hbWU9e3VzZXJQZXJtaXNzaW9uID8gJ2hpZGUnOiAnJ30+XG4gICAgICAgICAgICA8aDE+V2FudCB0byBzZWUgc29tZXRoaW5nIGNvb2w/PC9oMT5cbiAgICAgICAgICAgIDxwPkknbSBjdXJyZW50bHkgd29ya2luZyBvbiB2YXJpb3VzIHBlcnNvbmFsIHByb2plY3RzLiBPbmUgb2YgdGhlbSBpbnZvbHZpbmcgdXNlciBkYXRhIGV4Y3RyYWN0aW9uIGZvciB2aXN1YWwgYW5hbHNpcy4gSWYgeW91IGRvbid0IG1pbmQsIEknZCBsb3ZlIHRvIGxlYXJuIGEgbGl0dGxlIGFib3V0IHlvdS48L3A+XG4gICAgICAgICAgICA8TG9jYXRvckJ1dHRvbiBtYXBPYmplY3Q9e21hcE9iamVjdH0gc2V0VXNlclBlcm1pc3Npb249e3NldFVzZXJQZXJtaXNzaW9ufSBzZXRVc2VyR2VvbG9jYXRpb249e3NldFVzZXJHZW9sb2NhdGlvbn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1c2VyUGVybWlzc2lvbiA/ICdmbGV4IHVzZXItZGF0YSc6ICdoaWRlJ30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGF0YS1jb3B5Jz5cbiAgICAgICAgICAgICAgPGgxPldhcyBJIGFibGUgdG8gZmluZCB5b3U/PC9oMT5cbiAgICAgICAgICAgICAgPHA+TG9uZ2l0dWRlOiB7dXNlckxvbmdpdHVkZX08L3A+XG4gICAgICAgICAgICAgIDxwPkxhdGl0dWRlOiB7dXNlckxhdGl0dWRlfTwvcD5cbiAgICAgICAgICAgICAgPHA+UmFuZ2Ugb2YgRXJyb3I6IHthY2N1cmFjeX0gbWV0ZXJzPC9wPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Rpc2NsYWltZXInPkRvbid0IGJlIGFsYXJtZWQsIEkgYW0gbm90IHN0b3JpbmcgYW55IG9mIHRoaXMgZGF0YS4gSSByZXNwZWN0IHlvdXIgcHJpdmFjeSwgYW5kIGFtIG1lcmVseSBzaG93aW5nIGEgZ2xpbXBzZSBvZiB3aGF0IHRvIGV4cGVjdCBpbiBmdXR1cmUgcHJvamVjdHMuIENoZWNrIGJhY2sgbGF0ZXIgdG8gc2VlIHdoYXQgZWxzZSBJIGNhbiBleHRyYWN0IF5fX148L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxVc2VyTWFwIHNldE1hcE9iamVjdD17c2V0TWFwT2JqZWN0fS8+IFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJNaW5pbmc7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTG9jYXRvckJ1dHRvbiIsIlVzZXJNYXAiLCJnZXRVc2VyR2VvbG9jYXRpb24iLCJVc2VyTWluaW5nIiwibWFwT2JqZWN0Iiwic2V0TWFwT2JqZWN0IiwidXNlclBlcm1pc3Npb24iLCJzZXRVc2VyUGVybWlzc2lvbiIsInVzZXJHZW9sb2NhdGlvbiIsInNldFVzZXJHZW9sb2NhdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwibWFyZ2luIiwidGV4dEFsaWduIiwiaDEiLCJwIiwidXNlckxvbmdpdHVkZSIsInVzZXJMYXRpdHVkZSIsImFjY3VyYWN5Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UserMining/index.js\n"));

/***/ })

});