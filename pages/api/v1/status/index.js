import database from "infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum");
  console.log(result.rows);

  response
    .status(200)
    .json({ chave: "Alguma mensagem que pode ter acentos tipo: olá, bão?" });
}

export default status;
