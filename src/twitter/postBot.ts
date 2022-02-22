import Mongo from './mongo-client';
// import { gerarThumbnail } from "../gerarThumbnail";
// import  Twitter  from "./twitter-client";
// import { MongoClient } from 'mongodb';
// import dotenv from 'dotenv';

// dotenv.config();

// const uri = process.env.MONGO_URI;
// const client = new MongoClient(uri);

// const dbName = 'cortesBot';


// async function buscarPendente(collection){
//     const resultado = await collection.findOne({status: "pendente"});
//     return resultado;
// }
// //atualizar com posted-url pegando o objeto completo e extraindo o id dentro da função
// async function atualizarStatus(collection, id){
//     const resultado = await collection.updateOne({ _id: id},{$set: {status: "ok"}});
//     return resultado;
// }

// async function start() {
//     try {
//         await client.connect();
//         console.log('conectado ao banco com sucesso');
//         const db = client.db(dbName);
//         const collection = db.collection('thumbnails');
//         const resultadoBusca = await buscarPendente(collection);
//         if(!resultadoBusca){
//             return 'sem thumbs pendentes'
//         }
//         const img = await gerarThumbnail(resultadoBusca);

//         const tweetInfo = await Twitter.postThumbnail(img);
//         //passar esse parametro para a atualização no banco
//         console.log('posted tweet id:',tweetInfo.id);
//         const atualizada = await atualizarStatus(collection, resultadoBusca._id);
//         console.log(atualizada);
//     } catch (error) {
//         return error;
//     }

//     return 'finalizado';
// }

// start()
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => client.close());

async function start(){
    try {
        const searchResult = await Mongo.findAPendingThumbnail();
        if(!searchResult){
            return 'Não há thumbnails Pendentes!';
        }
        
        console.log(searchResult);  
    } catch (error) {
        return error;
    }
}
start()
    .then(console.log)
    .catch(console.error)
    .finally(async () => await Mongo.disconnect());