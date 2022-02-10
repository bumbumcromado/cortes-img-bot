import { gerarThumbnail } from "./gerarThumbnail";
import TwitterApi from 'twitter-api-v2';
import dotenv from 'dotenv';

dotenv.config();

//import salvarArquivo from "./salvarArquivo";

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

const userClient = new TwitterApi({
    appKey: process.env.API_KEY,
    appSecret: process.env.API_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_TOKEN_SECRET,
  });
  
  const rwClient = userClient.readWrite;


async function start(){
    try {
        console.log('iniciando a geração dos prints');
        const img = await gerarThumbnail(thumbTeste);
        const mediaId = await rwClient.v1.uploadMedia(img,{type: 'png'});
        const {data: createdTweet} = await rwClient.v2.tweet({media: {media_ids: [mediaId]}});
        console.log('tweet postado, id: ',createdTweet.id);
    } catch (error) {
        console.log(error);
    }
}
start();