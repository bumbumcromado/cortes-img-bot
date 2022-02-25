import { thumbnailDefaultValues } from "../templates/default-values";
import Thumbnail from "./thumbnail";

const testThumbnailProps = {
    template: 'simpleThumbnail',
    text: 'fake simple text for test',
    title: 'fake simple title for test'
}

const testThumbnailWithAllParams: Thumbnail ={
    template: 'simpleThumbnail',
    text: 'FAKE SIMPLE TEXT FOR TEST',
    title: 'FAKE SIMPLE TITLE FOR TEST',
    image: 'example.com/fake_img.png',
    channelName: 'FAKE CHANNEL',
    numViews: '25M',
    date: '2 years ago',
    avatar: 'example.com/fake_avatar.png',
}

describe('thumbnail domain entity', ()=> {
    it('should be able to create a thumbnail with given params', ()=> {
        
        const thumb = Thumbnail.create(testThumbnailProps);
        expect(thumb).toBeTruthy();
    });
    it('should be able to create a thumbnail with capitalized text and title', ()=> {
        
        const thumb = Thumbnail.create(testThumbnailProps);
        expect(thumb.text).toBe('FAKE SIMPLE TEXT FOR TEST');
        expect(thumb.title).toBe('FAKE SIMPLE TITLE FOR TEST');
    });
    it('should be able to create a thumbnail with given params and default values', ()=> {
        
        const thumb = Thumbnail.create(testThumbnailProps);
        const additionalParams = thumbnailDefaultValues();

        expect(thumb.image).toBeTruthy();
        expect(thumb.channelName).toBe(additionalParams.channelName);
        expect(thumb.numViews).toBe(additionalParams.numViews);
        expect(thumb.date).toBe(additionalParams.date);
        expect(thumb.avatar).toBe(additionalParams.avatar);
    });
    it('should not be able  to create a thumbnail with invalid text (empty)', ()=>{
        testThumbnailProps.text = '';

        expect(() => Thumbnail.create(testThumbnailProps)).toThrow();
    });
    it('should not be able  to create a thumbnail with invalid text (too many characters)', ()=>{

        for(let i = 0; i < 100; i++){
            testThumbnailProps.text += 'c';
        }

        expect(() => Thumbnail.create(testThumbnailProps)).toThrow();
    });
    it('should not be able  to create a thumbnail with invalid title (empty)', ()=>{
        testThumbnailProps.title = '';

        expect(() => Thumbnail.create(testThumbnailProps)).toThrow();
    });
    it('should not be able  to create a thumbnail with invalid title (too many characters)', ()=>{
        
        for(let i = 0; i < 100; i++){
            testThumbnailProps.title += 'c';
        }

        expect(() => Thumbnail.create(testThumbnailProps)).toThrow();
    });
    it('should be able to create a thumbnail with full params obj', ()=>{
        const thumb = Thumbnail.create(testThumbnailWithAllParams);

        expect(thumb.template).toBe('simpleThumbnail');
        expect(thumb.channelName).toBe('FAKE CHANNEL');
        expect(thumb.status).toBe('pending');
    });
})
