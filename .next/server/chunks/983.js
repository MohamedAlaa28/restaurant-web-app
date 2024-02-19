"use strict";
exports.id = 983;
exports.ids = [983];
exports.modules = {

/***/ 4652:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChartCircle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(738);
/* harmony import */ var _ChartsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4950);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3767);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__, chart_js__WEBPACK_IMPORTED_MODULE_3__]);
([react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__, chart_js__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function ChartCircle({ empty  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative p-4 rounded-[14px] w-full min-h-full bg-[#fff] border shadow-md flex-row flex-wrap",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-xl w-auto absolute ",
                children: "Orders"
            }),
            empty ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "m-auto flex flex-col justify-center items-center h-full pb-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "m-auto text-center flex flex-col justify-center items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            className: " ",
                            src: "/ChartCircleEmpty.svg",
                            width: 122,
                            height: 180,
                            alt: "empty product"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "m-auto text-center flex flex-col justify-center items-center",
                        children: "No orders yet!"
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-wrap justify-between ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col mt-10 md:w-[49%] w-full divide-y divide-[#EEEEEE]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-wrap justify-between py-3 ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex text-[#686868] ",
                                        children: "Total orders"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex text-black font-medium ",
                                        children: "120"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-wrap justify-between py-3 ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex text-[#686868] ",
                                        children: "Pending orders"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex text-black font-medium ",
                                        children: "8"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-wrap justify-between py-3 ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex text-[#686868] ",
                                        children: "Cancelled orders"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex text-black font-medium ",
                                        children: "5"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-wrap justify-between py-3 ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex text-[#686868] ",
                                        children: "Successful orders"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex text-black font-medium ",
                                        children: "97"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col lg:pl-10 md:w-[49%] w-full content-between ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center w-auto m-auto relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Doughnut, {
                                        data: _ChartsData__WEBPACK_IMPORTED_MODULE_2__/* .doughnutData */ .w,
                                        options: _ChartsData__WEBPACK_IMPORTED_MODULE_2__/* .doughnutOptions */ .H,
                                        className: "chart",
                                        width: 115,
                                        height: 115
                                    }),
                                    chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.ArcElement),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center items-center absolute w-[75%] h-[75%] text-[#3D897A] bg-emerald-100 rounded-full opacity-80 left-[13%] border-4 border-[#fff] text-2xl ",
                                        children: "60%"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-wrap columns-2 justify-between mt-auto ",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-wrap justify-between ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-[#3D897A] pr-3 text-[40px] h-auto leading-4 ",
                                                children: "•"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-black",
                                                children: "Successful"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-wrap justify-between ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-[#F3D030] pr-3 text-[40px] h-auto leading-4 ",
                                                children: "•"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-black",
                                                children: "Pending"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-wrap justify-between ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-[#EE6363] pr-3 text-[40px] h-auto leading-4 ",
                                                children: "•"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-black",
                                                children: "Cancelled"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5597:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ ChartLine)
/* harmony export */ });
/* unused harmony exports options, argMax, argMin, data */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(738);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var _mui_icons_material_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4926);
/* harmony import */ var _mui_icons_material_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3767);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__, _headlessui_react__WEBPACK_IMPORTED_MODULE_3__, chart_js__WEBPACK_IMPORTED_MODULE_6__]);
([react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__, _headlessui_react__WEBPACK_IMPORTED_MODULE_3__, chart_js__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const options = {
    plugins: {
        legend: {
            display: true
        }
    },
    elements: {
        line: {
            tension: 0.1,
            borderWidth: 2,
            fill: "start",
            borderColor: "#D4D4D4"
        },
        point: {
            p1: {
                backgroundColor: "#8A97A940"
            },
            radius: 3,
            hitRadius: 1
        }
    },
    scales: {
        xAxis: {
            display: true,
            grid: {
                display: false
            }
        },
        yAxis: {
            display: true,
            stacked: true,
            grid: {
                display: false
            }
        }
    }
};
// beginAtZero: true,
var OrginData = [
    10,
    50,
    60,
    70,
    30,
    140,
    50,
    80,
    60,
    70,
    50,
    90
];
const argMax = (array)=>{
    return array.map((x, i)=>[
            x,
            i
        ]).reduce((r, a)=>a[0] > r[0] ? a : r)[1];
};
const argMin = (array)=>{
    return array.map((x, i)=>[
            x,
            i
        ]).reduce((r, a)=>a[0] < r[0] ? a : r)[1];
};
var color = OrginData.map((x)=>"#D4D4D4");
color[argMax(OrginData)] = "#3D897A";
color[argMin(OrginData)] = "#EE6363";
const data = {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec", 
    ],
    datasets: [
        {
            data: OrginData,
            backgroundColor: color
        }, 
    ]
};
function ChartLine({ empty  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " relative rounded-[14px] bg-[#fff] border shadow-md flex-row w-full h-auto min-h-full p-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-xl w-auto absolute ",
                children: "Sold Amounts"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-wrap justify-between w-[1/4] ",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {
                    as: "div",
                    className: "relative inline-block text-right ml-auto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Button, {
                                className: "inline-flex justify-center w-full ml-auto ",
                                children: [
                                    "Monthly",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ExpandMoreOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        className: "-mr-1 ml-auto h-5 w-5",
                                        "aria-hidden": "true"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {
                            as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                            enter: "transition ease-out duration-100",
                            enterFrom: "transform opacity-0 scale-95",
                            enterTo: "transform opacity-100 scale-100",
                            leave: "transition ease-in duration-75",
                            leaveFrom: "transform opacity-100 scale-100",
                            leaveTo: "transform opacity-0 scale-95",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Items, {
                                className: "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "py-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {
                                            children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"),
                                                    children: "Daily"
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {
                                            children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"),
                                                    children: "Monthly"
                                                })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {
                                            children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "#",
                                                    className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"),
                                                    children: "Yearly"
                                                })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            empty ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "m-auto flex flex-col justify-center items-center h-full pb-5 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "m-auto text-center flex flex-col justify-center items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                            className: " ",
                            src: "/ChartLineEmpty.svg",
                            width: 114,
                            height: 104,
                            alt: "empty product"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "m-auto text-center flex flex-col justify-center items-center",
                        children: "Nothing is sold yet!"
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-wrap justify-between ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col mt-10 md:w-[75%] w-full ",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex w-full h-full ",
                            children: [
                                chart_js__WEBPACK_IMPORTED_MODULE_6__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_6__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_6__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_6__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_6__.LineElement),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Line, {
                                    data: data,
                                    options: options
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex md:flex-col flex-row md:w-[25%] w-full content-between md:mt-14",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-wrap md:columns-1 justify-between md:mb-auto w-full ",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-wrap justify-between md:mb-2 ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-[#3D897A] pr-2 text-[40px] h-auto leading-4",
                                            children: "•"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-black text-xs",
                                            children: "Highest Amount"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-wrap justify-between ",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-[#EE6363] pr-2 text-[40px] h-auto leading-4",
                                            children: "•"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-black text-xs ",
                                            children: "Lowest Amount"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ doughnutOptions),
/* harmony export */   "w": () => (/* binding */ doughnutData)
/* harmony export */ });
const doughnutOptions = {
    elements: {
        arc: {
            weight: 0.5,
            borderWidth: 0
        }
    },
    cutout: 45,
    responsive: true
};
const doughnutData = {
    labels: [
        "Event 1",
        "Event 2",
        "Event 3",
        "Event 4"
    ],
    datasets: [
        {
            label: "My First Dataset ",
            data: [
                60,
                30,
                10
            ],
            backgroundColor: [
                "#3D897A",
                "#F3D030",
                "#EE6363"
            ],
            hoverOffset: 4
        }, 
    ]
}; // {data: {
 //   datasets: [
 //     { borderWidth: 0,
 //       data: [35, 30, 15, 20],
 //       /**
 //        * These colors come from Tailwind CSS palette
 //        * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
 //        */
 //       backgroundColor: ['#10B981', '#3B82F6', '#F97316', '#0EA5E9'],
 //       label: 'Dataset 1',
 //     },
 //   ],
 //   labels: ['Fresh Vegetable', 'Cooking Essentials', 'Drinks', 'Organic Food'],
 // }}
 // options: {
 //   responsive: true,
 //   cutoutPercentage:5,
 // },
 // legend: {
 //   display: false,
 // },


/***/ }),

/***/ 5334:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AllCharts)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _charts_ChartCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4652);
/* harmony import */ var _charts_ChartLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5597);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_charts_ChartCircle__WEBPACK_IMPORTED_MODULE_1__, _charts_ChartLine__WEBPACK_IMPORTED_MODULE_2__]);
([_charts_ChartCircle__WEBPACK_IMPORTED_MODULE_1__, _charts_ChartLine__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function AllCharts() {
    const Empty = false;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-row flex-wrap justify-between gap-y-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "lg:w-[50%] w-full min-h-[320px] px-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_charts_ChartCircle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    empty: Empty
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "lg:w-[50%] w-full min-h-[320px] px-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_charts_ChartLine__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
                    empty: Empty
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProductsLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/Data/ProductData.js
const ProductsData = [
    {
        id: 1,
        Product: "Polo shirt",
        Category: "Men",
        SubCategory: "Clothing",
        Quantity: "120",
        UnitPrice: "€ 30",
        Status: "Active",
        date: "24/5/2022",
        image: "../Img - product 1@2x.png"
    },
    {
        id: 2,
        Product: "Polo shirt",
        Category: "Men",
        SubCategory: "Clothing",
        Quantity: "120",
        UnitPrice: "€ 30",
        Status: "Active",
        date: "24/5/2022",
        image: "../Img - product 1@2x.png"
    },
    {
        id: 3,
        Product: "Polo shirt",
        Category: "Men",
        SubCategory: "Clothing",
        Quantity: "120",
        UnitPrice: "€ 30",
        Status: "false",
        date: "24/5/2022",
        image: "../Img - product 1@2x.png"
    },
    {
        id: 4,
        Product: "Polo shirt",
        Category: "Men",
        SubCategory: "Clothing",
        Quantity: "120",
        UnitPrice: "€ 30",
        Status: "false",
        date: "24/5/2022",
        image: "../Img - product 1@2x.png"
    },
    {
        id: 5,
        Product: "Polo shirt",
        Category: "Men",
        SubCategory: "Clothing",
        Quantity: "120",
        UnitPrice: "€ 30",
        Status: "false",
        date: "24/5/2022",
        image: "../Img - product 1@2x.png"
    },
    {
        id: 6,
        Product: "Polo shirt",
        Category: "Men",
        SubCategory: "Clothing",
        Quantity: "120",
        UnitPrice: "€ 30",
        Status: "false",
        date: "24/5/2022",
        image: "../Img - product 1@2x.png"
    },
    {
        id: 7,
        Product: "Polo shirt",
        Category: "Men",
        SubCategory: "Clothing",
        Quantity: "120",
        UnitPrice: "€ 30",
        Status: "false",
        date: "24/5/2022",
        image: "../Img - product 1@2x.png"
    },
    {
        id: 8,
        Product: "Polo shirt",
        Category: "Men",
        SubCategory: "Clothing",
        Quantity: "120",
        UnitPrice: "€ 30",
        Status: "false",
        date: "24/5/2022",
        image: "../Img - product 1@2x.png"
    },
    {
        id: 9,
        Product: "Polo shirt",
        Category: "Men",
        SubCategory: "Clothing",
        Quantity: "120",
        UnitPrice: "€ 30",
        Status: "false",
        date: "24/5/2022",
        image: "../Img - product 1@2x.png"
    },
    {
        id: 10,
        Product: "Polo shirt",
        Category: "Men",
        SubCategory: "Clothing",
        Quantity: "120",
        UnitPrice: "€ 30",
        Status: "false",
        date: "24/5/2022",
        image: "../Img - product 1@2x.png"
    },
    {
        id: 11,
        Product: "Polo shirt",
        Category: "Men",
        SubCategory: "Clothing",
        Quantity: "120",
        UnitPrice: "€ 30",
        Status: "false",
        date: "24/5/2022",
        image: "../Img - product 1@2x.png"
    },
    {
        id: 12,
        Product: "Polo shirt",
        Category: "Men",
        SubCategory: "Clothing",
        Quantity: "120",
        UnitPrice: "€ 30",
        Status: "false",
        date: "24/5/2022",
        image: "../Img - product 1@2x.png"
    },
    {
        id: 13,
        Product: "Polo shirt",
        Category: "Men",
        SubCategory: "Clothing",
        Quantity: "120",
        UnitPrice: "€ 30",
        Status: "false",
        date: "24/5/2022",
        image: "../Img - product 1@2x.png"
    },
    {
        id: 14,
        Product: "Polo shirt",
        Category: "Men",
        SubCategory: "Clothing",
        Quantity: "120",
        UnitPrice: "€ 30",
        Status: "false",
        date: "24/5/2022",
        image: "../Img - product 1@2x.png"
    },
    {
        id: 15,
        Product: "Polo shirt",
        Category: "Men",
        SubCategory: "Clothing",
        Quantity: "120",
        UnitPrice: "€ 30",
        Status: "false",
        date: "24/5/2022",
        image: "../Img - product 1@2x.png"
    }, 
];

;// CONCATENATED MODULE: ./components/dashboard/ProductsLayout.jsx




function ProductsLayout() {
    const { 0: products , 1: setProducts  } = (0,external_react_.useState)(ProductsData);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "relative p-4 rounded-[14px] m-3 min-h-[517px] bg-[#fff] border shadow-md md:flex-row",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flax flax-col",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row justify-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            className: "text-xl font-semibold text-gray-900",
                            children: [
                                "Products (",
                                products.length,
                                ")"
                            ]
                        }),
                        products.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: "inline-flex max-w-xs items-center justify-center rounded-md border border-transparent bg-[#3d897a] px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#3d897a] focus:outline-none focus:ring-2 focus:ring-[#3d897a] focus:ring-offset-2",
                            children: "+ Add"
                        })
                    ]
                }),
                products.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: " sm:rounded-lg mt-5 relative max-h-[450px] overflow-x-auto overflow-y-scroll scroll-bar",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                        className: "w-full text-sm text-left table-auto ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                className: "sticky top-0 bg-white border-b ",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    className: "text-xs w-full ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            scope: "col",
                                            className: "pr-6 py-3",
                                            children: "Product"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3",
                                            children: "Category"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3",
                                            children: "Sub-Category"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3",
                                            children: "Quantity"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3",
                                            children: "Unit Price"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            scope: "col",
                                            className: "px-6 py-3",
                                            children: "State"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            scope: "col",
                                            className: "pl-6 py-3",
                                            children: "Date"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                className: "",
                                children: products.map((product)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                scope: "row",
                                                className: "pr-6 py-4 font-medium text-gray-500 dark:text-white whitespace-nowrap",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "bg-white px-1 flex-shrink-0",
                                                            style: {
                                                                boxShadow: "0px 2px 6px #54566533",
                                                                borderRadius: "6px"
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/Img - product 1@2x.png",
                                                                width: 40,
                                                                height: 50,
                                                                alt: "product",
                                                                className: "grow"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "self-center pl-2 text-[#707082] ",
                                                            children: "Polo Shirt"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "whitespace-nowrap px-6 py-4 text-sm text-gray-500",
                                                children: product.Category
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "whitespace-nowrap px-6 py-4 text-sm text-gray-500",
                                                children: product.SubCategory
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "whitespace-nowrap px-6 py-4 text-sm text-gray-500",
                                                children: product.Quantity
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "whitespace-nowrap px-6 py-4 text-sm text-gray-500",
                                                children: product.UnitPrice
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "whitespace-nowrap px-6 py-4 text-sm text-gray-500",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: `${product.Status === "Active" ? "text-[#3D897A]  bg-[#3D897A] bg-opacity-25" : "text-[#EE6363] bg-[#EE6363] bg-opacity-25"} inline-flex rounded-full px-2 text-xs font-semibold leading-5 `,
                                                    children: String(product.Status)
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "whitespace-nowrap pl-6 py-4 text-sm text-gray-500",
                                                children: product.date
                                            })
                                        ]
                                    }, product.id))
                            })
                        ]
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mt-6 w-full rounded-lg flex flex-col justify-center text-center py-20",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/Products.svg",
                            width: 200,
                            height: 150,
                            alt: "empty product"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "font-semibold text-lg mt-4",
                            children: "You haven't uploaded any products yet!"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "my-2 text-[#707082]",
                            children: "Start adding your products now!"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mt-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: "inline-flex max-w-xs items-center justify-center rounded-md border border-transparent bg-[#3d897a] px-8 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#3d897a] focus:outline-none focus:ring-2 focus:ring-[#3d897a] focus:ring-offset-2",
                                children: "+ Add"
                            })
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 6294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TotalCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


