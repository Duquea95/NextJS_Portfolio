"use strict";
exports.id = 395;
exports.ids = [395];
exports.modules = {

/***/ 5542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Button = (props)=>{
    const handleMailer = (e)=>{
        e.preventDefault();
        props?.mailerClicked();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: props?.link,
                onClick: props?.mailerClicked && handleMailer,
                className: props?.sendMail ? "mail-sent" : "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: props.text
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 9395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5542);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Mailer = ()=>{
    const [sendMail, setSendMail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const messageRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const mailerClicked = ()=>{
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
        setSendMail(true);
    };
    const focusLabelColor = (e)=>{
        e.target.previousSibling.classList.add("mainColor");
    };
    const blurLabelColor = (e)=>{
        console.log(e.target.previousSibling);
        e.target.previousSibling.classList.remove("mainColor");
    };
    const formCopy = [
        {
            labelCopy: "Your Name:",
            labelFor: "name",
            inputRef: nameRef,
            inputType: "text",
            inputPlaceholder: "Enter Your Name"
        },
        {
            labelCopy: "Email",
            labelFor: "email",
            inputRef: emailRef,
            inputType: "text",
            inputPlaceholder: "Enter Your Email:"
        },
        {
            labelCopy: "Your Message:",
            labelFor: "message",
            inputRef: messageRef,
            inputType: "textarea",
            inputPlaceholder: "Hi, I need a custom plugin for my e-commerce website. When are you available to discuss this?"
        }
    ];
    let topLeft, topRight, bottom;
    {
        formCopy.map((copy)=>{
            if (copy.labelFor == "message") {
                bottom = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "justify-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: copy.labelFor,
                                children: copy.labelCopy
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                ref: copy.inputRef,
                                type: copy.inputType,
                                placeholder: copy.inputPlaceholder,
                                name: copy.labelFor,
                                onFocus: focusLabelColor,
                                onBlur: blurLabelColor
                            })
                        ]
                    }, "form-row__" + copy.labelFor)
                });
            } else if (copy.labelFor == "email") {
                topRight = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: copy.labelFor,
                            children: copy.labelCopy
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            ref: copy.inputRef,
                            type: copy.inputType,
                            placeholder: copy.inputPlaceholder,
                            name: copy.labelFor,
                            onFocus: focusLabelColor,
                            onBlur: blurLabelColor
                        })
                    ]
                }, "form-row__" + copy.labelFor);
            } else {
                topLeft = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: copy.labelFor,
                            children: copy.labelCopy
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            ref: copy.inputRef,
                            type: copy.inputType,
                            placeholder: copy.inputPlaceholder,
                            name: copy.labelFor,
                            onFocus: focusLabelColor,
                            onBlur: blurLabelColor
                        })
                    ]
                }, "form-row__" + copy.labelFor);
            }
        });
    }
    let topInputs = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-between",
        children: [
            topLeft,
            topRight
        ]
    });
    const RenderButton = ()=>{
        if (sendMail != true) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            text: "Shoot",
            mailerClicked: mailerClicked,
            sendMail: sendMail
        });
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            text: "Thank you!",
            mailerClicked: mailerClicked,
            sendMail: sendMail
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "section mailer flex flex-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-copy",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: "Send me a message!"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "Got a question or proposal, or just want ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                " to say hello? Go ahead."
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    children: [
                        topInputs,
                        bottom,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "justify-center",
                            children: sendMail ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                text: "Thank you!",
                                mailerClicked: mailerClicked,
                                sendMail: sendMail
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                text: "Shoot!",
                                mailerClicked: mailerClicked,
                                sendMail: sendMail
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mailer);


/***/ })

};
;