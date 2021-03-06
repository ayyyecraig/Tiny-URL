const express = require("express");
const validUrl = require("valid-url");
const shortid = require("shortid");

// Handler
const router = express.Router();

// Importing model
const Url = require("../models/UrlModel");

const baseUrl = "http:localhost:4000";

router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;

  if (!validUrl.isUri(baseUrl)) {
    return res.status(400).json("missing_URL");
  }

  // If url is valid, create url code
  const urlCode = shortid.generate();

  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({
        longUrl,
      });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = baseUrl + "/" + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });
        await url.save();
        res.json(url);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(404).json("Invalid longUrl");
  }
});

module.exports = router;
