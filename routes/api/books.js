const axios = require("axios");
const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.get("/bookSearch", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
    .then(function(response) {
      res.json(response.data);
    })
    .catch(err => res.status(422).json(err));
});

router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

  router
  .route("/:id")
  .delete(booksController.remove);

module.exports = router;
