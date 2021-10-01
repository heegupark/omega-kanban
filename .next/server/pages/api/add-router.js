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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URL, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n  useCreateIndex: true,\n  useFindAndModify: false\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL2RiL21vbmdvb3NlLnRzeD81MDM2Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSTCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQUEsK0NBQVEsQ0FBQ0MsT0FBVCxDQUFpQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQTdCLEVBQTBDO0FBQ3hDQyxpQkFBZSxFQUFFLElBRHVCO0FBRXhDQyxvQkFBa0IsRUFBRSxJQUZvQjtBQUd4Q0MsZ0JBQWMsRUFBRSxJQUh3QjtBQUl4Q0Msa0JBQWdCLEVBQUU7QUFKc0IsQ0FBMUMiLCJmaWxlIjoiLi9taWRkbGV3YXJlL2RiL21vbmdvb3NlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmRlY2xhcmUgbGV0IHByb2Nlc3M6IHtcbiAgZW52OiB7XG4gICAgTU9OR09EQl9VUkw6IHN0cmluZztcbiAgfTtcbn07XG5cbm1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsIHtcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./middleware/db/mongoose.tsx\n");

/***/ }),

/***/ "./middleware/models/column.tsx":
/*!**************************************!*\
  !*** ./middleware/models/column.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst columnSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  projectId: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    required: true,\n    ref: 'Router'\n  },\n  title: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  colorIndex: {\n    type: Number,\n    required: true\n  },\n  category: {\n    type: String,\n    required: true,\n    default: 'normal'\n  }\n}, {\n  timestamps: true\n});\nconst Column = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Column || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Column', columnSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL21vZGVscy9jb2x1bW4udHN4P2Y1MmMiXSwibmFtZXMiOlsiY29sdW1uU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJwcm9qZWN0SWQiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlcXVpcmVkIiwicmVmIiwidGl0bGUiLCJTdHJpbmciLCJ0cmltIiwiY29sb3JJbmRleCIsIk51bWJlciIsImNhdGVnb3J5IiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJDb2x1bW4iLCJtb2RlbHMiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQSxNQUFNQSxZQUFvQixHQUFHLElBQUlDLCtDQUFRLENBQUNDLE1BQWIsQ0FDM0I7QUFDRUMsV0FBUyxFQUFFO0FBQ1RDLFFBQUksRUFBRUgsK0NBQVEsQ0FBQ0MsTUFBVCxDQUFnQkcsS0FBaEIsQ0FBc0JDLFFBRG5CO0FBRVRDLFlBQVEsRUFBRSxJQUZEO0FBR1RDLE9BQUcsRUFBRTtBQUhJLEdBRGI7QUFNRUMsT0FBSyxFQUFFO0FBQ0xMLFFBQUksRUFBRU0sTUFERDtBQUVMSCxZQUFRLEVBQUUsSUFGTDtBQUdMSSxRQUFJLEVBQUU7QUFIRCxHQU5UO0FBV0VDLFlBQVUsRUFBRTtBQUNWUixRQUFJLEVBQUVTLE1BREk7QUFFVk4sWUFBUSxFQUFFO0FBRkEsR0FYZDtBQWVFTyxVQUFRLEVBQUU7QUFDUlYsUUFBSSxFQUFFTSxNQURFO0FBRVJILFlBQVEsRUFBRSxJQUZGO0FBR1JRLFdBQU8sRUFBRTtBQUhEO0FBZlosQ0FEMkIsRUFzQjNCO0FBQ0VDLFlBQVUsRUFBRTtBQURkLENBdEIyQixDQUE3QjtBQTBCQSxNQUFNQyxNQUFNLEdBQ1ZoQiwrQ0FBUSxDQUFDaUIsTUFBVCxDQUFnQkQsTUFBaEIsSUFBMEJoQiwrQ0FBUSxDQUFDa0IsS0FBVCxDQUF3QixRQUF4QixFQUFrQ25CLFlBQWxDLENBRDVCO0FBRWVpQixxRUFBZiIsImZpbGUiOiIuL21pZGRsZXdhcmUvbW9kZWxzL2NvbHVtbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCB9IGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ29sdW1uIGV4dGVuZHMgRG9jdW1lbnQge1xuICBwcm9qZWN0SWQ6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZDtcbiAgdGl0bGU6IHN0cmluZztcbiAgY29sb3JJbmRleDogTnVtYmVyO1xufVxuY29uc3QgY29sdW1uU2NoZW1hOiBTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgcHJvamVjdElkOiB7XG4gICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHJlZjogJ1JvdXRlcicsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB0cmltOiB0cnVlLFxuICAgIH0sXG4gICAgY29sb3JJbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBjYXRlZ29yeToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0OiAnbm9ybWFsJyxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgfVxuKTtcbmNvbnN0IENvbHVtbiA9XG4gIG1vbmdvb3NlLm1vZGVscy5Db2x1bW4gfHwgbW9uZ29vc2UubW9kZWw8SUNvbHVtbj4oJ0NvbHVtbicsIGNvbHVtblNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBDb2x1bW47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./middleware/models/column.tsx\n");

/***/ }),

