import { generatePrint } from "./generate-print";
import { generateTemplate } from "./generate-template";
import Thumbnail from "./interfaces/thumbnail";
import { thumbnailDefaultValues } from "./templates/default-values";


export async function generateThumbnail(thumb:Thumbnail){
    const thumbFinal = {
        ...thumbnailDefaultValues(),
        ...thumb
    }

    const template = generateTemplate(thumbFinal);
    try {
        const img = await generatePrint({ width: template.width, height: template.height}, template.templateString);   
        return img
    } catch (error) {
        console.log(error);
    }
    
}