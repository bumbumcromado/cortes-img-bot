import Template from "./interfaces/template";
import Thumbnail from "./interfaces/thumbnail";
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

