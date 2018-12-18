/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./compareNextLayer.js":
/*!*****************************!*\
  !*** ./compareNextLayer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./utils.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./data.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var baseCur;
var refCur;
var base;
var ref;
var common;
var baseQueue;
var baseQueueLen;
var refQueue;
var baseCurValue;
var name;
var type;
/**
 * 转换Map为Object
 * @param {Map} strMap
 */

var strMapToObj = function strMapToObj(strMap) {
  var obj = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = strMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      obj[key] = value;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return obj;
};
/**
 * 比较common
 * @param {*} item - 项
 * @param {Number} index - 索引
 */


var eq = function eq(item, index) {
  var baseCurItem = null;
  var refCurItem = null;
  var key = '';

  switch (type) {
    case '[object Map]':
    case '[object Object]':
      baseCurItem = baseCurValue[item];
      refCurItem = refCur[item];
      key = item;
      break;

    case '[object Set]':
    case '[object Array]':
      baseCurItem = item;
      refCurItem = refCur[index];
      key = index;
      break;
  } // null


  if (baseCurItem === null && refCurItem === null) {
    return;
  } // NaN


  if (baseCurItem !== baseCurItem && refCurItem !== refCurItem) {
    return;
  } // +0 & -0


  if (baseCurItem === 0 && refCurItem === 0 && 1 / baseCurItem === 1 / refCurItem) {
    return;
  }

  if (_utils__WEBPACK_IMPORTED_MODULE_0__["toString"].call(baseCurItem) !== _utils__WEBPACK_IMPORTED_MODULE_0__["toString"].call(refCurItem)) {
    _data__WEBPACK_IMPORTED_MODULE_1__["changedList"].push(['【更新了】:', name + item, '\nbefore: ', baseCurItem, '\nafter: ', refCurItem]);
    return;
  } // 类似 'abc' 与 new String('abc')


  switch (_utils__WEBPACK_IMPORTED_MODULE_0__["toString"].call(baseCurItem)) {
    case '[object RegExp]':
    case '[object String]':
      if ('' + baseCurItem === '' + refCurItem) {
        return;
      }

      break;

    case '[object Number]':
      if (+baseCurItem !== +baseCurItem && +refCurItem !== +refCurItem) {
        return;
      }

      if (+baseCurItem === 0 && 1 / +baseCurItem === 1 / refCurItem) {
        return;
      }

      break;

    case '[object Date]':
    case '[object Boolean]':
    case '[object Function]':
      if (+baseCurItem === +refCurItem) {
        return;
      }

      break;

    case '[object Object]':
    case '[object Array]':
    case '[object Set]':
    case '[object Map]':
      base.push({
        key: name + key,
        value: baseCurItem
      });
      ref.push(refCurItem);
      return;
  }

  if (baseCurItem !== refCurItem) {
    _data__WEBPACK_IMPORTED_MODULE_1__["changedList"].push(['【更新了】:', name + key, '\nbefore: ', baseCurItem, '\nafter: ', refCurItem]);
  }
};

var objectHandle = function objectHandle() {
  baseQueue = Object.keys(baseCurValue);
  baseQueueLen = baseQueue.length;
  refQueue = Object.keys(refCur);
  var key;

  while (baseQueueLen--) {
    key = baseQueue[baseQueueLen];

    if (refCur.hasOwnProperty(key)) {
      common.unshift(key);
      baseQueue.splice(baseQueueLen, 1);
      refQueue.splice(refQueue.indexOf(key), 1);
    }
  } // 层级: [路径] \n 新增: [新增] \n 删除: [删除]


  baseQueue.forEach(function (item) {
    _data__WEBPACK_IMPORTED_MODULE_1__["deletedList"].push(['【删除了】: ', name + item, '\n值为:', baseCurValue[item]]);
  });
  refQueue.forEach(function (item) {
    _data__WEBPACK_IMPORTED_MODULE_1__["addedList"].push(['【新增了】: ', name + item, '\n值为:', refCur[item]]);
  }); // 比较

  common.forEach(function (item, index) {
    return eq(item, index);
  });
};

