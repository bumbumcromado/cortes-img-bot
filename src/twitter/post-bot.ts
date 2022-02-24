import { generateThumbnail } from "../generate-thumbnail";
import Mongo from '../repositories/mongo-client';
import  Twitter  from "./twitter-client";

const postBaseUrl = 'https://twitter.com/cortesdoyetz/status/';

async function start(){
    try {
        //connecting to the database
        await Mongo.connect();
        console.log('Connected successfully');

        const searchResult = await Mongo.findAPendingThumbnail();
        
        if(!searchResult){
            return 'no pending thumbnails';
        }
        
        const img = await generateThumbnail(searchResult);
        const tweetInfo = await Twitter.postThumbnail(img);
        const updatedThumbnail = await Mongo.updateThumbnailStatus(searchResult, `${postBaseUrl}${tweetInfo.id}`);
        
        console.log(updatedThumbnail);

        return 'finished!';
    } catch (error) {
        return error;
    }
}
start()
    .then(console.log)
    .catch(console.error)
    .finally(async () => await Mongo.disconnect());