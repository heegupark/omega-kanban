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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/add-router.tsx");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst columnSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  projectId: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    required: true,\n    ref: 'Router'\n  },\n  title: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  // cards: [\n  //   {\n  //     card: {\n  //       type: mongoose.Schema.Types.ObjectId,\n  //       required: false,\n  //       ref: 'Card',\n  //     },\n  //   },\n  // ],\n  colorIndex: {\n    type: Number,\n    required: true\n  }\n}, {\n  timestamps: true\n});\nconst Column = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Column || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Column', columnSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL21vZGVscy9jb2x1bW4udHN4P2Y1MmMiXSwibmFtZXMiOlsiY29sdW1uU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJwcm9qZWN0SWQiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlcXVpcmVkIiwicmVmIiwidGl0bGUiLCJTdHJpbmciLCJ0cmltIiwiY29sb3JJbmRleCIsIk51bWJlciIsInRpbWVzdGFtcHMiLCJDb2x1bW4iLCJtb2RlbHMiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQSxNQUFNQSxZQUFvQixHQUFHLElBQUlDLCtDQUFRLENBQUNDLE1BQWIsQ0FDM0I7QUFDRUMsV0FBUyxFQUFFO0FBQ1RDLFFBQUksRUFBRUgsK0NBQVEsQ0FBQ0MsTUFBVCxDQUFnQkcsS0FBaEIsQ0FBc0JDLFFBRG5CO0FBRVRDLFlBQVEsRUFBRSxJQUZEO0FBR1RDLE9BQUcsRUFBRTtBQUhJLEdBRGI7QUFNRUMsT0FBSyxFQUFFO0FBQ0xMLFFBQUksRUFBRU0sTUFERDtBQUVMSCxZQUFRLEVBQUUsSUFGTDtBQUdMSSxRQUFJLEVBQUU7QUFIRCxHQU5UO0FBV0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFlBQVUsRUFBRTtBQUNWUixRQUFJLEVBQUVTLE1BREk7QUFFVk4sWUFBUSxFQUFFO0FBRkE7QUFwQmQsQ0FEMkIsRUEwQjNCO0FBQ0VPLFlBQVUsRUFBRTtBQURkLENBMUIyQixDQUE3QjtBQStCQSxNQUFNQyxNQUFNLEdBQ1ZkLCtDQUFRLENBQUNlLE1BQVQsQ0FBZ0JELE1BQWhCLElBQTBCZCwrQ0FBUSxDQUFDZ0IsS0FBVCxDQUF3QixRQUF4QixFQUFrQ2pCLFlBQWxDLENBRDVCO0FBRWVlLHFFQUFmIiwiZmlsZSI6Ii4vbWlkZGxld2FyZS9tb2RlbHMvY29sdW1uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEsIERvY3VtZW50IH0gZnJvbSAnbW9uZ29vc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb2x1bW4gZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHByb2plY3RJZDogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkO1xuICB0aXRsZTogc3RyaW5nO1xuICBjb2xvckluZGV4OiBOdW1iZXI7XG59XG5cbmNvbnN0IGNvbHVtblNjaGVtYTogU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIHByb2plY3RJZDoge1xuICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICByZWY6ICdSb3V0ZXInLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICB9LFxuICAgIC8vIGNhcmRzOiBbXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGNhcmQ6IHtcbiAgICAvLyAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgLy8gICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIC8vICAgICAgIHJlZjogJ0NhcmQnLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfSxcbiAgICAvLyBdLFxuICAgIGNvbG9ySW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9XG4pO1xuXG5jb25zdCBDb2x1bW4gPVxuICBtb25nb29zZS5tb2RlbHMuQ29sdW1uIHx8IG1vbmdvb3NlLm1vZGVsPElDb2x1bW4+KCdDb2x1bW4nLCBjb2x1bW5TY2hlbWEpO1xuZXhwb3J0IGRlZmF1bHQgQ29sdW1uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./middleware/models/column.tsx\n");

/***/ }),

