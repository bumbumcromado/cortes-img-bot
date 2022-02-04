import { gerarThumbnail } from "./gerarThumbnail";

// const express = require('express');
// const app = express();

// const port = 3000;

// app.use(express.static('public'));

const thumbTeste = {
    nome: 'teste_imgAleatoria',
    template:'thumbSimples',
    texto: '"TESTE THUMB ALEATORIA"',
    titulo: 'USANDO IMAGENS ALEATORIAS DE UMA LISTA | Cortes do Yetz',
    nomeCanal: 'CORTES DO YETZ',
    numViews: '318 mil',
    data: '2 anos',
    avatar: 'https://i.imgur.com/xIK8ymS.jpg'
};

const thumbTeste2 = {
    nome: 'teste_imgAleatoria2',
    template:'thumbSimples',
    texto: '"PUXANDO IMAGENS DO IMGUR"',
    titulo: 'PEGANDO DE UMA LISTA ALEATORIA | Cortes do Yetz'
};

const thumbTeste3 = {
    nome: 'teste_imgAleatoria3',
    template:'thumbSimples',
    texto: '"PUXANDO IMAGENS DO IMGUR"',
    titulo: 'PEGANDO DE UMA LISTA ALEATORIA | Cortes do Yetz'
};
const thumbTeste4 = {
    nome: 'teste_imgAleatoria4',
    template:'thumbSimples',
    texto: '"PUXANDO IMAGENS DO IMGUR"',
    titulo: 'PEGANDO DE UMA LISTA ALEATORIA | Cortes do Yetz'
};



// app.listen(port, async () => {
//     console.log(`servidor rodando na porta ${port}`);
//     await gerarThumbnail(port, thumbTeste);
//     await gerarThumbnail(port, { nome:'desktop', template: 'desktop', texto: 'ola mundo', imagem: 13, titulo: 'testando novamente'});
//     await gerarThumbnail(port, thumbTeste2);
//     process.exit(0);
// });

async function start(){
    console.log('iniciando a geração dos prints');
    await gerarThumbnail(thumbTeste);
    //await gerarThumbnail({ nome:'desktop', template: 'desktop', texto: 'ola mundo', imagem: 13, titulo: 'testando novamente'});
    await gerarThumbnail(thumbTeste2);
    await gerarThumbnail(thumbTeste3);
    await gerarThumbnail(thumbTeste4);
    console.log('fim');
}
start();