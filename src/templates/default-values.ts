import { getRandomImage } from "../img/thumbs";
import AdditionalInfo from "../entities/additional-info";

export const thumbnailDefaultValues = function():AdditionalInfo {
    return {
        template: 'simpleThumbnail',
        image: getRandomImage().link,
        channelName: 'Cortes do Yetz [OFICIAL]',
        numViews: '2,9 mil',
        date: '1 ano',
        avatar: 'https://i.imgur.com/lrWCD3s.jpg'
    }
}