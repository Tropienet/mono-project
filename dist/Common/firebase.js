"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _app = _interopRequireDefault(require("firebase/compat/app"));
require("firebase/compat/firestore");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var firebaseConfig = {
  apiKey: "AIzaSyDcr05MEQ2gub3jMP61VKqiOKgwnjLaI-c",
  authDomain: "mono-car-project.firebaseapp.com",
  projectId: "mono-car-project",
  storageBucket: "mono-car-project.appspot.com",
  messagingSenderId: "835261690961",
  appId: "1:835261690961:web:bd4a99b567a23bdbfcf470"
};
_app.default.initializeApp(firebaseConfig);
var _default = _app.default;
exports.default = _default;