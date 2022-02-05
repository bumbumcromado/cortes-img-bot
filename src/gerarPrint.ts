import puppeteer from 'puppeteer';
import IViewport from './interfaces/IViewport';

export async function gerarPrint(viewport: IViewport, path: string, html:string){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html)
    await page.setViewport(viewport);
    await page.screenshot({ path: path});
    console.log('print gerado');

    await browser.close();
}