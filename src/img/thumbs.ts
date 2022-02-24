interface IImgThumbnail {
    name: string,
    link: string
}

//refatorar para essa lista vir de banco de dados, mas armazenar como se fosse um cache pra não consultar o tempo inteiro
const thumbs: IImgThumbnail[] = [
    { name: 'listando', link: 'https://i.imgur.com/SdeeDU4.png'},
    { name: 'neutro_1', link: 'https://i.imgur.com/rE40HXY.png'},
    { name: 'bebendo_agua', link: 'https://i.imgur.com/mi9tJ0s.png'},
    { name: 'apontando', link: 'https://i.imgur.com/abDHR4w.png'},
    { name: 'surpreso_1', link: 'https://i.imgur.com/xizD0Ge.png'},
    { name: 'sorrindo', link: 'https://i.imgur.com/gWkNxa3.png'},
    { name: 'explicando', link: 'https://i.imgur.com/lky2DKn.png'},
    { name: 'indignado', link: 'https://i.imgur.com/vu1sIx4.png'},
    { name: 'surpreso_2', link: 'https://i.imgur.com/RdJ9mCA.png'},
    { name: 'bebendo_agua2', link: 'https://i.imgur.com/MDmjTCz.png'},
    { name: 'listando2', link: 'https://i.imgur.com/rTBkWrZ.png'},
    { name: 'neutro_2', link: 'https://i.imgur.com/EMJPijd.png'},
    { name: 'indignado_2', link: 'https://i.imgur.com/EkKu2Cm.png'},
    { name: 'neutro_3', link: 'https://i.imgur.com/6nkthIY.png'},
    { name: 'neutro_4', link: 'https://i.imgur.com/PHMwGg1.png'},
    { name: 'neutro_5', link: 'https://i.imgur.com/6qLlrzM.png'},
]

export function getRandomImage(): IImgThumbnail{
    const randomImage = thumbs[Math.floor(Math.random()*thumbs.length)]
    return randomImage;
}

//localizar thumb especifica usando a propriedade nome (aplicando um filter) e devolve o link