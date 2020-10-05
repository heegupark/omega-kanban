module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/disclaimer.tsx":
/*!***********************************!*\
  !*** ./components/disclaimer.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Modal */ \"@material-ui/core/Modal\");\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Backdrop */ \"@material-ui/core/Backdrop\");\n/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Fade */ \"@material-ui/core/Fade\");\n/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/components/disclaimer.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  modal: {\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center'\n  },\n  paper: {\n    backgroundColor: 'rgb(222, 222, 222)',\n    border: '1px solid rgb(255, 192, 47)',\n    boxShadow: theme.shadows[5],\n    padding: theme.spacing(1, 2, 2),\n    textAlign: 'center',\n    width: '350px',\n    borderRadius: '5px',\n    fontSize: '12px'\n  },\n  title: {\n    fontSize: '22px',\n    color: 'rgb(66, 54, 48)'\n  },\n  button: {\n    height: '30px',\n    marginTop: '10px',\n    marginBottom: '5px'\n  },\n  paragraph: {\n    fontSize: '12px',\n    color: 'rgb(66, 54, 48)',\n    marginBottom: '5px'\n  },\n  support: {\n    fontSize: '12px',\n    color: 'rgb(66, 54, 48)',\n    marginTop: '5px'\n  },\n  email: {\n    fontSize: '12px',\n    color: 'rgb(66, 54, 48)'\n  }\n}));\n\nfunction Disclaimer(props) {\n  const classes = useStyles();\n  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);\n\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  const handleAcceptClick = () => {\n    localStorage.setItem('omegakanbanaccept', 'true');\n    props.setIsAcceptDisclaimer(true);\n    handleClose();\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: classes.modal,\n    open: open,\n    closeAfterTransition: true,\n    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_3___default.a,\n    BackdropProps: {\n      timeout: 500\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    in: open,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    className: classes.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, \"Welcome to Omega Kanban\"), __jsx(\"div\", {\n    className: classes.paragraph,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, \"This app is created strictly for demonstration purposes. By clicking the button below, you accept that Omega Kanban do not guarantee storing your messages.\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    className: classes.button,\n    variant: \"outlined\",\n    color: \"secondary\",\n    onClick: handleAcceptClick,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }, \"Accept\"), __jsx(\"p\", {\n    className: classes.paragraph,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }, \"I built this app using React, React Hooks, Next.js and Typescript to provide Kanban functions.\"), __jsx(\"div\", {\n    className: classes.support,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }\n  }, 'If you have any questions, please email to ', __jsx(\"a\", {\n    className: classes.email,\n    href: \"mailto:omegathrone@omegathrone.com\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 15\n    }\n  }, \"omegathrone@omegathrone.com\"), \".\")))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Disclaimer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rpc2NsYWltZXIudHN4P2EzZWYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibW9kYWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFwZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwidGl0bGUiLCJjb2xvciIsImJ1dHRvbiIsImhlaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInBhcmFncmFwaCIsInN1cHBvcnQiLCJlbWFpbCIsIkRpc2NsYWltZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJvcGVuIiwic2V0T3BlbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUFjY2VwdENsaWNrIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNldElzQWNjZXB0RGlzY2xhaW1lciIsIkJhY2tkcm9wIiwidGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDdkNDLE9BQUssRUFBRTtBQUNMQyxXQUFPLEVBQUUsTUFESjtBQUVMQyxjQUFVLEVBQUUsUUFGUDtBQUdMQyxrQkFBYyxFQUFFO0FBSFgsR0FEZ0M7QUFNdkNDLE9BQUssRUFBRTtBQUNMQyxtQkFBZSxFQUFFLG9CQURaO0FBRUxDLFVBQU0sRUFBRSw2QkFGSDtBQUdMQyxhQUFTLEVBQUVSLEtBQUssQ0FBQ1MsT0FBTixDQUFjLENBQWQsQ0FITjtBQUlMQyxXQUFPLEVBQUVWLEtBQUssQ0FBQ1csT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIs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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUZGLE1BbkJGLENBREYsQ0FURixDQURGLENBREY7QUE4Q0Q7O0FBQ2NDLHlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9kaXNjbGFpbWVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xuaW1wb3J0IEZhZGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFkZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBtb2RhbDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDIyMiwgMjIyLCAyMjIpJyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgcmdiKDI1NSwgMTkyLCA0NyknLFxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDIsIDIpLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgd2lkdGg6ICczNTBweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBmb250U2l6ZTogJzEycHgnLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiAnMjJweCcsXG4gICAgY29sb3I6ICdyZ2IoNjYsIDU0LCA0OCknLFxuICB9LFxuICBidXR0b246IHtcbiAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICBtYXJnaW5Ub3A6ICcxMHB4JyxcbiAgICBtYXJnaW5Cb3R0b206ICc1cHgnLFxuICB9LFxuICBwYXJhZ3JhcGg6IHtcbiAgICBmb250U2l6ZTogJzEycHgnLFxuICAgIGNvbG9yOiAncmdiKDY2LCA1NCwgNDgpJyxcbiAgICBtYXJnaW5Cb3R0b206ICc1cHgnLFxuICB9LFxuICBzdXBwb3J0OiB7XG4gICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICBjb2xvcjogJ3JnYig2NiwgNTQsIDQ4KScsXG4gICAgbWFyZ2luVG9wOiAnNXB4JyxcbiAgfSxcbiAgZW1haWw6IHtcbiAgICBmb250U2l6ZTogJzEycHgnLFxuICAgIGNvbG9yOiAncmdiKDY2LCA1NCwgNDgpJyxcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIERpc2NsYWltZXJQcm9wcyB7XG4gIHNldElzQWNjZXB0RGlzY2xhaW1lcjogKGlzQWNjZXB0RGlzY2xhaW1lcjogYm9vbGVhbikgPT4gdm9pZDtcbn1cbmZ1bmN0aW9uIERpc2NsYWltZXIocHJvcHM6IERpc2NsYWltZXJQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFjY2VwdENsaWNrID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvbWVnYWthbmJhbmFjY2VwdCcsICd0cnVlJyk7XG4gICAgcHJvcHMuc2V0SXNBY2NlcHREaXNjbGFpbWVyKHRydWUpO1xuICAgIGhhbmRsZUNsb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE1vZGFsXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tb2RhbH1cbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XG4gICAgICAgICAgdGltZW91dDogNTAwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8RmFkZSBpbj17b3Blbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5XZWxjb21lIHRvIE9tZWdhIEthbmJhbjwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgIFRoaXMgYXBwIGlzIGNyZWF0ZWQgc3RyaWN0bHkgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMuIEJ5XG4gICAgICAgICAgICAgIGNsaWNraW5nIHRoZSBidXR0b24gYmVsb3csIHlvdSBhY2NlcHQgdGhhdCBPbWVnYSBLYW5iYW4gZG8gbm90XG4gICAgICAgICAgICAgIGd1YXJhbnRlZSBzdG9yaW5nIHlvdXIgbWVzc2FnZXMuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBY2NlcHRDbGlja31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWNjZXB0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgICAgICBJIGJ1aWx0IHRoaXMgYXBwIHVzaW5nIFJlYWN0LCBSZWFjdCBIb29rcywgTmV4dC5qcyBhbmQgVHlwZXNjcmlwdFxuICAgICAgICAgICAgICB0byBwcm92aWRlIEthbmJhbiBmdW5jdGlvbnMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdXBwb3J0fT5cbiAgICAgICAgICAgICAgeydJZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zLCBwbGVhc2UgZW1haWwgdG8gJ31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZW1haWx9XG4gICAgICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpvbWVnYXRocm9uZUBvbWVnYXRocm9uZS5jb21cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgb21lZ2F0aHJvbmVAb21lZ2F0aHJvbmUuY29tXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRmFkZT5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBEaXNjbGFpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/disclaimer.tsx\n");

