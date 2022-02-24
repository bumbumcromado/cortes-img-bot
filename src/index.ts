import express from 'express';
import { generateThumbnail } from './generate-thumbnail';
require('dotenv/config');

const app = express();
let port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
});

app.post('/form', async (req, res) => {
    const body = req.body;
    console.log(body);

    try{
        const img = await generateThumbnail(body);
        res.setHeader('content-type', 'image/png');
        res.send(img);
    } catch (error){
        console.log(error);
        res.send(error);
    }
    
});