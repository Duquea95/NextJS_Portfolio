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

/***/ "./components/Mailer/index.js":
/*!************************************!*\
  !*** ./components/Mailer/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ \"./components/Button/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Mailer = ()=>{\n    _s();\n    const [sendMail, setSendMail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const messageRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const mailerClicked = ()=>{\n        nameRef.current.value = \"\";\n        emailRef.current.value = \"\";\n        messageRef.current.value = \"\";\n        setSendMail(true);\n    };\n    const focusLabelColor = (e)=>{\n        e.target.previousSibling.classList.add(\"mainColor\");\n    };\n    const blurLabelColor = (e)=>{\n        console.log(e.target.previousSibling);\n        e.target.previousSibling.classList.remove(\"mainColor\");\n    };\n    const formCopy = [\n        {\n            labelCopy: \"Your Name:\",\n            labelFor: \"name\",\n            inputRef: nameRef,\n            inputType: \"text\",\n            inputPlaceholder: \"Enter Your Name\"\n        },\n        {\n            labelCopy: \"Email\",\n            labelFor: \"email\",\n            inputRef: emailRef,\n            inputType: \"text\",\n            inputPlaceholder: \"Enter Your Email:\"\n        },\n        {\n            labelCopy: \"Your Message:\",\n            labelFor: \"message\",\n            inputRef: messageRef,\n            inputType: \"textarea\",\n            inputPlaceholder: \"Hi, I need a custom plugin for my e-commerce website. When are you available to discuss this?\"\n        }\n    ];\n    let topLeft, topRight, bottom;\n    {\n        formCopy.map((copy)=>{\n            if (copy.labelFor == \"message\") {\n                bottom = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: copy.labelFor,\n                                children: copy.labelCopy\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                ref: copy.inputRef,\n                                type: copy.inputType,\n                                placeholder: copy.inputPlaceholder,\n                                name: copy.labelFor,\n                                onFocus: focusLabelColor,\n                                onBlur: blurLabelColor\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, \"form-row__\" + copy.labelFor, true, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined);\n            } else if (copy.labelFor == \"email\") {\n                topRight = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: copy.labelFor,\n                            children: copy.labelCopy\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: copy.inputRef,\n                            type: copy.inputType,\n                            placeholder: copy.inputPlaceholder,\n                            name: copy.labelFor,\n                            onFocus: focusLabelColor,\n                            onBlur: blurLabelColor\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, \"form-row__\" + copy.labelFor, true, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined);\n            } else {\n                topLeft = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: copy.labelFor,\n                            children: copy.labelCopy\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: copy.inputRef,\n                            type: copy.inputType,\n                            placeholder: copy.inputPlaceholder,\n                            name: copy.labelFor,\n                            onFocus: focusLabelColor,\n                            onBlur: blurLabelColor\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, \"form-row__\" + copy.labelFor, true, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined);\n            }\n        });\n    }\n    let topInputs = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-between\",\n        children: [\n            topLeft,\n            topRight\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n        lineNumber: 77,\n        columnNumber: 19\n    }, undefined);\n    const RenderButton = ()=>{\n        if (sendMail != true) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            text: \"Shoot\",\n            mailerClicked: mailerClicked,\n            sendMail: sendMail\n        }, void 0, false, {\n            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n            lineNumber: 80,\n            columnNumber: 33\n        }, undefined);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            text: \"Thank you!\",\n            mailerClicked: mailerClicked,\n            sendMail: sendMail\n        }, void 0, false, {\n            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n            lineNumber: 82,\n            columnNumber: 12\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"section mailer flex flex-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-copy\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Send me a message!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Got a question, or just want \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 43\n                                }, undefined),\n                                \" to say hello? Go ahead.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    children: [\n                        topInputs,\n                        bottom,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"justify-center\",\n                            children: sendMail ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                text: \"Thank you!\",\n                                mailerClicked: mailerClicked,\n                                sendMail: sendMail\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                text: \"Shoot!\",\n                                mailerClicked: mailerClicked,\n                                sendMail: sendMail\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n                                lineNumber: 98,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n            lineNumber: 87,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Mailer/index.js\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Mailer, \"L7eUiu9ielF8LFYInsmghFEEPzM=\");\n_c = Mailer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mailer);\nvar _c;\n$RefreshReg$(_c, \"Mailer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7NEJBQUVrQixTQUFTOUI7NEJBQWlCK0IsUUFBUXpCOzs7Ozs7O21CQUZwSCxlQUFhYyxLQUFLUixRQUFROzs7OztZQUl4RCxDQUFDO1FBQ0g7SUFBRTtJQUVGLElBQUlxQiwwQkFBWSw4REFBQ1o7UUFBSUMsV0FBVTs7WUFBcUJOO1lBQVNDOzs7Ozs7O0lBRTdELE1BQU1pQixlQUFlLElBQUs7UUFDeEIsSUFBRzFDLFlBQVksSUFBSSxFQUFFLHFCQUFPLDhEQUFDSiwrQ0FBTUE7WUFBQytDLE1BQU07WUFBU3RDLGVBQWVBO1lBQWVMLFVBQVVBOzs7Ozs7UUFFM0YscUJBQU8sOERBQUNKLCtDQUFNQTtZQUFDK0MsTUFBTTtZQUFjdEMsZUFBZUE7WUFBZUwsVUFBVUE7Ozs7OztJQUM3RTtJQUVBLHFCQUNFLDhEQUFDNkI7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2M7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7O2dDQUFFOzhDQUE2Qiw4REFBQ0M7Ozs7O2dDQUFJOzs7Ozs7Ozs7Ozs7OzhCQUV2Qyw4REFBQ0M7O3dCQUNFTjt3QkFDQWY7c0NBQ0QsOERBQUNHOzRCQUFJQyxXQUFVO3NDQUNaOUIseUJBQ0MsOERBQUNKLCtDQUFNQTtnQ0FBQytDLE1BQU07Z0NBQWN0QyxlQUFlQTtnQ0FBZUwsVUFBVUE7Ozs7OzBEQUNwRSw4REFBQ0osK0NBQU1BO2dDQUFDK0MsTUFBTTtnQ0FBVXRDLGVBQWVBO2dDQUFlTCxVQUFVQTs7Ozs7eUNBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pGO0dBckdNRDtLQUFBQTtBQXVHTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haWxlci9pbmRleC5qcz84OTEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBNYWlsZXIgPSAoKSA9PntcbiAgY29uc3QgW3NlbmRNYWlsLCBzZXRTZW5kTWFpbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG5hbWVSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGVtYWlsUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBtZXNzYWdlUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IG1haWxlckNsaWNrZWQgPSAoKSA9PntcbiAgICBuYW1lUmVmLmN1cnJlbnQudmFsdWUgPSAnJztcbiAgICBlbWFpbFJlZi5jdXJyZW50LnZhbHVlID0gJyc7XG4gICAgbWVzc2FnZVJlZi5jdXJyZW50LnZhbHVlID0gJyc7XG4gICAgc2V0U2VuZE1haWwodHJ1ZSk7XG4gIH1cbiAgY29uc3QgZm9jdXNMYWJlbENvbG9yID0gKGUpID0+e1xuICAgIGUudGFyZ2V0LnByZXZpb3VzU2libGluZy5jbGFzc0xpc3QuYWRkKCdtYWluQ29sb3InKTtcbiAgfVxuICBjb25zdCBibHVyTGFiZWxDb2xvciA9IChlKSA9PntcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wcmV2aW91c1NpYmxpbmcpXG4gICAgZS50YXJnZXQucHJldmlvdXNTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ21haW5Db2xvcicpO1xuICB9XG4gIFxuICBjb25zdCBmb3JtQ29weSA9IFtcbiAgICB7XG4gICAgICBsYWJlbENvcHk6ICdZb3VyIE5hbWU6JyxcbiAgICAgIGxhYmVsRm9yOiAnbmFtZScsXG4gICAgICBpbnB1dFJlZjogbmFtZVJlZixcbiAgICAgIGlucHV0VHlwZTogJ3RleHQnLFxuICAgICAgaW5wdXRQbGFjZWhvbGRlcjogJ0VudGVyIFlvdXIgTmFtZScsXG5cbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsQ29weTogJ0VtYWlsJyxcbiAgICAgIGxhYmVsRm9yOiAnZW1haWwnLFxuICAgICAgaW5wdXRSZWY6IGVtYWlsUmVmLFxuICAgICAgaW5wdXRUeXBlOiAndGV4dCcsXG4gICAgICBpbnB1dFBsYWNlaG9sZGVyOiAnRW50ZXIgWW91ciBFbWFpbDonLFxuXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbENvcHk6ICdZb3VyIE1lc3NhZ2U6JyxcbiAgICAgIGxhYmVsRm9yOiAnbWVzc2FnZScsXG4gICAgICBpbnB1dFJlZjogbWVzc2FnZVJlZixcbiAgICAgIGlucHV0VHlwZTogJ3RleHRhcmVhJyxcbiAgICAgIGlucHV0UGxhY2Vob2xkZXI6ICdIaSwgSSBuZWVkIGEgY3VzdG9tIHBsdWdpbiBmb3IgbXkgZS1jb21tZXJjZSB3ZWJzaXRlLiBXaGVuIGFyZSB5b3UgYXZhaWxhYmxlIHRvIGRpc2N1c3MgdGhpcz8nLFxuXG4gICAgfSxcbiAgXVxuXG4gIGxldCB0b3BMZWZ0LCB0b3BSaWdodCwgYm90dG9tO1xuXG4gIHtmb3JtQ29weS5tYXAoY29weSAgPT57XG4gICAgaWYoY29weS5sYWJlbEZvcj09J21lc3NhZ2UnKXtcbiAgICAgIGJvdHRvbSA9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdycga2V5PXsnZm9ybS1yb3dfXycrY29weS5sYWJlbEZvcn0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17Y29weS5sYWJlbEZvcn0+e2NvcHkubGFiZWxDb3B5fTwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgcmVmPXtjb3B5LmlucHV0UmVmfSB0eXBlPXtjb3B5LmlucHV0VHlwZX0gcGxhY2Vob2xkZXI9e2NvcHkuaW5wdXRQbGFjZWhvbGRlcn0gbmFtZT17Y29weS5sYWJlbEZvcn0gb25Gb2N1cz17Zm9jdXNMYWJlbENvbG9yfSBvbkJsdXI9e2JsdXJMYWJlbENvbG9yfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9ZWxzZSBpZihjb3B5LmxhYmVsRm9yPT0nZW1haWwnKXtcbiAgICAgIHRvcFJpZ2h0ID1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdycga2V5PXsnZm9ybS1yb3dfXycrY29weS5sYWJlbEZvcn0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2NvcHkubGFiZWxGb3J9Pntjb3B5LmxhYmVsQ29weX08L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCByZWY9e2NvcHkuaW5wdXRSZWZ9IHR5cGU9e2NvcHkuaW5wdXRUeXBlfSBwbGFjZWhvbGRlcj17Y29weS5pbnB1dFBsYWNlaG9sZGVyfSBuYW1lPXtjb3B5LmxhYmVsRm9yfSBvbkZvY3VzPXtmb2N1c0xhYmVsQ29sb3J9IG9uQmx1cj17Ymx1ckxhYmVsQ29sb3J9Lz5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1lbHNle1xuICAgICAgdG9wTGVmdCA9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnIGtleT17J2Zvcm0tcm93X18nK2NvcHkubGFiZWxGb3J9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtjb3B5LmxhYmVsRm9yfT57Y29weS5sYWJlbENvcHl9PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgcmVmPXtjb3B5LmlucHV0UmVmfSB0eXBlPXtjb3B5LmlucHV0VHlwZX0gcGxhY2Vob2xkZXI9e2NvcHkuaW5wdXRQbGFjZWhvbGRlcn0gbmFtZT17Y29weS5sYWJlbEZvcn0gb25Gb2N1cz17Zm9jdXNMYWJlbENvbG9yfSBvbkJsdXI9e2JsdXJMYWJlbENvbG9yfS8+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG4gIH0pfVxuXG4gIGxldCB0b3BJbnB1dHMgPSA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWJldHdlZW4nPnt0b3BMZWZ0fXt0b3BSaWdodH08L2Rpdj5cblxuICBjb25zdCBSZW5kZXJCdXR0b24gPSAoKSA9PntcbiAgICBpZihzZW5kTWFpbCAhPSB0cnVlKSByZXR1cm4gPEJ1dHRvbiB0ZXh0PXsnU2hvb3QnfSBtYWlsZXJDbGlja2VkPXttYWlsZXJDbGlja2VkfSBzZW5kTWFpbD17c2VuZE1haWx9Lz5cblxuICAgIHJldHVybiA8QnV0dG9uIHRleHQ9eydUaGFuayB5b3UhJ30gbWFpbGVyQ2xpY2tlZD17bWFpbGVyQ2xpY2tlZH0gc2VuZE1haWw9e3NlbmRNYWlsfS8+XG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24gbWFpbGVyIGZsZXggZmxleC1jZW50ZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1jb3B5Jz5cbiAgICAgICAgICA8aDE+U2VuZCBtZSBhIG1lc3NhZ2UhPC9oMT5cbiAgICAgICAgICA8cD5Hb3QgYSBxdWVzdGlvbiwgb3IganVzdCB3YW50IDxici8+IHRvIHNheSBoZWxsbz8gR28gYWhlYWQuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAge3RvcElucHV0c31cbiAgICAgICAgICB7Ym90dG9tfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICB7c2VuZE1haWwgPyBcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXsnVGhhbmsgeW91ISd9IG1haWxlckNsaWNrZWQ9e21haWxlckNsaWNrZWR9IHNlbmRNYWlsPXtzZW5kTWFpbH0vPiA6XG4gICAgICAgICAgICAgIDxCdXR0b24gdGV4dD17J1Nob290ISd9IG1haWxlckNsaWNrZWQ9e21haWxlckNsaWNrZWR9IHNlbmRNYWlsPXtzZW5kTWFpbH0vPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWlsZXJcblxuICAvLyBjb25zdCBSZW5kZXJCdXR0b24gPSAoKSA9PntcbiAgLy8gICBpZihzZW5kTWFpbCAhPSB0cnVlKSByZXR1cm4gPEJ1dHRvbiB0ZXh0PXsnU2hvb3QnfSBtYWlsZXJDbGlja2VkPXttYWlsZXJDbGlja2VkfSBzZW5kTWFpbD17c2VuZE1haWx9Lz5cblxuICAvLyAgIHJldHVybiA8QnV0dG9uIHRleHQ9eydUaGFuayB5b3UhJ30gbWFpbGVyQ2xpY2tlZD17bWFpbGVyQ2xpY2tlZH0gc2VuZE1haWw9e3NlbmRNYWlsfS8+XG4gIC8vIH0iXSwibmFtZXMiOlsiQnV0dG9uIiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJNYWlsZXIiLCJzZW5kTWFpbCIsInNldFNlbmRNYWlsIiwibmFtZVJlZiIsImVtYWlsUmVmIiwibWVzc2FnZVJlZiIsIm1haWxlckNsaWNrZWQiLCJjdXJyZW50IiwidmFsdWUiLCJmb2N1c0xhYmVsQ29sb3IiLCJlIiwidGFyZ2V0IiwicHJldmlvdXNTaWJsaW5nIiwiY2xhc3NMaXN0IiwiYWRkIiwiYmx1ckxhYmVsQ29sb3IiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlIiwiZm9ybUNvcHkiLCJsYWJlbENvcHkiLCJsYWJlbEZvciIsImlucHV0UmVmIiwiaW5wdXRUeXBlIiwiaW5wdXRQbGFjZWhvbGRlciIsInRvcExlZnQiLCJ0b3BSaWdodCIsImJvdHRvbSIsIm1hcCIsImNvcHkiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJ0ZXh0YXJlYSIsInJlZiIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJvbkZvY3VzIiwib25CbHVyIiwiaW5wdXQiLCJ0b3BJbnB1dHMiLCJSZW5kZXJCdXR0b24iLCJ0ZXh0IiwiaDEiLCJwIiwiYnIiLCJmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Mailer/index.js\n"));

/***/ })

});