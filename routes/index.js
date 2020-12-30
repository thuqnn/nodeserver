var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res) {
  return res.json({ test: "test" });
});

module.exports = router;
