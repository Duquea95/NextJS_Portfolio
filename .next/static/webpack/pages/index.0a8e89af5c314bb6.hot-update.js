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

/***/ "./pages/globalStyles.js":
/*!*******************************!*\
  !*** ./pages/globalStyles.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar fontUrl = 'https://fonts.googleapis.com/css2?family=Raleway+&display=swap';\nvar GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)([\"@import url(\", \");*{margin:0;padding:0;font-family:Raleway,sans-serif;margin-block-start:0;margin-block-end:0;text-decoration:none;}.inherit{height:inherit;}main{background:#F9F9F9;}.title-slider{opacity:1;transform:translate3d(0px,0px,0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg);position:relative;overflow:hidden;width:100%;max-height:5em;}.navigation{width:100%;height:5px;display:flex;max-height:12rem;justify-content:space-between;align-items:center;font-size:1rem;height:11.2em;position:fixed;padding-left:6em;z-index:1000;padding-right:6em;}.navigation ul{flex-wrap:wrap;float:right;margin:20px 0;padding:0 25px;}.navigation ul li{list-style-type:none;padding-right:10px;}.banner h1{color:#F9F9F9;font-size:5em;}.main-lg{font-size:5em;text-transform:uppercase;line-height:100%;}.column-items,.__cards,.__copyImage,.__copy{height:inherit;}.col-card{padding:7em 5em;}.__cards h1,.__cards a,.section-mailer h1,form input,form input:focus,.mainColor{color:#77A68B;}.__cards h1,.section-mailer h1{font-size:48px;margin-bottom:0.5em;line-height:1.05em;}.__cards p,.section-mailer p,form input::placeholder,form label,.footer-section a:hover{color:#40594B;}.__cards p{font-size:1.45em;letter-spacing:0.05em;font-weight:lighter;margin-bottom:1em;}form{width:60%;min-width:500px;margin:4em auto;}form label{display:block;opacity:.8;}form input{border:none;background:inherit;margin:0;border-bottom:1px solid #40594B;width:100%;padding:15px 0;font-size:1em;}form input::placeholder{transition:opacity .5s linear;}form input:focus{outline:none;}form input:focus::placeholder{opacity:0;}form .row{padding-right:0.3em;padding-left:0;width:45%;}form div:first-child{justify-content:space-between;}form .justify-center:nth-child(2) .row{width:100%;}form .row:last-child{padding:0;}form .justify-center:nth-child(2){margin:3em auto;}form .justify-center,.column-items .col-card{justify-content:center;}form .justify-center:first-child{padding-top:35px;}.footer-section{display:flex;align-items:center;width:100%;background:#77A68B;}.footer-section li,.footer-section a{color:rgb(249,249,249);}.footer-section a:hover{border-bottom:1px solid black;}.footer-menu li{margin-bottom:20px;}\"], fontUrl);\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nbG9iYWxTdHlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBLElBQU1DLE9BQU8sR0FBRyxnRUFBaEI7QUFFQSxJQUFNQyxXQUFXLEdBQUdGLG9FQUFILHVxRUFDREMsT0FEQyxDQUFqQjtBQXdKQSwrREFBZUMsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nbG9iYWxTdHlsZXMuanM/MTA5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbiBcbmNvbnN0IGZvbnRVcmwgPSAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5KyZkaXNwbGF5PXN3YXAnO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICBAaW1wb3J0IHVybCgke2ZvbnRVcmx9KTtcbiAgXG4gICp7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LCBzYW5zLXNlcmlmO21hcmdpbi1ibG9jay1zdGFydDogMDttYXJnaW4tYmxvY2stZW5kOiAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAuaW5oZXJpdHtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gIH1cbiAgbWFpbntcbiAgICBiYWNrZ3JvdW5kOiNGOUY5Rjk7XG4gIH1cbiAgLnRpdGxlLXNsaWRlcntcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCkgc2NhbGUzZCgxLCAxLCAxKSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKSBza2V3KDBkZWcsIDBkZWcpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDVlbTtcbiAgfVxuICAubmF2aWdhdGlvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC1oZWlnaHQ6IDEycmVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgXG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGhlaWdodDogMTEuMmVtO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDZlbTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDZlbTtcbiAgfVxuICAubmF2aWdhdGlvbiB1bHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgfVxuICAubmF2aWdhdGlvbiB1bCBsaXtcbiAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5iYW5uZXIgaDF7XG4gICAgY29sb3I6ICNGOUY5Rjk7XG4gICAgZm9udC1zaXplOiA1ZW07XG4gIH1cbiAgLm1haW4tbGd7XG4gICAgZm9udC1zaXplOiA1ZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jb2x1bW4taXRlbXMsLl9fY2FyZHMsIC5fX2NvcHlJbWFnZSwgLl9fY29weXtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gIH1cbiAgLmNvbC1jYXJke1xuICAgIHBhZGRpbmc6IDdlbSA1ZW07XG4gIH1cbiAgLl9fY2FyZHMgaDEsIC5fX2NhcmRzIGEsIC5zZWN0aW9uLW1haWxlciBoMSxmb3JtIGlucHV0LCBmb3JtIGlucHV0OmZvY3VzLCAubWFpbkNvbG9ye1xuICAgIGNvbG9yOiAjNzdBNjhCO1xuICB9XG4gIC5fX2NhcmRzIGgxLCAuc2VjdGlvbi1tYWlsZXIgaDF7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjA1ZW07XG4gIH1cbiAgLl9fY2FyZHMgcCwgLnNlY3Rpb24tbWFpbGVyIHAsZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsIGZvcm0gbGFiZWwsIC5mb290ZXItc2VjdGlvbiBhOmhvdmVye1xuICAgIGNvbG9yOiAjNDA1OTRCO1xuICB9XG4gIC5fX2NhcmRzIHB7XG4gICAgZm9udC1zaXplOiAxLjQ1ZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cblxuICAvLyBNYWlsZXIgRm9ybSBTdHlsaW5nXG4gIGZvcm17XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogNGVtIGF1dG87XG4gIH1cbiAgXG4gIGZvcm0gbGFiZWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogLjg7XG4gIH1cbiAgZm9ybSBpbnB1dHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0MDU5NEI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVye1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGxpbmVhcjtcbiAgfVxuICBmb3JtIGlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgZm9ybSBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXJ7XG4gICAgb3BhY2l0eTowO1xuICB9XG4gIGZvcm0gLnJvd3tcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjNlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxuICBmb3JtIGRpdjpmaXJzdC1jaGlsZHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgZm9ybSAuanVzdGlmeS1jZW50ZXI6bnRoLWNoaWxkKDIpIC5yb3d7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgZm9ybSAucm93Omxhc3QtY2hpbGR7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBmb3JtIC5qdXN0aWZ5LWNlbnRlcjpudGgtY2hpbGQoMil7XG4gICAgbWFyZ2luOiAzZW0gYXV0bztcbiAgfVxuICBmb3JtIC5qdXN0aWZ5LWNlbnRlciwgLmNvbHVtbi1pdGVtcyAuY29sLWNhcmR7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgZm9ybSAuanVzdGlmeS1jZW50ZXI6Zmlyc3QtY2hpbGR7XG4gICAgcGFkZGluZy10b3A6IDM1cHg7XG4gIH1cblxuICAvLyBGb290ZXIgU3R5bGluZ1xuICAuZm9vdGVyLXNlY3Rpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICM3N0E2OEI7XG4gIH1cbiAgLmZvb3Rlci1zZWN0aW9uIGxpLCAuZm9vdGVyLXNlY3Rpb24gYXtcbiAgICBjb2xvcjogcmdiKDI0OSwyNDksMjQ5KTtcbiAgfVxuICAuZm9vdGVyLXNlY3Rpb24gYTpob3ZlcntcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIH1cbiAgLmZvb3Rlci1tZW51IGxpe1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbmA7XG4gXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZTsiXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJmb250VXJsIiwiR2xvYmFsU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/globalStyles.js\n"));

/***/ })

});