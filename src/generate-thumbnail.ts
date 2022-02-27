import { generatePrint } from "./generate-print";
import { generateTemplate } from "./generate-template";
import Thumbnail from "./entities/thumbnail";


export async function generateThumbnail(thumbData:Thumbnail){
    const thumb = Thumbnail.create(thumbData);
    const template = generateTemplate(thumb);
    try {
        const img = await generatePrint(template);   
        return img
    } catch (error) {
        console.log(error);
    }
    
}