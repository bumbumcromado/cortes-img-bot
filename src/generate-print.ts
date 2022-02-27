import puppeteer from 'puppeteer';
import Viewport from './entities/viewport';

export async function generatePrint(template){
    const browser = await puppeteer.launch({
        'args' : [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]
    });
    //{ width: template.width, height: template.height}, template.htmlTextContent
    const page = await browser.newPage();
    await page.setContent(template.htmlTextContent)
    await page.setViewport({ width: template.width, height: template.height});
    const img  = await page.screenshot({ type: 'png'});
    console.log('print ok');

    await browser.close();
    return img;
}