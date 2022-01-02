var fs: any = require("fs");
var mongoose: any = require("mongoose");
mongoose.Promise = require("bluebird");

//require all the models
var models: any = {};
var names: any = fs.readdirSync("./src/models/");

names.forEach((name: string) => {
  if (!name.match(/\.ts$/)) return;
  if (name === "index.ts") return;
  let model = require("./" + name);
  models[model.modelName] = model;
});

// define non-enumerable method to place each model onto an object. primarily for making them global
Object.defineProperty(models.__proto__, "toContext", {
  enumerable: false,
  value: function (context) {
    for (let name in this) {
      context[name] = this[name];
    }
    return context;
  },
});

module.exports = models;
