import fs from 'fs';
import IThumbnail from '../interfaces/IThumb';

const caminhoDatabase = './database/thumbs-database.json'

export function carregarDatabase():IThumbnail[]{
    const buffer = fs.readFileSync(caminhoDatabase, 'utf-8');
    const conteudo = <IThumbnail[]>JSON.parse(buffer);
    return conteudo
}
export function atualizarDatabase(conteudo: IThumbnail[]){
    const conteudoString = JSON.stringify(conteudo);
    return fs.writeFileSync(caminhoDatabase, conteudoString);
}