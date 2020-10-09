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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/add-card.tsx");
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

/***/ "./middleware/models/card.tsx":
/*!************************************!*\
  !*** ./middleware/models/card.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst cardSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  columnId: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    required: true,\n    ref: 'Column'\n  },\n  cardTitle: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  note: {\n    type: String,\n    default: ''\n  },\n  // checklists: [\n  //   {\n  //     checklist: {\n  //       type: mongoose.Schema.Types.ObjectId,\n  //       required: false,\n  //       ref: 'Checklist',\n  //     },\n  //   },\n  // ],\n  // activities: [\n  //   {\n  //     activity: {\n  //       type: mongoose.Schema.Types.ObjectId,\n  //       required: false,\n  //       ref: 'Activity',\n  //     },\n  //   },\n  // ],\n  isCardCompleted: {\n    type: Boolean,\n    required: true,\n    default: false\n  },\n  isArchived: {\n    type: Boolean,\n    required: true,\n    default: false\n  },\n  dueDate: {\n    type: Date,\n    default: undefined\n  }\n}, {\n  timestamps: true\n});\nconst Card = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Card || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Card', cardSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL21vZGVscy9jYXJkLnRzeD81YmQ5Il0sIm5hbWVzIjpbImNhcmRTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsImNvbHVtbklkIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZXF1aXJlZCIsInJlZiIsImNhcmRUaXRsZSIsIlN0cmluZyIsInRyaW0iLCJub3RlIiwiZGVmYXVsdCIsImlzQ2FyZENvbXBsZXRlZCIsIkJvb2xlYW4iLCJpc0FyY2hpdmVkIiwiZHVlRGF0ZSIsIkRhdGUiLCJ1bmRlZmluZWQiLCJ0aW1lc3RhbXBzIiwiQ2FyZCIsIm1vZGVscyIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBLE1BQU1BLFVBQWtCLEdBQUcsSUFBSUMsK0NBQVEsQ0FBQ0MsTUFBYixDQUN6QjtBQUNFQyxVQUFRLEVBQUU7QUFDUkMsUUFBSSxFQUFFSCwrQ0FBUSxDQUFDQyxNQUFULENBQWdCRyxLQUFoQixDQUFzQkMsUUFEcEI7QUFFUkMsWUFBUSxFQUFFLElBRkY7QUFHUkMsT0FBRyxFQUFFO0FBSEcsR0FEWjtBQU1FQyxXQUFTLEVBQUU7QUFDVEwsUUFBSSxFQUFFTSxNQURHO0FBRVRILFlBQVEsRUFBRSxJQUZEO0FBR1RJLFFBQUksRUFBRTtBQUhHLEdBTmI7QUFXRUMsTUFBSSxFQUFFO0FBQ0pSLFFBQUksRUFBRU0sTUFERjtBQUVKRyxXQUFPLEVBQUU7QUFGTCxHQVhSO0FBZUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGlCQUFlLEVBQUU7QUFDZlYsUUFBSSxFQUFFVyxPQURTO0FBRWZSLFlBQVEsRUFBRSxJQUZLO0FBR2ZNLFdBQU8sRUFBRTtBQUhNLEdBakNuQjtBQXNDRUcsWUFBVSxFQUFFO0FBQ1ZaLFFBQUksRUFBRVcsT0FESTtBQUVWUixZQUFRLEVBQUUsSUFGQTtBQUdWTSxXQUFPLEVBQUU7QUFIQyxHQXRDZDtBQTJDRUksU0FBTyxFQUFFO0FBQ1BiLFFBQUksRUFBRWMsSUFEQztBQUVQTCxXQUFPLEVBQUVNO0FBRkY7QUEzQ1gsQ0FEeUIsRUFpRHpCO0FBQ0VDLFlBQVUsRUFBRTtBQURkLENBakR5QixDQUEzQjtBQXNEQSxNQUFNQyxJQUFJLEdBQUdwQiwrQ0FBUSxDQUFDcUIsTUFBVCxDQUFnQkQsSUFBaEIsSUFBd0JwQiwrQ0FBUSxDQUFDc0IsS0FBVCxDQUFzQixNQUF0QixFQUE4QnZCLFVBQTlCLENBQXJDO0FBQ2VxQixtRUFBZiIsImZpbGUiOiIuL21pZGRsZXdhcmUvbW9kZWxzL2NhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgRG9jdW1lbnQgfSBmcm9tICdtb25nb29zZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhcmQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIGNvbHVtbklkOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQ7XG4gIGNhcmRUaXRsZTogU3RyaW5nO1xuICBub3RlOiBTdHJpbmc7XG4gIGlzQ2FyZENvbXBsZXRlZDogQm9vbGVhbjtcbiAgaXNBcmNoaXZlZDogQm9vbGVhbjtcbiAgZHVlRGF0ZTogRGF0ZTtcbn1cblxuY29uc3QgY2FyZFNjaGVtYTogU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcbiAge1xuICAgIGNvbHVtbklkOiB7XG4gICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHJlZjogJ0NvbHVtbicsXG4gICAgfSxcbiAgICBjYXJkVGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICB9LFxuICAgIG5vdGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgLy8gY2hlY2tsaXN0czogW1xuICAgIC8vICAge1xuICAgIC8vICAgICBjaGVja2xpc3Q6IHtcbiAgICAvLyAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gICAgLy8gICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIC8vICAgICAgIHJlZjogJ0NoZWNrbGlzdCcsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9LFxuICAgIC8vIF0sXG4gICAgLy8gYWN0aXZpdGllczogW1xuICAgIC8vICAge1xuICAgIC8vICAgICBhY3Rpdml0eToge1xuICAgIC8vICAgICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICAvLyAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgLy8gICAgICAgcmVmOiAnQWN0aXZpdHknLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfSxcbiAgICAvLyBdLFxuICAgIGlzQ2FyZENvbXBsZXRlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICBpc0FyY2hpdmVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIGR1ZURhdGU6IHtcbiAgICAgIHR5cGU6IERhdGUsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH1cbik7XG5cbmNvbnN0IENhcmQgPSBtb25nb29zZS5tb2RlbHMuQ2FyZCB8fCBtb25nb29zZS5tb2RlbDxJQ2FyZD4oJ0NhcmQnLCBjYXJkU2NoZW1hKTtcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./middleware/models/card.tsx\n");

/***/ }),

