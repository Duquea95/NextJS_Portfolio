"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/About",{

/***/ "./components/Gallery/index.js":
/*!*************************************!*\
  !*** ./components/Gallery/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n// import useKeypress from '../hooks/useKeypress';\n\nconst Gallery = (param)=>{\n    let { galleryData  } = param;\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [activeImage, setActiveImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [imageTitle, setImageTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [key, setKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const inputDiv = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    let images = [], thumbnails = [];\n    galleryData.map((gallery, index)=>{\n        images.push(gallery.image);\n        thumbnails.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"thumbnail \".concat(index === currentIndex ? \"active-thumbnail\" : \"\"),\n            onClick: (event)=>handleThumbnailClick(event, index),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: gallery.image,\n                    alt: gallery.name\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                index === currentIndex && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"thumbnail-overlay\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Now Viewing\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 71\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                    lineNumber: 19,\n                    columnNumber: 36\n                }, undefined)\n            ]\n        }, \"gallery_image_\" + index, true, {\n            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined));\n    });\n    const keyDown = (event)=>{\n        if (event.code == \"ArrowRight\") {\n            if (currentIndex == galleryData.length - 1) return;\n            updateActiveImage(images[currentIndex + 1]);\n            updateIndex(currentIndex + 1);\n        }\n        if (event.code == \"ArrowLeft\") {\n            if (currentIndex == 0) return;\n            updateActiveImage(images[currentIndex - 1]);\n            updateIndex(currentIndex - 1);\n        }\n    };\n    const mouseEnter = (e)=>{\n        inputDiv.current.focus();\n    };\n    const mouseLeave = (e)=>{\n        setKey(null);\n        inputDiv.current.blur();\n    };\n    const updateIndex = (index)=>{\n        return setCurrentIndex(index);\n    };\n    const updateActiveImage = (image)=>{\n        return setActiveImage(image);\n    };\n    const handleThumbnailClick = (event, index)=>{\n        console.log(event);\n        updateIndex(index);\n        // updateActiveTitle(event.target.alt)\n        updateActiveImage(event.target.src);\n    };\n    // const createThumbNails = () => {\n    //   thumbnails = [];\n    //   galleryData.map((gallery, index) => {\n    //     images.push(gallery.image);\n    //     thumbnails.push(\n    //       <div key={'gallery_image_'+index} className={`thumbnail ${index === currentIndex ? 'active-thumbnail' : ''}`} onClick={event => handleThumbnailClick(event, index)}>\n    //         <img src={gallery.image} alt={gallery.name} />\n    //         {index === currentIndex && <div className='thumbnail-overlay'><span>Now Viewing</span></div>}\n    //       </div>\n    //     )\n    //   })\n    //   return thumbnails\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"gallery-wrapper\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gallery-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inner-container\",\n                    ref: inputDiv,\n                    onMouseEnter: mouseEnter,\n                    onMouseLeave: mouseLeave,\n                    onKeyDown: keyDown,\n                    tabIndex: 0,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"active-image\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: activeImage ? activeImage : images[currentIndex]\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"thumbnail-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"gallery-thumbnails\",\n                                children: thumbnails\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Gallery, \"A8gwGxL34ZhwmCzI25LJujusDcI=\");\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSTtnQ0FBSUMsS0FBS3BCLGNBQWNBLGNBQWNPLE1BQU0sQ0FBQ1QsYUFBYTs7Ozs7Ozs7Ozs7c0NBRzVELDhEQUFDZ0I7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVOzBDQUNaUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqQjtHQXhGTVo7S0FBQUE7QUEwRk4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYWxsZXJ5L2luZGV4LmpzP2QxYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB1c2VLZXlwcmVzcyBmcm9tICcuLi9ob29rcy91c2VLZXlwcmVzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNvbnN0IEdhbGxlcnkgPSAoe2dhbGxlcnlEYXRhfSkgPT4ge1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFthY3RpdmVJbWFnZSwgc2V0QWN0aXZlSW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpbWFnZVRpdGxlLCBzZXRJbWFnZVRpdGxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBba2V5LCBzZXRLZXldID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBpbnB1dERpdiA9IHVzZVJlZigpO1xuICBsZXQgaW1hZ2VzID0gW10sIHRodW1ibmFpbHMgPSBbXTtcblxuICBnYWxsZXJ5RGF0YS5tYXAoKGdhbGxlcnksIGluZGV4KSA9PiB7XG4gICAgaW1hZ2VzLnB1c2goZ2FsbGVyeS5pbWFnZSk7XG4gICAgdGh1bWJuYWlscy5wdXNoKFxuICAgICAgPGRpdiBrZXk9eydnYWxsZXJ5X2ltYWdlXycraW5kZXh9IGNsYXNzTmFtZT17YHRodW1ibmFpbCAke2luZGV4ID09PSBjdXJyZW50SW5kZXggPyAnYWN0aXZlLXRodW1ibmFpbCcgOiAnJ31gfSBvbkNsaWNrPXtldmVudCA9PiBoYW5kbGVUaHVtYm5haWxDbGljayhldmVudCwgaW5kZXgpfT5cbiAgICAgICAgPGltZyBzcmM9e2dhbGxlcnkuaW1hZ2V9IGFsdD17Z2FsbGVyeS5uYW1lfSAvPlxuICAgICAgICB7aW5kZXggPT09IGN1cnJlbnRJbmRleCAmJiA8ZGl2IGNsYXNzTmFtZT0ndGh1bWJuYWlsLW92ZXJsYXknPjxzcGFuPk5vdyBWaWV3aW5nPC9zcGFuPjwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSlcbiAgXG4gIGNvbnN0IGtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC5jb2RlID09ICdBcnJvd1JpZ2h0Jyl7XG4gICAgICBpZihjdXJyZW50SW5kZXggPT0gZ2FsbGVyeURhdGEubGVuZ3RoIC0gMSkgcmV0dXJuXG4gICAgICB1cGRhdGVBY3RpdmVJbWFnZShpbWFnZXNbY3VycmVudEluZGV4KzFdKTtcbiAgICAgIHVwZGF0ZUluZGV4KGN1cnJlbnRJbmRleCArIDEpXG4gICAgfVxuICAgIGlmKGV2ZW50LmNvZGUgPT0gJ0Fycm93TGVmdCcpe1xuICAgICAgaWYoY3VycmVudEluZGV4ID09IDApIHJldHVyblxuICAgICAgdXBkYXRlQWN0aXZlSW1hZ2UoaW1hZ2VzW2N1cnJlbnRJbmRleC0xXSk7XG4gICAgICB1cGRhdGVJbmRleChjdXJyZW50SW5kZXggLSAxKVxuICAgIH1cbiAgfVxuICBcbiAgY29uc3QgbW91c2VFbnRlciA9IChlKSA9PiB7XG4gICAgaW5wdXREaXYuY3VycmVudC5mb2N1cygpO1xuICB9XG4gIFxuICBjb25zdCBtb3VzZUxlYXZlID0gKGUpID0+IHtcbiAgICBzZXRLZXkobnVsbCk7XG4gICAgaW5wdXREaXYuY3VycmVudC5ibHVyKCk7XG4gIH1cbiAgY29uc3QgdXBkYXRlSW5kZXggPSAoaW5kZXgpID0+IHtcbiAgICByZXR1cm4gc2V0Q3VycmVudEluZGV4KGluZGV4KTtcbiAgfVxuICBjb25zdCB1cGRhdGVBY3RpdmVJbWFnZSA9IChpbWFnZSkgPT4ge1xuICAgIHJldHVybiBzZXRBY3RpdmVJbWFnZShpbWFnZSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVUaHVtYm5haWxDbGljayA9IChldmVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICB1cGRhdGVJbmRleChpbmRleCk7XG4gICAgLy8gdXBkYXRlQWN0aXZlVGl0bGUoZXZlbnQudGFyZ2V0LmFsdClcbiAgICB1cGRhdGVBY3RpdmVJbWFnZShldmVudC50YXJnZXQuc3JjKVxuICB9XG4gIFxuICAvLyBjb25zdCBjcmVhdGVUaHVtYk5haWxzID0gKCkgPT4ge1xuICAvLyAgIHRodW1ibmFpbHMgPSBbXTtcbiAgLy8gICBnYWxsZXJ5RGF0YS5tYXAoKGdhbGxlcnksIGluZGV4KSA9PiB7XG4gIC8vICAgICBpbWFnZXMucHVzaChnYWxsZXJ5LmltYWdlKTtcbiAgLy8gICAgIHRodW1ibmFpbHMucHVzaChcbiAgLy8gICAgICAgPGRpdiBrZXk9eydnYWxsZXJ5X2ltYWdlXycraW5kZXh9IGNsYXNzTmFtZT17YHRodW1ibmFpbCAke2luZGV4ID09PSBjdXJyZW50SW5kZXggPyAnYWN0aXZlLXRodW1ibmFpbCcgOiAnJ31gfSBvbkNsaWNrPXtldmVudCA9PiBoYW5kbGVUaHVtYm5haWxDbGljayhldmVudCwgaW5kZXgpfT5cbiAgLy8gICAgICAgICA8aW1nIHNyYz17Z2FsbGVyeS5pbWFnZX0gYWx0PXtnYWxsZXJ5Lm5hbWV9IC8+XG4gIC8vICAgICAgICAge2luZGV4ID09PSBjdXJyZW50SW5kZXggJiYgPGRpdiBjbGFzc05hbWU9J3RodW1ibmFpbC1vdmVybGF5Jz48c3Bhbj5Ob3cgVmlld2luZzwvc3Bhbj48L2Rpdj59XG4gIC8vICAgICAgIDwvZGl2PlxuICAvLyAgICAgKVxuICAvLyAgIH0pXG5cbiAgLy8gICByZXR1cm4gdGh1bWJuYWlsc1xuICAvLyB9XG5cbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2dhbGxlcnktd3JhcHBlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYWxsZXJ5LWNvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lubmVyLWNvbnRhaW5lcicgcmVmPXtpbnB1dERpdn0gb25Nb3VzZUVudGVyPXttb3VzZUVudGVyfSBvbk1vdXNlTGVhdmU9e21vdXNlTGVhdmV9IG9uS2V5RG93bj17a2V5RG93bn0gdGFiSW5kZXg9ezB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FjdGl2ZS1pbWFnZSc+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXthY3RpdmVJbWFnZSA/IGFjdGl2ZUltYWdlIDogaW1hZ2VzW2N1cnJlbnRJbmRleF19Lz5cbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdnYWxsZXJ5LW92ZXJsYXknPjxzcGFuPntpbWFnZVRpdGxlfTwvc3Bhbj48L2Rpdj4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aHVtYm5haWwtY29udGFpbmVyJz4gIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2FsbGVyeS10aHVtYm5haWxzJz5cbiAgICAgICAgICAgICAgICB7dGh1bWJuYWlsc31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiSW1hZ2UiLCJHYWxsZXJ5IiwiZ2FsbGVyeURhdGEiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJhY3RpdmVJbWFnZSIsInNldEFjdGl2ZUltYWdlIiwiaW1hZ2VUaXRsZSIsInNldEltYWdlVGl0bGUiLCJrZXkiLCJzZXRLZXkiLCJpbnB1dERpdiIsImltYWdlcyIsInRodW1ibmFpbHMiLCJtYXAiLCJnYWxsZXJ5IiwiaW5kZXgiLCJwdXNoIiwiaW1hZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZXZlbnQiLCJoYW5kbGVUaHVtYm5haWxDbGljayIsImltZyIsInNyYyIsImFsdCIsIm5hbWUiLCJzcGFuIiwia2V5RG93biIsImNvZGUiLCJsZW5ndGgiLCJ1cGRhdGVBY3RpdmVJbWFnZSIsInVwZGF0ZUluZGV4IiwibW91c2VFbnRlciIsImUiLCJjdXJyZW50IiwiZm9jdXMiLCJtb3VzZUxlYXZlIiwiYmx1ciIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJzZWN0aW9uIiwicmVmIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25LZXlEb3duIiwidGFiSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Gallery/index.js\n"));

/***/ })

});