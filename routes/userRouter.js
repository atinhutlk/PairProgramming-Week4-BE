const express = require('express');
const router = express.Router();
const authorizeUsersAccess = require("../middleware/auth");

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
router.post("/", authorizeUsersAccess, createUser);

// GET 
router.get("/:userId", getUserById);

// PUT
router.put("/:userId", authorizeUsersAccess,updateUser);

// DELETE 
router.delete("/:userId", authorizeUsersAccess, deleteUser);

module.exports = router;  