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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n// import useKeypress from '../hooks/useKeypress';\n\nconst Gallery = (param)=>{\n    let { galleryData  } = param;\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [activeImage, setActiveImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const prevImage = useKeyPress();\n    const nextImage = useKeyPress();\n    const carouselInfiniteScroll = ()=>{\n        // if(currentIndex === data.length-1){\n        //   return setCurrentIndex(0)\n        // }\n        return setCurrentIndex(currentIndex + 1);\n    };\n    const scrollLeft = ()=>{\n        const slideWidth = slide.clientWidth;\n        slidesContainer.scrollLeft += slideWidth;\n    };\n    const scrollRight = ()=>{\n        const slideWidth = slide.clientWidth;\n        slidesContainer.scrollLeft -= slideWidth;\n    };\n    const handleThumbnailClick = (event, index)=>{\n        setCurrentIndex(index);\n        // setCurrentTitle\n        return setActiveImage(event.target.src);\n    };\n    const createGallery = ()=>{\n        let activeGallery, thumbnails = [];\n        galleryData.map((gallery, index)=>{\n            if (index === currentIndex) {\n                activeGallery = gallery;\n            }\n            thumbnails.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"thumbnail \".concat(index === currentIndex ? \"active-thumbnail\" : \"\"),\n                onClick: (event)=>handleThumbnailClick(event, index),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: gallery.image,\n                        alt: gallery.name\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined),\n                    index === currentIndex && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"thumbnail-overlay\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Now Viewing\"\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                            lineNumber: 43,\n                            columnNumber: 73\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 38\n                    }, undefined)\n                ]\n            }, \"gallery_image_\" + index, true, {\n                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined));\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"inner-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"active-image\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"\",\n                            src: activeImage ? activeImage : activeGallery.image\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"gallery-overlay\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: activeGallery.name\n                            }, void 0, false, {\n                                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                                lineNumber: 52,\n                                columnNumber: 44\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"thumbnail-container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"gallery-thumbnails\",\n                        children: thumbnails\n                    }, void 0, false, {\n                        fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"gallery-wrapper\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gallery-container\",\n                children: galleryData && createGallery()\n            }, void 0, false, {\n                fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/anthony/Documents/MyPortfolio/components/Gallery/index.js\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Gallery, \"4sKv7d4iR6ZuY+ill23eZrobJl4=\", false, function() {\n    return [\n        useKeyPress,\n        useKeyPress\n    ];\n});\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nconst useKeyPress = (targetKey)=>{\n    _s1();\n    // State for keeping track of whether key is pressed\n    const [keyPressed, setKeyPressed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // If pressed key is our target key then set to true\n    function downHandler(param) {\n        let { key  } = param;\n        if (key === targetKey) {\n            setKeyPressed(true);\n        }\n    }\n    // If released key is our target key then set to false\n    const upHandler = (param)=>{\n        let { key  } = param;\n        if (key === targetKey) {\n            setKeyPressed(false);\n        }\n    };\n    console.log(targetKey);\n    // Add event listeners\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"keydown\", downHandler);\n        window.addEventListener(\"keyup\", upHandler);\n        // Remove event listeners on cleanup\n        return ()=>{\n            window.removeEventListener(\"keydown\", downHandler);\n            window.removeEventListener(\"keyup\", upHandler);\n        };\n    }, []); // Empty array ensures that effect is only run on mount and unmount\n    return keyPressed;\n};\n_s1(useKeyPress, \"vmDSD7h68k9Z7B48/eX82jyokKU=\");\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNyQkUsY0FBYyxLQUFLO1FBQ3JCLENBQUM7SUFDSDtJQUVBSSxRQUFRQyxHQUFHLENBQUNQO0lBQ1osc0JBQXNCO0lBQ3RCdEMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkOEMsT0FBT0MsZ0JBQWdCLENBQUMsV0FBV047UUFDbkNLLE9BQU9DLGdCQUFnQixDQUFDLFNBQVNKO1FBQ2pDLG9DQUFvQztRQUNwQyxPQUFPLElBQU07WUFDWEcsT0FBT0UsbUJBQW1CLENBQUMsV0FBV1A7WUFDdENLLE9BQU9FLG1CQUFtQixDQUFDLFNBQVNMO1FBQ3RDO0lBQ0YsR0FBRyxFQUFFLEdBQUcsbUVBQW1FO0lBQzNFLE9BQU9KO0FBQ1Q7SUE1Qk05QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dhbGxlcnkvaW5kZXguanM/ZDFhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB1c2VLZXlwcmVzcyBmcm9tICcuLi9ob29rcy91c2VLZXlwcmVzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNvbnN0IEdhbGxlcnkgPSAoe2dhbGxlcnlEYXRhfSkgPT4ge1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFthY3RpdmVJbWFnZSwgc2V0QWN0aXZlSW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgcHJldkltYWdlID0gdXNlS2V5UHJlc3MoKTtcbiAgY29uc3QgbmV4dEltYWdlID0gdXNlS2V5UHJlc3MoKTtcblxuICBjb25zdCBjYXJvdXNlbEluZmluaXRlU2Nyb2xsID0gKCkgPT4ge1xuICAgIC8vIGlmKGN1cnJlbnRJbmRleCA9PT0gZGF0YS5sZW5ndGgtMSl7XG4gICAgLy8gICByZXR1cm4gc2V0Q3VycmVudEluZGV4KDApXG4gICAgLy8gfVxuICAgIFxuICAgIHJldHVybiBzZXRDdXJyZW50SW5kZXgoY3VycmVudEluZGV4KzEpXG4gIH1cbiAgY29uc3Qgc2Nyb2xsTGVmdCA9ICgpID0+IHtcbiAgICBjb25zdCBzbGlkZVdpZHRoID0gc2xpZGUuY2xpZW50V2lkdGg7XG4gICAgc2xpZGVzQ29udGFpbmVyLnNjcm9sbExlZnQgKz0gc2xpZGVXaWR0aDtcbiAgfTtcbiAgY29uc3Qgc2Nyb2xsUmlnaHQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2xpZGVXaWR0aCA9IHNsaWRlLmNsaWVudFdpZHRoO1xuICAgIHNsaWRlc0NvbnRhaW5lci5zY3JvbGxMZWZ0IC09IHNsaWRlV2lkdGg7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVGh1bWJuYWlsQ2xpY2sgPSAoZXZlbnQsIGluZGV4KSA9PiB7XG4gICAgc2V0Q3VycmVudEluZGV4KGluZGV4KTtcbiAgICAvLyBzZXRDdXJyZW50VGl0bGVcbiAgICByZXR1cm4gc2V0QWN0aXZlSW1hZ2UoZXZlbnQudGFyZ2V0LnNyYylcbiAgfVxuICBcbiAgY29uc3QgY3JlYXRlR2FsbGVyeSA9ICgpID0+IHtcbiAgICBsZXQgYWN0aXZlR2FsbGVyeSwgdGh1bWJuYWlscyA9IFtdO1xuICAgIGdhbGxlcnlEYXRhLm1hcCgoZ2FsbGVyeSwgaW5kZXgpID0+IHtcbiAgICAgIGlmKGluZGV4ID09PSBjdXJyZW50SW5kZXgpe1xuICAgICAgICBhY3RpdmVHYWxsZXJ5ID0gZ2FsbGVyeVxuICAgICAgfVxuICAgICAgdGh1bWJuYWlscy5wdXNoKFxuICAgICAgICA8ZGl2IGtleT17J2dhbGxlcnlfaW1hZ2VfJytpbmRleH0gY2xhc3NOYW1lPXtgdGh1bWJuYWlsICR7aW5kZXggPT09IGN1cnJlbnRJbmRleCA/ICdhY3RpdmUtdGh1bWJuYWlsJyA6ICcnfWB9IG9uQ2xpY2s9e2V2ZW50ID0+IGhhbmRsZVRodW1ibmFpbENsaWNrKGV2ZW50LCBpbmRleCl9PlxuICAgICAgICAgIDxpbWcgc3JjPXtnYWxsZXJ5LmltYWdlfSBhbHQ9e2dhbGxlcnkubmFtZX0gLz5cbiAgICAgICAgICB7aW5kZXggPT09IGN1cnJlbnRJbmRleCAmJiA8ZGl2IGNsYXNzTmFtZT0ndGh1bWJuYWlsLW92ZXJsYXknPjxzcGFuPk5vdyBWaWV3aW5nPC9zcGFuPjwvZGl2Pn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSlcblxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbm5lci1jb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWN0aXZlLWltYWdlJz5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nJyBzcmM9e2FjdGl2ZUltYWdlID8gYWN0aXZlSW1hZ2UgOiBhY3RpdmVHYWxsZXJ5LmltYWdlfS8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dhbGxlcnktb3ZlcmxheSc+PHNwYW4+e2FjdGl2ZUdhbGxlcnkubmFtZX08L3NwYW4+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGh1bWJuYWlsLWNvbnRhaW5lcic+ICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2FsbGVyeS10aHVtYm5haWxzJz5cbiAgICAgICAgICAgIHt0aHVtYm5haWxzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybihcbiAgICA8PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdnYWxsZXJ5LXdyYXBwZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ2FsbGVyeS1jb250YWluZXInPlxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nZ2FsbGVyeS10aXRsZSc+PGgxIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319Pk15IFBob3RvZ3JhcGh5PC9oMT48L2Rpdj4gKi99XG4gICAgICAgICAge2dhbGxlcnlEYXRhICYmIGNyZWF0ZUdhbGxlcnkoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeVxuXG5jb25zdCB1c2VLZXlQcmVzcyA9ICh0YXJnZXRLZXkpID0+IHtcbiAgLy8gU3RhdGUgZm9yIGtlZXBpbmcgdHJhY2sgb2Ygd2hldGhlciBrZXkgaXMgcHJlc3NlZFxuICBjb25zdCBba2V5UHJlc3NlZCwgc2V0S2V5UHJlc3NlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIElmIHByZXNzZWQga2V5IGlzIG91ciB0YXJnZXQga2V5IHRoZW4gc2V0IHRvIHRydWVcbiAgZnVuY3Rpb24gZG93bkhhbmRsZXIoeyBrZXkgfSkge1xuICAgIGlmIChrZXkgPT09IHRhcmdldEtleSkge1xuICAgICAgc2V0S2V5UHJlc3NlZCh0cnVlKTtcbiAgICB9XG4gIH1cbiAgLy8gSWYgcmVsZWFzZWQga2V5IGlzIG91ciB0YXJnZXQga2V5IHRoZW4gc2V0IHRvIGZhbHNlXG4gIGNvbnN0IHVwSGFuZGxlciA9ICh7IGtleSB9KSA9PiB7XG4gICAgaWYgKGtleSA9PT0gdGFyZ2V0S2V5KSB7XG4gICAgICBzZXRLZXlQcmVzc2VkKGZhbHNlKTtcbiAgICB9XG4gIH07XG4gIFxuICBjb25zb2xlLmxvZyh0YXJnZXRLZXkpXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZG93bkhhbmRsZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdXBIYW5kbGVyKTtcbiAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzIG9uIGNsZWFudXBcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGRvd25IYW5kbGVyKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdXBIYW5kbGVyKTtcbiAgICB9O1xuICB9LCBbXSk7IC8vIEVtcHR5IGFycmF5IGVuc3VyZXMgdGhhdCBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnQgYW5kIHVubW91bnRcbiAgcmV0dXJuIGtleVByZXNzZWQ7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIkdhbGxlcnkiLCJnYWxsZXJ5RGF0YSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImFjdGl2ZUltYWdlIiwic2V0QWN0aXZlSW1hZ2UiLCJwcmV2SW1hZ2UiLCJ1c2VLZXlQcmVzcyIsIm5leHRJbWFnZSIsImNhcm91c2VsSW5maW5pdGVTY3JvbGwiLCJzY3JvbGxMZWZ0Iiwic2xpZGVXaWR0aCIsInNsaWRlIiwiY2xpZW50V2lkdGgiLCJzbGlkZXNDb250YWluZXIiLCJzY3JvbGxSaWdodCIsImhhbmRsZVRodW1ibmFpbENsaWNrIiwiZXZlbnQiLCJpbmRleCIsInRhcmdldCIsInNyYyIsImNyZWF0ZUdhbGxlcnkiLCJhY3RpdmVHYWxsZXJ5IiwidGh1bWJuYWlscyIsIm1hcCIsImdhbGxlcnkiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImltZyIsImltYWdlIiwiYWx0IiwibmFtZSIsInNwYW4iLCJzZWN0aW9uIiwidGFyZ2V0S2V5Iiwia2V5UHJlc3NlZCIsInNldEtleVByZXNzZWQiLCJkb3duSGFuZGxlciIsImtleSIsInVwSGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Gallery/index.js\n"));

/***/ })

});