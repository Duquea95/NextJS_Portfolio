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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Gallery = (param)=>{\n    let { galleryData  } = param;\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [activeImage, setActiveImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // const [activeInfo, setActiveInfo] = useState(null);\n    const carouselInfiniteScroll = ()=>{\n        // if(currentIndex === data.length-1){\n        //   return setCurrentIndex(0)\n        // }\n        return setCurrentIndex(currentIndex + 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n    // const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)\n    // return () => clearInterval(interval)\n    });\n    const scrollLeft = ()=>{\n        const slideWidth = slide.clientWidth;\n        slidesContainer.scrollLeft += slideWidth;\n    };\n    const scrollRight = ()=>{\n        const slideWidth = slide.clientWidth;\n        slidesContainer.scrollLeft -= slideWidth;\n    };\n    const handleThumbnailClick = (event, index)=>{\n        setCurrentIndex(index);\n        // setCurrentTitle\n        return setActiveImage(event.target.src);\n    };\n    const createGallery = ()=>{\n        let activeGallery, thumbnails = [];\n        galleryData.map((gallery, index)=>{\n            if (index === currentIndex) {\n                activeGallery = gallery;\n            }\n            thumbnails.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"thumbnail \".concat(index === currentIndex ? \"active-thumbnail\" : \"\"),\n                onClick: (event)=>handleThumbnailClick(event, index),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: gallery.image,\n                        alt: gallery.name\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined),\n                    index === currentIndex && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"thumbnail-overlay\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Now Viewing\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                            lineNumber: 45,\n                            columnNumber: 73\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 38\n                    }, undefined)\n                ]\n            }, \"gallery_image_\" + index, true, {\n                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined));\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"inner-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"active-image\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"\",\n                            src: activeImage ? activeImage : activeGallery.image\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"gallery-overlay\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: activeGallery.name\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 44\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"thumbnail-container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"gallery-thumbnails\",\n                        children: thumbnails\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"gallery-wrapper\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gallery-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            style: {\n                                textAlign: \"center\"\n                            },\n                            children: \"Photography Gallery\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                            lineNumber: 69,\n                            columnNumber: 16\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, undefined),\n                    galleryData && createGallery()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Gallery, \"7Gw33INb+PO0PQMryBga4xbBNds=\");\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbGxlcnkvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFnRDtBQUNqQjtBQUUvQixNQUFNSSxVQUFVLFNBQW1CO1FBQWxCLEVBQUNDLFlBQVcsRUFBQzs7SUFDNUIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDLElBQUk7SUFDbkQsc0RBQXNEO0lBRXRELE1BQU1TLHlCQUF5QixJQUFNO1FBQ25DLHNDQUFzQztRQUN0Qyw4QkFBOEI7UUFDOUIsSUFBSTtRQUVKLE9BQU9ILGdCQUFnQkQsZUFBYTtJQUN0QztJQUNBSixnREFBU0EsQ0FBQyxJQUFLO0lBQ2IsdUVBQXVFO0lBQ3ZFLHVDQUF1QztJQUV6QztJQUNBLE1BQU1TLGFBQWEsSUFBTTtRQUN2QixNQUFNQyxhQUFhQyxNQUFNQyxXQUFXO1FBQ3BDQyxnQkFBZ0JKLFVBQVUsSUFBSUM7SUFDaEM7SUFDQSxNQUFNSSxjQUFjLElBQU07UUFDeEIsTUFBTUosYUFBYUMsTUFBTUMsV0FBVztRQUNwQ0MsZ0JBQWdCSixVQUFVLElBQUlDO0lBQ2hDO0lBRUEsTUFBTUssdUJBQXVCLENBQUNDLE9BQU9DLFFBQVU7UUFDN0NaLGdCQUFnQlk7UUFDaEIsa0JBQWtCO1FBQ2xCLE9BQU9WLGVBQWVTLE1BQU1FLE1BQU0sQ0FBQ0MsR0FBRztJQUN4QztJQUVBLE1BQU1DLGdCQUFnQixJQUFNO1FBQzFCLElBQUlDLGVBQWVDLGFBQWEsRUFBRTtRQUNsQ25CLFlBQVlvQixHQUFHLENBQUMsQ0FBQ0MsU0FBU1AsUUFBVTtZQUNsQyxJQUFHQSxVQUFVYixjQUFhO2dCQUN4QmlCLGdCQUFnQkc7WUFDbEIsQ0FBQztZQUNERixXQUFXRyxJQUFJLGVBQ2IsOERBQUNDO2dCQUFpQ0MsV0FBVyxhQUE4RCxPQUFqRFYsVUFBVWIsZUFBZSxxQkFBcUIsRUFBRTtnQkFBSXdCLFNBQVNaLENBQUFBLFFBQVNELHFCQUFxQkMsT0FBT0M7O2tDQUMxSiw4REFBQ1k7d0JBQUlWLEtBQUtLLFFBQVFNLEtBQUs7d0JBQUVDLEtBQUtQLFFBQVFRLElBQUk7Ozs7OztvQkFDekNmLFVBQVViLDhCQUFnQiw4REFBQ3NCO3dCQUFJQyxXQUFVO2tDQUFvQiw0RUFBQ007c0NBQUs7Ozs7Ozs7Ozs7OztlQUY1RCxtQkFBaUJoQjs7Ozs7UUFLL0I7UUFFQSxxQkFDRSw4REFBQ1M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQUlGLFdBQVU7NEJBQUdSLEtBQUtiLGNBQWNBLGNBQWNlLGNBQWNTLEtBQUs7Ozs7OztzQ0FDdEUsOERBQUNKOzRCQUFJQyxXQUFVO3NDQUFrQiw0RUFBQ007MENBQU1aLGNBQWNXLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUU1RCw4REFBQ047b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNaTDs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLWDtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDWTtZQUFRUCxXQUFVO3NCQUNqQiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDtrQ0FBSSw0RUFBQ1M7NEJBQUdDLE9BQU87Z0NBQUNDLFdBQVc7NEJBQVE7c0NBQUc7Ozs7Ozs7Ozs7O29CQUN0Q2xDLGVBQWVpQjs7Ozs7Ozs7Ozs7OztBQUsxQjtHQXZFTWxCO0tBQUFBO0FBeUVOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FsbGVyeS9pbmRleC5qcz9kMWE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBHYWxsZXJ5ID0gKHtnYWxsZXJ5RGF0YX0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYWN0aXZlSW1hZ2UsIHNldEFjdGl2ZUltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAvLyBjb25zdCBbYWN0aXZlSW5mbywgc2V0QWN0aXZlSW5mb10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBjYXJvdXNlbEluZmluaXRlU2Nyb2xsID0gKCkgPT4ge1xuICAgIC8vIGlmKGN1cnJlbnRJbmRleCA9PT0gZGF0YS5sZW5ndGgtMSl7XG4gICAgLy8gICByZXR1cm4gc2V0Q3VycmVudEluZGV4KDApXG4gICAgLy8gfVxuICAgIFxuICAgIHJldHVybiBzZXRDdXJyZW50SW5kZXgoY3VycmVudEluZGV4KzEpXG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+e1xuICAgIC8vIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge2Nhcm91c2VsSW5maW5pdGVTY3JvbGwoKX0sIDMwMDApXG4gICAgLy8gcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gICAgXG4gIH0pXG4gIGNvbnN0IHNjcm9sbExlZnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVXaWR0aCA9IHNsaWRlLmNsaWVudFdpZHRoO1xuICAgIHNsaWRlc0NvbnRhaW5lci5zY3JvbGxMZWZ0ICs9IHNsaWRlV2lkdGg7XG4gIH07XG4gIGNvbnN0IHNjcm9sbFJpZ2h0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNsaWRlV2lkdGggPSBzbGlkZS5jbGllbnRXaWR0aDtcbiAgICBzbGlkZXNDb250YWluZXIuc2Nyb2xsTGVmdCAtPSBzbGlkZVdpZHRoO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRodW1ibmFpbENsaWNrID0gKGV2ZW50LCBpbmRleCkgPT4ge1xuICAgIHNldEN1cnJlbnRJbmRleChpbmRleCk7XG4gICAgLy8gc2V0Q3VycmVudFRpdGxlXG4gICAgcmV0dXJuIHNldEFjdGl2ZUltYWdlKGV2ZW50LnRhcmdldC5zcmMpXG4gIH1cbiAgXG4gIGNvbnN0IGNyZWF0ZUdhbGxlcnkgPSAoKSA9PiB7XG4gICAgbGV0IGFjdGl2ZUdhbGxlcnksIHRodW1ibmFpbHMgPSBbXTtcbiAgICBnYWxsZXJ5RGF0YS5tYXAoKGdhbGxlcnksIGluZGV4KSA9PiB7XG4gICAgICBpZihpbmRleCA9PT0gY3VycmVudEluZGV4KXtcbiAgICAgICAgYWN0aXZlR2FsbGVyeSA9IGdhbGxlcnlcbiAgICAgIH1cbiAgICAgIHRodW1ibmFpbHMucHVzaChcbiAgICAgICAgPGRpdiBrZXk9eydnYWxsZXJ5X2ltYWdlXycraW5kZXh9IGNsYXNzTmFtZT17YHRodW1ibmFpbCAke2luZGV4ID09PSBjdXJyZW50SW5kZXggPyAnYWN0aXZlLXRodW1ibmFpbCcgOiAnJ31gfSBvbkNsaWNrPXtldmVudCA9PiBoYW5kbGVUaHVtYm5haWxDbGljayhldmVudCwgaW5kZXgpfT5cbiAgICAgICAgICA8aW1nIHNyYz17Z2FsbGVyeS5pbWFnZX0gYWx0PXtnYWxsZXJ5Lm5hbWV9IC8+XG4gICAgICAgICAge2luZGV4ID09PSBjdXJyZW50SW5kZXggJiYgPGRpdiBjbGFzc05hbWU9J3RodW1ibmFpbC1vdmVybGF5Jz48c3Bhbj5Ob3cgVmlld2luZzwvc3Bhbj48L2Rpdj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naW5uZXItY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FjdGl2ZS1pbWFnZSc+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9Jycgc3JjPXthY3RpdmVJbWFnZSA/IGFjdGl2ZUltYWdlIDogYWN0aXZlR2FsbGVyeS5pbWFnZX0vPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdnYWxsZXJ5LW92ZXJsYXknPjxzcGFuPnthY3RpdmVHYWxsZXJ5Lm5hbWV9PC9zcGFuPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RodW1ibmFpbC1jb250YWluZXInPiAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhbGxlcnktdGh1bWJuYWlscyc+XG4gICAgICAgICAgICB7dGh1bWJuYWlsc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4oXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZ2FsbGVyeS13cmFwcGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhbGxlcnktY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2PjxoMiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5QaG90b2dyYXBoeSBHYWxsZXJ5PC9oMj48L2Rpdj5cbiAgICAgICAgICB7Z2FsbGVyeURhdGEgJiYgY3JlYXRlR2FsbGVyeSgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIkdhbGxlcnkiLCJnYWxsZXJ5RGF0YSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImFjdGl2ZUltYWdlIiwic2V0QWN0aXZlSW1hZ2UiLCJjYXJvdXNlbEluZmluaXRlU2Nyb2xsIiwic2Nyb2xsTGVmdCIsInNsaWRlV2lkdGgiLCJzbGlkZSIsImNsaWVudFdpZHRoIiwic2xpZGVzQ29udGFpbmVyIiwic2Nyb2xsUmlnaHQiLCJoYW5kbGVUaHVtYm5haWxDbGljayIsImV2ZW50IiwiaW5kZXgiLCJ0YXJnZXQiLCJzcmMiLCJjcmVhdGVHYWxsZXJ5IiwiYWN0aXZlR2FsbGVyeSIsInRodW1ibmFpbHMiLCJtYXAiLCJnYWxsZXJ5IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpbWciLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJzcGFuIiwic2VjdGlvbiIsImgyIiwic3R5bGUiLCJ0ZXh0QWxpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Gallery/index.js\n"));

/***/ })

});