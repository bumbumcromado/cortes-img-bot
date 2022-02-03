import { gerarPrint } from "./gerarPrint";
import { gerarTemplate } from "./gerarTemplate";
import IThumbnail from "./interfaces/IThumb";
import { salvarHTML } from "./salvarHTML";

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

export async function gerarThumbnail(port: number, thumb:IThumbnail = valoresPadrao){
    const thumbFinal = {
        ...valoresPadrao,
        ...thumb
    }

    const template = gerarTemplate(thumbFinal);
    await salvarHTML(template.templateString);
    await gerarPrint({ width: template.width, height: template.height}, `./thumbs_finais/${thumbFinal.nome}.png`, port);
}