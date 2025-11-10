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

// GET 
router.get("/:userId", getUserById);


//middleware
router.use(authorizeUsersAccess);


// POST 
router.post("/",createUser);

// PUT
router.put("/:userId", updateUser);

// DELETE 
router.delete("/:userId", deleteUser);

module.exports = router;  