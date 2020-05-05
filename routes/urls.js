const router = require("express").Router();
let Url = require("../models/url.model");
let Counter = require("../models/counter.model");

// get -> get all urls
router.route("/").get((req, res) => {
  Url.find()
    .then(urls => res.json(urls))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:short_url").get((req,res) => {
  Url.find({short_url : req.params.short_url})
    .then(url => { 
      const redirect_url = url.original_url
      res.redirect(redirect_url)
    })
    .catch(err => {req.status(400).json({ error: err})})
})
router.route("/new").post((req, res) => {
  
  const original_url = req.body.url_input;
  const short_url = 1;
  const newUrl = new Url({
    original_url,
    short_url
  });
  newUrl
    .save()
    .then(() => res.json({ orignal_url: original_url, short_url: short_url }))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router