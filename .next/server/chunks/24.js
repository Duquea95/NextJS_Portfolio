"use strict";
exports.id = 24;
exports.ids = [24];
exports.modules = {

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
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
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/images/anthony-duque-logo.png
/* harmony default export */ const anthony_duque_logo = ({"src":"/_next/static/media/anthony-duque-logo.3aeaed17.png","height":1000,"width":1000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAARElEQVR42m3NMQqAMBQD0Kdo0VkXx78ILt7C2UXw/jcpFAod+ggZskTPJiSNsGLWOHweN8YSp9/rwqCWZBFQp0nYO5cZtBYCrg0GmAwAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/Header/index.js



// import { NavLink } from "react-router-dom";


const Header = (prop)=>{
    const router = (0,router_.useRouter)();
    const [menuState, setMenuState] = (0,external_react_.useState)(false);
    console.log(router.pathname);
    const handleClick = ()=>{
        return setMenuState(!menuState);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "logo-container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: "logo",
                        style: anthony_duque_logo ? {
                            backgroundImage: `url(${anthony_duque_logo.src})`
                        } : "",
                        children: "DigiMedia Creatives"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    onClick: handleClick,
                    class: `btn-menu${menuState == true ? " active" : ""}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: `${menuState == true ? "show" : ""}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "nav-container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: navLinks.map((item, index)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            onClick: handleClick,
                                            href: `/${item.page}`,
                                            className: `${router.pathname == `/${item.name}` ? "current-menu-item" : undefined}`,
                                            children: item.name
                                        })
                                    }, `header-link__${item.name}`);
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "nav-mobile",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("blockquote", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "let’s talk"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "mailto:info@thelabnyc.com",
                                            children: "info@thelabnyc.com"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Header = (Header);
const navLinks = [
    {
        name: "work",
        page: "work"
    },
    {
        name: "expertise",
        page: "expertise"
    },
    {
        name: "about",
        page: "about"
    }
];

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./components/Footer/index.js



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footer-head",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("blockquote", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: "Let’s talk"
                                    }),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "mailto:duquea95@gmail.com",
                                        children: "duquea95@gmail.com"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                            className: "nav-socials",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: socialLinks.map((item, index)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: item.link,
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: `fa` + item.classNames,
                                                children: item.icon
                                            })
                                        })
                                    }, `social-link__${index}`);
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-body",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "\xa9 2023 - Anthony Duque."
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "All Rights Reserved."
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);
const socialLinks = [
    {
        name: "DigiMedia Creative's Facebook",
        link: "facebook.com",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaFacebookF, {}),
        classNames: " fa-facebook"
    },
    {
        name: "DigiMedia Creative's Twitter",
        link: "twitter.com",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTwitter, {}),
        classNames: " fa-twitter"
    },
    {
        name: "DigiMedia Creative's Instagraam Account",
        link: "instagram.com",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaInstagram, {}),
        classNames: " fa-instagram"
    },
    {
        name: "DigiMedia Creative's LinkedIn Account",
        link: "linkedin.com",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaLinkedinIn, {}),
        classNames: " fa-linkedin"
    }
];

;// CONCATENATED MODULE: ./components/layout.js


// import anthony from'../public/images/anthony.jpg' 


function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossorigin: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}


/***/ })

};
;