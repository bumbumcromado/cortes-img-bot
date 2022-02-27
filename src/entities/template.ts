import Thumbnail from "./thumbnail";

export type TemplateType = "simpleThumbnail" | "desktop";

export interface Template {
    name: TemplateType,
    height: number,
    width: number,
    htmlTextContent: string,
    // templateString(thumb: Thumbnail): string,
    // generate(thumb: Thumbnail):Template;
}