/***/ "./middleware/models/router.tsx":
/*!**************************************!*\
  !*** ./middleware/models/router.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst routerSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  project: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  columnOrder: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    required: true,\n    ref: 'Column'\n  }]\n}, {\n  timestamps: true\n});\nconst Router = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Router || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Router', routerSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL21vZGVscy9yb3V0ZXIudHN4PzczZmEiXSwibmFtZXMiOlsicm91dGVyU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJwcm9qZWN0IiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidHJpbSIsImNvbHVtbk9yZGVyIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInRpbWVzdGFtcHMiLCJSb3V0ZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQSxNQUFNQSxZQUFvQixHQUFHLElBQUlDLCtDQUFRLENBQUNDLE1BQWIsQ0FDM0I7QUFDRUMsU0FBTyxFQUFFO0FBQ1BDLFFBQUksRUFBRUMsTUFEQztBQUVQQyxZQUFRLEVBQUUsSUFGSDtBQUdQQyxRQUFJLEVBQUU7QUFIQyxHQURYO0FBTUVDLGFBQVcsRUFBRSxDQUNYO0FBQ0VKLFFBQUksRUFBRUgsK0NBQVEsQ0FBQ0MsTUFBVCxDQUFnQk8sS0FBaEIsQ0FBc0JDLFFBRDlCO0FBRUVKLFlBQVEsRUFBRSxJQUZaO0FBR0VLLE9BQUcsRUFBRTtBQUhQLEdBRFc7QUFOZixDQUQyQixFQWUzQjtBQUNFQyxZQUFVLEVBQUU7QUFEZCxDQWYyQixDQUE3QjtBQW9CQSxNQUFNQyxNQUFNLEdBQ1ZaLCtDQUFRLENBQUNhLE1BQVQsQ0FBZ0JELE1BQWhCLElBQTBCWiwrQ0FBUSxDQUFDYyxLQUFULENBQXdCLFFBQXhCLEVBQWtDZixZQUFsQyxDQUQ1QjtBQUVlYSxxRUFBZiIsImZpbGUiOiIuL21pZGRsZXdhcmUvbW9kZWxzL3JvdXRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCB9IGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGludGVyZmFjZSBJUm91dGVyIGV4dGVuZHMgRG9jdW1lbnQge1xuICBwcm9qZWN0OiBzdHJpbmc7XG59XG5cbmNvbnN0IHJvdXRlclNjaGVtYTogU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIHByb2plY3Q6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICB9LFxuICAgIGNvbHVtbk9yZGVyOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHJlZjogJ0NvbHVtbicsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9XG4pO1xuXG5jb25zdCBSb3V0ZXIgPVxuICBtb25nb29zZS5tb2RlbHMuUm91dGVyIHx8IG1vbmdvb3NlLm1vZGVsPElSb3V0ZXI+KCdSb3V0ZXInLCByb3V0ZXJTY2hlbWEpO1xuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./middleware/models/router.tsx\n");

/***/ }),

