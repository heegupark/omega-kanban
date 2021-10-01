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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/get-columns.tsx");
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

/***/ "./pages/api/get-columns.tsx":
/*!***********************************!*\
  !*** ./pages/api/get-columns.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middleware_models_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../middleware/models/router */ \"./middleware/models/router.tsx\");\n/* harmony import */ var _middleware_models_column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middleware/models/column */ \"./middleware/models/column.tsx\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n__webpack_require__(/*! ../../middleware/db/mongoose */ \"./middleware/db/mongoose.tsx\");\n\n\n\n\nconst ObjectId = mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.Types.ObjectId;\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (request, response) => {\n  const {\n    _id\n  } = request.body;\n\n  try {\n    const project = await _middleware_models_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      _id\n    });\n    const columns = await _middleware_models_column__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aggregate([{\n      $match: {\n        projectId: ObjectId(_id)\n      }\n    }, {\n      $match: {\n        category: 'normal'\n      }\n    }, {\n      $lookup: {\n        from: 'cards',\n        let: {\n          id: '$_id'\n        },\n        pipeline: [{\n          $match: {\n            $expr: {\n              $eq: ['$columnId', '$$id']\n            }\n          }\n        }, {\n          $match: {\n            $expr: {\n              $eq: ['$isArchived', false]\n            }\n          }\n        }, {\n          $lookup: {\n            from: 'checklists',\n            let: {\n              id: '$_id'\n            },\n            pipeline: [{\n              $match: {\n                $expr: {\n                  $eq: ['$cardId', '$$id']\n                }\n              }\n            }, {\n              $sort: {\n                createdAt: 1\n              }\n            }],\n            as: 'checklists'\n          }\n        }, {\n          $lookup: {\n            from: 'activities',\n            let: {\n              id: '$_id'\n            },\n            pipeline: [{\n              $match: {\n                $expr: {\n                  $eq: ['$cardId', '$$id']\n                }\n              }\n            }, {\n              $sort: {\n                createdAt: -1\n              }\n            }],\n            as: 'activities'\n          }\n        }, {\n          $sort: {\n            order: 1\n          }\n        }],\n        as: 'cards'\n      }\n    }]);\n    const archive = await _middleware_models_column__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aggregate([{\n      $match: {\n        projectId: ObjectId(_id)\n      }\n    }, {\n      $match: {\n        category: 'archive'\n      }\n    }, {\n      $lookup: {\n        from: 'cards',\n        let: {\n          id: '$_id'\n        },\n        pipeline: [{\n          $match: {\n            $expr: {\n              $eq: ['$columnId', '$$id']\n            }\n          }\n        }, {\n          $match: {\n            $expr: {\n              $eq: ['$isArchived', true]\n            }\n          }\n        }, {\n          $lookup: {\n            from: 'checklists',\n            let: {\n              id: '$_id'\n            },\n            pipeline: [{\n              $match: {\n                $expr: {\n                  $eq: ['$cardId', '$$id']\n                }\n              }\n            }, {\n              $sort: {\n                createdAt: 1\n              }\n            }],\n            as: 'checklists'\n          }\n        }, {\n          $lookup: {\n            from: 'activities',\n            let: {\n              id: '$_id'\n            },\n            pipeline: [{\n              $match: {\n                $expr: {\n                  $eq: ['$cardId', '$$id']\n                }\n              }\n            }, {\n              $sort: {\n                createdAt: -1\n              }\n            }],\n            as: 'activities'\n          }\n        }],\n        as: 'cards'\n      }\n    }]);\n    return response.status(200).json({\n      success: true,\n      columns,\n      columnOrder: project.columnOrder,\n      archive\n    });\n  } catch (e) {\n    return response.status(500).json({\n      success: false,\n      message: 'failed to get a board data'\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0LWNvbHVtbnMudHN4PzQ5YzEiXSwibmFtZXMiOlsicmVxdWlyZSIsIk9iamVjdElkIiwibW9uZ29vc2UiLCJUeXBlcyIsInJlcXVlc3QiLCJyZXNwb25zZSIsIl9pZCIsImJvZHkiLCJwcm9qZWN0IiwiUm91dGVyIiwiZmluZE9uZSIsImNvbHVtbnMiLCJDb2x1bW4iLCJhZ2dyZWdhdGUiLCIkbWF0Y2giLCJwcm9qZWN0SWQiLCJjYXRlZ29yeSIsIiRsb29rdXAiLCJmcm9tIiwibGV0IiwiaWQiLCJwaXBlbGluZSIsIiRleHByIiwiJGVxIiwiJHNvcnQiLCJjcmVhdGVkQXQiLCJhcyIsIm9yZGVyIiwiYXJjaGl2ZSIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiY29sdW1uT3JkZXIiLCJlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBLG1CQUFPLENBQUMsa0VBQUQsQ0FBUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtDQUFRLENBQUNDLEtBQVQsQ0FBZUYsUUFBaEM7QUFFZSxzRUFBT0csT0FBUCxFQUFnQ0MsUUFBaEMsS0FBOEQ7QUFDM0UsUUFBTTtBQUFFQztBQUFGLE1BQVVGLE9BQU8sQ0FBQ0csSUFBeEI7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLE9BQU8sR0FBRyxNQUFNQyxpRUFBTSxDQUFDQyxPQUFQLENBQWU7QUFBRUo7QUFBRixLQUFmLENBQXRCO0FBQ0EsVUFBTUssT0FBTyxHQUFHLE1BQU1DLGlFQUFNLENBQUNDLFNBQVAsQ0FBaUIsQ0FDckM7QUFDRUMsWUFBTSxFQUFFO0FBQ05DLGlCQUFTLEVBQUVkLFFBQVEsQ0FBQ0ssR0FBRDtBQURiO0FBRFYsS0FEcUMsRUFNckM7QUFDRVEsWUFBTSxFQUFFO0FBQ05FLGdCQUFRLEVBQUU7QUFESjtBQURWLEtBTnFDLEVBV3JDO0FBQ0VDLGFBQU8sRUFBRTtBQUNQ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QUU7QUFBTixhQUZFO0FBR1BDLG9CQUFRLEVBQUUsQ0FDUjtBQUFFUCxvQkFBTSxFQUFFO0FBQUVRLHFCQUFLLEVBQUU7QUFBRUMscUJBQUcsRUFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaO0FBQVA7QUFBVDtBQUFWLGFBRFEsRUFFUjtBQUFFQyxtQkFBSyxFQUFFO0FBQUVDLHlCQUFTLEVBQUUsQ0FBQztBQUFkO0FBQVQsYUFGUSxDQUhIO0FBT1BDLGNBQUUsRUFBRTtBQVBHO0FBRFgsU0FkUSxDQUhIO0FBNkJQQSxVQUFFLEVBQUU7QUE3Qkc7QUFEWCxLQVhxQyxDQUFqQixDQUF0QjtBQThDQSxXQUFPckIsUUFBUSxDQUFDd0IsTUFBVCxDQUFnQixHQUFoQixFQUFxQkMsSUFBckIsQ0FBMEI7QUFDL0JDLGFBQU8sRUFBRSxJQURzQjtBQUUvQnBCLGFBRitCO0FBRy9CcUIsaUJBQVcsRUFBRXhCLE9BQU8sQ0FBQ3dCLFdBSFU7QUFJL0JKO0FBSitCLEtBQTFCLENBQVA7QUFNRCxHQXJHRCxDQXFHRSxPQUFPSyxDQUFQLEVBQVU7QUFDVixXQUFPNUIsUUFBUSxDQUNad0IsTUFESSxDQUNHLEdBREgsRUFFSkMsSUFGSSxDQUVDO0FBQUVDLGFBQU8sRUFBRSxLQUFYO0FBQWtCRyxhQUFPLEVBQUU7QUFBM0IsS0FGRCxDQUFQO0FBR0Q7QUFDRixDQTVHRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9nZXQtY29sdW1ucy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuLi8uLi9taWRkbGV3YXJlL2RiL21vbmdvb3NlJyk7XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJy4uLy4uL21pZGRsZXdhcmUvbW9kZWxzL3JvdXRlcic7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4uLy4uL21pZGRsZXdhcmUvbW9kZWxzL2NvbHVtbic7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuY29uc3QgT2JqZWN0SWQgPSBtb25nb29zZS5UeXBlcy5PYmplY3RJZDtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcXVlc3Q6IE5leHRBcGlSZXF1ZXN0LCByZXNwb25zZTogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHsgX2lkIH0gPSByZXF1ZXN0LmJvZHk7XG4gIHRyeSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGF3YWl0IFJvdXRlci5maW5kT25lKHsgX2lkIH0pO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBhd2FpdCBDb2x1bW4uYWdncmVnYXRlKFtcbiAgICAgIHtcbiAgICAgICAgJG1hdGNoOiB7XG4gICAgICAgICAgcHJvamVjdElkOiBPYmplY3RJZChfaWQpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJG1hdGNoOiB7XG4gICAgICAgICAgY2F0ZWdvcnk6ICdub3JtYWwnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJGxvb2t1cDoge1xuICAgICAgICAgIGZyb206ICdjYXJkcycsXG4gICAgICAgICAgbGV0OiB7IGlkOiAnJF9pZCcgfSxcbiAgICAgICAgICBwaXBlbGluZTogW1xuICAgICAgICAgICAgeyAkbWF0Y2g6IHsgJGV4cHI6IHsgJGVxOiBbJyRjb2x1bW5JZCcsICckJGlkJ10gfSB9IH0sXG4gICAgICAgICAgICB7ICRtYXRjaDogeyAkZXhwcjogeyAkZXE6IFsnJGlzQXJjaGl2ZWQnLCBmYWxzZV0gfSB9IH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICRsb29rdXA6IHtcbiAgICAgICAgICAgICAgICBmcm9tOiAnY2hlY2tsaXN0cycsXG4gICAgICAgICAgICAgICAgbGV0OiB7IGlkOiAnJF9pZCcgfSxcbiAgICAgICAgICAgICAgICBwaXBlbGluZTogW1xuICAgICAgICAgICAgICAgICAgeyAkbWF0Y2g6IHsgJGV4cHI6IHsgJGVxOiBbJyRjYXJkSWQnLCAnJCRpZCddIH0gfSB9LFxuICAgICAgICAgICAgICAgICAgeyAkc29ydDogeyBjcmVhdGVkQXQ6IDEgfSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYXM6ICdjaGVja2xpc3RzJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICRsb29rdXA6IHtcbiAgICAgICAgICAgICAgICBmcm9tOiAnYWN0aXZpdGllcycsXG4gICAgICAgICAgICAgICAgbGV0OiB7IGlkOiAnJF9pZCcgfSxcbiAgICAgICAgICAgICAgICBwaXBlbGluZTogW1xuICAgICAgICAgICAgICAgICAgeyAkbWF0Y2g6IHsgJGV4cHI6IHsgJGVxOiBbJyRjYXJkSWQnLCAnJCRpZCddIH0gfSB9LFxuICAgICAgICAgICAgICAgICAgeyAkc29ydDogeyBjcmVhdGVkQXQ6IC0xIH0gfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGFzOiAnYWN0aXZpdGllcycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyAkc29ydDogeyBvcmRlcjogMSB9IH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBhczogJ2NhcmRzJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSk7XG5cbiAgICBjb25zdCBhcmNoaXZlID0gYXdhaXQgQ29sdW1uLmFnZ3JlZ2F0ZShbXG4gICAgICB7XG4gICAgICAgICRtYXRjaDoge1xuICAgICAgICAgIHByb2plY3RJZDogT2JqZWN0SWQoX2lkKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICRtYXRjaDoge1xuICAgICAgICAgIGNhdGVnb3J5OiAnYXJjaGl2ZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAkbG9va3VwOiB7XG4gICAgICAgICAgZnJvbTogJ2NhcmRzJyxcbiAgICAgICAgICBsZXQ6IHsgaWQ6ICckX2lkJyB9LFxuICAgICAgICAgIHBpcGVsaW5lOiBbXG4gICAgICAgICAgICB7ICRtYXRjaDogeyAkZXhwcjogeyAkZXE6IFsnJGNvbHVtbklkJywgJyQkaWQnXSB9IH0gfSxcbiAgICAgICAgICAgIHsgJG1hdGNoOiB7ICRleHByOiB7ICRlcTogWyckaXNBcmNoaXZlZCcsIHRydWVdIH0gfSB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAkbG9va3VwOiB7XG4gICAgICAgICAgICAgICAgZnJvbTogJ2NoZWNrbGlzdHMnLFxuICAgICAgICAgICAgICAgIGxldDogeyBpZDogJyRfaWQnIH0sXG4gICAgICAgICAgICAgICAgcGlwZWxpbmU6IFtcbiAgICAgICAgICAgICAgICAgIHsgJG1hdGNoOiB7ICRleHByOiB7ICRlcTogWyckY2FyZElkJywgJyQkaWQnXSB9IH0gfSxcbiAgICAgICAgICAgICAgICAgIHsgJHNvcnQ6IHsgY3JlYXRlZEF0OiAxIH0gfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGFzOiAnY2hlY2tsaXN0cycsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAkbG9va3VwOiB7XG4gICAgICAgICAgICAgICAgZnJvbTogJ2FjdGl2aXRpZXMnLFxuICAgICAgICAgICAgICAgIGxldDogeyBpZDogJyRfaWQnIH0sXG4gICAgICAgICAgICAgICAgcGlwZWxpbmU6IFtcbiAgICAgICAgICAgICAgICAgIHsgJG1hdGNoOiB7ICRleHByOiB7ICRlcTogWyckY2FyZElkJywgJyQkaWQnXSB9IH0gfSxcbiAgICAgICAgICAgICAgICAgIHsgJHNvcnQ6IHsgY3JlYXRlZEF0OiAtMSB9IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBhczogJ2FjdGl2aXRpZXMnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFzOiAnY2FyZHMnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdKTtcblxuICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBjb2x1bW5zLFxuICAgICAgY29sdW1uT3JkZXI6IHByb2plY3QuY29sdW1uT3JkZXIsXG4gICAgICBhcmNoaXZlLFxuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAuc3RhdHVzKDUwMClcbiAgICAgIC5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdmYWlsZWQgdG8gZ2V0IGEgYm9hcmQgZGF0YScgfSk7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/get-columns.tsx\n");

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