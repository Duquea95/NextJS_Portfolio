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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/future/image */ \"./node_modules/next/future/image.js\");\n/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_images_anthony_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/anthony.jpg */ \"./public/images/anthony.jpg\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/anthony/Documents/MyPortfolio/components/Banner/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Banner = function Banner() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      activeIndex = _useState[0],\n      setActiveIndex = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      count = _useState2[0],\n      setCount = _useState2[1];\n\n  var texts = ['People', 'Impact', 'Change', 'Action', 'Good', 'People'];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var interval = setInterval(function () {\n      console.log(activeIndex);\n\n      if (activeIndex == texts.length - 1) {\n        setCount(count + 1);\n        return setActiveIndex(0);\n      } else {\n        return setActiveIndex(activeIndex + 1);\n      }\n    }, 2500);\n    return function () {\n      return clearInterval(interval);\n    };\n  }, [activeIndex]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"section flex flex-center banner grad\",\n    style: {\n      willChange: 'opacity',\n      opacity: 1\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"padding content\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n            className: \"main-lg\",\n            children: [\"Creating\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 45\n            }, _this), \"For\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 53\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"title-slider\",\n            children: texts.map(function (text, idx) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n                className: \"main-lg \".concat(idx == 0 && count == 0 ? 'slideIn-start' : '', \" \").concat(idx == 0 ? 'start' : 'hide-slide', \" \").concat(idx == activeIndex ? 'active' : 'inactive', \" \").concat(idx <= activeIndex ? 'hide-slideUp' : '', \" \").concat(idx == text.length - 1 ? 'last' : ''),\n                $transform: idx * 100,\n                children: text\n              }, idx, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"sub-banner\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_future_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: _public_images_anthony_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n            width: 300,\n            height: 350\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 39\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Banner, \"0Grncn6LBl1AFzBd2bBkn7/oIYk=\");\n\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\n\nvar _c;\n\n$RefreshReg$(_c, \"Banner\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUFBO1VBQUE7UUFBQSxTQWZGO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERjtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUF1QkQsQ0EzQ0Q7O0dBQU1DOztLQUFBQTtBQTZDTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Jhbm5lci9pbmRleC5qcz9mZDIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvZnV0dXJlL2ltYWdlJ1xuaW1wb3J0IGFudGhvbnkgZnJvbScuLi8uLi9wdWJsaWMvaW1hZ2VzL2FudGhvbnkuanBnJyBcblxuY29uc3QgQmFubmVyID0gKCkgPT4ge1xuICBjb25zdFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoMCk7IFxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApXG4gIGxldCB0ZXh0cyA9IFsnUGVvcGxlJywgJ0ltcGFjdCcsICdDaGFuZ2UnLCAnQWN0aW9uJywgJ0dvb2QnLCAnUGVvcGxlJ107XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZUluZGV4KTtcbiAgICAgIGlmKGFjdGl2ZUluZGV4ID09IHRleHRzLmxlbmd0aC0xKXtcbiAgICAgICAgc2V0Q291bnQoY291bnQrMSk7XG4gICAgICAgIHJldHVybiBzZXRBY3RpdmVJbmRleCgwKTtcbiAgICAgICAgXG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIHNldEFjdGl2ZUluZGV4KGFjdGl2ZUluZGV4KzEpO1xuICAgICAgfVxuICAgIH0sIDI1MDApO1xuICAgIFxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW2FjdGl2ZUluZGV4XSlcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24gZmxleCBmbGV4LWNlbnRlciBiYW5uZXIgZ3JhZCcgc3R5bGU9e3t3aWxsQ2hhbmdlOiAnb3BhY2l0eScsIG9wYWNpdHk6IDF9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWRkaW5nIGNvbnRlbnQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J21haW4tbGcnPkNyZWF0aW5nPGJyLz5Gb3I8YnIvPjwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUtc2xpZGVyJz5cbiAgICAgICAgICAgICAge3RleHRzLm1hcCgodGV4dCxpZHgpID0+IHtyZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgICAga2V5PXtpZHh9IFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWFpbi1sZyAkeyhpZHggPT0gMCAmJiBjb3VudCA9PSAwKSA/ICdzbGlkZUluLXN0YXJ0JyA6ICcnfSAke2lkeCA9PSAwID8gJ3N0YXJ0JyA6ICdoaWRlLXNsaWRlJ30gJHtpZHg9PWFjdGl2ZUluZGV4ID8gJ2FjdGl2ZSc6ICdpbmFjdGl2ZSd9ICR7aWR4IDw9IGFjdGl2ZUluZGV4ID8gJ2hpZGUtc2xpZGVVcCcgOiAnJ30gJHtpZHggPT0gdGV4dC5sZW5ndGgtMSA/ICdsYXN0JyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgICAkdHJhbnNmb3JtPXtpZHgqMTAwfT57dGV4dH1cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3ViLWJhbm5lcic+PEltYWdlIHNyYz17YW50aG9ueS5zcmN9IHdpZHRoPXszMDB9IGhlaWdodD17MzUwfS8+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJhbnRob255IiwiQmFubmVyIiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsImNvdW50Iiwic2V0Q291bnQiLCJ0ZXh0cyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsIndpbGxDaGFuZ2UiLCJvcGFjaXR5IiwibWFwIiwidGV4dCIsImlkeCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Banner/index.js\n"));

/***/ })

});