/***/ "./middleware/models/router.tsx":
/*!**************************************!*\
  !*** ./middleware/models/router.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst routerSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  project: {\n    type: String,\n    required: true,\n    trim: true\n  }\n}, {\n  timestamps: true\n});\nconst Router = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Router || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Router', routerSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL21vZGVscy9yb3V0ZXIudHN4PzczZmEiXSwibmFtZXMiOlsicm91dGVyU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJwcm9qZWN0IiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidHJpbSIsInRpbWVzdGFtcHMiLCJSb3V0ZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQSxNQUFNQSxZQUFvQixHQUFHLElBQUlDLCtDQUFRLENBQUNDLE1BQWIsQ0FDM0I7QUFDRUMsU0FBTyxFQUFFO0FBQ1BDLFFBQUksRUFBRUMsTUFEQztBQUVQQyxZQUFRLEVBQUUsSUFGSDtBQUdQQyxRQUFJLEVBQUU7QUFIQztBQURYLENBRDJCLEVBUTNCO0FBQ0VDLFlBQVUsRUFBRTtBQURkLENBUjJCLENBQTdCO0FBYUEsTUFBTUMsTUFBTSxHQUNWUiwrQ0FBUSxDQUFDUyxNQUFULENBQWdCRCxNQUFoQixJQUEwQlIsK0NBQVEsQ0FBQ1UsS0FBVCxDQUF3QixRQUF4QixFQUFrQ1gsWUFBbEMsQ0FENUI7QUFFZVMscUVBQWYiLCJmaWxlIjoiLi9taWRkbGV3YXJlL21vZGVscy9yb3V0ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgRG9jdW1lbnQgfSBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJvdXRlciBleHRlbmRzIERvY3VtZW50IHtcbiAgcHJvamVjdDogc3RyaW5nO1xufVxuXG5jb25zdCByb3V0ZXJTY2hlbWE6IFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBwcm9qZWN0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH1cbik7XG5cbmNvbnN0IFJvdXRlciA9XG4gIG1vbmdvb3NlLm1vZGVscy5Sb3V0ZXIgfHwgbW9uZ29vc2UubW9kZWw8SVJvdXRlcj4oJ1JvdXRlcicsIHJvdXRlclNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./middleware/models/router.tsx\n");

/***/ }),

