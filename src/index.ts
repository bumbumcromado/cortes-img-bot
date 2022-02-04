import { gerarThumbnail } from "./gerarThumbnail";

// const express = require('express');
// const app = express();

// const port = 3000;

// app.use(express.static('public'));

const thumbTeste = {
    nome: 'teste1',
    template:'thumbSimples',
    texto: '"TESTE"',
    imagem: 13,
    titulo: 'TESTE | Cortes do Yetz',
    nomeCanal: 'TESTE',
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
    console.log('fim');
}
start();