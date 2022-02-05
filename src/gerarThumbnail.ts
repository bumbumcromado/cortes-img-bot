import { gerarPrint } from "./gerarPrint";
import { gerarTemplate } from "./gerarTemplate";
import IThumbnail from "./interfaces/IThumb";
import { valoresPadrao } from "./templates/valoresPadrao";


export async function gerarThumbnail(thumb:IThumbnail){
    const thumbFinal = {
        ...valoresPadrao(),
        ...thumb
    }

    const template = gerarTemplate(thumbFinal);
    try {
        await gerarPrint({ width: template.width, height: template.height}, `./thumbs_finais/${thumbFinal.nome}.png`, template.templateString);   
    } catch (error) {
        console.log(error);
    }
    
}