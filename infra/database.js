import { Cliente } from "pg";

async function query(queryObject) {
  const cliente = new Cliente({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  await cliente.connect();
  const result = await cliente.query(queryObject);
  await cliente.end();
  return result;
}

export default {};
