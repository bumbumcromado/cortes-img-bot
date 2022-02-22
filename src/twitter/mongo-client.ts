import { Collection, MongoClient } from "mongodb";
import IThumbnail from "../interfaces/IThumb";
import dotenv from 'dotenv';

dotenv.config();


class Mongo {
    private client: MongoClient;
    private mongoURI: string = process.env.MONGO_URI;
    private databaseName: string = 'cortesBot';
    private collectionName:string = 'thumbnails';
    private collection: Collection;

    constructor(){
        this.createClient();
    }
    private createClient(){
        const userClient = new MongoClient(this.mongoURI);
        this.client = userClient;
    }

    async connect():Promise<void>{
        await this.client.connect();
        const db = this.client.db(this.databaseName);
        this.collection = db.collection(this.collectionName);
    }
    async disconnect():Promise<void>{
        this.client.close();
    }

    //alterar para IThumbnail depois que funcionar os testes, já que na interface o retorno será esse
    async findAPendingThumbnail():Promise<any | null>{
        const result = this.collection.findOne({status: "pendente"});
        return result;
    }
    async updateThumbnailStatus(dbFile, postUrl){
        const result = this.collection.updateOne({_id: dbFile._id}, {$set: {status: "ok", postUrl: postUrl}});
        return result;
    }
}
export default new Mongo();