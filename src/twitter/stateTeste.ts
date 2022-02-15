import { salvarArquivo,carregarArquivo } from "./arquivos";

let conteudo = [];
conteudo.push(... carregarArquivo())
conteudo[1].status = 'ok'
console.log(conteudo);
salvarArquivo(conteudo);