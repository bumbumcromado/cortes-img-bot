import { salvarArquivo,carregarArquivo } from "./arquivos";

let conteudo = [];
conteudo.push(... carregarArquivo())

conteudo.forEach(elemento => {
    console.log(elemento)
});
// conteudo[1].status = 'OK';
// salvarArquivo(JSON.stringify(conteudo));