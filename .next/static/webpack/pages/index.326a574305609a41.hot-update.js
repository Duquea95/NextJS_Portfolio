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

/***/ "./components/TextWithImage/index.js":
/*!*******************************************!*\
  !*** ./components/TextWithImage/index.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/future/image */ \"./node_modules/next/future/image.js\");\n/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_images_jonathan_adler_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/images/jonathan-adler.jpeg */ \"./public/images/jonathan-adler.jpeg\");\n/* harmony import */ var _public_images_billys_bakery_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/billys-bakery.jpeg */ \"./public/images/billys-bakery.jpeg\");\n/* harmony import */ var _public_images_oscar_stone_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/oscar-stone.jpeg */ \"./public/images/oscar-stone.jpeg\");\n/* harmony import */ var _public_images_bmcc_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/bmcc.jpeg */ \"./public/images/bmcc.jpeg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/anthony/Documents/MyPortfolio/components/TextWithImage/index.js\",\n    _this = undefined;\n\n\n\n\n\n\n\n\nvar imageArray = [{\n  src: _public_images_oscar_stone_jpeg__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src,\n  name: 'Oscar Stone'\n}, {\n  src: _public_images_jonathan_adler_jpeg__WEBPACK_IMPORTED_MODULE_1__[\"default\"].src,\n  name: 'Johnathan Adler'\n}, {\n  src: _public_images_bmcc_jpeg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n  name: 'Borough Of Manhattan\\nCommunity College'\n}, {\n  src: _public_images_billys_bakery_jpeg__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n  name: 'Billy\\'s Bakery NYC'\n}];\n\nvar TextWithImage = function TextWithImage(props) {\n  var _s = $RefreshSig$();\n\n  var imageCollection = function imageCollection() {\n    _s();\n\n    var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),\n        count = _useState[0],\n        setCount = _useState[1];\n\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n      if (count === null) return setCount(0);\n      var interval = setInterval(function () {\n        console.log('imageCollection effect: ' + count);\n\n        if (count == imageArray.length - 1) {\n          return setCount(0); // return setActiveIndex(0);\n        } else {\n          return setCount(count + 1);\n        }\n      }, 3000);\n      return function () {\n        return clearInterval(interval);\n      };\n    }, [count]);\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"image\",\n      id: \"cf4a\",\n      children: imageArray.map(function (image, idx) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"figure\", {\n          className: idx === count ? '' : 'hide',\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_future_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n            src: image.src,\n            width: 500,\n            height: 350,\n            alt: image.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"figcaption\", {\n              children: image.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this)]\n        }, 'imageArray_' + idx, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this);\n  };\n\n  _s(imageCollection, \"XeM2Swa48AXpsYvvdoNmFufJfaQ=\");\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n    className: \"section flex flex-center text-with-image\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"padding content\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n          className: \"copy\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"h1\", {\n            children: [\"Over the\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 23\n            }, _this), \"past 5 years\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 11\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n            children: [\"I've built online solutions for large companies and small businesses ranging from marketing websites to complex solutions. My focus is always on fast, elegant and accessible user experiences.\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"br\", {\n              className: \"show-br\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 13\n            }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"br\", {\n              className: \"show-br\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 39\n            }, _this), \"My last role was Director Of E-Commerce at Oscar Stone NYC.I led a team of graphic designers, copywriter, and social media assistant in developing monthly marketing strategies to boost sales through their Shopify storefront.\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"br\", {\n              className: \"show-br\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 13\n            }, _this), \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"br\", {\n              className: \"show-br\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 39\n            }, _this), \"Prior to that, I was a Front-End Engineer at Jonathan Adler building JavaScript applications and interfaces that improved functionality, automated processes, and supported marketing campaigns.\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 11\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 9\n        }, _this), imageCollection()]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = TextWithImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextWithImage);\n\nvar _c;\n\n$RefreshReg$(_c, \"TextWithImage\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsU0FGRixvQkFFNEI7Y0FBSSxTQUFTLEVBQUM7WUFBZDtjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBRjVCLG1QQUlFO2NBQUksU0FBUyxFQUFDO1lBQWQ7Y0FBQTtjQUFBO2NBQUE7WUFBQSxTQUpGLG9CQUk0QjtjQUFJLFNBQVMsRUFBQztZQUFkO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FKNUI7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBRkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBREYsRUFhR0EsZUFBZSxFQWJsQjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFEQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREY7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBcUJELENBN0REOztLQUFNRjtBQStETiwrREFBZUEsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RleHRXaXRoSW1hZ2UvaW5kZXguanM/OGZkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9mdXR1cmUvaW1hZ2UnO1xuaW1wb3J0IGphSW1hZ2UgZnJvbScuLi8uLi9wdWJsaWMvaW1hZ2VzL2pvbmF0aGFuLWFkbGVyLmpwZWcnIDtcbmltcG9ydCBiaWxseXNJbWFnZSBmcm9tJy4uLy4uL3B1YmxpYy9pbWFnZXMvYmlsbHlzLWJha2VyeS5qcGVnJztcbmltcG9ydCBvc2NhclN0b25lSW1hZ2UgZnJvbScuLi8uLi9wdWJsaWMvaW1hZ2VzL29zY2FyLXN0b25lLmpwZWcnO1xuaW1wb3J0IGJtY2NJbWFnZSBmcm9tJy4uLy4uL3B1YmxpYy9pbWFnZXMvYm1jYy5qcGVnJztcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgaW1hZ2VBcnJheSA9IFtcbiAge1xuICAgIHNyYzogb3NjYXJTdG9uZUltYWdlLnNyYyxcbiAgICBuYW1lOiAnT3NjYXIgU3RvbmUnXG4gIH0sXG4gIHtcbiAgICBzcmM6IGphSW1hZ2Uuc3JjLFxuICAgIG5hbWU6ICdKb2huYXRoYW4gQWRsZXInXG4gIH0sXG4gIHtcbiAgICBzcmM6IGJtY2NJbWFnZS5zcmMsXG4gICAgbmFtZTogJ0Jvcm91Z2ggT2YgTWFuaGF0dGFuXFxuQ29tbXVuaXR5IENvbGxlZ2UnXG4gIH0sXG4gIHtcbiAgICBzcmM6IGJpbGx5c0ltYWdlLnNyYyxcbiAgICBuYW1lOiAnQmlsbHlcXCdzIEJha2VyeSBOWUMnXG4gIH0sXG5dO1xuXG5jb25zdCBUZXh0V2l0aEltYWdlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGltYWdlQ29sbGVjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgaWYoY291bnQgPT09IG51bGwgKSByZXR1cm4gc2V0Q291bnQoMCk7XG5cbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2VDb2xsZWN0aW9uIGVmZmVjdDogJyArIGNvdW50KTtcbiAgICAgICAgaWYoY291bnQgPT0gaW1hZ2VBcnJheS5sZW5ndGgtMSl7XG4gICAgICAgICAgcmV0dXJuIHNldENvdW50KDApO1xuICAgICAgICAgIC8vIHJldHVybiBzZXRBY3RpdmVJbmRleCgwKTtcbiAgICAgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgcmV0dXJuIHNldENvdW50KGNvdW50KzEpO1xuICAgICAgICB9XG4gICAgICB9LCAzMDAwKTtcbiAgICAgIFxuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH0sIFtjb3VudF0pXG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2UnIGlkPVwiY2Y0YVwiPlxuICAgICAge2ltYWdlQXJyYXkubWFwKChpbWFnZSwgaWR4KSA9PntcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZmlndXJlIGtleT17J2ltYWdlQXJyYXlfJyArIGlkeH1cbiAgICAgICAgICBjbGFzc05hbWU9eyBpZHggPT09IGNvdW50ID8gJycgOiAnaGlkZSd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2Uuc3JjfSB3aWR0aD17NTAwfSBoZWlnaHQ9ezM1MH0gYWx0PXtpbWFnZS5uYW1lfS8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj57aW1hZ2UubmFtZX08L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIGZsZXggZmxleC1jZW50ZXIgdGV4dC13aXRoLWltYWdlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFkZGluZyBjb250ZW50Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvcHknPlxuICAgICAgICAgIDxoMT5PdmVyIHRoZTxici8+cGFzdCA1IHllYXJzPC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEkndmUgYnVpbHQgb25saW5lIHNvbHV0aW9ucyBmb3IgbGFyZ2UgY29tcGFuaWVzIGFuZCBzbWFsbCBidXNpbmVzc2VzIHJhbmdpbmcgZnJvbSBtYXJrZXRpbmcgd2Vic2l0ZXMgdG8gY29tcGxleCBzb2x1dGlvbnMuIE15IGZvY3VzIGlzIGFsd2F5cyBvbiBmYXN0LCBlbGVnYW50IGFuZCBhY2Nlc3NpYmxlIHVzZXIgZXhwZXJpZW5jZXMuXG4gICAgICAgICAgICA8YnIgY2xhc3NOYW1lPSdzaG93LWJyJy8+IDxiciBjbGFzc05hbWU9J3Nob3ctYnInLz5cbiAgICAgICAgICAgIE15IGxhc3Qgcm9sZSB3YXMgRGlyZWN0b3IgT2YgRS1Db21tZXJjZSBhdCBPc2NhciBTdG9uZSBOWUMuSSBsZWQgYSB0ZWFtIG9mIGdyYXBoaWMgZGVzaWduZXJzLCBjb3B5d3JpdGVyLCBhbmQgc29jaWFsIG1lZGlhIGFzc2lzdGFudCBpbiBkZXZlbG9waW5nIG1vbnRobHkgbWFya2V0aW5nIHN0cmF0ZWdpZXMgdG8gYm9vc3Qgc2FsZXMgdGhyb3VnaCB0aGVpciBTaG9waWZ5IHN0b3JlZnJvbnQuXG4gICAgICAgICAgICA8YnIgY2xhc3NOYW1lPSdzaG93LWJyJy8+IDxiciBjbGFzc05hbWU9J3Nob3ctYnInLz5cbiAgICAgICAgICAgIFByaW9yIHRvIHRoYXQsIEkgd2FzIGEgRnJvbnQtRW5kIEVuZ2luZWVyIGF0IEpvbmF0aGFuIEFkbGVyIGJ1aWxkaW5nIEphdmFTY3JpcHQgYXBwbGljYXRpb25zIGFuZCBpbnRlcmZhY2VzIHRoYXQgaW1wcm92ZWQgZnVuY3Rpb25hbGl0eSwgYXV0b21hdGVkIHByb2Nlc3NlcywgYW5kIHN1cHBvcnRlZCBtYXJrZXRpbmcgY2FtcGFpZ25zLlxuICAgICAgICAgICAgIHsvKiA8YnIgY2xhc3NOYW1lPSdzaG93LWJyJy8+IDxiciBjbGFzc05hbWU9J3Nob3ctYnInLz5cbiAgICAgICAgICAgIEkgYW0gY3VycmVudGx5IGxvb2tpbmcgZm9yIG5ldyBvcHBvcnR1bml0aWVzIGFzIGEgRnJvbnQtRW5kIEVuZ2luZWVyLiBJIGxvdmVkIG15IGV4cGVyaWVuY2UgaW4gYSBtYXJrZXRpbmctYmFzZWQgcm9sZSwgYnV0IG15IHBhc3Npb24gbGllcyBpbiBjcmVhdGluZyBtZW1vcmFibGUgdXNlci1leHBlcmllbmNlcy4gKi99XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2ltYWdlQ29sbGVjdGlvbigpfVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0V2l0aEltYWdlOyJdLCJuYW1lcyI6WyJJbWFnZSIsImphSW1hZ2UiLCJiaWxseXNJbWFnZSIsIm9zY2FyU3RvbmVJbWFnZSIsImJtY2NJbWFnZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaW1hZ2VBcnJheSIsInNyYyIsIm5hbWUiLCJUZXh0V2l0aEltYWdlIiwicHJvcHMiLCJpbWFnZUNvbGxlY3Rpb24iLCJjb3VudCIsInNldENvdW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwibWFwIiwiaW1hZ2UiLCJpZHgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TextWithImage/index.js\n"));

/***/ })

});