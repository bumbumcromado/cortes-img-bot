import { gerarPrint } from "./gerarPrint";
import { gerarTemplate } from "./gerarTemplate";
import IThumbnail from "./interfaces/IThumb";
import { salvarHTML } from "./salvarHTML";
import { valoresPadrao } from "./templates/valoresPadrao";


export async function gerarThumbnail(port: number, thumb:IThumbnail){
    const thumbFinal = {
        ...valoresPadrao,
        ...thumb
    }

    const template = gerarTemplate(thumbFinal);
    await salvarHTML(template.templateString);
    await gerarPrint({ width: template.width, height: template.height}, `./thumbs_finais/${thumbFinal.nome}.png`, port);
}