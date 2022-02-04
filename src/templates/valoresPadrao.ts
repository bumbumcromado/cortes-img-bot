import { pegarImgAleatoria } from "../img/thumbs";
import IInfosComplementares from "../interfaces/IInfosComplementares";

export const valoresPadrao = function():IInfosComplementares {
    return {
        imagem: pegarImgAleatoria().link,
        nomeCanal: 'Cortes do Yetz [OFICIAL]',
        numViews: '2,9 mil',
        data: '1 ano',
        avatar: 'https://i.imgur.com/lrWCD3s.jpg'
    }
}