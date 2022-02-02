import { gerarPrint } from "./gerarPrint";
import ITemplate from "./interfaces/ITemplate";
import { salvarHTML } from "./salvarHTML";


export async function gerarThumbnail(port: number, template: ITemplate, nomeArquivo:string){
    const templateGerado = template.templateString;
    await salvarHTML(templateGerado);
    await gerarPrint({ width: template.width, height: template.height}, `./thumbs_finais/${nomeArquivo}.png`, port);
}