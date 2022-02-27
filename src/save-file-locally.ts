import { generateThumbnail } from "./generate-thumbnail";
import fs from 'fs';

const thumbTest = {
    name: 'teste_imgAleatoria',
    template:'simpleThumbnail',
    text: 'fake text for test',
    title: 'fake title for test',
    channelName: 'Cortes Gamers',
    numViews: '5,6 mil',
    date: '2 anos',
    image: 'https://i.imgur.com/EkKu2Cm.png',
    avatar: 'https://i.imgur.com/L8jx3y5.png'
};
const thumbTest2 = {
    template:'desktop',
    text: 'fake text for test',
    title: 'fake title for test'
};

function saveFile(img:string | Buffer, fileName:string){
    fs.writeFileSync(`./final_thumbnails/${fileName}.png`, img);
}

async function start(){
    try {
        console.log('starting print generation');
        const img = await generateThumbnail(thumbTest2);
        saveFile(img, 'test2');
        console.log('end');
    } catch (error) {
        console.log(error.message);
    }
}
start();