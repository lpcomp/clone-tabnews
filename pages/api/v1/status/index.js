function status(request, response) {
  response
    .status(200)
    .json({ chave: "Alguma mensagem que pode ter acentos tipo: olá, bão?" });
}

export default status;
