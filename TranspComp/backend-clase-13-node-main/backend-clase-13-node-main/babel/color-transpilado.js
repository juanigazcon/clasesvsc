"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Color = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);
  }
  _createClass(Color, [{
    key: "getRandomColor",
    value: function getRandomColor() {
      var red = Math.floor(Math.random() * 255);
      var green = Math.floor(Math.random() * 255);
      var blue = Math.floor(Math.random() * 255);
      return "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")");
    }
  }]);
  return Color;
}();
var color = new Color();
console.log(color.getRandomColor());
