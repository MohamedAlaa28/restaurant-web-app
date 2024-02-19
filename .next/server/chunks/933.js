"use strict";
exports.id = 933;
exports.ids = [933];
exports.modules = {

/***/ 5933:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CalendarInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8248);
/* harmony import */ var _mui_icons_material_CalendarTodayOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8081);
/* harmony import */ var _mui_icons_material_CalendarTodayOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_CalendarTodayOutlined__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([date_fns__WEBPACK_IMPORTED_MODULE_2__]);
date_fns__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function CalendarInput() {
    const DAYS = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    const { 0: dayCount , 1: setDayCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: blankDays , 1: setBlankDays  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: showDatepicker , 1: setShowDatepicker  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: datepickerHeaderDate , 1: setDatepickerHeaderDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());
    const { 0: selectedDate , 1: setSelectedDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());
    const { 0: type , 1: setType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("date");
    const decrement = ()=>{
        if (type === "date") {
            setDatepickerHeaderDate((prev)=>(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.subMonths)(prev, 1));
        } else if (type === "month") {
            setDatepickerHeaderDate((prev)=>(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.subYears)(prev, 1));
        } else if (type === "year") {
            setDatepickerHeaderDate((prev)=>(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.subYears)(prev, 10));
        }
    };
    const increment = ()=>{
        if (type === "date") {
            setDatepickerHeaderDate((prev)=>(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.addMonths)(prev, 1));
        } else if (type === "month") {
            setDatepickerHeaderDate((prev)=>(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.addYears)(prev, 1));
        } else if (type === "year") {
            setDatepickerHeaderDate((prev)=>(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.addYears)(prev, 10));
        }
    };
    const isToday = (date)=>{
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isEqual)(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), date), new Date());
    };
    const setDateValue = (date)=>{
        setSelectedDate(new Date(datepickerHeaderDate.getFullYear(), datepickerHeaderDate.getMonth(), date));
        setShowDatepicker(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const daysInMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.getDaysInMonth)(datepickerHeaderDate);
        const dayOfWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.getDay)(new Date(datepickerHeaderDate.getFullYear(), datepickerHeaderDate.getMonth(), 1));
        const blankdaysArray = Array(dayOfWeek).fill(null);
        const daysArray = Array.from({
            length: daysInMonth
        }, (_, i)=>i + 1);
        setBlankDays(blankdaysArray);
        setDayCount(daysArray);
    }, [
        datepickerHeaderDate,
        type
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex items-center justify-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "antialiased sans-serif",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mx-auto",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-5 w-64",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "hidden",
                                name: "date"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                readOnly: true,
                                className: "w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                                placeholder: "Select date",
                                value: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(selectedDate, "MM/dd/yyyy"),
                                onClick: ()=>setShowDatepicker(!showDatepicker)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute top-0 right-0 px-3 py-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_CalendarTodayOutlined__WEBPACK_IMPORTED_MODULE_3___default()), {})
                            }),
                            showDatepicker && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-white mt-12 rounded-lg shadow p-4 absolute top-0 left-0",
                                style: {
                                    width: "17rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                onClick: decrement,
                                                children: "<"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(datepickerHeaderDate, "MMMM yyyy")
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "button",
                                                onClick: increment,
                                                children: ">"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-wrap mb-3",
                                        children: DAYS.map((day)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    width: "14.28%"
                                                },
                                                className: "text-center",
                                                children: day
                                            }, day))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-wrap",
                                        children: [
                                            blankDays.map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        width: "14.28%"
                                                    }
                                                }, i)),
                                            dayCount.map((day, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        width: "14.28%"
                                                    },
                                                    className: "text-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        onClick: ()=>setDateValue(day),
                                                        className: `cursor-pointer ${isToday(day) ? "text-blue-600" : "text-gray-700"}`,
                                                        children: day
                                                    })
                                                }, index))
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;