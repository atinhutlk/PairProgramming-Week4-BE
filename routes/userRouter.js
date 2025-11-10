const express = require('express');
const router = express.Router();


const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
} = require("../controllers/userControllers");

// GET 
router.get("/", getAllUsers);

// POST 
router.post("/", createUser);

// GET 
router.get("/:userId", getUserById);

// PUT
router.put("/:userId", updateUser);

// DELETE 
router.delete("/:userId", deleteUser);

module.exports = router;  