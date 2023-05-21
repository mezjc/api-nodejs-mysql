import { Router } from "express";

import { ping } from "../controllers/index.controller.js";

const router = Router();

//creamos una ruta para probar la conexion a la base de datos
router.get("/ping", ping);

export default router;
