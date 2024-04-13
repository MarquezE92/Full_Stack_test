import { Router } from "express";
import { uploadSingleFile } from "../uploadMiddleware";
import routeGetUsers from "./getUsers";
import routePostFiles from "./postFiles";

const router = Router();

router.get("/api/users", routeGetUsers);
router.post("/api/files", uploadSingleFile, routePostFiles);

export default router;