/***/ "./pages/api/add-router.tsx":
/*!**********************************!*\
  !*** ./pages/api/add-router.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middleware_models_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../middleware/models/router */ \"./middleware/models/router.tsx\");\n/* harmony import */ var _middleware_models_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middleware/models/column */ \"./middleware/models/column.tsx\");\n\n\n\n__webpack_require__(/*! ../../middleware/db/mongoose */ \"./middleware/db/mongoose.tsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (request, response) => {\n  const {\n    project\n  } = request.body;\n\n  try {\n    const newProject = new _middleware_models_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      project\n    }); // await newProject.save();\n\n    try {\n      try {\n        const planColumn = new _middleware_models_column__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n          projectId: newProject._id,\n          title: 'Plan',\n          colorIndex: 0\n        });\n        await planColumn.save();\n        const progressColumn = new _middleware_models_column__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n          projectId: newProject._id,\n          title: 'Progress',\n          colorIndex: 1\n        });\n        await progressColumn.save();\n        const completeColumn = new _middleware_models_column__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n          projectId: newProject._id,\n          title: 'Complete',\n          colorIndex: 2\n        });\n        await completeColumn.save();\n        const archiveColumn = new _middleware_models_column__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n          projectId: newProject._id,\n          title: 'Archive',\n          colorIndex: 0,\n          category: 'archive'\n        });\n        await archiveColumn.save();\n        newProject.columnOrder.push(planColumn);\n        newProject.columnOrder.push(progressColumn);\n        newProject.columnOrder.push(completeColumn);\n        await newProject.save();\n        return response.status(200).json({\n          success: true,\n          data: newProject\n        });\n      } catch (e) {\n        return response.status(500).json({\n          success: false,\n          message: 'failed to create basic columns'\n        });\n      }\n    } catch (e) {\n      return response.status(500).json({\n        success: false,\n        message: 'failed to add router'\n      });\n    }\n  } catch (e) {\n    return response.status(500).json({\n      success: false,\n      message: 'failed to add router'\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYWRkLXJvdXRlci50c3g/ZDNlNSJdLCJuYW1lcyI6WyJyZXF1aXJlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwicHJvamVjdCIsImJvZHkiLCJuZXdQcm9qZWN0IiwiUm91dGVyIiwicGxhbkNvbHVtbiIsIkNvbHVtbiIsInByb2plY3RJZCIsIl9pZCIsInRpdGxlIiwiY29sb3JJbmRleCIsInNhdmUiLCJwcm9ncmVzc0NvbHVtbiIsImNvbXBsZXRlQ29sdW1uIiwiYXJjaGl2ZUNvbHVtbiIsImNhdGVnb3J5IiwiY29sdW1uT3JkZXIiLCJwdXNoIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQ0FBLG1CQUFPLENBQUMsa0VBQUQsQ0FBUDs7QUFFZSxzRUFBT0MsT0FBUCxFQUFnQ0MsUUFBaEMsS0FBOEQ7QUFDM0UsUUFBTTtBQUFFQztBQUFGLE1BQWNGLE9BQU8sQ0FBQ0csSUFBNUI7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLFVBQVUsR0FBRyxJQUFJQyxpRUFBSixDQUFXO0FBQUVIO0FBQUYsS0FBWCxDQUFuQixDQURFLENBRUY7O0FBQ0EsUUFBSTtBQUNGLFVBQUk7QUFDRixjQUFNSSxVQUFVLEdBQUcsSUFBSUMsaUVBQUosQ0FBVztBQUM1QkMsbUJBQVMsRUFBRUosVUFBVSxDQUFDSyxHQURNO0FBRTVCQyxlQUFLLEVBQUUsTUFGcUI7QUFHNUJDLG9CQUFVLEVBQUU7QUFIZ0IsU0FBWCxDQUFuQjtBQUtBLGNBQU1MLFVBQVUsQ0FBQ00sSUFBWCxFQUFOO0FBRUEsY0FBTUMsY0FBYyxHQUFHLElBQUlOLGlFQUFKLENBQVc7QUFDaENDLG1CQUFTLEVBQUVKLFVBQVUsQ0FBQ0ssR0FEVTtBQUVoQ0MsZUFBSyxFQUFFLFVBRnlCO0FBR2hDQyxvQkFBVSxFQUFFO0FBSG9CLFNBQVgsQ0FBdkI7QUFLQSxjQUFNRSxjQUFjLENBQUNELElBQWYsRUFBTjtBQUVBLGNBQU1FLGNBQWMsR0FBRyxJQUFJUCxpRUFBSixDQUFXO0FBQ2hDQyxtQkFBUyxFQUFFSixVQUFVLENBQUNLLEdBRFU7QUFFaENDLGVBQUssRUFBRSxVQUZ5QjtBQUdoQ0Msb0JBQVUsRUFBRTtBQUhvQixTQUFYLENBQXZCO0FBS0EsY0FBTUcsY0FBYyxDQUFDRixJQUFmLEVBQU47QUFFQSxjQUFNRyxhQUFhLEdBQUcsSUFBSVIsaUVBQUosQ0FBVztBQUMvQkMsbUJBQVMsRUFBRUosVUFBVSxDQUFDSyxHQURTO0FBRS9CQyxlQUFLLEVBQUUsU0FGd0I7QUFHL0JDLG9CQUFVLEVBQUUsQ0FIbUI7QUFJL0JLLGtCQUFRLEVBQUU7QUFKcUIsU0FBWCxDQUF0QjtBQU1BLGNBQU1ELGFBQWEsQ0FBQ0gsSUFBZCxFQUFOO0FBRUFSLGtCQUFVLENBQUNhLFdBQVgsQ0FBdUJDLElBQXZCLENBQTRCWixVQUE1QjtBQUNBRixrQkFBVSxDQUFDYSxXQUFYLENBQXVCQyxJQUF2QixDQUE0QkwsY0FBNUI7QUFDQVQsa0JBQVUsQ0FBQ2EsV0FBWCxDQUF1QkMsSUFBdkIsQ0FBNEJKLGNBQTVCO0FBRUEsY0FBTVYsVUFBVSxDQUFDUSxJQUFYLEVBQU47QUFFQSxlQUFPWCxRQUFRLENBQUNrQixNQUFULENBQWdCLEdBQWhCLEVBQXFCQyxJQUFyQixDQUEwQjtBQUFFQyxpQkFBTyxFQUFFLElBQVg7QUFBaUJDLGNBQUksRUFBRWxCO0FBQXZCLFNBQTFCLENBQVA7QUFDRCxPQXJDRCxDQXFDRSxPQUFPbUIsQ0FBUCxFQUFVO0FBQ1YsZUFBT3RCLFFBQVEsQ0FBQ2tCLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQXJCLENBQTBCO0FBQy9CQyxpQkFBTyxFQUFFLEtBRHNCO0FBRS9CRyxpQkFBTyxFQUFFO0FBRnNCLFNBQTFCLENBQVA7QUFJRDtBQUNGLEtBNUNELENBNENFLE9BQU9ELENBQVAsRUFBVTtBQUNWLGFBQU90QixRQUFRLENBQUNrQixNQUFULENBQWdCLEdBQWhCLEVBQXFCQyxJQUFyQixDQUEwQjtBQUMvQkMsZUFBTyxFQUFFLEtBRHNCO0FBRS9CRyxlQUFPLEVBQUU7QUFGc0IsT0FBMUIsQ0FBUDtBQUlEO0FBQ0YsR0FyREQsQ0FxREUsT0FBT0QsQ0FBUCxFQUFVO0FBQ1YsV0FBT3RCLFFBQVEsQ0FDWmtCLE1BREksQ0FDRyxHQURILEVBRUpDLElBRkksQ0FFQztBQUFFQyxhQUFPLEVBQUUsS0FBWDtBQUFrQkcsYUFBTyxFQUFFO0FBQTNCLEtBRkQsQ0FBUDtBQUdEO0FBQ0YsQ0E1REQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvYWRkLXJvdXRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJy4uLy4uL21pZGRsZXdhcmUvbW9kZWxzL3JvdXRlcic7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4uLy4uL21pZGRsZXdhcmUvbW9kZWxzL2NvbHVtbic7XG5yZXF1aXJlKCcuLi8uLi9taWRkbGV3YXJlL2RiL21vbmdvb3NlJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXF1ZXN0OiBOZXh0QXBpUmVxdWVzdCwgcmVzcG9uc2U6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBjb25zdCB7IHByb2plY3QgfSA9IHJlcXVlc3QuYm9keTtcbiAgdHJ5IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFJvdXRlcih7IHByb2plY3QgfSk7XG4gICAgLy8gYXdhaXQgbmV3UHJvamVjdC5zYXZlKCk7XG4gICAgdHJ5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBsYW5Db2x1bW4gPSBuZXcgQ29sdW1uKHtcbiAgICAgICAgICBwcm9qZWN0SWQ6IG5ld1Byb2plY3QuX2lkLFxuICAgICAgICAgIHRpdGxlOiAnUGxhbicsXG4gICAgICAgICAgY29sb3JJbmRleDogMCxcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHBsYW5Db2x1bW4uc2F2ZSgpO1xuXG4gICAgICAgIGNvbnN0IHByb2dyZXNzQ29sdW1uID0gbmV3IENvbHVtbih7XG4gICAgICAgICAgcHJvamVjdElkOiBuZXdQcm9qZWN0Ll9pZCxcbiAgICAgICAgICB0aXRsZTogJ1Byb2dyZXNzJyxcbiAgICAgICAgICBjb2xvckluZGV4OiAxLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgcHJvZ3Jlc3NDb2x1bW4uc2F2ZSgpO1xuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlQ29sdW1uID0gbmV3IENvbHVtbih7XG4gICAgICAgICAgcHJvamVjdElkOiBuZXdQcm9qZWN0Ll9pZCxcbiAgICAgICAgICB0aXRsZTogJ0NvbXBsZXRlJyxcbiAgICAgICAgICBjb2xvckluZGV4OiAyLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgY29tcGxldGVDb2x1bW4uc2F2ZSgpO1xuXG4gICAgICAgIGNvbnN0IGFyY2hpdmVDb2x1bW4gPSBuZXcgQ29sdW1uKHtcbiAgICAgICAgICBwcm9qZWN0SWQ6IG5ld1Byb2plY3QuX2lkLFxuICAgICAgICAgIHRpdGxlOiAnQXJjaGl2ZScsXG4gICAgICAgICAgY29sb3JJbmRleDogMCxcbiAgICAgICAgICBjYXRlZ29yeTogJ2FyY2hpdmUnLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgYXJjaGl2ZUNvbHVtbi5zYXZlKCk7XG5cbiAgICAgICAgbmV3UHJvamVjdC5jb2x1bW5PcmRlci5wdXNoKHBsYW5Db2x1bW4pO1xuICAgICAgICBuZXdQcm9qZWN0LmNvbHVtbk9yZGVyLnB1c2gocHJvZ3Jlc3NDb2x1bW4pO1xuICAgICAgICBuZXdQcm9qZWN0LmNvbHVtbk9yZGVyLnB1c2goY29tcGxldGVDb2x1bW4pO1xuXG4gICAgICAgIGF3YWl0IG5ld1Byb2plY3Quc2F2ZSgpO1xuXG4gICAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbmV3UHJvamVjdCB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgIG1lc3NhZ2U6ICdmYWlsZWQgdG8gY3JlYXRlIGJhc2ljIGNvbHVtbnMnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiAnZmFpbGVkIHRvIGFkZCByb3V0ZXInLFxuICAgICAgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAuc3RhdHVzKDUwMClcbiAgICAgIC5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdmYWlsZWQgdG8gYWRkIHJvdXRlcicgfSk7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/add-router.tsx\n");

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