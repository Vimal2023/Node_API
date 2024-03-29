import express from 'express';
import {  register, getMyProfile, login, logout } from "../controllers/user.js";
import { User } from "../models/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", register
    );

router.get("/login", login);
router.get("/logout", logout);

router.get("/me", isAuthenticated, getMyProfile);

export default router;