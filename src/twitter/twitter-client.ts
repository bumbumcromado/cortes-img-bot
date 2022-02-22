import TwitterApi, { TUploadableMedia, TwitterApiReadWrite } from 'twitter-api-v2';
import dotenv from 'dotenv';

dotenv.config();

class Twitter{
    private client: TwitterApiReadWrite;

    constructor(){
        this.createClient();
    }

    private createClient(){
        const userClient = new TwitterApi({
            appKey: process.env.API_KEY,
            appSecret: process.env.API_SECRET,
            accessToken: process.env.ACCESS_TOKEN,
            accessSecret: process.env.ACCESS_TOKEN_SECRET,
        });
        this.client = userClient.readWrite;
    }

    async postThumbnail(img: TUploadableMedia){
        const mediaId = await this.client.v1.uploadMedia(img, { type: 'png' });
        const { data: createdTweet } = await this.client.v2.tweet({ media: { media_ids: [mediaId] } });
        return createdTweet;
    }
}

export default new Twitter();
