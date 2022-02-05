import { gerarThumbnail } from "./gerarThumbnail";
import salvarArquivo from "./salvarArquivo";

const thumbTeste = {
    nome: 'teste_imgAleatoria',
    template:'thumbSimples',
    texto: '"NÃO CONCORDO NEM DISCORDO, MUITO PELO <span>CONTRÁRIO</span>"',
    titulo: 'OPINIÃO SOBRE A DISCUSSÃO XBOX VS PLAYSTATION (YETZ)',
    nomeCanal: 'Cortes Gamers',
    numViews: '5,6 mil',
    data: '2 anos',
    imagem: 'https://i.imgur.com/EkKu2Cm.png',
    avatar: 'https://i.imgur.com/L8jx3y5.png'
};

async function start(){
    console.log('iniciando a geração dos prints');
    const img = await gerarThumbnail(thumbTeste);
    await salvarArquivo(img, 'teste');
    console.log('fim');
}
start();