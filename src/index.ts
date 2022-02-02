import { gerarThumbnail } from "./gerarThumbnail";

const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public'));

const thumbTeste = {
    nome: 'patati_patata',
    template:'thumbSimples',
    texto: '"ELES NÃO SABIAM QUE OS CARAS ERAM OS COVERS"',
    imagem: 8,
    titulo: 'DEU TUDO ERRADO NO SHOW DO PATATI PATATA | Cortes do Yetz'
};

app.listen(port, async () => {
    console.log(`servidor rodando na porta ${port}`);
    await gerarThumbnail(port, thumbTeste);
    process.exit(0);
});