import { gerarThumbnail } from "../gerarThumbnail";
import { carregarDatabase, atualizarDatabase } from "./arquivos";
import twitter from "./TwitterClient";

let conteudo = carregarDatabase();
let thumbIndex = 0;

function ehPendente(elemento, index) {
    thumbIndex = index;
    return elemento.status === 'pendente';
}
async function postarThumbnail(thumb) {
    console.log('gerando thumbnail',thumb);
    const img = await gerarThumbnail(thumb);
    const mediaId = await twitter.v1.uploadMedia(img, { type: 'png' });
    const { data: createdTweet } = await twitter.v2.tweet({ media: { media_ids: [mediaId] } });
    console.log('tweet postado, id: ', createdTweet.id);
}

async function start() {
    try {
        const thumb = conteudo.find(ehPendente);
        if (!thumb) {
            console.log('nenhuma thumb pendente');
            return;
        }
        postarThumbnail(thumb);
        conteudo[thumbIndex].status = 'ok';
        atualizarDatabase(conteudo);
    } catch (error) {
        console.log(error);
    }
}

start();