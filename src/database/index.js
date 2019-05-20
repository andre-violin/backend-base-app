const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/baseapi", {
  useCreateIndex: true,
  useNewUrlParser: true
});

module.exports = mongoose;
