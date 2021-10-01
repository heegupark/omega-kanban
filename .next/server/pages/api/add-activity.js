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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/add-activity.tsx");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URL, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n  useCreateIndex: true,\n  useFindAndModify: false\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL2RiL21vbmdvb3NlLnRzeD81MDM2Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSTCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQUEsK0NBQVEsQ0FBQ0MsT0FBVCxDQUFpQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQTdCLEVBQTBDO0FBQ3hDQyxpQkFBZSxFQUFFLElBRHVCO0FBRXhDQyxvQkFBa0IsRUFBRSxJQUZvQjtBQUd4Q0MsZ0JBQWMsRUFBRSxJQUh3QjtBQUl4Q0Msa0JBQWdCLEVBQUU7QUFKc0IsQ0FBMUMiLCJmaWxlIjoiLi9taWRkbGV3YXJlL2RiL21vbmdvb3NlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmRlY2xhcmUgbGV0IHByb2Nlc3M6IHtcbiAgZW52OiB7XG4gICAgTU9OR09EQl9VUkw6IHN0cmluZztcbiAgfTtcbn07XG5cbm1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsIHtcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./middleware/db/mongoose.tsx\n");

/***/ }),

/***/ "./middleware/models/activity.tsx":
/*!****************************************!*\
  !*** ./middleware/models/activity.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst activitySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  cardId: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    required: true,\n    ref: 'Card'\n  },\n  activity: {\n    type: String,\n    required: true,\n    trim: true\n  }\n}, {\n  timestamps: true\n});\nconst Activity = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Activity || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Activity', activitySchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Activity);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL21vZGVscy9hY3Rpdml0eS50c3g/NjgwMyJdLCJuYW1lcyI6WyJhY3Rpdml0eVNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwiY2FyZElkIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZXF1aXJlZCIsInJlZiIsImFjdGl2aXR5IiwiU3RyaW5nIiwidHJpbSIsInRpbWVzdGFtcHMiLCJBY3Rpdml0eSIsIm1vZGVscyIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBLE1BQU1BLGNBQXNCLEdBQUcsSUFBSUMsK0NBQVEsQ0FBQ0MsTUFBYixDQUM3QjtBQUNFQyxRQUFNLEVBQUU7QUFDTkMsUUFBSSxFQUFFSCwrQ0FBUSxDQUFDQyxNQUFULENBQWdCRyxLQUFoQixDQUFzQkMsUUFEdEI7QUFFTkMsWUFBUSxFQUFFLElBRko7QUFHTkMsT0FBRyxFQUFFO0FBSEMsR0FEVjtBQU1FQyxVQUFRLEVBQUU7QUFDUkwsUUFBSSxFQUFFTSxNQURFO0FBRVJILFlBQVEsRUFBRSxJQUZGO0FBR1JJLFFBQUksRUFBRTtBQUhFO0FBTlosQ0FENkIsRUFhN0I7QUFDRUMsWUFBVSxFQUFFO0FBRGQsQ0FiNkIsQ0FBL0I7QUFrQkEsTUFBTUMsUUFBUSxHQUNaWiwrQ0FBUSxDQUFDYSxNQUFULENBQWdCRCxRQUFoQixJQUNBWiwrQ0FBUSxDQUFDYyxLQUFULENBQTBCLFVBQTFCLEVBQXNDZixjQUF0QyxDQUZGO0FBR2VhLHVFQUFmIiwiZmlsZSI6Ii4vbWlkZGxld2FyZS9tb2RlbHMvYWN0aXZpdHkudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgRG9jdW1lbnQgfSBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFjdGl2aXR5IGV4dGVuZHMgRG9jdW1lbnQge1xuICBjYXJkSWQ6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZDtcbiAgYWN0aXZpdHk6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBEYXRlO1xufVxuXG5jb25zdCBhY3Rpdml0eVNjaGVtYTogU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIGNhcmRJZDoge1xuICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICByZWY6ICdDYXJkJyxcbiAgICB9LFxuICAgIGFjdGl2aXR5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH1cbik7XG5cbmNvbnN0IEFjdGl2aXR5ID1cbiAgbW9uZ29vc2UubW9kZWxzLkFjdGl2aXR5IHx8XG4gIG1vbmdvb3NlLm1vZGVsPElBY3Rpdml0eT4oJ0FjdGl2aXR5JywgYWN0aXZpdHlTY2hlbWEpO1xuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdHk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./middleware/models/activity.tsx\n");

/***/ }),

