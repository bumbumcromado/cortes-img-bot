import { gerarThumbnail } from "./gerarThumbnail";

const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public'));

const thumbTeste = {
    nome: 'lenda',
    template:'thumbSimples',
    texto: '"O CARA É SIMPLESMENTE UMA LENDA"',
    imagem: 13,
    titulo: 'SOBRE O CELSO PORTIOLI | Cortes do Yetz',
    nomeCanal: 'MultiCortes',
    numViews: '318 mil',
    data: '2 anos',
    avatar: 'https://i.imgur.com/xIK8ymS.jpg'
};

const thumbTeste2 = {
    nome: 'imgur',
    template:'thumbSimples',
    texto: '"TESTANDO PUXAR IMAGENS DA NUVEM"',
    imagem: 13,
    titulo: 'PEGANDO IMAGENS DO IMGUR | Cortes do Yetz'
};


app.listen(port, async () => {
    console.log(`servidor rodando na porta ${port}`);
    await gerarThumbnail(port, thumbTeste);
    await gerarThumbnail(port, { nome:'desktop', template: 'desktop', texto: 'ola mundo', imagem: 13, titulo: 'testando novamente'});
    await gerarThumbnail(port, thumbTeste2);
    process.exit(0);
});