/***/ "./pages/api/add-card.tsx":
/*!********************************!*\
  !*** ./pages/api/add-card.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middleware_models_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../middleware/models/card */ \"./middleware/models/card.tsx\");\n\n\n__webpack_require__(/*! ../../middleware/db/mongoose */ \"./middleware/db/mongoose.tsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (request, response) => {\n  const {\n    columnId,\n    cardTitle\n  } = request.body;\n\n  try {\n    const newCard = new _middleware_models_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      columnId,\n      cardTitle\n    });\n    await newCard.save();\n    return response.status(200).json({\n      success: true,\n      data: newCard\n    });\n  } catch (e) {\n    return response.status(500).json({\n      success: false,\n      message: 'failed to add a card'\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYWRkLWNhcmQudHN4PzY5NDQiXSwibmFtZXMiOlsicmVxdWlyZSIsInJlcXVlc3QiLCJyZXNwb25zZSIsImNvbHVtbklkIiwiY2FyZFRpdGxlIiwiYm9keSIsIm5ld0NhcmQiLCJDYXJkIiwic2F2ZSIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSIsImUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7O0FBQ0FBLG1CQUFPLENBQUMsa0VBQUQsQ0FBUDs7QUFFZSxzRUFBT0MsT0FBUCxFQUFnQ0MsUUFBaEMsS0FBOEQ7QUFDM0UsUUFBTTtBQUFFQyxZQUFGO0FBQVlDO0FBQVosTUFBMEJILE9BQU8sQ0FBQ0ksSUFBeEM7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLE9BQU8sR0FBRyxJQUFJQywrREFBSixDQUFTO0FBQUVKLGNBQUY7QUFBWUM7QUFBWixLQUFULENBQWhCO0FBQ0EsVUFBTUUsT0FBTyxDQUFDRSxJQUFSLEVBQU47QUFDQSxXQUFPTixRQUFRLENBQUNPLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQXJCLENBQTBCO0FBQUVDLGFBQU8sRUFBRSxJQUFYO0FBQWlCQyxVQUFJLEVBQUVOO0FBQXZCLEtBQTFCLENBQVA7QUFDRCxHQUpELENBSUUsT0FBT08sQ0FBUCxFQUFVO0FBQ1YsV0FBT1gsUUFBUSxDQUNaTyxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7QUFBRUMsYUFBTyxFQUFFLEtBQVg7QUFBa0JHLGFBQU8sRUFBRTtBQUEzQixLQUZELENBQVA7QUFHRDtBQUNGLENBWEQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvYWRkLWNhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vLi4vbWlkZGxld2FyZS9tb2RlbHMvY2FyZCc7XG5yZXF1aXJlKCcuLi8uLi9taWRkbGV3YXJlL2RiL21vbmdvb3NlJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXF1ZXN0OiBOZXh0QXBpUmVxdWVzdCwgcmVzcG9uc2U6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBjb25zdCB7IGNvbHVtbklkLCBjYXJkVGl0bGUgfSA9IHJlcXVlc3QuYm9keTtcbiAgdHJ5IHtcbiAgICBjb25zdCBuZXdDYXJkID0gbmV3IENhcmQoeyBjb2x1bW5JZCwgY2FyZFRpdGxlIH0pO1xuICAgIGF3YWl0IG5ld0NhcmQuc2F2ZSgpO1xuICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbmV3Q2FyZCB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiByZXNwb25zZVxuICAgICAgLnN0YXR1cyg1MDApXG4gICAgICAuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnZmFpbGVkIHRvIGFkZCBhIGNhcmQnIH0pO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/add-card.tsx\n");

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