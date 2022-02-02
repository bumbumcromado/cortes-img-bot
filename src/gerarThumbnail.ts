import { gerarPrint } from "./gerarPrint";
import { gerarTemplate } from "./gerarTemplate";
import IThumbnail from "./interfaces/IThumb";
import { salvarHTML } from "./salvarHTML";


export async function gerarThumbnail(port: number, thumb:IThumbnail){
    const template = gerarTemplate(thumb);
    await salvarHTML(template.templateString);
    await gerarPrint({ width: template.width, height: template.height}, `./thumbs_finais/${thumb.nome}.png`, port);
}