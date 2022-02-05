import fs from 'fs';

export  default function salvarArquivo(img: string | Buffer, nomeArquivo: string){
    return new Promise((resolve, reject) =>{
        fs.writeFile(`./thumbs_finais/${nomeArquivo}.png`, img, erro =>{
            if(erro){
                reject(erro);
            }
            resolve(console.log('arquivo salvo com sucesso'));
        })
    })
}