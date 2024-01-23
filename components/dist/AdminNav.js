"use strict";
exports.__esModule = true;
var Autor_1 = require("./Autor");
var AdminWindow_1 = require("./Admin/AdminWindow");
var react_1 = require("react");
var Nav = function () { return React.createElement("nav", { className: 'w-full min-h-[5em] h-fit flex  items-center justify-between   ' },
    React.createElement(Autor_1["default"], { Name: 'Noureddine Azinag', Role: "Admin" })); };
var AdminNav = function () {
    var Menu = function () { return React.createElement("div", { onClick: function () { return dispatch({ type: 'ToggleWindow' }); }, className: "Menu  py-3 absolute left-[85%] top-3 " + (state.iswindow ? 'bg-green-500' : 'bg-red-500') + " z-10 " }, state.iswindow ? 'Close' : 'menu'); };
    var initialState = { iswindow: false };
    var reducer = function (state, action) {
        switch (action.type) {
            case 'ToggleWindow':
                return { iswindow: !state.iswindow };
            default:
                return state;
        }
    };
    var _a = react_1.useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    return (React.createElement("div", { className: "NAv w-full h-fit z-0" },
        React.createElement(Menu, null),
        state.iswindow ? React.createElement(AdminWindow_1["default"], null) : React.createElement(Nav, null)));
};
exports["default"] = AdminNav;
