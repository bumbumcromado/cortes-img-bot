import Thumbnail from "./thumbnail";

export enum TemplateType {
    SIMPLETHUMBNAIL = 'simpleThumbnail',
    DESKTOP = 'desktop',
    MULTIPLE = 'multiple'
}

export abstract class Template<TemplateType>{

    height: number = 0;
    width: number = 0;
    htmlTextContent: string = '';
    
    protected constructor(
        readonly type: TemplateType,
        props: Thumbnail | Thumbnail[]
    ){
        this.htmlTextContent = this.templateString(props);
    }

    protected abstract templateString(props: Thumbnail | Thumbnail[]):string;
}