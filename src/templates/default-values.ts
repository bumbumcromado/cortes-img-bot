import { getRandomImage } from "../img/thumbs";
import AdditionalInfo from "../interfaces/additional-info";

export const thumbnailDefaultValues = function():AdditionalInfo {
    return {
        image: getRandomImage().link,
        channelName: 'Cortes do Yetz [OFICIAL]',
        numViews: '2,9 mil',
        date: '1 ano',
        avatar: 'https://i.imgur.com/lrWCD3s.jpg'
    }
}