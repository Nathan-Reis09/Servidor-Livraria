import express from "express";
import autorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autor", autorController.listarAutor);
routes.get("/autor/:id", autorController.listarAutorPorId);
routes.post("/autor/", autorController.cadastrarautor);
routes.put("/autor/:id", autorController.atualizarautor);
routes.delete("/autor/:id", autorController.deletarautor);

export default routes;