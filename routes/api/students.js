const router = require("express").Router();
const studentsController = require("../../controllers/studentsController");

// Matches with "/api/books"
router.route("/")
  .get(studentsController.findAll)
  .post(studentsController.create)

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(studentsController.findById)
  .put(studentsController.update)
  .delete(studentsController.remove);

// Matches with

module.exports = router;
