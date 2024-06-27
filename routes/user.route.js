const express=require("express");
const { getAllUsers, createUser, getOneUser, deletelUser, updateUser } = require("../controllers/user.controller");

const router=express.Router();

router.get("/", getAllUsers)
router.get("/:id", getOneUser)
router.post("/", createUser)
router.delete("/:id", deletelUser)
router.patch("/:id", updateUser)


module.exports=router;