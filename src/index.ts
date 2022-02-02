import { gerarPrint } from "./gerarPrint";
import { gerarTemplate } from "./gerarTemplate";
import { salvarHTML } from "./salvarHTML";

const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public'));

app.listen(port, async () => {
    console.log(`servidor rodando na porta ${port}`);
    const template = gerarTemplate({texto: '"NÃO DÁ PRA SABER AINDA, VAMOS ACOMPANHAR"', imagem: 7, titulo: 'SOBRE A COMPRA DA BLIZZARD | Cortes do Yetz' });
    await salvarHTML(template);
    await gerarPrint({ width:538, height: 397}, './thumbs_finais/teste.png', port);
    process.exit(0);
  });