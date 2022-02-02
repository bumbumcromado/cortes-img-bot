import { gerarThumbnail } from "./gerarThumbnail";
import { thumbSimples } from "./templates/thumbSimples";

const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public'));

const thumbTeste = {texto: '"NUNCA QUIS JOGAR DE SUPORTE NA VIDA"', imagem: 8, titulo: 'SOBRE A COMPRA DA BLIZZARD | Cortes do Yetz' };
const template = thumbSimples(thumbTeste);

app.listen(port, async () => {
    console.log(`servidor rodando na porta ${port}`);
    await gerarThumbnail(port, template, 'suporte');
    process.exit(0);
});