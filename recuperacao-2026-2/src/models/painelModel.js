var database = require("../database/config");

function topAutores(precoCompra, precoVenda) {

    var instrucaoSql = `
          SELECT nome FROM livro where >${precoCompra} LIMIT 3
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    topAutores
}
