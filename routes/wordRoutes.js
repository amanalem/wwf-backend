const router = require("express").Router();
const wordCtrl = require("../controllers/wordCtrl.js");

// index
router.get("/", wordCtrl.index);

// create
router.post("/", wordCtrl.create);

// show
router.get("/:id", wordCtrl.show);

// update
router.get("/:id/edit", wordCtrl.update);

// delete
router.get("/:id", wordCtrl.destroy);

module.exports = router;
