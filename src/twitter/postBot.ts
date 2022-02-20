import { gerarThumbnail } from "../gerarThumbnail";
import twitter from "./twitterClient";
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

const dbName = 'cortesBot';


async function postarThumbnail(thumb) {
    console.log('gerando thumbnail',thumb);
    const img = await gerarThumbnail(thumb);
    const mediaId = await twitter.v1.uploadMedia(img, { type: 'png' });
    const { data: createdTweet } = await twitter.v2.tweet({ media: { media_ids: [mediaId] } });
    console.log('tweet postado, id: ', createdTweet.id);
}

async function buscarPendente(collection){
    const resultado = await collection.findOne({status: "pendente"});
    return resultado;
}

async function atualizarStatus(collection, id){
    const resultado = await collection.updateOne({ _id: id},{$set: {status: "ok"}});
    return resultado;
}

async function start() {
    try {
        await client.connect();
        console.log('conectado ao banco com sucesso');
        const db = client.db(dbName);
        const collection = db.collection('thumbnails');
        const resultadoBusca = await buscarPendente(collection);
        if(!resultadoBusca){
            return 'sem thumbs pendentes'
        }

        postarThumbnail(resultadoBusca);
        const atualizada = await atualizarStatus(collection, resultadoBusca._id);
        console.log(atualizada);
    } catch (error) {
        return error;
    }

    return 'finalizado';
}

start()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());