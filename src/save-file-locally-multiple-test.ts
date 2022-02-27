// import { generateThumbnail } from "./generate-thumbnail";
import fs from 'fs';
import Thumbnail from './entities/thumbnail';
import { generatePrint } from "./generate-print";
import { multiple } from "./templates/multiple";

// const thumbTest = {
//     name: 'teste_imgAleatoria',
//     template:'simpleThumbnail',
//     text: 'fake text for test',
//     title: 'fake title for test',
//     channelName: 'Cortes Gamers',
//     numViews: '5,6 mil',
//     date: '2 anos',
//     image: 'https://i.imgur.com/EkKu2Cm.png',
//     avatar: 'https://i.imgur.com/L8jx3y5.png'
// }
// const thumbTest2 = {
//     name: 'teste_imgAleatoria',
//     template:'simpleThumbnail',
//     text: 'fake text for test',
//     title: 'fake title for test',
//     channelName: 'Cortes Gamers',
//     numViews: '5,6 mil',
//     date: '2 anos',
//     image: 'https://i.imgur.com/EkKu2Cm.png',
//     avatar: 'https://i.imgur.com/L8jx3y5.png'
// }
// const thumbTest3 = {
//     name: 'teste_imgAleatoria',
//     template:'simpleThumbnail',
//     text: 'fake text for test',
//     title: 'fake title for test',
//     channelName: 'Cortes Gamers',
//     numViews: '5,6 mil',
//     date: '2 anos',
//     image: 'https://i.imgur.com/EkKu2Cm.png',
//     avatar: 'https://i.imgur.com/L8jx3y5.png'
// }
const thumbTest4 = {
    text: 'fake text for test',
    title: 'fake title for test'
}
const thumbTest5 = {
    text: 'fake text for test',
    title: 'fake title for test'
}
const thumbTest6 = {
    text: 'fake text for test',
    title: 'fake title for test'
}
;

function saveFile(img:string | Buffer, fileName:string){
    fs.writeFileSync(`./final_thumbnails/${fileName}.png`, img);
}

async function start(){
    try {
        console.log('starting (multiple) print generation');
        const desktopTemplate = multiple.generate([Thumbnail.create(thumbTest4),Thumbnail.create(thumbTest5),Thumbnail.create(thumbTest6)])

        const img = await generatePrint(desktopTemplate);
        saveFile(img, 'test_multiple');
        console.log('end');
    } catch (error) {
        console.log(error.message);
    }
}
start();