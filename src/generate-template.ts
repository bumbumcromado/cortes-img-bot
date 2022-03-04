import { Template, TemplateType } from "./entities/template";
import Thumbnail from "./entities/thumbnail";
import { desktop } from "./templates/desktop";
import { simpleThumbnail } from "./templates/simpleThumbnail";


export function generateTemplate(thumb: Thumbnail):Template<TemplateType>{
   
    if(thumb.template == TemplateType.SIMPLETHUMBNAIL){
        return simpleThumbnail.generate(thumb);
    }
    if(thumb.template == TemplateType.DESKTOP){
        return desktop.generate(thumb);
    }

    throw new Error('Invalid template')
}

