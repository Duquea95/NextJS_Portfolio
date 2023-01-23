"use strict";
(() => {
var exports = {};
exports.id = 78;
exports.ids = [78];
exports.modules = {

/***/ 6583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Copy = (prop)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "section-head",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                prop.title != null && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: prop.title
                }),
                prop.sub != null && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    children: prop.sub
                }),
                prop?.copy && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: prop.copy
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Copy);


/***/ }),

/***/ 8074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ expertise)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/layout.js + 3 modules
var layout = __webpack_require__(24);
// EXTERNAL MODULE: ./public/images/expertise/oscar-stone.png
var oscar_stone = __webpack_require__(5114);
// EXTERNAL MODULE: ./public/images/expertise/jonathan-adler.jpeg
var jonathan_adler = __webpack_require__(319);
// EXTERNAL MODULE: ./public/images/expertise/dada.png
var dada = __webpack_require__(5829);
// EXTERNAL MODULE: ./components/blocks/Copy/index.js
var Copy = __webpack_require__(6583);
;// CONCATENATED MODULE: ./components/HeroList/index.js


// import { useNavigate } from 'react-router-dom'




const HeroList = (prop)=>{
    const listRef = (0,external_react_.useRef)();
    const [activeIndex, setActiveIndex] = (0,external_react_.useState)(prop.activeIndex || 0);
    const mouseEnter = (event)=>{
        setActiveIndex(event.target.parentElement.dataset.index || activeIndex);
        listRef.current.focus({
            preventScroll: true
        });
    };
    const mouseLeave = ()=>{
        listRef.current.blur();
        console.log(activeIndex);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "section-hero-list",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "hero-list",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Copy/* default */.Z, {
                    title: "Expertise.",
                    sub: "My skillset is built for success.",
                    copy: "I can provide digital solutions to solve any problem a client might have."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "section-body",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "nav-full",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: listData.map((item, index)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        ref: listRef,
                                        "data-index": index,
                                        className: index == activeIndex ? "hover" : "",
                                        onMouseEnter: mouseEnter,
                                        onMouseLeave: mouseLeave,
                                        tabIndex: 0,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "nav-image",
                                                style: {
                                                    backgroundImage: `url(${item.linkImage})`
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "nav-body",
                                                style: {
                                                    minHeight: "440px"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: item.title
                                                            }),
                                                            index < 2 && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "\xa0"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                children: item.list.map((listItem, index)=>{
                                                                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                            children: listItem
                                                                        })
                                                                    }, `heroList_list__${index}`);
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                href: false,
                                                                onClick: ()=>{
                                                                    navigate("/work");
                                                                },
                                                                className: "bottom-link",
                                                                children: [
                                                                    "Case Study: ",
                                                                    item.name
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    }, `heroList_component__${index}`);
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_HeroList = (HeroList);
const listData = [
    {
        title: "Creative",
        linkImage: oscar_stone/* default.src */.Z.src,
        linkName: "/oscar-stone",
        name: "Oscar Stone",
        list: [
            "UI/UX DESIGN",
            "BRAND, CONTENT + SOCIAL STRATEGY",
            "BRAND DEVELOPMENT",
            "USABILITY RESEARCH AND TESTING",
            "INTEGRATED CAMPAIGNS",
            "VISUAL DESIGN"
        ]
    },
    {
        title: "Production",
        linkImage: jonathan_adler/* default.src */.Z.src,
        linkName: "/jonathan-adler",
        name: "Jonathan Adler",
        list: [
            "STILL AND PHOTO SHOOT PRODUCTION",
            "COPYWRITING",
            "CREATIVE RETOUCHING",
            "DIGITAL ADVERTISING"
        ]
    },
    {
        title: "Technology",
        linkImage: dada/* default.src */.Z.src,
        linkName: "/dada-daily",
        name: "Dada Daily",
        list: [
            "WEB-BASED WORKFLOWS + ASSET MANAGEMENT",
            "FULL STACK ENGINEERING",
            "ECOMMERCE",
            "SITE INFRASTRUCTURE PLANNING/DEVOPS",
            "MOBILE APPLICATION DEVELOPMENT",
            "CONTENT MANAGEMENT"
        ]
    }
];

;// CONCATENATED MODULE: ./pages/expertise/index.js




const Work = (prop)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                class: "section-white-header active"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_HeroList, {})
        ]
    });
};
/* harmony default export */ const expertise = (Work);
Work.getLayout = function getLayout(page) {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        children: page
    });
};


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,24,137], () => (__webpack_exec__(8074)));
module.exports = __webpack_exports__;

})();