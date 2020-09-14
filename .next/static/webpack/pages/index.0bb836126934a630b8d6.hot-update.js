webpackHotUpdate_N_E("pages/index",{

/***/ "./components/checklist.tsx":
/*!**********************************!*\
  !*** ./components/checklist.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _checklistitem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklistitem */ \"./components/checklistitem.tsx\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/components/checklist.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Checklist(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      checklist = _useState[0],\n      setChecklist = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      addChecklist = _useState2[0],\n      setAddChecklist = _useState2[1];\n\n  var handleSubmitChecklist = function handleSubmitChecklist(e) {\n    if (e.key === 'Enter') {\n      if (checklist.trim().length > 0) {\n        props.addChecklist(props.currentColumn.id, props.currentCard.id, checklist);\n      }\n\n      setChecklist('');\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"card-deatil-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, \"Checklist\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, props.currentCard && props.currentCard.checklists.map(function (checklist) {\n    return __jsx(\"div\", {\n      key: checklist.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 15\n      }\n    }, __jsx(_checklistitem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      currentCard: props.currentCard,\n      currentColumn: props.currentColumn,\n      checklist: checklist,\n      updateChecklist: props.updateChecklist,\n      addActivity: props.addActivity,\n      columns: props.columns,\n      completeChecklist: props.completeChecklist,\n      deleteChecklist: props.deleteChecklist,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }\n    }));\n  })), addChecklist && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"display-flex checklist-row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"checklist-circle cursor-pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, __jsx(\"i\", {\n    className: \"far fa-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 15\n    }\n  })), __jsx(\"input\", {\n    autoFocus: true,\n    value: checklist,\n    onBlur: function onBlur(e) {\n      if (e.target.value.trim().length === 0) setAddChecklist(false);\n    },\n    onChange: function onChange(e) {\n      return setChecklist(e.target.value);\n    },\n    onKeyDown: function onKeyDown(e) {\n      return handleSubmitChecklist(e);\n    },\n    className: \"checklist-content border-none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }))), __jsx(\"div\", {\n    onClick: function onClick() {\n      return setAddChecklist(true);\n    },\n    className: \"card-deatil-checklist text-skyblue cursor-pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, \"+ Add Checklist Item\"));\n}\n\n_s(Checklist, \"IShQ1bDS8E7De+KmDEkS3PLr1dg=\");\n\n_c = Checklist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checklist);\n\nvar _c;\n\n$RefreshReg$(_c, \"Checklist\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja2xpc3QudHN4PzFkMjEiXSwibmFtZXMiOlsiQ2hlY2tsaXN0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNoZWNrbGlzdCIsInNldENoZWNrbGlzdCIsImFkZENoZWNrbGlzdCIsInNldEFkZENoZWNrbGlzdCIsImhhbmRsZVN1Ym1pdENoZWNrbGlzdCIsImUiLCJrZXkiLCJ0cmltIiwibGVuZ3RoIiwiY3VycmVudENvbHVtbiIsImlkIiwiY3VycmVudENhcmQiLCJjaGVja2xpc3RzIiwibWFwIiwidXBkYXRlQ2hlY2tsaXN0IiwiYWRkQWN0aXZpdHkiLCJjb2x1bW5zIiwiY29tcGxldGVDaGVja2xpc3QiLCJkZWxldGVDaGVja2xpc3QiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQStCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDdEJDLFNBRHNCO0FBQUEsTUFDWEMsWUFEVzs7QUFBQSxtQkFFV0Ysc0RBQVEsQ0FBQyxLQUFELENBRm5CO0FBQUEsTUFFdEJHLFlBRnNCO0FBQUEsTUFFUkMsZUFGUTs7QUFJN0IsTUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxDQUFELEVBQVk7QUFDeEMsUUFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNyQixVQUFJTixTQUFTLENBQUNPLElBQVYsR0FBaUJDLE1BQWpCLEdBQTBCLENBQTlCLEVBQWlDO0FBQy9CVixhQUFLLENBQUNJLFlBQU4sQ0FDRUosS0FBSyxDQUFDVyxhQUFOLENBQW9CQyxFQUR0QixFQUVFWixLQUFLLENBQUNhLFdBQU4sQ0FBa0JELEVBRnBCLEVBR0VWLFNBSEY7QUFLRDs7QUFDREMsa0JBQVksQ0FBQyxFQUFELENBQVo7QUFDRDtBQUNGLEdBWEQ7O0FBYUEsU0FDRSxtRUFDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxLQUFLLENBQUNhLFdBQU4sSUFDQ2IsS0FBSyxDQUFDYSxXQUFOLENBQWtCQyxVQUFsQixDQUE2QkMsR0FBN0IsQ0FBaUMsVUFBQ2IsU0FBRCxFQUFvQjtBQUNuRCxXQUNFO0FBQUssU0FBRyxFQUFFQSxTQUFTLENBQUNVLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHNEQUFEO0FBQ0UsaUJBQVcsRUFBRVosS0FBSyxDQUFDYSxXQURyQjtBQUVFLG1CQUFhLEVBQUViLEtBQUssQ0FBQ1csYUFGdkI7QUFHRSxlQUFTLEVBQUVULFNBSGI7QUFJRSxxQkFBZSxFQUFFRixLQUFLLENBQUNnQixlQUp6QjtBQUtFLGlCQUFXLEVBQUVoQixLQUFLLENBQUNpQixXQUxyQjtBQU1FLGFBQU8sRUFBRWpCLEtBQUssQ0FBQ2tCLE9BTmpCO0FBT0UsdUJBQWlCLEVBQUVsQixLQUFLLENBQUNtQixpQkFQM0I7QUFRRSxxQkFBZSxFQUFFbkIsS0FBSyxDQUFDb0IsZUFSekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREY7QUFjRCxHQWZELENBRkosQ0FGRixFQXFCR2hCLFlBQVksSUFDWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFDRSxhQUFTLE1BRFg7QUFFRSxTQUFLLEVBQUVGLFNBRlQ7QUFHRSxVQUFNLEVBQUUsZ0JBQUNLLENBQUQsRUFBWTtBQUNsQixVQUFJQSxDQUFDLENBQUNjLE1BQUYsQ0FBU0MsS0FBVCxDQUFlYixJQUFmLEdBQXNCQyxNQUF0QixLQUFpQyxDQUFyQyxFQUF3Q0wsZUFBZSxDQUFDLEtBQUQsQ0FBZjtBQUN6QyxLQUxIO0FBTUUsWUFBUSxFQUFFLGtCQUFDRSxDQUFEO0FBQUEsYUFBT0osWUFBWSxDQUFDSSxDQUFDLENBQUNjLE1BQUYsQ0FBU0MsS0FBVixDQUFuQjtBQUFBLEtBTlo7QUFPRSxhQUFTLEVBQUUsbUJBQUNmLENBQUQ7QUFBQSxhQUFPRCxxQkFBcUIsQ0FBQ0MsQ0FBRCxDQUE1QjtBQUFBLEtBUGI7QUFRRSxhQUFTLEVBQUMsK0JBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREYsQ0F0QkosRUF3Q0U7QUFDRSxXQUFPLEVBQUU7QUFBQSxhQUFNRixlQUFlLENBQUMsSUFBRCxDQUFyQjtBQUFBLEtBRFg7QUFFRSxhQUFTLEVBQUMsbURBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkF4Q0YsQ0FERjtBQWlERDs7R0FsRVFOLFM7O0tBQUFBLFM7QUFtRU1BLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jaGVja2xpc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoZWNrbGlzdEl0ZW0gZnJvbSAnLi9jaGVja2xpc3RpdGVtJztcblxuZnVuY3Rpb24gQ2hlY2tsaXN0KHByb3BzOiBhbnkpIHtcbiAgY29uc3QgW2NoZWNrbGlzdCwgc2V0Q2hlY2tsaXN0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2FkZENoZWNrbGlzdCwgc2V0QWRkQ2hlY2tsaXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXRDaGVja2xpc3QgPSAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBpZiAoY2hlY2tsaXN0LnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHByb3BzLmFkZENoZWNrbGlzdChcbiAgICAgICAgICBwcm9wcy5jdXJyZW50Q29sdW1uLmlkLFxuICAgICAgICAgIHByb3BzLmN1cnJlbnRDYXJkLmlkLFxuICAgICAgICAgIGNoZWNrbGlzdFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgc2V0Q2hlY2tsaXN0KCcnKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRlYXRpbC10aXRsZVwiPkNoZWNrbGlzdDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge3Byb3BzLmN1cnJlbnRDYXJkICYmXG4gICAgICAgICAgcHJvcHMuY3VycmVudENhcmQuY2hlY2tsaXN0cy5tYXAoKGNoZWNrbGlzdDogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y2hlY2tsaXN0LmlkfT5cbiAgICAgICAgICAgICAgICA8Q2hlY2tsaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgY3VycmVudENhcmQ9e3Byb3BzLmN1cnJlbnRDYXJkfVxuICAgICAgICAgICAgICAgICAgY3VycmVudENvbHVtbj17cHJvcHMuY3VycmVudENvbHVtbn1cbiAgICAgICAgICAgICAgICAgIGNoZWNrbGlzdD17Y2hlY2tsaXN0fVxuICAgICAgICAgICAgICAgICAgdXBkYXRlQ2hlY2tsaXN0PXtwcm9wcy51cGRhdGVDaGVja2xpc3R9XG4gICAgICAgICAgICAgICAgICBhZGRBY3Rpdml0eT17cHJvcHMuYWRkQWN0aXZpdHl9XG4gICAgICAgICAgICAgICAgICBjb2x1bW5zPXtwcm9wcy5jb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgY29tcGxldGVDaGVja2xpc3Q9e3Byb3BzLmNvbXBsZXRlQ2hlY2tsaXN0fVxuICAgICAgICAgICAgICAgICAgZGVsZXRlQ2hlY2tsaXN0PXtwcm9wcy5kZWxldGVDaGVja2xpc3R9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICB7YWRkQ2hlY2tsaXN0ICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXktZmxleCBjaGVja2xpc3Qtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrbGlzdC1jaXJjbGUgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICB2YWx1ZT17Y2hlY2tsaXN0fVxuICAgICAgICAgICAgICBvbkJsdXI9eyhlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMCkgc2V0QWRkQ2hlY2tsaXN0KGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVja2xpc3QoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiBoYW5kbGVTdWJtaXRDaGVja2xpc3QoZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrbGlzdC1jb250ZW50IGJvcmRlci1ub25lXCJcbiAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFkZENoZWNrbGlzdCh0cnVlKX1cbiAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1kZWF0aWwtY2hlY2tsaXN0IHRleHQtc2t5Ymx1ZSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICA+XG4gICAgICAgICsgQWRkIENoZWNrbGlzdCBJdGVtXG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENoZWNrbGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/checklist.tsx\n");

/***/ })

})