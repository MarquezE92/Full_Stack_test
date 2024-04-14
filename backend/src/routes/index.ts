import { Router } from "express";
import { uploadSingleFile } from "../uploadMiddleware.ts";
import routeGetUsers from "./getUsers.ts";
import routePostFiles from "./postFiles.ts";

const router = Router();

router.get("/api/users", routeGetUsers);
router.post("/api/files", uploadSingleFile, routePostFiles);

export default router;