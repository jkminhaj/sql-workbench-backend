import { Router } from "express";
import QueryController from "../controllers/query.controller.js";

const queryRoutes = Router();

queryRoutes.post("/compile", QueryController.compileQueries);

export default queryRoutes ;