/***/ "./pages/api/add-activity.tsx":
/*!************************************!*\
  !*** ./pages/api/add-activity.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middleware_models_activity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../middleware/models/activity */ \"./middleware/models/activity.tsx\");\n\n\n__webpack_require__(/*! ../../middleware/db/mongoose */ \"./middleware/db/mongoose.tsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (request, response) => {\n  const {\n    cardId,\n    activity\n  } = request.body;\n\n  try {\n    const newActivity = new _middleware_models_activity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      cardId,\n      activity\n    });\n    await newActivity.save();\n\n    try {\n      return response.status(200).json({\n        success: true,\n        data: newActivity\n      });\n    } catch (e) {\n      return response.status(500).json({\n        success: false,\n        message: 'failed to add an activity'\n      });\n    }\n  } catch (e) {\n    return response.status(500).json({\n      success: false,\n      message: 'failed to add an activity'\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYWRkLWFjdGl2aXR5LnRzeD8wMTBhIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJjYXJkSWQiLCJhY3Rpdml0eSIsImJvZHkiLCJuZXdBY3Rpdml0eSIsIkFjdGl2aXR5Iiwic2F2ZSIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSIsImUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7O0FBQ0FBLG1CQUFPLENBQUMsa0VBQUQsQ0FBUDs7QUFFZSxzRUFBT0MsT0FBUCxFQUFnQ0MsUUFBaEMsS0FBOEQ7QUFDM0UsUUFBTTtBQUFFQyxVQUFGO0FBQVVDO0FBQVYsTUFBdUJILE9BQU8sQ0FBQ0ksSUFBckM7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLFdBQVcsR0FBRyxJQUFJQyxtRUFBSixDQUFhO0FBQUVKLFlBQUY7QUFBVUM7QUFBVixLQUFiLENBQXBCO0FBQ0EsVUFBTUUsV0FBVyxDQUFDRSxJQUFaLEVBQU47O0FBQ0EsUUFBSTtBQUNGLGFBQU9OLFFBQVEsQ0FBQ08sTUFBVCxDQUFnQixHQUFoQixFQUFxQkMsSUFBckIsQ0FBMEI7QUFBRUMsZUFBTyxFQUFFLElBQVg7QUFBaUJDLFlBQUksRUFBRU47QUFBdkIsT0FBMUIsQ0FBUDtBQUNELEtBRkQsQ0FFRSxPQUFPTyxDQUFQLEVBQVU7QUFDVixhQUFPWCxRQUFRLENBQUNPLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQXJCLENBQTBCO0FBQy9CQyxlQUFPLEVBQUUsS0FEc0I7QUFFL0JHLGVBQU8sRUFBRTtBQUZzQixPQUExQixDQUFQO0FBSUQ7QUFDRixHQVhELENBV0UsT0FBT0QsQ0FBUCxFQUFVO0FBQ1YsV0FBT1gsUUFBUSxDQUNaTyxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7QUFBRUMsYUFBTyxFQUFFLEtBQVg7QUFBa0JHLGFBQU8sRUFBRTtBQUEzQixLQUZELENBQVA7QUFHRDtBQUNGLENBbEJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2FkZC1hY3Rpdml0eS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgQWN0aXZpdHkgZnJvbSAnLi4vLi4vbWlkZGxld2FyZS9tb2RlbHMvYWN0aXZpdHknO1xucmVxdWlyZSgnLi4vLi4vbWlkZGxld2FyZS9kYi9tb25nb29zZScpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxdWVzdDogTmV4dEFwaVJlcXVlc3QsIHJlc3BvbnNlOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgeyBjYXJkSWQsIGFjdGl2aXR5IH0gPSByZXF1ZXN0LmJvZHk7XG4gIHRyeSB7XG4gICAgY29uc3QgbmV3QWN0aXZpdHkgPSBuZXcgQWN0aXZpdHkoeyBjYXJkSWQsIGFjdGl2aXR5IH0pO1xuICAgIGF3YWl0IG5ld0FjdGl2aXR5LnNhdmUoKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBuZXdBY3Rpdml0eSB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAnZmFpbGVkIHRvIGFkZCBhbiBhY3Rpdml0eScsXG4gICAgICB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgIC5zdGF0dXMoNTAwKVxuICAgICAgLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ2ZhaWxlZCB0byBhZGQgYW4gYWN0aXZpdHknIH0pO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/add-activity.tsx\n");

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