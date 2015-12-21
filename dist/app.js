"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("core-js");

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get("/users", function (req, res) {
  res.status(200).send([{ name: "Duncan" }]);
});

exports.default = app;
//# sourceMappingURL=app.js.map