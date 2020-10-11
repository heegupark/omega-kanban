webpackHotUpdate_N_E("pages/[_id]/[project]",{

/***/ "./components/checklistitem.tsx":
/*!**************************************!*\
  !*** ./components/checklistitem.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Zoom */ \"./node_modules/@material-ui/core/esm/Zoom/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Menu */ \"./node_modules/@material-ui/core/esm/Menu/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"./node_modules/@material-ui/core/esm/ListItemText/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/components/checklistitem.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar StyledMenu = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])({\n  paper: {\n    border: '1px solid rgb(239, 243, 244)'\n  }\n})(function (props) {\n  return __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    elevation: 0,\n    getContentAnchorEl: null,\n    anchorOrigin: {\n      vertical: 'bottom',\n      horizontal: 'center'\n    },\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'center'\n    }\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 3\n    }\n  }));\n});\n\nfunction ChecklistItem(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(props.checklist.checklist),\n      checklist = _useState[0],\n      setChecklist = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      showAngle = _useState2[0],\n      setShowAngle = _useState2[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      anchorEl = _React$useState2[0],\n      setAnchorEl = _React$useState2[1];\n\n  var handleClick = function handleClick(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handleClose = function handleClose() {\n    setAnchorEl(null);\n  };\n\n  var handleChecklistSubmit = function handleChecklistSubmit(e) {\n    if (e.key === 'Enter') {\n      var newChecklist = {\n        _id: props.checklist._id,\n        checklist: checklist,\n        isChecked: undefined\n      };\n      props.updateChecklist(props.currentColumn._id, props.currentCard._id, newChecklist);\n    }\n  };\n\n  var handleCompleteChecklist = function handleCompleteChecklist() {\n    var newChecklist = {\n      _id: props.checklist._id,\n      checklist: undefined,\n      isChecked: true\n    };\n    props.updateChecklist(props.currentColumn._id, props.currentCard._id, newChecklist);\n  };\n\n  var handleDeleteColClick = function handleDeleteColClick() {\n    props.deleteChecklist(props.currentColumn._id, props.currentCard._id, props.checklist._id);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, props.currentCard.isArchived ? __jsx(\"div\", {\n    className: \"display-flex checklist-row-no-hover\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"checklist-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  }, props.checklist.isChecked ? __jsx(\"i\", {\n    className: \"far fa-check-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 15\n    }\n  }) : __jsx(\"i\", {\n    className: \"far fa-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 15\n    }\n  })), props.checklist.isChecked ? __jsx(\"div\", {\n    className: \"checklist-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, __jsx(\"s\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 15\n    }\n  }, checklist)) : __jsx(\"input\", {\n    value: checklist,\n    disabled: true,\n    className: \"checklist-content border-none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 13\n    }\n  })) : __jsx(\"div\", {\n    // id={props.checklist.id}\n    onMouseOver: function onMouseOver() {\n      return setShowAngle(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setShowAngle(false);\n    },\n    className: \"display-flex checklist-row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"checklist-circle cursor-pointer\",\n    onClick: function onClick() {\n      return handleCompleteChecklist();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 11\n    }\n  }, props.checklist && props.checklist.isChecked ? __jsx(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    \"in\": true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 15\n    }\n  }, __jsx(\"i\", {\n    className: \"far fa-check-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 17\n    }\n  })) : __jsx(\"i\", {\n    className: \"far fa-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 15\n    }\n  })), props.checklist && props.checklist.isChecked ? __jsx(\"div\", {\n    className: \"checklist-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 13\n    }\n  }, __jsx(\"s\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 15\n    }\n  }, checklist)) : __jsx(\"input\", {\n    value: checklist,\n    onChange: function onChange(e) {\n      return setChecklist(e.target.value);\n    },\n    onKeyDown: function onKeyDown(e) {\n      return handleChecklistSubmit(e);\n    },\n    className: \"checklist-content border-none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"card-head-angle cursor-pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 11\n    }\n  }, checklist && showAngle && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"i\", {\n    onClick: handleClick,\n    className: \"fas fa-angle-down\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 17\n    }\n  })), __jsx(StyledMenu, {\n    id: \"delete-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    onClick: function onClick() {\n      return handleDeleteColClick();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    primary: \"Delete\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 17\n    }\n  }))))));\n}\n\n_s(ChecklistItem, \"6CsK2fsruyXUC8vj08uY/D+3J7w=\");\n\n_c = ChecklistItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChecklistItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChecklistItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja2xpc3RpdGVtLnRzeD81YWY2Il0sIm5hbWVzIjpbIlN0eWxlZE1lbnUiLCJ3aXRoU3R5bGVzIiwicGFwZXIiLCJib3JkZXIiLCJwcm9wcyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIkNoZWNrbGlzdEl0ZW0iLCJ1c2VTdGF0ZSIsImNoZWNrbGlzdCIsInNldENoZWNrbGlzdCIsInNob3dBbmdsZSIsInNldFNob3dBbmdsZSIsIlJlYWN0IiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDaGVja2xpc3RTdWJtaXQiLCJlIiwia2V5IiwibmV3Q2hlY2tsaXN0IiwiX2lkIiwiaXNDaGVja2VkIiwidW5kZWZpbmVkIiwidXBkYXRlQ2hlY2tsaXN0IiwiY3VycmVudENvbHVtbiIsImN1cnJlbnRDYXJkIiwiaGFuZGxlQ29tcGxldGVDaGVja2xpc3QiLCJoYW5kbGVEZWxldGVDb2xDbGljayIsImRlbGV0ZUNoZWNrbGlzdCIsImlzQXJjaGl2ZWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkJvb2xlYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BLElBQU1BLFVBQVUsR0FBR0MsMkVBQVUsQ0FBQztBQUM1QkMsT0FBSyxFQUFFO0FBQ0xDLFVBQU0sRUFBRTtBQURIO0FBRHFCLENBQUQsQ0FBVixDQUloQixVQUFDQyxLQUFEO0FBQUEsU0FDRCxNQUFDLDhEQUFEO0FBQ0UsYUFBUyxFQUFFLENBRGI7QUFFRSxzQkFBa0IsRUFBRSxJQUZ0QjtBQUdFLGdCQUFZLEVBQUU7QUFDWkMsY0FBUSxFQUFFLFFBREU7QUFFWkMsZ0JBQVUsRUFBRTtBQUZBLEtBSGhCO0FBT0UsbUJBQWUsRUFBRTtBQUNmRCxjQUFRLEVBQUUsS0FESztBQUVmQyxn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b21wb25lbnRzL2NoZWNrbGlzdGl0ZW0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBLZXlib2FyZEV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFpvb20gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvWm9vbSc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBNZW51LCB7IE1lbnVQcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBJQ2hlY2tsaXN0UHJvcHMgZnJvbSAnLi9pbnRlcmZhY2VzL2ljaGVja2xpc3Rwcm9wcyc7XG5pbXBvcnQgSUNoZWNrbGlzdCBmcm9tICcuL2ludGVyZmFjZXMvaWNoZWNrbGlzdCc7XG5pbXBvcnQgSUNhcmQgZnJvbSAnLi9pbnRlcmZhY2VzL2ljYXJkJztcbmltcG9ydCBJQ29sdW1uSXRlbSBmcm9tICcuL2ludGVyZmFjZXMvaWNvbHVtbml0ZW0nO1xuXG5jb25zdCBTdHlsZWRNZW51ID0gd2l0aFN0eWxlcyh7XG4gIHBhcGVyOiB7XG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYigyMzksIDI0MywgMjQ0KScsXG4gIH0sXG59KSgocHJvcHM6IE1lbnVQcm9wcykgPT4gKFxuICA8TWVudVxuICAgIGVsZXZhdGlvbj17MH1cbiAgICBnZXRDb250ZW50QW5jaG9yRWw9e251bGx9XG4gICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICB9fVxuICAgIHRyYW5zZm9ybU9yaWdpbj17e1xuICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcblxuaW50ZXJmYWNlIElDaGVja2xpc3RJdGVtUHJvcHMgZXh0ZW5kcyBJQ2hlY2tsaXN0UHJvcHMge1xuICBjaGVja2xpc3Q6IElDaGVja2xpc3Q7XG4gIGN1cnJlbnRDb2x1bW46IElDb2x1bW5JdGVtO1xuICBjdXJyZW50Q2FyZDogSUNhcmQ7XG59XG5cbmZ1bmN0aW9uIENoZWNrbGlzdEl0ZW0ocHJvcHM6IElDaGVja2xpc3RJdGVtUHJvcHMpIHtcbiAgY29uc3QgW2NoZWNrbGlzdCwgc2V0Q2hlY2tsaXN0XSA9IHVzZVN0YXRlPHN0cmluZz4oXG4gICAgcHJvcHMuY2hlY2tsaXN0LmNoZWNrbGlzdCBhcyBzdHJpbmdcbiAgKTtcbiAgY29uc3QgW3Nob3dBbmdsZSwgc2V0U2hvd0FuZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoZWNrbGlzdFN1Ym1pdCA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zdCBuZXdDaGVja2xpc3QgPSB7XG4gICAgICAgIF9pZDogcHJvcHMuY2hlY2tsaXN0Ll9pZCxcbiAgICAgICAgY2hlY2tsaXN0LFxuICAgICAgICBpc0NoZWNrZWQ6IHVuZGVmaW5lZCxcbiAgICAgIH07XG4gICAgICBwcm9wcy51cGRhdGVDaGVja2xpc3QoXG4gICAgICAgIHByb3BzLmN1cnJlbnRDb2x1bW4uX2lkLFxuICAgICAgICBwcm9wcy5jdXJyZW50Q2FyZC5faWQsXG4gICAgICAgIG5ld0NoZWNrbGlzdFxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNvbXBsZXRlQ2hlY2tsaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld0NoZWNrbGlzdCA9IHtcbiAgICAgIF9pZDogcHJvcHMuY2hlY2tsaXN0Ll9pZCxcbiAgICAgIGNoZWNrbGlzdDogdW5kZWZpbmVkLFxuICAgICAgaXNDaGVja2VkOiB0cnVlLFxuICAgIH07XG4gICAgcHJvcHMudXBkYXRlQ2hlY2tsaXN0KFxuICAgICAgcHJvcHMuY3VycmVudENvbHVtbi5faWQsXG4gICAgICBwcm9wcy5jdXJyZW50Q2FyZC5faWQsXG4gICAgICBuZXdDaGVja2xpc3RcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNvbENsaWNrID0gKCkgPT4ge1xuICAgIHByb3BzLmRlbGV0ZUNoZWNrbGlzdChcbiAgICAgIHByb3BzLmN1cnJlbnRDb2x1bW4uX2lkLFxuICAgICAgcHJvcHMuY3VycmVudENhcmQuX2lkLFxuICAgICAgcHJvcHMuY2hlY2tsaXN0Ll9pZFxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Byb3BzLmN1cnJlbnRDYXJkLmlzQXJjaGl2ZWQgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheS1mbGV4IGNoZWNrbGlzdC1yb3ctbm8taG92ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrbGlzdC1jaXJjbGVcIj5cbiAgICAgICAgICAgIHtwcm9wcy5jaGVja2xpc3QuaXNDaGVja2VkID8gKFxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY2hlY2stY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Byb3BzLmNoZWNrbGlzdC5pc0NoZWNrZWQgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrbGlzdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxzPntjaGVja2xpc3R9PC9zPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17Y2hlY2tsaXN0fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tsaXN0LWNvbnRlbnQgYm9yZGVyLW5vbmVcIlxuICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgLy8gaWQ9e3Byb3BzLmNoZWNrbGlzdC5pZH1cbiAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0U2hvd0FuZ2xlKHRydWUpfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2hvd0FuZ2xlKGZhbHNlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJkaXNwbGF5LWZsZXggY2hlY2tsaXN0LXJvd1wiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja2xpc3QtY2lyY2xlIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbXBsZXRlQ2hlY2tsaXN0KCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Byb3BzLmNoZWNrbGlzdCAmJiBwcm9wcy5jaGVja2xpc3QuaXNDaGVja2VkID8gKFxuICAgICAgICAgICAgICA8Wm9vbSBpbj17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNoZWNrLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9ab29tPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Byb3BzLmNoZWNrbGlzdCAmJiBwcm9wcy5jaGVja2xpc3QuaXNDaGVja2VkID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2xpc3QtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cz57Y2hlY2tsaXN0fTwvcz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e2NoZWNrbGlzdH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVja2xpc3QoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiBoYW5kbGVDaGVja2xpc3RTdWJtaXQoZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrbGlzdC1jb250ZW50IGJvcmRlci1ub25lXCJcbiAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWQtYW5nbGUgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIHtjaGVja2xpc3QgJiYgc2hvd0FuZ2xlICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aSBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxTdHlsZWRNZW51XG4gICAgICAgICAgICAgIGlkPVwiZGVsZXRlLW1lbnVcIlxuICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxuICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZUNvbENsaWNrKCl9PlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRlbGV0ZVwiIC8+XG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8L1N0eWxlZE1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENoZWNrbGlzdEl0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/checklistitem.tsx\n");

/***/ })

})