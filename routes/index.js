import express from "express";
import queryRoutes from "./query.routes.js";

export const router = express.Router();
router.use("/query", queryRoutes);

