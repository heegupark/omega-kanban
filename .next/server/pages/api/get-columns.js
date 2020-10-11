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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ScHJ");


/***/ }),

/***/ "9SwA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const columnSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  projectId: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,
    required: true,
    ref: 'Router'
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  colorIndex: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true,
    default: 'normal'
  }
}, {
  timestamps: true
});
const Column = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Column || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Column', columnSchema);
/* harmony default export */ __webpack_exports__["a"] = (Column);

/***/ }),

/***/ "FiKB":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "ScHJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _middleware_models_column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9SwA");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);


__webpack_require__("UDab");


const ObjectId = mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Types.ObjectId;
/* harmony default export */ __webpack_exports__["default"] = (async (request, response) => {
  const {
    _id
  } = request.body;

  try {
    const columns = await _middleware_models_column__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].aggregate([{
      $match: {
        projectId: ObjectId(_id)
      }
    }, {
      $match: {
        category: 'normal'
      }
    }, {
      $lookup: {
        from: 'cards',
        let: {
          id: '$_id'
        },
        pipeline: [{
          $match: {
            $expr: {
              $eq: ['$columnId', '$$id']
            }
          }
        }, {
          $match: {
            $expr: {
              $eq: ['$isArchived', false]
            }
          }
        }, {
          $lookup: {
            from: 'checklists',
            let: {
              id: '$_id'
            },
            pipeline: [{
              $match: {
                $expr: {
                  $eq: ['$cardId', '$$id']
                }
              }
            }, {
              $sort: {
                createdAt: 1
              }
            }],
            as: 'checklists'
          }
        }, {
          $lookup: {
            from: 'activities',
            let: {
              id: '$_id'
            },
            pipeline: [{
              $match: {
                $expr: {
                  $eq: ['$cardId', '$$id']
                }
              }
            }, {
              $sort: {
                createdAt: -1
              }
            }],
            as: 'activities'
          }
        }],
        as: 'cards'
      }
    }]);

    if (!columns) {
      return response.status(404).json({
        success: false,
        message: 'data not found'
      });
    }

    const archive = await _middleware_models_column__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].aggregate([{
      $match: {
        projectId: ObjectId(_id)
      }
    }, {
      $match: {
        category: 'archive'
      }
    }, {
      $lookup: {
        from: 'cards',
        let: {
          id: '$_id'
        },
        pipeline: [{
          $match: {
            $expr: {
              $eq: ['$columnId', '$$id']
            }
          }
        }, {
          $match: {
            $expr: {
              $eq: ['$isArchived', true]
            }
          }
        }, {
          $lookup: {
            from: 'checklists',
            let: {
              id: '$_id'
            },
            pipeline: [{
              $match: {
                $expr: {
                  $eq: ['$cardId', '$$id']
                }
              }
            }, {
              $sort: {
                createdAt: 1
              }
            }],
            as: 'checklists'
          }
        }, {
          $lookup: {
            from: 'activities',
            let: {
              id: '$_id'
            },
            pipeline: [{
              $match: {
                $expr: {
                  $eq: ['$cardId', '$$id']
                }
              }
            }, {
              $sort: {
                createdAt: -1
              }
            }],
            as: 'activities'
          }
        }],
        as: 'cards'
      }
    }]);
    return response.status(200).json({
      success: true,
      columns,
      archive
    });
  } catch (e) {
    return response.status(500).json({
      success: false,
      message: 'failed to get a board data'
    });
  }
});

/***/ }),

/***/ "UDab":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

/***/ })

/******/ });