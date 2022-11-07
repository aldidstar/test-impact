const express = require("express");
const router = express.Router();
const helpers = require("../helpers/util");
const quotes = require("../controllers/quotes");

router.get("/api", helpers.verifyToken, quotes.getApiQuotes);

router.get("/", helpers.verifyToken, quotes.getAllQuotes);

router.post("/", helpers.verifyToken, quotes.postQuotes);

router.put("/:id", helpers.verifyToken, quotes.updateQuotes);

router.delete("/:id", helpers.verifyToken, quotes.deleteQuotes);

module.exports = router;
