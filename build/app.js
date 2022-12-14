"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _db = require("./config/db");
var _visitor = _interopRequireDefault(require("./routers/visitor"));
var _dashboard = _interopRequireDefault(require("./routers/dashboard"));
var _staff = _interopRequireDefault(require("./routers/staff"));
var _department = _interopRequireDefault(require("./routers/department"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
require('dotenv').config();
var port = process.env.PORT || 3000;

// Middleware
app.use((0, _cors["default"])());
app.use((0, _helmet["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));

//routes
app.use('/api/v1', _visitor["default"]);
app.use('/api/v1', _dashboard["default"]);
app.use('/api/v1', _staff["default"]);
app.use('/api/v1', _department["default"]);
app.get('/api/v1', function (req, res) {
  res.send('Hello World!');
});

// Listen on port
app.listen(port, function () {
  console.log("server is running on ".concat(port));
});

// export default app;