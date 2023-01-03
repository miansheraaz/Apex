import { Router } from "express";
import { login } from "../controllers/auth.controller";

const router = Router();

router.post("/login", login);

export default router;

// update 2023-01-02 commit 1

// update 2023-01-03 commit 3
