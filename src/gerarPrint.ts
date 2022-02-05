import puppeteer from 'puppeteer';
import IViewport from './interfaces/IViewport';

export async function gerarPrint(viewport: IViewport, html:string){
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
    console.log('print gerado');

    await browser.close();
    return img;
}