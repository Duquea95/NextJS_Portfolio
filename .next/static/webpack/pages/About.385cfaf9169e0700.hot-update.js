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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Gallery = (param)=>{\n    let { galleryData  } = param;\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [activeImage, setActiveImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const carouselInfiniteScroll = ()=>{\n        // if(currentIndex === data.length-1){\n        //   return setCurrentIndex(0)\n        // }\n        return setCurrentIndex(currentIndex + 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n    // const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)\n    // return () => clearInterval(interval)\n    });\n    const scrollLeft = ()=>{\n        const slideWidth = slide.clientWidth;\n        slidesContainer.scrollLeft += slideWidth;\n    };\n    const scrollRight = ()=>{\n        const slideWidth = slide.clientWidth;\n        slidesContainer.scrollLeft -= slideWidth;\n    };\n    const handleThumbnailClick = (event, index)=>{\n        console.log(event.currentTarget);\n        return setActiveImage(event.target.src);\n    };\n    const createGallery = ()=>{\n        let activeGallery, thumbnails = [];\n        galleryData.map((gallery, index)=>{\n            if (index === currentIndex) {\n                activeGallery = gallery;\n            }\n            thumbnails.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"thumbnail \".concat(index === currentIndex ? \"active-thumbnail\" : \"\"),\n                onClick: handleThumbnailClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: gallery.image,\n                    alt: gallery.name\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            }, \"gallery_image_\" + index, false, {\n                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                lineNumber: 40,\n                columnNumber: 23\n            }, undefined));\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"inner-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"active-image\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"\",\n                        src: activeImage ? activeImage : activeGallery.image\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"thumbnail-container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"gallery-thumbnails\",\n                        children: thumbnails\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"gallery-wrapper\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gallery-container\",\n                children: galleryData && createGallery()\n            }, void 0, false, {\n                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Gallery, \"7Gw33INb+PO0PQMryBga4xbBNds=\");\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbGxlcnkvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFnRDtBQUNqQjtBQUUvQixNQUFNSSxVQUFVLFNBQW1CO1FBQWxCLEVBQUNDLFlBQVcsRUFBQzs7SUFDNUIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDTyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDLElBQUk7SUFFbkQsTUFBTVMseUJBQXlCLElBQU07UUFDbkMsc0NBQXNDO1FBQ3RDLDhCQUE4QjtRQUM5QixJQUFJO1FBRUosT0FBT0gsZ0JBQWdCRCxlQUFhO0lBQ3RDO0lBQ0FKLGdEQUFTQSxDQUFDLElBQUs7SUFDYix1RUFBdUU7SUFDdkUsdUNBQXVDO0lBRXpDO0lBQ0EsTUFBTVMsYUFBYSxJQUFNO1FBQ3ZCLE1BQU1DLGFBQWFDLE1BQU1DLFdBQVc7UUFDcENDLGdCQUFnQkosVUFBVSxJQUFJQztJQUNoQztJQUNBLE1BQU1JLGNBQWMsSUFBTTtRQUN4QixNQUFNSixhQUFhQyxNQUFNQyxXQUFXO1FBQ3BDQyxnQkFBZ0JKLFVBQVUsSUFBSUM7SUFDaEM7SUFFQSxNQUFNSyx1QkFBdUIsQ0FBQ0MsT0FBT0MsUUFBVTtRQUM3Q0MsUUFBUUMsR0FBRyxDQUFDSCxNQUFNSSxhQUFhO1FBQy9CLE9BQU9iLGVBQWVTLE1BQU1LLE1BQU0sQ0FBQ0MsR0FBRztJQUN4QztJQUVBLE1BQU1DLGdCQUFnQixJQUFNO1FBQzFCLElBQUlDLGVBQWVDLGFBQWEsRUFBRTtRQUNsQ3RCLFlBQVl1QixHQUFHLENBQUMsQ0FBQ0MsU0FBU1YsUUFBVTtZQUNsQyxJQUFHQSxVQUFVYixjQUFhO2dCQUN4Qm9CLGdCQUFnQkc7WUFDbEIsQ0FBQztZQUNERixXQUFXRyxJQUFJLGVBQUMsOERBQUNDO2dCQUFpQ0MsV0FBVyxhQUE4RCxPQUFqRGIsVUFBVWIsZUFBZSxxQkFBcUIsRUFBRTtnQkFBSTJCLFNBQVNoQjswQkFDckksNEVBQUNpQjtvQkFBSVYsS0FBS0ssUUFBUU0sS0FBSztvQkFBRUMsS0FBS1AsUUFBUVEsSUFBSTs7Ozs7O2VBRGxCLG1CQUFpQmxCOzs7OztRQUc3QztRQUVBLHFCQUNFLDhEQUFDWTtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNFO3dCQUFJRixXQUFVO3dCQUFHUixLQUFLaEIsY0FBY0EsY0FBY2tCLGNBQWNTLEtBQUs7Ozs7Ozs7Ozs7OzhCQUV4RSw4REFBQ0o7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNaTDs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLWDtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDVztZQUFRTixXQUFVO3NCQUNqQiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1ozQixlQUFlb0I7Ozs7Ozs7Ozs7OztBQUsxQjtHQWhFTXJCO0tBQUFBO0FBa0VOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FsbGVyeS9pbmRleC5qcz9kMWE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBHYWxsZXJ5ID0gKHtnYWxsZXJ5RGF0YX0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYWN0aXZlSW1hZ2UsIHNldEFjdGl2ZUltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGNhcm91c2VsSW5maW5pdGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgLy8gaWYoY3VycmVudEluZGV4ID09PSBkYXRhLmxlbmd0aC0xKXtcbiAgICAvLyAgIHJldHVybiBzZXRDdXJyZW50SW5kZXgoMClcbiAgICAvLyB9XG4gICAgXG4gICAgcmV0dXJuIHNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXgrMSlcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT57XG4gICAgLy8gY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7Y2Fyb3VzZWxJbmZpbml0ZVNjcm9sbCgpfSwgMzAwMClcbiAgICAvLyByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICBcbiAgfSlcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9ICgpID0+IHtcbiAgICBjb25zdCBzbGlkZVdpZHRoID0gc2xpZGUuY2xpZW50V2lkdGg7XG4gICAgc2xpZGVzQ29udGFpbmVyLnNjcm9sbExlZnQgKz0gc2xpZGVXaWR0aDtcbiAgfTtcbiAgY29uc3Qgc2Nyb2xsUmlnaHQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVXaWR0aCA9IHNsaWRlLmNsaWVudFdpZHRoO1xuICAgIHNsaWRlc0NvbnRhaW5lci5zY3JvbGxMZWZ0IC09IHNsaWRlV2lkdGg7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVGh1bWJuYWlsQ2xpY2sgPSAoZXZlbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQuY3VycmVudFRhcmdldClcbiAgICByZXR1cm4gc2V0QWN0aXZlSW1hZ2UoZXZlbnQudGFyZ2V0LnNyYylcbiAgfVxuICBcbiAgY29uc3QgY3JlYXRlR2FsbGVyeSA9ICgpID0+IHtcbiAgICBsZXQgYWN0aXZlR2FsbGVyeSwgdGh1bWJuYWlscyA9IFtdO1xuICAgIGdhbGxlcnlEYXRhLm1hcCgoZ2FsbGVyeSwgaW5kZXgpID0+IHtcbiAgICAgIGlmKGluZGV4ID09PSBjdXJyZW50SW5kZXgpe1xuICAgICAgICBhY3RpdmVHYWxsZXJ5ID0gZ2FsbGVyeVxuICAgICAgfVxuICAgICAgdGh1bWJuYWlscy5wdXNoKDxkaXYga2V5PXsnZ2FsbGVyeV9pbWFnZV8nK2luZGV4fSBjbGFzc05hbWU9e2B0aHVtYm5haWwgJHtpbmRleCA9PT0gY3VycmVudEluZGV4ID8gJ2FjdGl2ZS10aHVtYm5haWwnIDogJyd9YH0gb25DbGljaz17aGFuZGxlVGh1bWJuYWlsQ2xpY2t9PlxuICAgICAgICA8aW1nIHNyYz17Z2FsbGVyeS5pbWFnZX0gYWx0PXtnYWxsZXJ5Lm5hbWV9IC8+XG4gICAgICA8L2Rpdj4pXG4gICAgfSlcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbm5lci1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWN0aXZlLWltYWdlJz5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nJyBzcmM9e2FjdGl2ZUltYWdlID8gYWN0aXZlSW1hZ2UgOiBhY3RpdmVHYWxsZXJ5LmltYWdlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGh1bWJuYWlsLWNvbnRhaW5lcic+ICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2FsbGVyeS10aHVtYm5haWxzJz5cbiAgICAgICAgICAgIHt0aHVtYm5haWxzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybihcbiAgICA8PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdnYWxsZXJ5LXdyYXBwZXInPiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2FsbGVyeS1jb250YWluZXInPlxuICAgICAgICAgIHtnYWxsZXJ5RGF0YSAmJiBjcmVhdGVHYWxsZXJ5KCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnkiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiR2FsbGVyeSIsImdhbGxlcnlEYXRhIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiYWN0aXZlSW1hZ2UiLCJzZXRBY3RpdmVJbWFnZSIsImNhcm91c2VsSW5maW5pdGVTY3JvbGwiLCJzY3JvbGxMZWZ0Iiwic2xpZGVXaWR0aCIsInNsaWRlIiwiY2xpZW50V2lkdGgiLCJzbGlkZXNDb250YWluZXIiLCJzY3JvbGxSaWdodCIsImhhbmRsZVRodW1ibmFpbENsaWNrIiwiZXZlbnQiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwidGFyZ2V0Iiwic3JjIiwiY3JlYXRlR2FsbGVyeSIsImFjdGl2ZUdhbGxlcnkiLCJ0aHVtYm5haWxzIiwibWFwIiwiZ2FsbGVyeSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaW1nIiwiaW1hZ2UiLCJhbHQiLCJuYW1lIiwic2VjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Gallery/index.js\n"));

/***/ })

});