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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/update-column-title.tsx");
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

/***/ "./middleware/models/column.tsx":
/*!**************************************!*\
  !*** ./middleware/models/column.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst columnSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  projectId: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    required: true,\n    ref: 'Router'\n  },\n  title: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  cards: [{\n    card: {\n      type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n      required: false,\n      ref: 'Card'\n    }\n  }],\n  colorIndex: {\n    type: Number,\n    required: true\n  }\n}, {\n  timestamps: true\n});\nconst Column = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Column || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Column', columnSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL21vZGVscy9jb2x1bW4udHN4P2Y1MmMiXSwibmFtZXMiOlsiY29sdW1uU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJwcm9qZWN0SWQiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlcXVpcmVkIiwicmVmIiwidGl0bGUiLCJTdHJpbmciLCJ0cmltIiwiY2FyZHMiLCJjYXJkIiwiY29sb3JJbmRleCIsIk51bWJlciIsInRpbWVzdGFtcHMiLCJDb2x1bW4iLCJtb2RlbHMiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQSxNQUFNQSxZQUFvQixHQUFHLElBQUlDLCtDQUFRLENBQUNDLE1BQWIsQ0FDM0I7QUFDRUMsV0FBUyxFQUFFO0FBQ1RDLFFBQUksRUFBRUgsK0NBQVEsQ0FBQ0MsTUFBVCxDQUFnQkcsS0FBaEIsQ0FBc0JDLFFBRG5CO0FBRVRDLFlBQVEsRUFBRSxJQUZEO0FBR1RDLE9BQUcsRUFBRTtBQUhJLEdBRGI7QUFNRUMsT0FBSyxFQUFFO0FBQ0xMLFFBQUksRUFBRU0sTUFERDtBQUVMSCxZQUFRLEVBQUUsSUFGTDtBQUdMSSxRQUFJLEVBQUU7QUFIRCxHQU5UO0FBV0VDLE9BQUssRUFBRSxDQUNMO0FBQ0VDLFFBQUksRUFBRTtBQUNKVCxVQUFJLEVBQUVILCtDQUFRLENBQUNDLE1BQVQsQ0FBZ0JHLEtBQWhCLENBQXNCQyxRQUR4QjtBQUVKQyxjQUFRLEVBQUUsS0FGTjtBQUdKQyxTQUFHLEVBQUU7QUFIRDtBQURSLEdBREssQ0FYVDtBQW9CRU0sWUFBVSxFQUFFO0FBQ1ZWLFFBQUksRUFBRVcsTUFESTtBQUVWUixZQUFRLEVBQUU7QUFGQTtBQXBCZCxDQUQyQixFQTBCM0I7QUFDRVMsWUFBVSxFQUFFO0FBRGQsQ0ExQjJCLENBQTdCO0FBK0JBLE1BQU1DLE1BQU0sR0FDVmhCLCtDQUFRLENBQUNpQixNQUFULENBQWdCRCxNQUFoQixJQUEwQmhCLCtDQUFRLENBQUNrQixLQUFULENBQXdCLFFBQXhCLEVBQWtDbkIsWUFBbEMsQ0FENUI7QUFFZWlCLHFFQUFmIiwiZmlsZSI6Ii4vbWlkZGxld2FyZS9tb2RlbHMvY29sdW1uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEsIERvY3VtZW50IH0gZnJvbSAnbW9uZ29vc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb2x1bW4gZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHByb2plY3RJZDogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkO1xuICB0aXRsZTogc3RyaW5nO1xuICBjb2xvckluZGV4OiBOdW1iZXI7XG59XG5cbmNvbnN0IGNvbHVtblNjaGVtYTogU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIHByb2plY3RJZDoge1xuICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICByZWY6ICdSb3V0ZXInLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICB9LFxuICAgIGNhcmRzOiBbXG4gICAgICB7XG4gICAgICAgIGNhcmQ6IHtcbiAgICAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgIHJlZjogJ0NhcmQnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIGNvbG9ySW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9XG4pO1xuXG5jb25zdCBDb2x1bW4gPVxuICBtb25nb29zZS5tb2RlbHMuQ29sdW1uIHx8IG1vbmdvb3NlLm1vZGVsPElDb2x1bW4+KCdDb2x1bW4nLCBjb2x1bW5TY2hlbWEpO1xuZXhwb3J0IGRlZmF1bHQgQ29sdW1uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./middleware/models/column.tsx\n");

/***/ }),

