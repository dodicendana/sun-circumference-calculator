var mongoose: any = require("mongoose");

let schema: any = new mongoose.Schema(
  {
    pi: { type: String, required: true, default: global.CONFIG.defaultPiValue },
  },
  {
    timestamps: true,
  }
);

schema.set("toJSON", { getters: true });

module.exports = mongoose.model("PiValue", schema);
