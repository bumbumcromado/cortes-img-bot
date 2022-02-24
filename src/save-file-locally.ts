import { generateThumbnail } from "./generate-thumbnail";
import fs from 'fs';

const thumbTest = {
    name: 'teste_imgAleatoria',
    template:'thumbSimples',
    text: 'NÃO CONCORDO NEM DISCORDO, MUITO PELO <span>CONTRÁRIO</span>',
    title: 'OPINIÃO SOBRE A DISCUSSÃO XBOX VS PLAYSTATION (YETZ)',
    channelName: 'Cortes Gamers',
    numViews: '5,6 mil',
    date: '2 anos',
    image: 'https://i.imgur.com/EkKu2Cm.png',
    avatar: 'https://i.imgur.com/L8jx3y5.png'
};

function saveFile(img:string | Buffer, fileName:string){
    fs.writeFileSync(`./final_thumbnails/${fileName}.png`, img);
}

async function start(){
    console.log('starting print generation');
    const img = await generateThumbnail(thumbTest);
    saveFile(img, 'test');
    console.log('end');
}
start();