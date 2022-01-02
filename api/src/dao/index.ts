var fs: any = require("fs");

//require all the models
var VM: any = {};
var names: any = fs.readdirSync("./src/dao/");

names.forEach((name: string) => {
  if (!name.match(/\.ts$/)) return;
  if (name === "index.ts") return;
  var viewModel = require("./" + name);

  VM[name.replace(".ts", "")] = viewModel;
});
module.exports = VM;
