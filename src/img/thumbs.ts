interface IImgThumbnail {
    nome: string,
    link: string
}

//refatorar para essa lista vir de banco de dados, mas armazenar como se fosse um cache pra não consultar o tempo inteiro
const thumbs: IImgThumbnail[] = [
    { nome: 'listando', link: 'https://i.imgur.com/SdeeDU4.png'},
    { nome: 'neutro_1', link: 'https://i.imgur.com/rE40HXY.png'},
    { nome: 'bebendo_agua', link: 'https://i.imgur.com/mi9tJ0s.png'},
    { nome: 'apontando', link: 'https://i.imgur.com/abDHR4w.png'},
    { nome: 'surpreso_1', link: 'https://i.imgur.com/xizD0Ge.png'},
    { nome: 'sorrindo', link: 'https://i.imgur.com/gWkNxa3.png'},
    { nome: 'explicando', link: 'https://i.imgur.com/lky2DKn.png'},
    { nome: 'indignado', link: 'https://i.imgur.com/vu1sIx4.png'},
    { nome: 'surpreso_2', link: 'https://i.imgur.com/RdJ9mCA.png'},
    { nome: 'bebendo_agua2', link: 'https://i.imgur.com/MDmjTCz.png'},
    { nome: 'listando2', link: 'https://i.imgur.com/rTBkWrZ.png'},
    { nome: 'neutro_2', link: 'https://i.imgur.com/EMJPijd.png'},
    { nome: 'indignado_2', link: 'https://i.imgur.com/EkKu2Cm.png'},
    { nome: 'neutro_3', link: 'https://i.imgur.com/6nkthIY.png'},
    { nome: 'neutro_4', link: 'https://i.imgur.com/PHMwGg1.png'},
    { nome: 'neutro_5', link: 'https://i.imgur.com/6qLlrzM.png'},
]

export function pegarImgAleatoria(): IImgThumbnail{
    const imgAleatoria = thumbs[Math.floor(Math.random()*thumbs.length)]
    return imgAleatoria;
}

//localizar thumb especifica usando a propriedade nome (aplicando um filter) e devolve o link