/***/ }),

/***/ "./components/project-name.tsx":
/*!*************************************!*\
  !*** ./components/project-name.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/components/project-name.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst randomWords = __webpack_require__(/*! random-words */ \"random-words\");\n\nfunction ProjectName() {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  const [projectName, setProjectName] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('');\n\n  const handleStartBtnClick = () => {\n    const _id = Object(uuid__WEBPACK_IMPORTED_MODULE_4__[\"v4\"])();\n\n    if (projectName.length === 0) {\n      const randomProjectName = randomWords(); // props.setProjectName(randomProjectName);\n\n      router.replace(`/${_id}/${randomProjectName}`);\n    } else {\n      // props.setProjectName(projectName);\n      router.replace(`/${_id}/${projectName}`);\n    } // props.setView('board');\n\n  };\n\n  return __jsx(\"div\", {\n    className: `home flex-center bg-head-0`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    className: \"project-name\",\n    noValidate: true,\n    autoComplete: \"off\",\n    onSubmit: () => handleStartBtnClick(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    className: \"project-name-text\",\n    id: \"standard-basic\",\n    label: \"project name\",\n    value: projectName,\n    onChange: e => setProjectName(e.target.value),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    onClick: () => handleStartBtnClick(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, \"Start\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectName);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2plY3QtbmFtZS50c3g/YmNlYiJdLCJuYW1lcyI6WyJyYW5kb21Xb3JkcyIsInJlcXVpcmUiLCJQcm9qZWN0TmFtZSIsInJvdXRlciIsInVzZVJvdXRlciIsInByb2plY3ROYW1lIiwic2V0UHJvamVjdE5hbWUiLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlU3RhcnRCdG5DbGljayIsIl9pZCIsInV1aWR2NCIsImxlbmd0aCIsInJhbmRvbVByb2plY3ROYW1lIiwicmVwbGFjZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQTNCOztBQUVBLFNBQVNDLFdBQVQsR0FBdUI7QUFDckIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU0sQ0FBQ0MsV0FBRCxFQUFjQyxjQUFkLElBQWdDQyw0Q0FBSyxDQUFDQyxRQUFOLENBQXVCLEVBQXZCLENBQXRDOztBQUVBLFFBQU1DLG1CQUFtQixHQUFHLE1BQU07QUFDaEMsVUFBTUMsR0FBRyxHQUFHQywrQ0FBTSxFQUFsQjs7QUFDQSxRQUFJTixXQUFXLENBQUNPLE1BQVosS0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUIsWUFBTUMsaUJBQWlCLEdBQUdiLFdBQVcsRUFBckMsQ0FENEIsQ0FFNUI7O0FBQ0FHLFlBQU0sQ0FBQ1csT0FBUCxDQUFnQixJQUFHSixHQUFJLElBQUdHLGlCQUFrQixFQUE1QztBQUNELEtBSkQsTUFJTztBQUNMO0FBQ0FWLFlBQU0sQ0FBQ1csT0FBUCxDQUFnQixJQUFHSixHQUFJLElBQUdMLFdBQVksRUFBdEM7QUFDRCxLQVQrQixDQVVoQzs7QUFDRCxHQVhEOztBQWFBLFNBQ0U7QUFBSyxhQUFTLEVBQUcsNEJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxjQURaO0FBRUUsY0FBVSxNQUZaO0FBR0UsZ0JBQVksRUFBQyxLQUhmO0FBSUUsWUFBUSxFQUFFLE1BQU1JLG1CQUFtQixFQUpyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxrRUFBRDtBQUNFLGFBQVMsRUFBQyxtQkFEWjtBQUVFLE1BQUUsRUFBQyxnQkFGTDtBQUdFLFNBQUssRUFBQyxjQUhSO0FBSUUsU0FBSyxFQUFFSixXQUpUO0FBS0UsWUFBUSxFQUFHVSxDQUFELElBQU9ULGNBQWMsQ0FBQ1MsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FMakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBYUUsTUFBQywrREFBRDtBQUFRLFdBQU8sRUFBRSxNQUFNUixtQkFBbUIsRUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGLENBREYsQ0FERjtBQW1CRDs7QUFDY1AsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3QtbmFtZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IElNYWluUHJvcHMgZnJvbSAnLi9pbnRlcmZhY2VzL2ltYWlucHJvcHMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmNvbnN0IHJhbmRvbVdvcmRzID0gcmVxdWlyZSgncmFuZG9tLXdvcmRzJyBhcyBzdHJpbmcpO1xuXG5mdW5jdGlvbiBQcm9qZWN0TmFtZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtwcm9qZWN0TmFtZSwgc2V0UHJvamVjdE5hbWVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPignJyk7XG5cbiAgY29uc3QgaGFuZGxlU3RhcnRCdG5DbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBfaWQgPSB1dWlkdjQoKTtcbiAgICBpZiAocHJvamVjdE5hbWUubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCByYW5kb21Qcm9qZWN0TmFtZSA9IHJhbmRvbVdvcmRzKCk7XG4gICAgICAvLyBwcm9wcy5zZXRQcm9qZWN0TmFtZShyYW5kb21Qcm9qZWN0TmFtZSk7XG4gICAgICByb3V0ZXIucmVwbGFjZShgLyR7X2lkfS8ke3JhbmRvbVByb2plY3ROYW1lfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBwcm9wcy5zZXRQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSk7XG4gICAgICByb3V0ZXIucmVwbGFjZShgLyR7X2lkfS8ke3Byb2plY3ROYW1lfWApO1xuICAgIH1cbiAgICAvLyBwcm9wcy5zZXRWaWV3KCdib2FyZCcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Bob21lIGZsZXgtY2VudGVyIGJnLWhlYWQtMGB9PlxuICAgICAgPGZvcm1cbiAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdC1uYW1lXCJcbiAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICBvblN1Ym1pdD17KCkgPT4gaGFuZGxlU3RhcnRCdG5DbGljaygpfVxuICAgICAgPlxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdC1uYW1lLXRleHRcIlxuICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgIGxhYmVsPVwicHJvamVjdCBuYW1lXCJcbiAgICAgICAgICB2YWx1ZT17cHJvamVjdE5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcm9qZWN0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU3RhcnRCdG5DbGljaygpfT5TdGFydDwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdE5hbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/project-name.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_project_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/project-name */ \"./components/project-name.tsx\");\n/* harmony import */ var _components_disclaimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/disclaimer */ \"./components/disclaimer.tsx\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Main() {\n  const [projectName, setProjectName] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('');\n  const {\n    0: isAcceptDisclaimer,\n    1: setIsAcceptDisclaimer\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (localStorage.getItem('omegakanbanaccept')) {\n      setIsAcceptDisclaimer(true);\n    }\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_project_name__WEBPACK_IMPORTED_MODULE_1__[\"default\"] // setView={setView}\n  // setProjectName={setProjectName}\n  // projectName={projectName}\n  , {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }), !isAcceptDisclaimer && __jsx(_components_disclaimer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    setIsAcceptDisclaimer: setIsAcceptDisclaimer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJNYWluIiwicHJvamVjdE5hbWUiLCJzZXRQcm9qZWN0TmFtZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJpc0FjY2VwdERpc2NsYWltZXIiLCJzZXRJc0FjY2VwdERpc2NsYWltZXIiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsUUFBTSxDQUFDQyxXQUFELEVBQWNDLGNBQWQsSUFBZ0NDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGtCQUFEO0FBQUEsT0FBcUJDO0FBQXJCLE1BQThDRixzREFBUSxDQUFDLEtBQUQsQ0FBNUQ7QUFFQUcseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLG1CQUFyQixDQUFKLEVBQStDO0FBQzdDSCwyQkFBcUIsQ0FBQyxJQUFELENBQXJCO0FBQ0Q7QUFDRixHQUpRLENBQVQ7QUFNQSxTQUNFLG1FQUNFLE1BQUMsZ0VBQUQsQ0FDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRyxDQUFDRCxrQkFBRCxJQUNDLE1BQUMsOERBQUQ7QUFBWSx5QkFBcUIsRUFBRUMscUJBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQURGO0FBWUQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9qZWN0TmFtZSBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3QtbmFtZSc7XG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi9jb21wb25lbnRzL2Rpc2NsYWltZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCBbcHJvamVjdE5hbWUsIHNldFByb2plY3ROYW1lXSA9IFJlYWN0LnVzZVN0YXRlKCcnIGFzIGFueSk7XG4gIGNvbnN0IFtpc0FjY2VwdERpc2NsYWltZXIsIHNldElzQWNjZXB0RGlzY2xhaW1lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29tZWdha2FuYmFuYWNjZXB0JykpIHtcbiAgICAgIHNldElzQWNjZXB0RGlzY2xhaW1lcih0cnVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQcm9qZWN0TmFtZVxuICAgICAgLy8gc2V0Vmlldz17c2V0Vmlld31cbiAgICAgIC8vIHNldFByb2plY3ROYW1lPXtzZXRQcm9qZWN0TmFtZX1cbiAgICAgIC8vIHByb2plY3ROYW1lPXtwcm9qZWN0TmFtZX1cbiAgICAgIC8+XG4gICAgICB7IWlzQWNjZXB0RGlzY2xhaW1lciAmJiAoXG4gICAgICAgIDxEaXNjbGFpbWVyIHNldElzQWNjZXB0RGlzY2xhaW1lcj17c2V0SXNBY2NlcHREaXNjbGFpbWVyfSAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@material-ui/core/Backdrop":
/*!*********************************************!*\
  !*** external "@material-ui/core/Backdrop" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Backdrop\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcFwiPzJlMTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Backdrop\n");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIj81NzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Button\n");

/***/ }),

/***/ "@material-ui/core/Fade":
/*!*****************************************!*\
  !*** external "@material-ui/core/Fade" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Fade\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWRlXCI/ZDg0MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9GYWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFkZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Fade\n");

/***/ }),

/***/ "@material-ui/core/Modal":
/*!******************************************!*\
  !*** external "@material-ui/core/Modal" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Modal\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbFwiP2JkYjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Modal\n");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIj85MTFhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/TextField\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "random-words":
/*!*******************************!*\
  !*** external "random-words" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"random-words\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYW5kb20td29yZHNcIj9lNTYxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJhbmRvbS13b3Jkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJhbmRvbS13b3Jkc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///random-words\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCI/MzcxMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1dWlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///uuid\n");

/***/ })

/******/ });