function TotalCard() {
    const Empty = false;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-wrap md:justify-between justify-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sm:w-[50%] lg:w-[25%] w-full h-[112px] px-3 py-3",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex flex-wrap justify-between rounded-[14px] bg-[#577B7A] shadow-md flex-row h-full w-full",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col justify-between p-4 pl-7 leading-normal",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: "mb-2 text-2xl font-bold tracking-tight text-white dark:text-white",
                                    children: Empty ? 0 : "120 $"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-3 font-normal text-white dark:text-white",
                                    children: "Products"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col justify-between top-3 right-0 h-auto absolute",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: " ",
                                src: "/bg-TotalCardImg.svg",
                                width: 84,
                                height: 35,
                                alt: "empty product"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sm:w-[50%] lg:w-[25%] w-full h-[112px] px-3 py-3",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex flex-wrap justify-between rounded-[14px] bg-[#EE6363] shadow-md flex-row h-full w-full",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col justify-between p-4 pl-7 leading-normal",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: "mb-2 text-2xl font-bold tracking-tight text-white dark:text-white",
                                    children: Empty ? 0 : "120 $"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-3 font-normal text-white dark:text-white",
                                    children: "Total Sold"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col justify-between top-3 right-0 h-auto absolute",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: " ",
                                src: "/bg-TotalCardImg.svg",
                                width: 84,
                                height: 35,
                                alt: "empty product"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sm:w-[50%] lg:w-[25%] w-full h-[112px] px-3 py-3",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex flex-wrap justify-between rounded-[14px] bg-[#F3D030] shadow-md flex-row h-full w-full",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col justify-between p-4 pl-7 leading-normal",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: "mb-2 text-2xl font-bold tracking-tight text-white dark:text-white",
                                    children: Empty ? 0 : "€ 2.3 K"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-3 font-normal text-white dark:text-white",
                                    children: "Total Earnings"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col justify-between top-3 right-0 h-auto absolute",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: " ",
                                src: "/bg-TotalCardImg.svg",
                                width: 84,
                                height: 35,
                                alt: "empty product"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sm:w-[50%] lg:w-[25%] w-full h-[112px] px-3 py-3",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative flex flex-wrap justify-between rounded-[14px] bg-[#3D897A] shadow-md flex-row h-full w-full",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col justify-between p-4 pl-7 leading-normal",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: "mb-2 text-2xl font-bold tracking-tight text-white dark:text-white",
                                    children: Empty ? 0 : "120 $"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mb-3 font-normal text-white dark:text-white",
                                    children: "Successful Orders"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col justify-between top-3 right-0 h-auto absolute",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: " ",
                                src: "/bg-TotalCardImg.svg",
                                width: 84,
                                height: 35,
                                alt: "empty product"
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 7983:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_dashboard_AllCharts_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5334);
/* harmony import */ var _components_dashboard_ProductsLayout_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9579);
/* harmony import */ var _components_dashboard_TotalCard_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6294);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_dashboard_AllCharts_jsx__WEBPACK_IMPORTED_MODULE_2__]);
_components_dashboard_AllCharts_jsx__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Dashboard() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "px-4 sm:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_TotalCard_jsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_AllCharts_jsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_ProductsLayout_jsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;