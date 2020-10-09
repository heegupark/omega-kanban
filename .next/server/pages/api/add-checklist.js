module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/add-checklist.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./middleware/db/mongoose.tsx":
/*!************************************!*\
  !*** ./middleware/db/mongoose.tsx ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URL, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n  useCreateIndex: true,\n  useFindAndModify: false\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL2RiL21vbmdvb3NlLnRzeD81MDM2Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSTCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQUEsK0NBQVEsQ0FBQ0MsT0FBVCxDQUFpQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQTdCLEVBQTBDO0FBQ3hDQyxpQkFBZSxFQUFFLElBRHVCO0FBRXhDQyxvQkFBa0IsRUFBRSxJQUZvQjtBQUd4Q0MsZ0JBQWMsRUFBRSxJQUh3QjtBQUl4Q0Msa0JBQWdCLEVBQUU7QUFKc0IsQ0FBMUMiLCJmaWxlIjoiLi9taWRkbGV3YXJlL2RiL21vbmdvb3NlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmRlY2xhcmUgdmFyIHByb2Nlc3M6IHtcbiAgZW52OiB7XG4gICAgTU9OR09EQl9VUkw6IHN0cmluZztcbiAgfTtcbn07XG5tb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMLCB7XG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./middleware/db/mongoose.tsx\n");

/***/ }),

/***/ "./middleware/models/checklist.tsx":
/*!*****************************************!*\
  !*** ./middleware/models/checklist.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst checklistSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  cardId: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    required: true,\n    ref: 'Card'\n  },\n  checklist: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  isChecked: {\n    type: Boolean,\n    required: true,\n    default: false\n  }\n}, {\n  timestamps: true\n});\nconst Checklist = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Checklist || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Checklist', checklistSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checklist);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL21vZGVscy9jaGVja2xpc3QudHN4P2IxZjEiXSwibmFtZXMiOlsiY2hlY2tsaXN0U2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJjYXJkSWQiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlcXVpcmVkIiwicmVmIiwiY2hlY2tsaXN0IiwiU3RyaW5nIiwidHJpbSIsImlzQ2hlY2tlZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIkNoZWNrbGlzdCIsIm1vZGVscyIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBLE1BQU1BLGVBQXVCLEdBQUcsSUFBSUMsK0NBQVEsQ0FBQ0MsTUFBYixDQUM5QjtBQUNFQyxRQUFNLEVBQUU7QUFDTkMsUUFBSSxFQUFFSCwrQ0FBUSxDQUFDQyxNQUFULENBQWdCRyxLQUFoQixDQUFzQkMsUUFEdEI7QUFFTkMsWUFBUSxFQUFFLElBRko7QUFHTkMsT0FBRyxFQUFFO0FBSEMsR0FEVjtBQU1FQyxXQUFTLEVBQUU7QUFDVEwsUUFBSSxFQUFFTSxNQURHO0FBRVRILFlBQVEsRUFBRSxJQUZEO0FBR1RJLFFBQUksRUFBRTtBQUhHLEdBTmI7QUFXRUMsV0FBUyxFQUFFO0FBQ1RSLFFBQUksRUFBRVMsT0FERztBQUVUTixZQUFRLEVBQUUsSUFGRDtBQUdUTyxXQUFPLEVBQUU7QUFIQTtBQVhiLENBRDhCLEVBa0I5QjtBQUNFQyxZQUFVLEVBQUU7QUFEZCxDQWxCOEIsQ0FBaEM7QUF1QkEsTUFBTUMsU0FBUyxHQUNiZiwrQ0FBUSxDQUFDZ0IsTUFBVCxDQUFnQkQsU0FBaEIsSUFDQWYsK0NBQVEsQ0FBQ2lCLEtBQVQsQ0FBMkIsV0FBM0IsRUFBd0NsQixlQUF4QyxDQUZGO0FBR2VnQix3RUFBZiIsImZpbGUiOiIuL21pZGRsZXdhcmUvbW9kZWxzL2NoZWNrbGlzdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCB9IGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ2hlY2tsaXN0IGV4dGVuZHMgRG9jdW1lbnQge1xuICBjYXJkSWQ6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZDtcbiAgY2hlY2tsaXN0OiBTdHJpbmc7XG4gIGlzQ2hlY2tlZDogQm9vbGVhbjtcbn1cblxuY29uc3QgY2hlY2tsaXN0U2NoZW1hOiBTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgY2FyZElkOiB7XG4gICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHJlZjogJ0NhcmQnLFxuICAgIH0sXG4gICAgY2hlY2tsaXN0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgfSxcbiAgICBpc0NoZWNrZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9XG4pO1xuXG5jb25zdCBDaGVja2xpc3QgPVxuICBtb25nb29zZS5tb2RlbHMuQ2hlY2tsaXN0IHx8XG4gIG1vbmdvb3NlLm1vZGVsPElDaGVja2xpc3Q+KCdDaGVja2xpc3QnLCBjaGVja2xpc3RTY2hlbWEpO1xuZXhwb3J0IGRlZmF1bHQgQ2hlY2tsaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./middleware/models/checklist.tsx\n");

/***/ }),

