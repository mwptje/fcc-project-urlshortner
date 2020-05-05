const mongoose = require("mongoose");
// use Schema to create a new document schema
const Schema = mongoose.Schema;
// exercise with 3 fields
// also add timestamp data
const counterSchema = new Schema(
  {
    counter: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
// create User to export User model
const Counter = mongoose.model("Counter", counterSchema);

// export
module.exports = Counter;