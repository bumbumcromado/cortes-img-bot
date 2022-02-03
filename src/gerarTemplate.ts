import ITemplate from "./interfaces/ITemplate";
import IThumbnail from "./interfaces/IThumb";
import { desktop } from "./templates/desktop";
import { thumbSimples } from "./templates/thumbSimples";


export function gerarTemplate(thumb: IThumbnail): ITemplate{
   

    if(thumb.template == 'thumbSimples'){
        return thumbSimples(thumb);
    }
    if(thumb.template == 'desktop'){
        return desktop(thumb);
    }
}

