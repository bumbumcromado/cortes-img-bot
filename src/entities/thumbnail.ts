import { ObjectId } from "mongodb"
import { thumbnailDefaultValues } from "../templates/default-values";

export default class Thumbnail {

    //use an enum to check if template option is available
    readonly template: string;
    readonly text: string;
    readonly title: string;
    readonly image?: string;
    readonly channelName?: string;
    readonly numViews?: string;
    readonly date?: string;
    readonly avatar?: string;
    readonly status?: string;
    private id?: ObjectId

    private constructor(props: Thumbnail) {
        this.template = props.template;
        this.text = props.text.toUpperCase();
        this.title = props.title.toUpperCase();
        this.image = props.image;
        this.channelName = props.channelName;
        this.numViews = props.numViews;
        this.date = props.date;
        this.avatar = props.avatar;
        this.status = 'pending';
    }
    
    static create(props: Thumbnail): Thumbnail {

        if (!this.validateInputText(props.text)) {
            throw new Error('invalid text');
        }
        if (!this.validateInputText(props.title)) {
            throw new Error('invalid title');
        }
        const finalThumb = {
            ...thumbnailDefaultValues(),
            ...props
        }
        return new Thumbnail(finalThumb);
    }
    private static validateInputText(text: string): boolean {
        const characterLimit = 100;

        if (!text || text.length >= characterLimit) {
            return false;
        }
        return true;
    }
}