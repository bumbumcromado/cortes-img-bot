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
        const img = await gerarPrint({ width: template.width, height: template.height}, template.templateString);   
        return img
    } catch (error) {
        console.log(error);
    }
    
}