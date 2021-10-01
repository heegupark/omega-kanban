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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URL, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n  useCreateIndex: true,\n  useFindAndModify: false\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL2RiL21vbmdvb3NlLnRzeD81MDM2Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSTCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQUEsK0NBQVEsQ0FBQ0MsT0FBVCxDQUFpQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQTdCLEVBQTBDO0FBQ3hDQyxpQkFBZSxFQUFFLElBRHVCO0FBRXhDQyxvQkFBa0IsRUFBRSxJQUZvQjtBQUd4Q0MsZ0JBQWMsRUFBRSxJQUh3QjtBQUl4Q0Msa0JBQWdCLEVBQUU7QUFKc0IsQ0FBMUMiLCJmaWxlIjoiLi9taWRkbGV3YXJlL2RiL21vbmdvb3NlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmRlY2xhcmUgbGV0IHByb2Nlc3M6IHtcbiAgZW52OiB7XG4gICAgTU9OR09EQl9VUkw6IHN0cmluZztcbiAgfTtcbn07XG5cbm1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsIHtcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./middleware/db/mongoose.tsx\n");

/***/ }),

/***/ "./middleware/models/card.tsx":
/*!************************************!*\
  !*** ./middleware/models/card.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst cardSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  columnId: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,\n    required: true,\n    ref: 'Column'\n  },\n  cardTitle: {\n    type: String,\n    required: true,\n    trim: true\n  },\n  note: {\n    type: String,\n    default: ''\n  },\n  isCardCompleted: {\n    type: Boolean,\n    required: true,\n    default: false\n  },\n  isArchived: {\n    type: Boolean,\n    required: true,\n    default: false\n  },\n  dueDate: {\n    type: Date,\n    default: undefined\n  },\n  order: {\n    type: Number,\n    required: true\n  }\n}, {\n  timestamps: true\n});\nconst Card = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Card || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Card', cardSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL21vZGVscy9jYXJkLnRzeD81YmQ5Il0sIm5hbWVzIjpbImNhcmRTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsImNvbHVtbklkIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZXF1aXJlZCIsInJlZiIsImNhcmRUaXRsZSIsIlN0cmluZyIsInRyaW0iLCJub3RlIiwiZGVmYXVsdCIsImlzQ2FyZENvbXBsZXRlZCIsIkJvb2xlYW4iLCJpc0FyY2hpdmVkIiwiZHVlRGF0ZSIsIkRhdGUiLCJ1bmRlZmluZWQiLCJvcmRlciIsIk51bWJlciIsInRpbWVzdGFtcHMiLCJDYXJkIiwibW9kZWxzIiwibW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0EsTUFBTUEsVUFBa0IsR0FBRyxJQUFJQywrQ0FBUSxDQUFDQyxNQUFiLENBQ3pCO0FBQ0VDLFVBQVEsRUFBRTtBQUNSQyxRQUFJLEVBQUVILCtDQUFRLENBQUNDLE1BQVQsQ0FBZ0JHLEtBQWhCLENBQXNCQyxRQURwQjtBQUVSQyxZQUFRLEVBQUUsSUFGRjtBQUdSQyxPQUFHLEVBQUU7QUFIRyxHQURaO0FBTUVDLFdBQVMsRUFBRTtBQUFFTCxRQUFJLEVBQUVNLE1BQVI7QUFBZ0JILFlBQVEsRUFBRSxJQUExQjtBQUFnQ0ksUUFBSSxFQUFFO0FBQXRDLEdBTmI7QUFPRUMsTUFBSSxFQUFFO0FBQUVSLFFBQUksRUFBRU0sTUFBUjtBQUFnQkcsV0FBTyxFQUFFO0FBQXpCLEdBUFI7QUFRRUMsaUJBQWUsRUFBRTtBQUFFVixRQUFJLEVBQUVXLE9BQVI7QUFBaUJSLFlBQVEsRUFBRSxJQUEzQjtBQUFpQ00sV0FBTyxFQUFFO0FBQTFDLEdBUm5CO0FBU0VHLFlBQVUsRUFBRTtBQUFFWixRQUFJLEVBQUVXLE9BQVI7QUFBaUJSLFlBQVEsRUFBRSxJQUEzQjtBQUFpQ00sV0FBTyxFQUFFO0FBQTFDLEdBVGQ7QUFVRUksU0FBTyxFQUFFO0FBQ1BiLFFBQUksRUFBRWMsSUFEQztBQUVQTCxXQUFPLEVBQUVNO0FBRkYsR0FWWDtBQWNFQyxPQUFLLEVBQUU7QUFDTGhCLFFBQUksRUFBRWlCLE1BREQ7QUFFTGQsWUFBUSxFQUFFO0FBRkw7QUFkVCxDQUR5QixFQW9CekI7QUFDRWUsWUFBVSxFQUFFO0FBRGQsQ0FwQnlCLENBQTNCO0FBeUJBLE1BQU1DLElBQUksR0FBR3RCLCtDQUFRLENBQUN1QixNQUFULENBQWdCRCxJQUFoQixJQUF3QnRCLCtDQUFRLENBQUN3QixLQUFULENBQXNCLE1BQXRCLEVBQThCekIsVUFBOUIsQ0FBckM7QUFDZXVCLG1FQUFmIiwiZmlsZSI6Ii4vbWlkZGxld2FyZS9tb2RlbHMvY2FyZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCB9IGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ2FyZCBleHRlbmRzIERvY3VtZW50IHtcbiAgY29sdW1uSWQ6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZDtcbiAgY2FyZFRpdGxlOiBTdHJpbmc7XG4gIG5vdGU6IFN0cmluZztcbiAgaXNDYXJkQ29tcGxldGVkOiBCb29sZWFuO1xuICBpc0FyY2hpdmVkOiBCb29sZWFuO1xuICBkdWVEYXRlOiBEYXRlO1xufVxuXG5jb25zdCBjYXJkU2NoZW1hOiBTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgY29sdW1uSWQ6IHtcbiAgICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgcmVmOiAnQ29sdW1uJyxcbiAgICB9LFxuICAgIGNhcmRUaXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB0cmltOiB0cnVlIH0sXG4gICAgbm90ZTogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcnIH0sXG4gICAgaXNDYXJkQ29tcGxldGVkOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgIGlzQXJjaGl2ZWQ6IHsgdHlwZTogQm9vbGVhbiwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IGZhbHNlIH0sXG4gICAgZHVlRGF0ZToge1xuICAgICAgdHlwZTogRGF0ZSxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICB9LFxuICAgIG9yZGVyOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgfVxuKTtcblxuY29uc3QgQ2FyZCA9IG1vbmdvb3NlLm1vZGVscy5DYXJkIHx8IG1vbmdvb3NlLm1vZGVsPElDYXJkPignQ2FyZCcsIGNhcmRTY2hlbWEpO1xuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./middleware/models/card.tsx\n");

/***/ }),

