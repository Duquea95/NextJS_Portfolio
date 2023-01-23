"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./public/images/about/workspace.jpeg
var workspace = __webpack_require__(7715);
// EXTERNAL MODULE: ./public/images/expertise/oscar-stone.png
var oscar_stone = __webpack_require__(5114);
// EXTERNAL MODULE: ./public/images/expertise/jonathan-adler.jpeg
var jonathan_adler = __webpack_require__(319);
// EXTERNAL MODULE: ./public/images/expertise/dada.png
var dada = __webpack_require__(5829);
;// CONCATENATED MODULE: ./components/Hero/index.js







const heroData = {
    linkOne: "/work",
    linkOneCopy: "We are makers",
    textCopyOne: " who mean business. We partner directly with clients, solving",
    linkTwo: "/experise",
    linkTwoCopy: "creative",
    linkTwo: "/expertise",
    linkCopyTwo: "production",
    linkThree: "/expertise",
    linkCopyThree: " challenges to help brands work better."
};
const Hero = (prop)=>{
    const [enableImage, setEnableImage] = (0,external_react_.useState)(false);
    const [heroImage, setHeroImage] = (0,external_react_.useState)(undefined);
    const [activeButton, setActiveButton] = (0,external_react_.useState)(null);
    const router = (0,router_.useRouter)();
    const handleMouseOut = (event)=>{
        return setActiveButton(event.target.parentElement.getAttribute("data-index")), setActiveButton(null), setEnableImage(false);
    };
    const handleMouseOver = (event)=>{
        return setActiveButton(event.target.parentElement.getAttribute("data-index")), setHeroImage(event.target.parentElement.getAttribute("data-src")), setEnableImage(true);
    };
    const handleClick = (event)=>{
        if (event.target.parentElement.getAttribute("data-href") === "/work") {
            router.push(event.target.parentElement.getAttribute("data-href"));
        } else {
            router.push(event.target.parentElement.getAttribute("data-href"));
            router.push({
                pathname: event.target.parentElement.getAttribute("data-href"),
                query: event.target.parentElement.getAttribute("data-index")
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "section-hero homepage-hero",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "homepage-hero__copy",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `homepage-hero__copy-holder homepage-hero__copy-holder__on`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: `hero-copy-btn copy-btn hero-copy-btn--on ${enableImage == true ? " inactive" : ""} ${activeButton == 4 ? " active" : ""}`,
                                "data-href": "/work",
                                "data-index": 4,
                                "data-src": workspace/* default.src */.Z.src,
                                onClick: handleClick,
                                onMouseOver: handleMouseOver,
                                onMouseOut: handleMouseOut,
                                children: [
                                    "I'm a developer",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "hero-copy-btn__underline",
                                        children: "\xa0"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `copy-btn${enableImage ? " inactive" : ""}`,
                                children: " who means business. I partner directly with clients to solve "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: `hero-copy-btn copy-btn hero-copy-btn--on ${enableImage == true ? " inactive" : ""} ${activeButton == 0 ? " active" : ""}`,
                                "data-href": "/expertise",
                                "data-index": 0,
                                "data-src": oscar_stone/* default.src */.Z.src,
                                onMouseOver: handleMouseOver,
                                onMouseOut: handleMouseOut,
                                onClick: handleClick,
                                children: [
                                    "creative",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "hero-copy-btn__underline",
                                        children: "\xa0"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `copy-btn${enableImage ? " inactive" : ""}`,
                                children: ", "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: `hero-copy-btn copy-btn hero-copy-btn--on ${enableImage == true ? " inactive" : ""} ${activeButton == 1 ? " active" : ""}`,
                                "data-href": "/expertise",
                                "data-index": 1,
                                "data-src": jonathan_adler/* default.src */.Z.src,
                                onMouseOver: handleMouseOver,
                                onMouseOut: handleMouseOut,
                                onClick: handleClick,
                                children: [
                                    "production",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "hero-copy-btn__underline",
                                        children: "\xa0"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `copy-btn${enableImage ? " inactive" : ""}`,
                                children: ", and "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: `hero-copy-btn copy-btn hero-copy-btn--on ${enableImage == true ? " inactive" : ""} ${activeButton == 2 ? " active" : ""}`,
                                "data-href": "/expertise",
                                "data-index": 2,
                                "data-src": dada/* default.src */.Z.src,
                                onMouseOver: handleMouseOver,
                                onMouseOut: handleMouseOut,
                                onClick: handleClick,
                                children: [
                                    "technological",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "hero-copy-btn__underline",
                                        children: "\xa0"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `copy-btn${enableImage ? " inactive" : ""}`,
                                children: " challenges to help brands work better."
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "homepage-hero__images",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `homepage-hero__image${enableImage ? " homepage-hero__image--on" : ""}`,
                        style: {
                            backgroundImage: `url(${heroImage})`
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `homepage-hero__cover${enableImage ? "" : " homepage-hero__cover--on"}`
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Hero = (Hero);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./public/images/our-work/oscar-stone.jpeg
var our_work_oscar_stone = __webpack_require__(3049);
// EXTERNAL MODULE: ./public/images/our-work/jonathan-adler.jpeg
var our_work_jonathan_adler = __webpack_require__(6384);
// EXTERNAL MODULE: ./public/images/our-work/bmcc_marketing.jpeg
var bmcc_marketing = __webpack_require__(3425);
// EXTERNAL MODULE: ./public/images/our-work/coco-and-breezy.jpeg
var coco_and_breezy = __webpack_require__(9267);
// EXTERNAL MODULE: ./public/images/our-work/dada-daily.jpeg
var dada_daily = __webpack_require__(8770);
;// CONCATENATED MODULE: ./components/List/index.js


// import { useNavigate} from "react-router-dom"






const List = ()=>{
    let head = {
        title: "Great ideas, delivered right.",
        description: "Creating digital products for consumer use has led to a confidence that drives consistent improvements to my skillset.",
        tags: null
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "section-list",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "section-container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "list",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "list-item list-item__head",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: head.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: head.description
                                    })
                                ]
                            }),
                            listData.map((item, index)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "list-item",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: `/work`
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "list-item__image",
                                                style: {
                                                    backgroundImage: `url(${item.src})`
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    width: "1024",
                                                    height: "953",
                                                    src: item.src,
                                                    className: "attachment-large size-large",
                                                    alt: "Marketing image of " + item.title
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "article-body",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: item.description
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        children: item.tags
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, `list-item__${item.title}`);
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "list-item list-articles-actions active",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/work",
                                    className: "btn-circle",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "btn-body",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "btn-body-holder",
                                            children: [
                                                "See",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                "More Work"
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const components_List = (List);
const listData = [
    {
        title: "Oscar Stone",
        slug: "oscar-stone",
        description: "King of diamond jewelry.",
        tags: "Front-end Development, E-commerce Design, Marketing, Photography",
        src: "https://live.staticflickr.com/65535/52630694325_d6f208e2df_c.jpg"
    },
    {
        title: "Jonathan Adler",
        slug: "jonathan-adler",
        description: "A fabulous lifestyle.",
        tags: "Full-stack Development, Marketing, Graphic Design",
        src: our_work_jonathan_adler/* default.src */.Z.src
    },
    {
        title: "BMCC",
        slug: "bmcc",
        description: "Building futures today.",
        tags: "Front-end Development",
        src: bmcc_marketing/* default.src */.Z.src
    },
    {
        title: "Dada Daily",
        slug: "dada-daily",
        description: "A healhtier way to snack.",
        tags: "Front-end Development, E-commerce Design",
        src: dada_daily/* default.src */.Z.src
    }
];

// EXTERNAL MODULE: ./components/Badges/index.js + 11 modules
var Badges = __webpack_require__(3338);
;// CONCATENATED MODULE: ./pages/index.js





const HomePage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Anthony Duque | Front-End Engineer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "I am a front-end engineer with a focus on progressive enhancement, design systems & UI Engineering."
                    }, "description"),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "Web Developer, Front End Engineer, Web Development, Javascript, React JS, Git, HTML, CSS, Node JS."
                    }, "keywords"),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "Anthony Duque"
                    }, "author"),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Hero, {
                        heroType: "jumboText"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_List, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Badges/* default */.Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const pages = (HomePage);
HomePage.getLayout = function getLayout(page) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,253,938,137], () => (__webpack_exec__(4436)));
module.exports = __webpack_exports__;

})();