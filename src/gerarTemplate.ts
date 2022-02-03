import ITemplate from "./interfaces/ITemplate";
import IThumbnail from "./interfaces/IThumb";
import { desktop } from "./templates/desktop";
import { thumbSimples } from "./templates/thumbSimples";

const valoresPadrao: IThumbnail = {
    nome: 'obj_padrao',
    template:'thumbSimples',
    texto: '"CITACAO PADRAO"',
    imagem: 13,
    titulo: 'TITULO DO VÍDEO PADRÃO | Cortes do Yetz',
    nomeCanal: 'Cortes do Yetz [OFICIAL]',
    numViews: '2,9 mil',
    data: '1 ano',
    avatar: 'https://i.imgur.com/lrWCD3s.jpg'
}


export function gerarTemplate(thumb: IThumbnail = valoresPadrao): ITemplate{
    const thumbFinal = {
        ...valoresPadrao,
        ...thumb
    }

    if(thumbFinal.template == 'thumbSimples'){
        return thumbSimples(thumbFinal);
    }
    if(thumbFinal.template == 'desktop'){
        return desktop(thumbFinal);
    }
}

