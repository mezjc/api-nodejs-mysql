import { pool } from "../db.js"; // importamos la conexion a la base de datos

export const ping = async (req, res) => {
  const [result] = await pool.query("SELECT 'Pong' AS result");
  res.json(result[0]);
};

