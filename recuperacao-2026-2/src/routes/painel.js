var express = require("express");
var router = express.Router();


router.get("topAutores", function (req, res) {
    livrosController.topAutores(req, res);
});

module.exports = router;