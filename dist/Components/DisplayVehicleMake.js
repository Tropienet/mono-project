"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function DisplayVehicle(props) {
  return /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("h2", null, props.name), /*#__PURE__*/_react.default.createElement("p", null, props.abrv));
}
var _default = DisplayVehicle;
exports.default = _default;