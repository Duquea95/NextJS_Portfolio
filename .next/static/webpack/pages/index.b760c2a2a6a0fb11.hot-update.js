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

/***/ "./components/Cards/index.js":
/*!***********************************!*\
  !*** ./components/Cards/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Button */ \"./components/Button/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/anthony/Documents/MyPortfolio/components/Cards/index.js\",\n    _this = undefined;\n\n\n\n\nvar Cards = function Cards(props) {\n  var cardCopy = [{\n    titleText: 'I build &<br/>design stuff',\n    subText: 'Open source<br/>projects, web apps,<br/>and experimentals.',\n    buttonText: 'View My Work',\n    link: 'Works'\n  }, {\n    titleText: 'I write<br/>sometimes',\n    subText: 'About design,<br/>frontend dev,<br/>learning and life.',\n    buttonText: 'Read My Blog',\n    link: 'Blog'\n  }];\n\n  var createCards = function createCards() {\n    return cardCopy.map(function (card) {\n      /*#__PURE__*/\n      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"col-card\",\n        style: {\n          background: 'white'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n              children: props.titleText\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n              children: props.subText\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 13\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n            link: props.link,\n            text: props.buttonText\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 11\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 7\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"section flex flex-center\",\n    children: createCards()\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Cards;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cards);\n\nvar _c;\n\n$RefreshReg$(_c, \"Cards\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0VBRXZCLElBQUlDLFFBQVEsR0FBRyxDQUNiO0lBQ0VDLFNBQVMsRUFBRSw0QkFEYjtJQUVFQyxPQUFPLEVBQUUsNERBRlg7SUFHRUMsVUFBVSxFQUFFLGNBSGQ7SUFJRUMsSUFBSSxFQUFDO0VBSlAsQ0FEYSxFQU9iO0lBQ0VILFNBQVMsRUFBRSx1QkFEYjtJQUVFQyxPQUFPLEVBQUUsd0RBRlg7SUFHRUMsVUFBVSxFQUFFLGNBSGQ7SUFJRUMsSUFBSSxFQUFDO0VBSlAsQ0FQYSxDQUFmOztFQWVBLElBQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07SUFDdEIsT0FDRUwsUUFBUSxDQUFDTSxHQUFULENBQWEsVUFBQUMsSUFBSSxFQUFHO01BQ3BCO01BQUE7UUFBSyxTQUFTLEVBQUMsVUFBZjtRQUEwQixLQUFLLEVBQUU7VUFBQ0MsVUFBVSxFQUFFO1FBQWIsQ0FBakM7UUFBQSx1QkFDRTtVQUFBLHdCQUNFO1lBQUEsd0JBQ0U7Y0FBQSxVQUFLVCxLQUFLLENBQUNFO1lBQVg7Y0FBQTtjQUFBO2NBQUE7WUFBQSxTQURGLGVBRUU7Y0FBQSxVQUFJRixLQUFLLENBQUNHO1lBQVY7Y0FBQTtjQUFBO2NBQUE7WUFBQSxTQUZGO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQURGLGVBS0UsOERBQUMsK0NBQUQ7WUFBUSxJQUFJLEVBQUVILEtBQUssQ0FBQ0ssSUFBcEI7WUFBMEIsSUFBSSxFQUFFTCxLQUFLLENBQUNJO1VBQXRDO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FMRjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFERjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBU0MsQ0FWRCxDQURGO0VBYUQsQ0FkRDs7RUFnQkEsb0JBQ0U7SUFBSyxTQUFTLEVBQUMsMEJBQWY7SUFBQSxVQUNHRSxXQUFXO0VBRGQ7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBS0QsQ0F0Q0Q7O0tBQU1QO0FBd0NOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FyZHMvaW5kZXguanM/YWQwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5cbmNvbnN0IENhcmRzID0gKHByb3BzKSA9PiB7XG5cbiAgbGV0IGNhcmRDb3B5ID0gW1xuICAgIHtcbiAgICAgIHRpdGxlVGV4dDogJ0kgYnVpbGQgJjxici8+ZGVzaWduIHN0dWZmJyxcbiAgICAgIHN1YlRleHQ6ICdPcGVuIHNvdXJjZTxici8+cHJvamVjdHMsIHdlYiBhcHBzLDxici8+YW5kIGV4cGVyaW1lbnRhbHMuJyxcbiAgICAgIGJ1dHRvblRleHQ6ICdWaWV3IE15IFdvcmsnLFxuICAgICAgbGluazonV29ya3MnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZVRleHQ6ICdJIHdyaXRlPGJyLz5zb21ldGltZXMnLFxuICAgICAgc3ViVGV4dDogJ0Fib3V0IGRlc2lnbiw8YnIvPmZyb250ZW5kIGRldiw8YnIvPmxlYXJuaW5nIGFuZCBsaWZlLicsXG4gICAgICBidXR0b25UZXh0OiAnUmVhZCBNeSBCbG9nJyxcbiAgICAgIGxpbms6J0Jsb2cnXG4gICAgfVxuICBdXG5cbiAgbGV0IGNyZWF0ZUNhcmRzID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgIGNhcmRDb3B5Lm1hcChjYXJkID0+e1xuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1jYXJkJyBzdHlsZT17e2JhY2tncm91bmQ6ICd3aGl0ZSd9fT5cbiAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT57cHJvcHMudGl0bGVUZXh0fTwvaDE+XG4gICAgICAgICAgICA8cD57cHJvcHMuc3ViVGV4dH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJ1dHRvbiBsaW5rPXtwcm9wcy5saW5rfSB0ZXh0PXtwcm9wcy5idXR0b25UZXh0fSAvPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIH0pXG4gICApXG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIGZsZXggZmxleC1jZW50ZXJcIj5cbiAgICAgIHtjcmVhdGVDYXJkcygpfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRzOyJdLCJuYW1lcyI6WyJCdXR0b24iLCJDYXJkcyIsInByb3BzIiwiY2FyZENvcHkiLCJ0aXRsZVRleHQiLCJzdWJUZXh0IiwiYnV0dG9uVGV4dCIsImxpbmsiLCJjcmVhdGVDYXJkcyIsIm1hcCIsImNhcmQiLCJiYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cards/index.js\n"));

/***/ })

});