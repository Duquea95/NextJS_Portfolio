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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n// import useKeypress from '../hooks/useKeypress';\n\nconst Gallery = (param)=>{\n    let { galleryData  } = param;\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [activeImage, setActiveImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [imageTitle, setImageTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [key, setKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const inputDiv = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const imageTitleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    let images = [], thumbnails = [];\n    galleryData.map((gallery, index)=>{\n        images.push(gallery.image);\n        thumbnails.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"thumbnail \".concat(index === currentIndex ? \"active-thumbnail\" : \"\"),\n            onClick: (event)=>handleThumbnailClick(event, index),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    ref: activeImageRef,\n                    src: gallery.image,\n                    alt: gallery.name\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                index === currentIndex && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"thumbnail-overlay\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Now Viewing\"\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 71\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                    lineNumber: 20,\n                    columnNumber: 36\n                }, undefined)\n            ]\n        }, \"gallery_image_\" + index, true, {\n            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined));\n    });\n    const keyDown = (event)=>{\n        console.log(imageTitleRef);\n        if (event.code == \"ArrowRight\") {\n            if (currentIndex == galleryData.length - 1) return;\n            updateActiveImage(images[currentIndex + 1]);\n            updateIndex(currentIndex + 1);\n        }\n        if (event.code == \"ArrowLeft\") {\n            if (currentIndex == 0) return;\n            updateActiveImage(images[currentIndex - 1]);\n            updateIndex(currentIndex - 1);\n        }\n    };\n    const mouseEnter = (e)=>{\n        inputDiv.current.focus();\n    };\n    const mouseLeave = (e)=>{\n        setKey(null);\n        inputDiv.current.blur();\n    };\n    const updateIndex = (index)=>{\n        return setCurrentIndex(index);\n    };\n    const updateActiveImage = (image)=>{\n        return setActiveImage(image);\n    };\n    const updateImageTitle = (title)=>{\n        return setImageTitle(title);\n    };\n    const handleThumbnailClick = (event, index)=>{\n        updateIndex(index);\n        updateImageTitle(event.target.alt);\n        updateActiveImage(event.target.src);\n    };\n    // const createThumbNails = () => {\n    //   thumbnails = [];\n    //   galleryData.map((gallery, index) => {\n    //     images.push(gallery.image);\n    //     thumbnails.push(\n    //       <div key={'gallery_image_'+index} className={`thumbnail ${index === currentIndex ? 'active-thumbnail' : ''}`} onClick={event => handleThumbnailClick(event, index)}>\n    //         <img src={gallery.image} alt={gallery.name} />\n    //         {index === currentIndex && <div className='thumbnail-overlay'><span>Now Viewing</span></div>}\n    //       </div>\n    //     )\n    //   })\n    //   return thumbnails\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"gallery-wrapper\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gallery-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inner-container\",\n                    ref: inputDiv,\n                    onMouseEnter: mouseEnter,\n                    onMouseLeave: mouseLeave,\n                    onKeyDown: keyDown,\n                    tabIndex: 0,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"active-image\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: activeImage ? activeImage : images[currentIndex]\n                                }, void 0, false, {\n                                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"gallery-overlay\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: imageTitle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 48\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"thumbnail-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"gallery-thumbnails\",\n                                children: thumbnails\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Gallery, \"heF+AlwN8dNdb9Df5NqsSwkZYy4=\");\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDRFQUFDRDtvQkFBSUMsV0FBVTtvQkFBa0JLLEtBQUtmO29CQUFVc0MsY0FBY1Y7b0JBQVlXLGNBQWNQO29CQUFZUSxXQUFXbkI7b0JBQVNvQixVQUFVOztzQ0FDaEksOERBQUNoQzs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNJO29DQUFJRyxLQUFLdkIsY0FBY0EsY0FBY1EsTUFBTSxDQUFDVixhQUFhOzs7Ozs7OENBQzFELDhEQUFDaUI7b0NBQUlDLFdBQVU7OENBQWtCLDRFQUFDVTtrREFBTXhCOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FFMUMsOERBQUNhOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWlA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRakI7R0E1Rk1iO0tBQUFBO0FBOEZOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FsbGVyeS9pbmRleC5qcz9kMWE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgdXNlS2V5cHJlc3MgZnJvbSAnLi4vaG9va3MvdXNlS2V5cHJlc3MnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBHYWxsZXJ5ID0gKHtnYWxsZXJ5RGF0YX0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYWN0aXZlSW1hZ2UsIHNldEFjdGl2ZUltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaW1hZ2VUaXRsZSwgc2V0SW1hZ2VUaXRsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgaW5wdXREaXYgPSB1c2VSZWYoKTtcbiAgY29uc3QgaW1hZ2VUaXRsZVJlZiA9IHVzZVJlZigpO1xuICBsZXQgaW1hZ2VzID0gW10sIHRodW1ibmFpbHMgPSBbXTtcblxuICBnYWxsZXJ5RGF0YS5tYXAoKGdhbGxlcnksIGluZGV4KSA9PiB7XG4gICAgaW1hZ2VzLnB1c2goZ2FsbGVyeS5pbWFnZSk7XG4gICAgdGh1bWJuYWlscy5wdXNoKFxuICAgICAgPGRpdiBrZXk9eydnYWxsZXJ5X2ltYWdlXycraW5kZXh9IGNsYXNzTmFtZT17YHRodW1ibmFpbCAke2luZGV4ID09PSBjdXJyZW50SW5kZXggPyAnYWN0aXZlLXRodW1ibmFpbCcgOiAnJ31gfSBvbkNsaWNrPXtldmVudCA9PiBoYW5kbGVUaHVtYm5haWxDbGljayhldmVudCwgaW5kZXgpfT5cbiAgICAgICAgPGltZyByZWY9e2FjdGl2ZUltYWdlUmVmfSBzcmM9e2dhbGxlcnkuaW1hZ2V9IGFsdD17Z2FsbGVyeS5uYW1lfSAvPlxuICAgICAgICB7aW5kZXggPT09IGN1cnJlbnRJbmRleCAmJiA8ZGl2IGNsYXNzTmFtZT0ndGh1bWJuYWlsLW92ZXJsYXknPjxzcGFuPk5vdyBWaWV3aW5nPC9zcGFuPjwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSlcbiAgXG4gIGNvbnN0IGtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbWFnZVRpdGxlUmVmKVxuICAgIGlmKGV2ZW50LmNvZGUgPT0gJ0Fycm93UmlnaHQnKXtcbiAgICAgIGlmKGN1cnJlbnRJbmRleCA9PSBnYWxsZXJ5RGF0YS5sZW5ndGggLSAxKSByZXR1cm5cbiAgICAgIHVwZGF0ZUFjdGl2ZUltYWdlKGltYWdlc1tjdXJyZW50SW5kZXgrMV0pO1xuICAgICAgdXBkYXRlSW5kZXgoY3VycmVudEluZGV4ICsgMSlcbiAgICB9XG4gICAgaWYoZXZlbnQuY29kZSA9PSAnQXJyb3dMZWZ0Jyl7XG4gICAgICBpZihjdXJyZW50SW5kZXggPT0gMCkgcmV0dXJuXG4gICAgICB1cGRhdGVBY3RpdmVJbWFnZShpbWFnZXNbY3VycmVudEluZGV4LTFdKTtcbiAgICAgIHVwZGF0ZUluZGV4KGN1cnJlbnRJbmRleCAtIDEpXG4gICAgfVxuICB9XG4gIFxuICBjb25zdCBtb3VzZUVudGVyID0gKGUpID0+IHtcbiAgICBpbnB1dERpdi5jdXJyZW50LmZvY3VzKCk7XG4gIH1cbiAgXG4gIGNvbnN0IG1vdXNlTGVhdmUgPSAoZSkgPT4ge1xuICAgIHNldEtleShudWxsKTtcbiAgICBpbnB1dERpdi5jdXJyZW50LmJsdXIoKTtcbiAgfVxuICBjb25zdCB1cGRhdGVJbmRleCA9IChpbmRleCkgPT4ge1xuICAgIHJldHVybiBzZXRDdXJyZW50SW5kZXgoaW5kZXgpO1xuICB9XG4gIGNvbnN0IHVwZGF0ZUFjdGl2ZUltYWdlID0gKGltYWdlKSA9PiB7XG4gICAgcmV0dXJuIHNldEFjdGl2ZUltYWdlKGltYWdlKTtcbiAgfVxuICBjb25zdCB1cGRhdGVJbWFnZVRpdGxlID0gKHRpdGxlKSA9PiB7XG4gICAgcmV0dXJuIHNldEltYWdlVGl0bGUodGl0bGUpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlVGh1bWJuYWlsQ2xpY2sgPSAoZXZlbnQsIGluZGV4KSA9PiB7XG4gICAgdXBkYXRlSW5kZXgoaW5kZXgpO1xuICAgIHVwZGF0ZUltYWdlVGl0bGUoZXZlbnQudGFyZ2V0LmFsdClcbiAgICB1cGRhdGVBY3RpdmVJbWFnZShldmVudC50YXJnZXQuc3JjKVxuICB9XG4gIFxuICAvLyBjb25zdCBjcmVhdGVUaHVtYk5haWxzID0gKCkgPT4ge1xuICAvLyAgIHRodW1ibmFpbHMgPSBbXTtcbiAgLy8gICBnYWxsZXJ5RGF0YS5tYXAoKGdhbGxlcnksIGluZGV4KSA9PiB7XG4gIC8vICAgICBpbWFnZXMucHVzaChnYWxsZXJ5LmltYWdlKTtcbiAgLy8gICAgIHRodW1ibmFpbHMucHVzaChcbiAgLy8gICAgICAgPGRpdiBrZXk9eydnYWxsZXJ5X2ltYWdlXycraW5kZXh9IGNsYXNzTmFtZT17YHRodW1ibmFpbCAke2luZGV4ID09PSBjdXJyZW50SW5kZXggPyAnYWN0aXZlLXRodW1ibmFpbCcgOiAnJ31gfSBvbkNsaWNrPXtldmVudCA9PiBoYW5kbGVUaHVtYm5haWxDbGljayhldmVudCwgaW5kZXgpfT5cbiAgLy8gICAgICAgICA8aW1nIHNyYz17Z2FsbGVyeS5pbWFnZX0gYWx0PXtnYWxsZXJ5Lm5hbWV9IC8+XG4gIC8vICAgICAgICAge2luZGV4ID09PSBjdXJyZW50SW5kZXggJiYgPGRpdiBjbGFzc05hbWU9J3RodW1ibmFpbC1vdmVybGF5Jz48c3Bhbj5Ob3cgVmlld2luZzwvc3Bhbj48L2Rpdj59XG4gIC8vICAgICAgIDwvZGl2PlxuICAvLyAgICAgKVxuICAvLyAgIH0pXG5cbiAgLy8gICByZXR1cm4gdGh1bWJuYWlsc1xuICAvLyB9XG5cbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2dhbGxlcnktd3JhcHBlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYWxsZXJ5LWNvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lubmVyLWNvbnRhaW5lcicgcmVmPXtpbnB1dERpdn0gb25Nb3VzZUVudGVyPXttb3VzZUVudGVyfSBvbk1vdXNlTGVhdmU9e21vdXNlTGVhdmV9IG9uS2V5RG93bj17a2V5RG93bn0gdGFiSW5kZXg9ezB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FjdGl2ZS1pbWFnZSc+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXthY3RpdmVJbWFnZSA/IGFjdGl2ZUltYWdlIDogaW1hZ2VzW2N1cnJlbnRJbmRleF19Lz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhbGxlcnktb3ZlcmxheSc+PHNwYW4+e2ltYWdlVGl0bGV9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGh1bWJuYWlsLWNvbnRhaW5lcic+ICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhbGxlcnktdGh1bWJuYWlscyc+XG4gICAgICAgICAgICAgICAge3RodW1ibmFpbHN9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnkiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkltYWdlIiwiR2FsbGVyeSIsImdhbGxlcnlEYXRhIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiYWN0aXZlSW1hZ2UiLCJzZXRBY3RpdmVJbWFnZSIsImltYWdlVGl0bGUiLCJzZXRJbWFnZVRpdGxlIiwia2V5Iiwic2V0S2V5IiwiaW5wdXREaXYiLCJpbWFnZVRpdGxlUmVmIiwiaW1hZ2VzIiwidGh1bWJuYWlscyIsIm1hcCIsImdhbGxlcnkiLCJpbmRleCIsInB1c2giLCJpbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJldmVudCIsImhhbmRsZVRodW1ibmFpbENsaWNrIiwiaW1nIiwicmVmIiwiYWN0aXZlSW1hZ2VSZWYiLCJzcmMiLCJhbHQiLCJuYW1lIiwic3BhbiIsImtleURvd24iLCJjb25zb2xlIiwibG9nIiwiY29kZSIsImxlbmd0aCIsInVwZGF0ZUFjdGl2ZUltYWdlIiwidXBkYXRlSW5kZXgiLCJtb3VzZUVudGVyIiwiZSIsImN1cnJlbnQiLCJmb2N1cyIsIm1vdXNlTGVhdmUiLCJibHVyIiwidXBkYXRlSW1hZ2VUaXRsZSIsInRpdGxlIiwidGFyZ2V0Iiwic2VjdGlvbiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uS2V5RG93biIsInRhYkluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Gallery/index.js\n"));

/***/ })

});