/***/ "./pages/api/update-column-title.tsx":
/*!*******************************************!*\
  !*** ./pages/api/update-column-title.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middleware_models_column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../middleware/models/column */ \"./middleware/models/column.tsx\");\n\n\n__webpack_require__(/*! ../../middleware/db/mongoose */ \"./middleware/db/mongoose.tsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (request, response) => {\n  const {\n    _id,\n    title\n  } = request.body;\n\n  try {\n    const result = await _middleware_models_column__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateOne({\n      _id\n    }, {\n      $set: {\n        title\n      }\n    });\n    return response.status(200).json({\n      success: true\n    });\n  } catch (e) {\n    return response.status(500).json({\n      success: false,\n      message: 'failed to update a column title'\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXBkYXRlLWNvbHVtbi10aXRsZS50c3g/YzIxMiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiX2lkIiwidGl0bGUiLCJib2R5IiwicmVzdWx0IiwiQ29sdW1uIiwidXBkYXRlT25lIiwiJHNldCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTs7QUFDQUEsbUJBQU8sQ0FBQyxrRUFBRCxDQUFQOztBQUVlLHNFQUFPQyxPQUFQLEVBQWdDQyxRQUFoQyxLQUE4RDtBQUMzRSxRQUFNO0FBQUVDLE9BQUY7QUFBT0M7QUFBUCxNQUFpQkgsT0FBTyxDQUFDSSxJQUEvQjs7QUFDQSxNQUFJO0FBQ0YsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLGlFQUFNLENBQUNDLFNBQVAsQ0FBaUI7QUFBRUw7QUFBRixLQUFqQixFQUEwQjtBQUFFTSxVQUFJLEVBQUU7QUFBRUw7QUFBRjtBQUFSLEtBQTFCLENBQXJCO0FBQ0EsV0FBT0YsUUFBUSxDQUFDUSxNQUFULENBQWdCLEdBQWhCLEVBQXFCQyxJQUFyQixDQUEwQjtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUExQixDQUFQO0FBQ0QsR0FIRCxDQUdFLE9BQU9DLENBQVAsRUFBVTtBQUNWLFdBQU9YLFFBQVEsQ0FDWlEsTUFESSxDQUNHLEdBREgsRUFFSkMsSUFGSSxDQUVDO0FBQUVDLGFBQU8sRUFBRSxLQUFYO0FBQWtCRSxhQUFPLEVBQUU7QUFBM0IsS0FGRCxDQUFQO0FBR0Q7QUFDRixDQVZEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3VwZGF0ZS1jb2x1bW4tdGl0bGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuLi8uLi9taWRkbGV3YXJlL21vZGVscy9jb2x1bW4nO1xucmVxdWlyZSgnLi4vLi4vbWlkZGxld2FyZS9kYi9tb25nb29zZScpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxdWVzdDogTmV4dEFwaVJlcXVlc3QsIHJlc3BvbnNlOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgeyBfaWQsIHRpdGxlIH0gPSByZXF1ZXN0LmJvZHk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQ29sdW1uLnVwZGF0ZU9uZSh7IF9pZCB9LCB7ICRzZXQ6IHsgdGl0bGUgfSB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgIC5zdGF0dXMoNTAwKVxuICAgICAgLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ2ZhaWxlZCB0byB1cGRhdGUgYSBjb2x1bW4gdGl0bGUnIH0pO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/update-column-title.tsx\n");

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