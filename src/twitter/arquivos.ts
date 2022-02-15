import fs from 'fs';

const caminhoDatabase = './src/twitter/database/db.json'

interface IThumbData {
        status: string,
        nome: string,
        template: string,
        texto: string,
        titulo:string,
        nomeCanal?: string,
        numViews?: string,
        data?: string,
        imagem?: string
}


export function carregarArquivo():IThumbData[]{
    const buffer = fs.readFileSync(caminhoDatabase, 'utf-8');
    const conteudo = <IThumbData[]>JSON.parse(buffer);
    return conteudo
}
export function salvarArquivo(conteudo: string | Buffer){
    const conteudoString = JSON.stringify(conteudo);
    return fs.writeFileSync(caminhoDatabase, conteudoString);
}