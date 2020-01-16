const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
    console.log(req.query);
  axios
    .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
    .then(function (response) {
        res.json(response.data)
    })    .catch(err => res.status(422).json(err));
});

module.exports = router;