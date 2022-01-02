var process: any = require("process");

module.exports = {
  port: process.env.PORT || 5000,
  whitelist_domain: ["http://localhost:3000", "null"],
  debug: true,
  db:
    "mongodb://dbUser:dbUserPassword@cluster0-shard-00-00.jv2rg.mongodb.net:27017,cluster0-shard-00-01.jv2rg.mongodb.net:27017,cluster0-shard-00-02.jv2rg.mongodb.net:27017/NaluriCodingChallenge?ssl=true&replicaSet=atlas-u1n9wk-shard-0&authSource=admin&retryWrites=true&w=majority",
  defaultPiValue: "3",
};
