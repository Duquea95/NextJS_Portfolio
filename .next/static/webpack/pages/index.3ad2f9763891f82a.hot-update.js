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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Button */ \"./components/Button/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/anthony/Documents/MyPortfolio/components/Cards/index.js\",\n    _this = undefined;\n\n\n\n\nvar Cards = function Cards(props) {\n  var cardCopy = [{\n    titleText: 'I build &<br/>design stuff',\n    subText: 'Open source<br/>projects, web apps,<br/>and experimentals.',\n    buttonText: 'View My Work',\n    link: 'Works'\n  }, {\n    titleText: 'I write<br/>sometimes',\n    subText: 'About design,<br/>frontend dev,<br/>learning and life.',\n    buttonText: 'Read My Blog',\n    link: 'Blog'\n  }];\n\n  var createCards = function createCards() {\n    return cardCopy.map(function (card) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"col-card\",\n        style: {\n          background: 'white'\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n              children: card.titleText\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n              children: card.subText\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n            link: card.link,\n            text: card.buttonText\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"section flex flex-center\",\n    children: createCards()\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Cards;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cards);\n\nvar _c;\n\n$RefreshReg$(_c, \"Cards\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBRUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0VBRXZCLElBQUlDLFFBQVEsR0FBRyxDQUNiO0lBQ0VDLFNBQVMsRUFBRSw0QkFEYjtJQUVFQyxPQUFPLEVBQUUsNERBRlg7SUFHRUMsVUFBVSxFQUFFLGNBSGQ7SUFJRUMsSUFBSSxFQUFDO0VBSlAsQ0FEYSxFQU9iO0lBQ0VILFNBQVMsRUFBRSx1QkFEYjtJQUVFQyxPQUFPLEVBQUUsd0RBRlg7SUFHRUMsVUFBVSxFQUFFLGNBSGQ7SUFJRUMsSUFBSSxFQUFDO0VBSlAsQ0FQYSxDQUFmOztFQWVBLElBQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07SUFDdEIsT0FDRUwsUUFBUSxDQUFDTSxHQUFULENBQWEsVUFBQUMsSUFBSSxFQUFHO01BQ2xCLG9CQUNBO1FBQUssU0FBUyxFQUFDLFVBQWY7UUFBMEIsS0FBSyxFQUFFO1VBQUNDLFVBQVUsRUFBRTtRQUFiLENBQWpDO1FBQUEsdUJBQ0U7VUFBQSx3QkFDRTtZQUFBLHdCQUNFO2NBQUEsVUFBS0QsSUFBSSxDQUFDTjtZQUFWO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FERixlQUVFO2NBQUEsVUFBSU0sSUFBSSxDQUFDTDtZQUFUO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FGRjtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FERixlQUtFLDhEQUFDLCtDQUFEO1lBQVEsSUFBSSxFQUFFSyxJQUFJLENBQUNILElBQW5CO1lBQXlCLElBQUksRUFBRUcsSUFBSSxDQUFDSjtVQUFwQztZQUFBO1lBQUE7WUFBQTtVQUFBLFNBTEY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURBO0lBV0QsQ0FaRCxDQURGO0VBZUQsQ0FoQkQ7O0VBa0JBLG9CQUNFO0lBQUssU0FBUyxFQUFDLDBCQUFmO0lBQUEsVUFDR0UsV0FBVztFQURkO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQUtELENBeENEOztLQUFNUDtBQTBDTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhcmRzL2luZGV4LmpzP2FkMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuXG5jb25zdCBDYXJkcyA9IChwcm9wcykgPT4ge1xuXG4gIGxldCBjYXJkQ29weSA9IFtcbiAgICB7XG4gICAgICB0aXRsZVRleHQ6ICdJIGJ1aWxkICY8YnIvPmRlc2lnbiBzdHVmZicsXG4gICAgICBzdWJUZXh0OiAnT3BlbiBzb3VyY2U8YnIvPnByb2plY3RzLCB3ZWIgYXBwcyw8YnIvPmFuZCBleHBlcmltZW50YWxzLicsXG4gICAgICBidXR0b25UZXh0OiAnVmlldyBNeSBXb3JrJyxcbiAgICAgIGxpbms6J1dvcmtzJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGVUZXh0OiAnSSB3cml0ZTxici8+c29tZXRpbWVzJyxcbiAgICAgIHN1YlRleHQ6ICdBYm91dCBkZXNpZ24sPGJyLz5mcm9udGVuZCBkZXYsPGJyLz5sZWFybmluZyBhbmQgbGlmZS4nLFxuICAgICAgYnV0dG9uVGV4dDogJ1JlYWQgTXkgQmxvZycsXG4gICAgICBsaW5rOidCbG9nJ1xuICAgIH1cbiAgXVxuXG4gIGxldCBjcmVhdGVDYXJkcyA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICBjYXJkQ29weS5tYXAoY2FyZCA9PntcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWNhcmQnIHN0eWxlPXt7YmFja2dyb3VuZDogJ3doaXRlJ319PlxuICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxPntjYXJkLnRpdGxlVGV4dH08L2gxPlxuICAgICAgICAgICAgICA8cD57Y2FyZC5zdWJUZXh0fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEJ1dHRvbiBsaW5rPXtjYXJkLmxpbmt9IHRleHQ9e2NhcmQuYnV0dG9uVGV4dH0gLz5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gZmxleCBmbGV4LWNlbnRlclwiPlxuICAgICAge2NyZWF0ZUNhcmRzKCl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZHM7Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkNhcmRzIiwicHJvcHMiLCJjYXJkQ29weSIsInRpdGxlVGV4dCIsInN1YlRleHQiLCJidXR0b25UZXh0IiwibGluayIsImNyZWF0ZUNhcmRzIiwibWFwIiwiY2FyZCIsImJhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Cards/index.js\n"));

/***/ })

});