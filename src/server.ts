import express from 'express';
import { gerarThumbnail } from './gerarThumbnail';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
  }))

app.listen(port, ()=>{
    console.log(`servidor rodando na porta ${port}`);
})

// app.post('/dados', async (req, res) => {
//     const body = req.body;
//     await gerarThumbnail(body);
    
//     app.get('/teste', (req, res)=>{
//         res.sendFile(path.resolve('./thumbs_finais/teste_api.png'));
//     })

//     return res.json(body);
// })

app.get('/teste', (req, res)=>{
    console.log('foi');
    res.setHeader('content-type', 'image/png');
    res.sendFile(path.resolve('./thumbs_finais/teste_api.png'));
})

app.post('/form', (req, res) => {
    const body = req.body;
    console.log(body);

    try{
        gerarThumbnail(body);
    } catch (error){
        console.log(error);
    }
    res.end();
})