/***/ "./pages/api/add-card.tsx":
/*!********************************!*\
  !*** ./pages/api/add-card.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _middleware_models_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../middleware/models/card */ \"./middleware/models/card.tsx\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n__webpack_require__(/*! ../../middleware/db/mongoose */ \"./middleware/db/mongoose.tsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (request, response) => {\n  const {\n    columnId,\n    cardTitle\n  } = request.body;\n\n  try {\n    const cards = await _middleware_models_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n      columnId\n    });\n    const count = cards.length;\n    const newCard = new _middleware_models_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      columnId,\n      cardTitle,\n      order: count\n    });\n    await newCard.save();\n    return response.status(200).json({\n      success: true,\n      data: _objectSpread(_objectSpread({}, newCard._doc), {}, {\n        checklists: [],\n        activities: []\n      })\n    });\n  } catch (e) {\n    return response.status(500).json({\n      success: false,\n      message: 'failed to add a card'\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYWRkLWNhcmQudHN4PzY5NDQiXSwibmFtZXMiOlsicmVxdWlyZSIsInJlcXVlc3QiLCJyZXNwb25zZSIsImNvbHVtbklkIiwiY2FyZFRpdGxlIiwiYm9keSIsImNhcmRzIiwiQ2FyZCIsImZpbmQiLCJjb3VudCIsImxlbmd0aCIsIm5ld0NhcmQiLCJvcmRlciIsInNhdmUiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJfZG9jIiwiY2hlY2tsaXN0cyIsImFjdGl2aXRpZXMiLCJlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7QUFDQUEsbUJBQU8sQ0FBQyxrRUFBRCxDQUFQOztBQUVlLHNFQUFPQyxPQUFQLEVBQWdDQyxRQUFoQyxLQUE4RDtBQUMzRSxRQUFNO0FBQUVDLFlBQUY7QUFBWUM7QUFBWixNQUEwQkgsT0FBTyxDQUFDSSxJQUF4Qzs7QUFDQSxNQUFJO0FBQ0YsVUFBTUMsS0FBSyxHQUFHLE1BQU1DLCtEQUFJLENBQUNDLElBQUwsQ0FBVTtBQUFFTDtBQUFGLEtBQVYsQ0FBcEI7QUFDQSxVQUFNTSxLQUFLLEdBQUdILEtBQUssQ0FBQ0ksTUFBcEI7QUFDQSxVQUFNQyxPQUFPLEdBQUcsSUFBSUosK0RBQUosQ0FBUztBQUFFSixjQUFGO0FBQVlDLGVBQVo7QUFBdUJRLFdBQUssRUFBRUg7QUFBOUIsS0FBVCxDQUFoQjtBQUNBLFVBQU1FLE9BQU8sQ0FBQ0UsSUFBUixFQUFOO0FBQ0EsV0FBT1gsUUFBUSxDQUFDWSxNQUFULENBQWdCLEdBQWhCLEVBQXFCQyxJQUFyQixDQUEwQjtBQUMvQkMsYUFBTyxFQUFFLElBRHNCO0FBRS9CQyxVQUFJLGtDQUFPTixPQUFPLENBQUNPLElBQWY7QUFBcUJDLGtCQUFVLEVBQUUsRUFBakM7QUFBcUNDLGtCQUFVLEVBQUU7QUFBakQ7QUFGMkIsS0FBMUIsQ0FBUDtBQUlELEdBVEQsQ0FTRSxPQUFPQyxDQUFQLEVBQVU7QUFDVixXQUFPbkIsUUFBUSxDQUNaWSxNQURJLENBQ0csR0FESCxFQUVKQyxJQUZJLENBRUM7QUFBRUMsYUFBTyxFQUFFLEtBQVg7QUFBa0JNLGFBQU8sRUFBRTtBQUEzQixLQUZELENBQVA7QUFHRDtBQUNGLENBaEJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2FkZC1jYXJkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL21pZGRsZXdhcmUvbW9kZWxzL2NhcmQnO1xucmVxdWlyZSgnLi4vLi4vbWlkZGxld2FyZS9kYi9tb25nb29zZScpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxdWVzdDogTmV4dEFwaVJlcXVlc3QsIHJlc3BvbnNlOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgY29uc3QgeyBjb2x1bW5JZCwgY2FyZFRpdGxlIH0gPSByZXF1ZXN0LmJvZHk7XG4gIHRyeSB7XG4gICAgY29uc3QgY2FyZHMgPSBhd2FpdCBDYXJkLmZpbmQoeyBjb2x1bW5JZCB9KTtcbiAgICBjb25zdCBjb3VudCA9IGNhcmRzLmxlbmd0aDtcbiAgICBjb25zdCBuZXdDYXJkID0gbmV3IENhcmQoeyBjb2x1bW5JZCwgY2FyZFRpdGxlLCBvcmRlcjogY291bnQgfSk7XG4gICAgYXdhaXQgbmV3Q2FyZC5zYXZlKCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIGRhdGE6IHsgLi4ubmV3Q2FyZC5fZG9jLCBjaGVja2xpc3RzOiBbXSwgYWN0aXZpdGllczogW10gfSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiByZXNwb25zZVxuICAgICAgLnN0YXR1cyg1MDApXG4gICAgICAuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnZmFpbGVkIHRvIGFkZCBhIGNhcmQnIH0pO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/add-card.tsx\n");

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