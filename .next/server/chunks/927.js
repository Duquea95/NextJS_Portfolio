"use strict";
exports.id = 927;
exports.ids = [927];
exports.modules = {

/***/ 6927:
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
;// CONCATENATED MODULE: ./public/images/anthony.jpg
/* harmony default export */ const anthony = ({"src":"/_next/static/media/anthony.4ac5d6e3.jpg","height":1800,"width":1440,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAArgr/xAAbEAACAgMBAAAAAAAAAAAAAAACAwEEAAZCkv/aAAgBAQABPwCttCDuktNVrReDHxMnyJQA+s//xAAWEQADAAAAAAAAAAAAAAAAAAAAAjH/2gAIAQIBAT8AWH//xAAXEQADAQAAAAAAAAAAAAAAAAAAAjGR/9oACAEDAQE/AGuH/9k=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./components/Header/index.js

function Header() {
    return /*#__PURE__*/ _jsxs("header", {
        className: "navigation",
        children: [
            /*#__PURE__*/ _jsx("div", {
                children: /*#__PURE__*/ _jsx("span", {
                    children: "Duqu\xe9"
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                children: [
                    /*#__PURE__*/ _jsx("span", {
                        children: "-"
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        children: "-"
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        children: "-"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.5cad77d9.png","height":400,"width":1000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAQAAAAEwYbDAAAAOUlEQVR42mP4LvBD/gfDd+4fIt+Zf8j9EGD4YfCD7bvQD58flj+kv7P/MGD4IfBD9gfLD0EgCVYBAJFOGWonAMCvAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Navbar/index.js





const Navbar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-between",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            alt: "Anthony Duque - Front-End Engineer",
                            priority: true,
                            src: logo.src,
                            width: 100,
                            height: 41
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/Work",
                                    children: "Work"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/About",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-cta",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/Contact",
                                    children: "Say Hello"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Footer/index.js

function Footer() {
    let footerLinks = [
        {
            text: "My Works",
            url: "/Works"
        }
    ];
    let socialLinks = [
        {
            url: "https://www.linkedin.com/in/anthony-duque/",
            linkClasses: "icon icon--linkedin",
            iconClasses: "ri-linkedin-line"
        },
        {
            url: "https://github.com/Duquea95",
            linkClasses: "icon icon--github",
            iconClasses: "ri-github-line"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "section flex flex-center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "padding content",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            marginBottom: 25 + "px",
                                            letterSpacing: .3 + "rem"
                                        },
                                        children: "SAY HELLO"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "mailto:duquea95@gmail.com",
                                        children: "Duquea95@gmail.com"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "footer-menu",
                                children: footerLinks.map((link, idx)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: link.url,
                                            children: link.text
                                        })
                                    }, "footer_link__" + idx);
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "socials-menu flex",
                                children: socialLinks.map((link, idx)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: link.linkClasses,
                                        href: link.url,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: link.iconClasses
                                        })
                                    }, "social_link__" + idx);
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "disclaimer",
                                    children: "\xa9 Anthony Duque 2022"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/layout.js






function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: anthony.src
                    }),
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
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ })

};
;