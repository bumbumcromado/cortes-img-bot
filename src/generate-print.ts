import puppeteer from 'puppeteer';
import Viewport from './entities/viewport';

export async function generatePrint(viewport: Viewport, html:string){
    const browser = await puppeteer.launch({
        'args' : [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]
    });
    const page = await browser.newPage();
    await page.setContent(html)
    await page.setViewport(viewport);
    const img  = await page.screenshot({ type: 'png'});
    console.log('print ok');

    await browser.close();
    return img;
}