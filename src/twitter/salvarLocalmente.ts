import { gerarThumbnail } from "./gerarThumbnail";
import { lerArquivo } from "./salvarArquivo";
import TwitterApi from 'twitter-api-v2';
import dotenv from 'dotenv';


dotenv.config();

lerArquivo('./src/db.json').then(data => console.log(data[1]));
// const userClient = new TwitterApi({
//     appKey: process.env.API_KEY,
//     appSecret: process.env.API_SECRET,
//     accessToken: process.env.ACCESS_TOKEN,
//     accessSecret: process.env.ACCESS_TOKEN_SECRET,
//   });
  
//   const rwClient = userClient.readWrite;


// async function start(){
//     try {
//         console.log('iniciando a geração dos prints');
//         const img = await gerarThumbnail(thumbTeste);
//         const mediaId = await rwClient.v1.uploadMedia(img,{type: 'png'});
//         const {data: createdTweet} = await rwClient.v2.tweet({media: {media_ids: [mediaId]}});
//         console.log('tweet postado, id: ',createdTweet.id);
//     } catch (error) {
//         console.log(error);
//     }
// }
// start();