import { gerarThumbnail } from "../gerarThumbnail";
import twitter from "./twitterClient";
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://paparusso33:PP8Dmqlf0Iwsr1VL@cortesdb-virginia.xpbce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
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

async function atualizarStatus(collection, nome){
    const resultado = await collection.updateOne({ nome: nome},{$set: {status: "ok"}});
    return resultado;
}

async function start() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('thumbnails');
    const resultadoBusca = await buscarPendente(collection);
    postarThumbnail(resultadoBusca);
    const atualizada = await atualizarStatus(collection, resultadoBusca.nome);
    console.log(atualizada);

    return 'finalizado';
}

start()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());