/***/ "./pages/api/add-router.tsx":
/*!**********************************!*\
  !*** ./pages/api/add-router.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middleware_models_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../middleware/models/router */ \"./middleware/models/router.tsx\");\n/* harmony import */ var _middleware_models_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middleware/models/column */ \"./middleware/models/column.tsx\");\n\n\n\n__webpack_require__(/*! ../../middleware/db/mongoose */ \"./middleware/db/mongoose.tsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (request, response) => {\n  const {\n    project\n  } = request.body;\n\n  try {\n    const newProject = new _middleware_models_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      project\n    });\n    await newProject.save();\n\n    try {\n      try {\n        const planColumn = new _middleware_models_column__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n          projectId: newProject._id,\n          title: 'Plan',\n          colorIndex: 0\n        });\n        await planColumn.save();\n        const progressColumn = new _middleware_models_column__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n          projectId: newProject._id,\n          title: 'Progress',\n          colorIndex: 1\n        });\n        await progressColumn.save();\n        const completeColumn = new _middleware_models_column__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n          projectId: newProject._id,\n          title: 'Complete',\n          colorIndex: 2\n        });\n        await completeColumn.save();\n        return response.status(200).json({\n          success: true,\n          data: newProject\n        });\n      } catch (e) {\n        return response.status(500).json({\n          success: false,\n          message: 'failed to create basic columns'\n        });\n      }\n    } catch (e) {\n      return response.status(500).json({\n        success: false,\n        message: 'failed to add router'\n      });\n    }\n  } catch (e) {\n    return response.status(500).json({\n      success: false,\n      message: 'failed to add router'\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYWRkLXJvdXRlci50c3g/ZDNlNSJdLCJuYW1lcyI6WyJyZXF1aXJlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwicHJvamVjdCIsImJvZHkiLCJuZXdQcm9qZWN0IiwiUm91dGVyIiwic2F2ZSIsInBsYW5Db2x1bW4iLCJDb2x1bW4iLCJwcm9qZWN0SWQiLCJfaWQiLCJ0aXRsZSIsImNvbG9ySW5kZXgiLCJwcm9ncmVzc0NvbHVtbiIsImNvbXBsZXRlQ29sdW1uIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQ0FBLG1CQUFPLENBQUMsa0VBQUQsQ0FBUDs7QUFFZSxzRUFBT0MsT0FBUCxFQUFnQ0MsUUFBaEMsS0FBOEQ7QUFDM0UsUUFBTTtBQUFFQztBQUFGLE1BQWNGLE9BQU8sQ0FBQ0csSUFBNUI7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLFVBQVUsR0FBRyxJQUFJQyxpRUFBSixDQUFXO0FBQUVIO0FBQUYsS0FBWCxDQUFuQjtBQUNBLFVBQU1FLFVBQVUsQ0FBQ0UsSUFBWCxFQUFOOztBQUNBLFFBQUk7QUFDRixVQUFJO0FBQ0YsY0FBTUMsVUFBVSxHQUFHLElBQUlDLGlFQUFKLENBQVc7QUFDNUJDLG1CQUFTLEVBQUVMLFVBQVUsQ0FBQ00sR0FETTtBQUU1QkMsZUFBSyxFQUFFLE1BRnFCO0FBRzVCQyxvQkFBVSxFQUFFO0FBSGdCLFNBQVgsQ0FBbkI7QUFLQSxjQUFNTCxVQUFVLENBQUNELElBQVgsRUFBTjtBQUVBLGNBQU1PLGNBQWMsR0FBRyxJQUFJTCxpRUFBSixDQUFXO0FBQ2hDQyxtQkFBUyxFQUFFTCxVQUFVLENBQUNNLEdBRFU7QUFFaENDLGVBQUssRUFBRSxVQUZ5QjtBQUdoQ0Msb0JBQVUsRUFBRTtBQUhvQixTQUFYLENBQXZCO0FBS0EsY0FBTUMsY0FBYyxDQUFDUCxJQUFmLEVBQU47QUFFQSxjQUFNUSxjQUFjLEdBQUcsSUFBSU4saUVBQUosQ0FBVztBQUNoQ0MsbUJBQVMsRUFBRUwsVUFBVSxDQUFDTSxHQURVO0FBRWhDQyxlQUFLLEVBQUUsVUFGeUI7QUFHaENDLG9CQUFVLEVBQUU7QUFIb0IsU0FBWCxDQUF2QjtBQUtBLGNBQU1FLGNBQWMsQ0FBQ1IsSUFBZixFQUFOO0FBQ0EsZUFBT0wsUUFBUSxDQUFDYyxNQUFULENBQWdCLEdBQWhCLEVBQXFCQyxJQUFyQixDQUEwQjtBQUFFQyxpQkFBTyxFQUFFLElBQVg7QUFBaUJDLGNBQUksRUFBRWQ7QUFBdkIsU0FBMUIsQ0FBUDtBQUNELE9BdEJELENBc0JFLE9BQU9lLENBQVAsRUFBVTtBQUNWLGVBQU9sQixRQUFRLENBQUNjLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQXJCLENBQTBCO0FBQy9CQyxpQkFBTyxFQUFFLEtBRHNCO0FBRS9CRyxpQkFBTyxFQUFFO0FBRnNCLFNBQTFCLENBQVA7QUFJRDtBQUNGLEtBN0JELENBNkJFLE9BQU9ELENBQVAsRUFBVTtBQUNWLGFBQU9sQixRQUFRLENBQUNjLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQXJCLENBQTBCO0FBQy9CQyxlQUFPLEVBQUUsS0FEc0I7QUFFL0JHLGVBQU8sRUFBRTtBQUZzQixPQUExQixDQUFQO0FBSUQ7QUFDRixHQXRDRCxDQXNDRSxPQUFPRCxDQUFQLEVBQVU7QUFDVixXQUFPbEIsUUFBUSxDQUNaYyxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7QUFBRUMsYUFBTyxFQUFFLEtBQVg7QUFBa0JHLGFBQU8sRUFBRTtBQUEzQixLQUZELENBQVA7QUFHRDtBQUNGLENBN0NEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2FkZC1yb3V0ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICcuLi8uLi9taWRkbGV3YXJlL21vZGVscy9yb3V0ZXInO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuLi8uLi9taWRkbGV3YXJlL21vZGVscy9jb2x1bW4nO1xucmVxdWlyZSgnLi4vLi4vbWlkZGxld2FyZS9kYi9tb25nb29zZScpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxdWVzdDogTmV4dEFwaVJlcXVlc3QsIHJlc3BvbnNlOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgeyBwcm9qZWN0IH0gPSByZXF1ZXN0LmJvZHk7XG4gIHRyeSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBSb3V0ZXIoeyBwcm9qZWN0IH0pO1xuICAgIGF3YWl0IG5ld1Byb2plY3Quc2F2ZSgpO1xuICAgIHRyeSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwbGFuQ29sdW1uID0gbmV3IENvbHVtbih7XG4gICAgICAgICAgcHJvamVjdElkOiBuZXdQcm9qZWN0Ll9pZCxcbiAgICAgICAgICB0aXRsZTogJ1BsYW4nLFxuICAgICAgICAgIGNvbG9ySW5kZXg6IDAsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBwbGFuQ29sdW1uLnNhdmUoKTtcblxuICAgICAgICBjb25zdCBwcm9ncmVzc0NvbHVtbiA9IG5ldyBDb2x1bW4oe1xuICAgICAgICAgIHByb2plY3RJZDogbmV3UHJvamVjdC5faWQsXG4gICAgICAgICAgdGl0bGU6ICdQcm9ncmVzcycsXG4gICAgICAgICAgY29sb3JJbmRleDogMSxcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHByb2dyZXNzQ29sdW1uLnNhdmUoKTtcblxuICAgICAgICBjb25zdCBjb21wbGV0ZUNvbHVtbiA9IG5ldyBDb2x1bW4oe1xuICAgICAgICAgIHByb2plY3RJZDogbmV3UHJvamVjdC5faWQsXG4gICAgICAgICAgdGl0bGU6ICdDb21wbGV0ZScsXG4gICAgICAgICAgY29sb3JJbmRleDogMixcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IGNvbXBsZXRlQ29sdW1uLnNhdmUoKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBuZXdQcm9qZWN0IH0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgbWVzc2FnZTogJ2ZhaWxlZCB0byBjcmVhdGUgYmFzaWMgY29sdW1ucycsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6ICdmYWlsZWQgdG8gYWRkIHJvdXRlcicsXG4gICAgICB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgIC5zdGF0dXMoNTAwKVxuICAgICAgLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ2ZhaWxlZCB0byBhZGQgcm91dGVyJyB9KTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/add-router.tsx\n");

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