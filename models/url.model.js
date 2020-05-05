const mongoose = require("mongoose");
// use Schema to create a new document schema
const Schema = mongoose.Schema;
// exercise with 3 fields
// also add timestamp data
const urlSchema = new Schema(
  {
    original_url: { type: String, required: true },
    short_url: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
// create User to export User model
const Url = mongoose.model("Url", urlSchema);

// export
module.exports = Url;