/***/ "./pages/api/add-checklist.tsx":
/*!*************************************!*\
  !*** ./pages/api/add-checklist.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middleware_models_checklist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../middleware/models/checklist */ \"./middleware/models/checklist.tsx\");\n\n\n__webpack_require__(/*! ../../middleware/db/mongoose */ \"./middleware/db/mongoose.tsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (request, response) => {\n  const {\n    cardId,\n    checklist\n  } = request.body;\n\n  try {\n    const newChecklist = new _middleware_models_checklist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      cardId,\n      checklist\n    });\n    await newChecklist.save();\n\n    try {\n      return response.status(200).json({\n        success: true,\n        data: newChecklist\n      });\n    } catch (e) {\n      return response.status(500).json({\n        success: false,\n        message: 'failed to add a checklist'\n      });\n    }\n  } catch (e) {\n    return response.status(500).json({\n      success: false,\n      message: 'failed to add a checklist'\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYWRkLWNoZWNrbGlzdC50c3g/M2I3NiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiY2FyZElkIiwiY2hlY2tsaXN0IiwiYm9keSIsIm5ld0NoZWNrbGlzdCIsIkNoZWNrbGlzdCIsInNhdmUiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBOztBQUNBQSxtQkFBTyxDQUFDLGtFQUFELENBQVA7O0FBRWUsc0VBQU9DLE9BQVAsRUFBZ0NDLFFBQWhDLEtBQThEO0FBQzNFLFFBQU07QUFBRUMsVUFBRjtBQUFVQztBQUFWLE1BQXdCSCxPQUFPLENBQUNJLElBQXRDOztBQUNBLE1BQUk7QUFDRixVQUFNQyxZQUFZLEdBQUcsSUFBSUMsb0VBQUosQ0FBYztBQUFFSixZQUFGO0FBQVVDO0FBQVYsS0FBZCxDQUFyQjtBQUNBLFVBQU1FLFlBQVksQ0FBQ0UsSUFBYixFQUFOOztBQUNBLFFBQUk7QUFDRixhQUFPTixRQUFRLENBQUNPLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQXJCLENBQTBCO0FBQUVDLGVBQU8sRUFBRSxJQUFYO0FBQWlCQyxZQUFJLEVBQUVOO0FBQXZCLE9BQTFCLENBQVA7QUFDRCxLQUZELENBRUUsT0FBT08sQ0FBUCxFQUFVO0FBQ1YsYUFBT1gsUUFBUSxDQUFDTyxNQUFULENBQWdCLEdBQWhCLEVBQXFCQyxJQUFyQixDQUEwQjtBQUMvQkMsZUFBTyxFQUFFLEtBRHNCO0FBRS9CRyxlQUFPLEVBQUU7QUFGc0IsT0FBMUIsQ0FBUDtBQUlEO0FBQ0YsR0FYRCxDQVdFLE9BQU9ELENBQVAsRUFBVTtBQUNWLFdBQU9YLFFBQVEsQ0FDWk8sTUFESSxDQUNHLEdBREgsRUFFSkMsSUFGSSxDQUVDO0FBQUVDLGFBQU8sRUFBRSxLQUFYO0FBQWtCRyxhQUFPLEVBQUU7QUFBM0IsS0FGRCxDQUFQO0FBR0Q7QUFDRixDQWxCRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9hZGQtY2hlY2tsaXN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBDaGVja2xpc3QgZnJvbSAnLi4vLi4vbWlkZGxld2FyZS9tb2RlbHMvY2hlY2tsaXN0JztcbnJlcXVpcmUoJy4uLy4uL21pZGRsZXdhcmUvZGIvbW9uZ29vc2UnKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcXVlc3Q6IE5leHRBcGlSZXF1ZXN0LCByZXNwb25zZTogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHsgY2FyZElkLCBjaGVja2xpc3QgfSA9IHJlcXVlc3QuYm9keTtcbiAgdHJ5IHtcbiAgICBjb25zdCBuZXdDaGVja2xpc3QgPSBuZXcgQ2hlY2tsaXN0KHsgY2FyZElkLCBjaGVja2xpc3QgfSk7XG4gICAgYXdhaXQgbmV3Q2hlY2tsaXN0LnNhdmUoKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBuZXdDaGVja2xpc3QgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogJ2ZhaWxlZCB0byBhZGQgYSBjaGVja2xpc3QnLFxuICAgICAgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAuc3RhdHVzKDUwMClcbiAgICAgIC5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdmYWlsZWQgdG8gYWRkIGEgY2hlY2tsaXN0JyB9KTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/add-checklist.tsx\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });