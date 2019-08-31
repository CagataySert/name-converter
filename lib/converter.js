"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Converter = function Converter() {
  _classCallCheck(this, Converter);
};

_defineProperty(Converter, "toSnake", function (anyStr) {
  var upperStr = anyStr.toUpperCase();
  var strArray = Array.from(anyStr);
  var upperStrArray = Array.from(upperStr);
  var indexsOfUpperChars = [];
  strArray.forEach(function (_char, index) {
    var areCharsEqual = _char === upperStrArray[index];

    if (areCharsEqual && _char !== "-" && _char !== "_") {
      strArray[index] = strArray[index].toLowerCase();
      indexsOfUpperChars.push(index);
    } else if (areCharsEqual && _char === "-" && areCharsEqual !== "_") {
      strArray[index] = "_";
    }
  });
  indexsOfUpperChars.forEach(function (_char2, index) {
    strArray.splice(_char2 + index, 0, "_");
  });
  return strArray.join("");
});

_defineProperty(Converter, "toCamel", function (anyStr) {
  var hasUnderScore = anyStr.includes("-");
  var hasHyphen = anyStr.includes("_");
  var camelStr;

  if (hasUnderScore || hasHyphen) {
    camelStr = Converter.converToCamelFormat(anyStr);
  }

  var hasDifferentSizeLetter = anyStr === anyStr.toLowerCase();
  console.log(camelStr);
  return camelStr;
});

_defineProperty(Converter, "toCapital", function (anyStr) {
  var hasUnderScore = anyStr.includes("_");
  var hasHyphen = anyStr.includes("-");
  var arrayOfStr = Array.from(anyStr.toLowerCase());

  if (hasUnderScore || hasHyphen) {
    var filteredArray = arrayOfStr.filter(function (_char3) {
      return _char3 !== "_" && _char3 !== "-";
    });
    filteredArray[0] = filteredArray[0].toUpperCase();
    return filteredArray.join("");
  }

  arrayOfStr[0] = arrayOfStr[0].toUpperCase();
  return arrayOfStr.join("");
});

var _default = Converter;
exports["default"] = _default;