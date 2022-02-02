import fs from 'fs';

export function salvarHTML(template: string){
    return new Promise((resolve, reject) =>{
        fs.writeFile('./public/arquivo.html', template, erro =>{
            if(erro){
                reject(erro);
            }
            resolve(console.log('HTML gerado'));
        })
    })
}