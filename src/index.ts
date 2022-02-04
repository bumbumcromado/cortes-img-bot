import { gerarThumbnail } from "./gerarThumbnail";

const thumbTeste = {
    nome: 'teste_imgAleatoria',
    template:'thumbSimples',
    texto: '"NEM UM NEM OUTRO, MUITO PELO <span>CONTRÁRIO</span>"',
    titulo: 'OPINIÃO SOBRE A DISCUSSÃO BISCOITO E BOLACHA(YETZ)',
    nomeCanal: 'Cortes dos Cortes',
    numViews: '5,3 mil',
    data: '3 anos',
    imagem: 'https://i.imgur.com/rE40HXY.png',
    avatar: 'https://i.imgur.com/xIK8ymS.jpg'
};

async function start(){
    console.log('iniciando a geração dos prints');
    await gerarThumbnail(thumbTeste);
    console.log('fim');
}
start();