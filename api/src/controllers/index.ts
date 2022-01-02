var fs: any = require("fs");

//require all the models
var controllers: any = {};
var names: any = fs.readdirSync("./src/controllers/");

names.forEach((name: string) => {
  if (!name.match(/\.ts$/)) return;
  if (name === "index.ts") return;
  var model = require("./" + name);

  controllers[name.replace(".ts", "")] = model;
});
module.exports = controllers;
