const express = require('express');
const router = express.Router();
const authorizeUsersAccess = require("../middleware/auth");

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourControllers");

// GET /tours
router.get("/", getAllTours);

// POST /tours
router.post("/",authorizeUsersAccess, createTour);

// GET /tours/:tourId
router.get("/:tourId", getTourById);

// PUT /tours/:tourId
router.put("/:tourId",authorizeUsersAccess, updateTour);

// DELETE /tours/:tourId
router.delete("/:tourId",authorizeUsersAccess, deleteTour);

module.exports = router;  