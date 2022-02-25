import Template from "./entities/template";
import Thumbnail from "./entities/thumbnail";
import { desktop } from "./templates/desktop";
import { thumbSimples } from "./templates/thumbSimples";


export function generateTemplate(thumb: Thumbnail): Template{
   

    if(thumb.template == 'thumbSimples'){
        return thumbSimples(thumb);
    }
    if(thumb.template == 'desktop'){
        return desktop(thumb);
    }
}

