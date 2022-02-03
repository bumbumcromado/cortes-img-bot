import { gerarPrint } from "./gerarPrint";
import { gerarTemplate } from "./gerarTemplate";
import { IInfosComplementares } from "./interfaces/IInfosComplementares";
import IThumbnail from "./interfaces/IThumb";
import { salvarHTML } from "./salvarHTML";

const valoresPadrao: IInfosComplementares = {
    nomeCanal: 'Cortes do Yetz [OFICIAL]',
    numViews: '2,9 mil',
    data: '1 ano',
    avatar: 'https://i.imgur.com/lrWCD3s.jpg'
}

export async function gerarThumbnail(port: number, thumb:IThumbnail){
    const thumbFinal = {
        ...valoresPadrao,
        ...thumb
    }

    const template = gerarTemplate(thumbFinal);
    await salvarHTML(template.templateString);
    await gerarPrint({ width: template.width, height: template.height}, `./thumbs_finais/${thumbFinal.nome}.png`, port);
}