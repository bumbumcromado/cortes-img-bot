interface IImgThumbnail {
    nome: string,
    link: string
}

//refatorar para essa lista vir de banco de dados, mas armazenar como se fosse um cache pra não consultar o tempo inteiro
const thumbs: IImgThumbnail[] = [
    { nome: 'listando', link: 'https://i.imgur.com/SdeeDU4.png'},
    { nome: 'neutro_1', link: 'https://i.imgur.com/rE40HXY.png'},
    { nome: 'bebendo_agua', link: 'https://i.imgur.com/mi9tJ0s.png'},
    { nome: 'apontando', link: 'https://i.imgur.com/OyggZHS.png'},
    { nome: 'surpreso_1', link: 'https://i.imgur.com/eQHJxKf.png'},
    { nome: 'sorrindo', link: 'https://i.imgur.com/lJBHqiN.png'},
    { nome: 'explicando', link: 'https://i.imgur.com/PtQ5sfC.png'},
    { nome: 'indignado', link: 'https://i.imgur.com/E6JzV27.png'},
    { nome: 'surpreso_2', link: 'https://i.imgur.com/IdxL1oR.png'},
    { nome: 'bebendo_agua2', link: 'https://i.imgur.com/wetKR6L.png'},
    { nome: 'listando2', link: 'https://i.imgur.com/hr4FIEU.png'},
    { nome: 'neutro_2', link: 'https://i.imgur.com/KzBpxYU.png'},
    { nome: 'indignado_2', link: 'https://i.imgur.com/mLeejdx.png'},
    { nome: 'neutro_3', link: 'https://i.imgur.com/jAolunl.png'},
    { nome: 'neutro_4', link: 'https://i.imgur.com/UnZHA5L.png'},
    { nome: 'neutro_5', link: 'https://i.imgur.com/i1QKZjT.png'},
]

export function pegarImgAleatoria(): IImgThumbnail{
    const imgAleatoria = thumbs[Math.floor(Math.random()*thumbs.length)]
    return imgAleatoria;
}

//localizar thumb especifica usando a propriedade nome (aplicando um filter) e devolve o link