var arrayHandle = function arrayHandle() {
  baseQueue = baseCurValue.concat();
  refQueue = refCur.concat(); // 按索引对号

  if (baseQueue.length > refQueue.length) {
    common = baseQueue.slice(0, refQueue.length);
    baseQueue = baseQueue.slice(refQueue.length - 1);
    refQueue.length = 0;
  } else if (baseQueue.length < refQueue.length) {
    common = baseQueue;
    baseQueue.length = 0;
    refQueue = refQueue.slice(baseQueue.length - 1);
  } else {
    common = baseQueue.concat();
    baseQueue.length = 0;
    refQueue.length = 0;
  } // log


  baseQueue.forEach(function (item, index) {
    _data__WEBPACK_IMPORTED_MODULE_1__["deletedList"].push(['【删除了】: ', name + index, '\n值为:', item]);
  });
  refQueue.forEach(function (item, index) {
    _data__WEBPACK_IMPORTED_MODULE_1__["addedList"].push(['【新增了】: ', name + index, '\n值为:', item]);
  }); // 比较

  common.forEach(function (item, index) {
    return eq(item, index);
  });
};
/**
 * 分情况
 * @param {*} _baseCur
 * @param {*} _refCur
 * @return {{base: Object, ref: Object}}
 */


/* harmony default export */ __webpack_exports__["default"] = (function (_baseCur, _refCur) {
  // 初始化
  baseCur = _baseCur;
  refCur = _refCur;
  base = [];
  ref = [];
  common = [];
  baseQueue = [];
  baseQueueLen = 0;
  refQueue = [];
  baseCurValue = baseCur.value;
  name = baseCur.key + ' -> ';
  type = _utils__WEBPACK_IMPORTED_MODULE_0__["toString"].call(baseCurValue); // 可遍历

  switch (type) {
    case '[object Map]':
      baseCurValue = strMapToObj(baseCurValue);
      refCur = strMapToObj(refCur);

    case '[object Object]':
      objectHandle();
      break;

    case '[object Set]':
      baseCurValue = _toConsumableArray(baseCurValue);
      refCur = _toConsumableArray(refCur);

    case '[object Array]':
      arrayHandle();
      break;
  }

  return {
    base: base,
    ref: ref
  };
});

/***/ }),

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: memory, deletedList, addedList, changedList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memory", function() { return memory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletedList", function() { return deletedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addedList", function() { return addedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changedList", function() { return changedList; });
var memory = [];
var deletedList = [];
var addedList = [];
var changedList = [];

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compareNextLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compareNextLayer */ "./compareNextLayer.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log */ "./log.js");

 // 快照比较, 防止 const a = {b: 1}, a.c = 2
// 路径
// 一定要比较到基本类型
// bfs

/**
 * 快照比较
 * @param {*} baseTree 
 * @param {*} refTree 
 * @param {*} baseTreeName 
 */

window.compare = function (baseTree, refTree, baseTreeName) {
  if (typeof baseTreeName === 'undefined') {
    throw new Error('必须提供第三个参数!');
  }

  var baseQueue = [];
  var refQueue = [];
  baseQueue.push({
    key: baseTreeName,
    value: baseTree
  });
  refQueue.push(refTree); // 非递归bfs

  while (baseQueue.length > 0) {
    var baseCur = baseQueue.shift();
    var refCur = refQueue.shift();
    var compareRet = Object(_compareNextLayer__WEBPACK_IMPORTED_MODULE_0__["default"])(baseCur, refCur);
    baseQueue = baseQueue.concat(compareRet.base);
    refQueue = refQueue.concat(compareRet.ref);
  } // 报告


  Object(_log__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/***/ }),

/***/ "./log.js":
/*!****************!*\
  !*** ./log.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./data.js");
 // 报告

/* harmony default export */ __webpack_exports__["default"] = (function () {
  _data__WEBPACK_IMPORTED_MODULE_0__["deletedList"].forEach(function (item) {
    console.log.apply(null, item);
  });
  _data__WEBPACK_IMPORTED_MODULE_0__["addedList"].forEach(function (item) {
    console.log.apply(null, item);
  });
  _data__WEBPACK_IMPORTED_MODULE_0__["changedList"].forEach(function (item) {
    console.log.apply(null, item);
  });
});

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/*! exports provided: toString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
var toString = Object.prototype.toString;

/***/ })

/******/ });
//# sourceMappingURL=compare.js.map