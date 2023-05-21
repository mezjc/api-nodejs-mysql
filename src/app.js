import express from "express";
import employeesRoutes from "./routes/employees.routes.js"; //importamos las rutas de los empleados
import indexRouters from "./routes/index.routes.js";

const app = express();

app.use(express.json()); //para que express entienda los formatos json

app.use(indexRouters);
app.use("/api", employeesRoutes); //use es para usar un emplyeeRoutes

app.use((req, res) => {
  res.status(404).json({ message: "endpoint not found" });
});

export default app;