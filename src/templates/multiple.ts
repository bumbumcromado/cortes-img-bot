import { Template, TemplateType } from "../entities/template"
import Thumbnail from "../entities/thumbnail"

export class multiple extends Template<TemplateType.MULTIPLE>{
    readonly height: number = 646;
    readonly width: number = 737;

    private constructor(thumbs: Thumbnail[]) {
        super(TemplateType.MULTIPLE, thumbs);
    }

    static generate(thumbs: Thumbnail[]) {
        return new multiple(thumbs);
    }

    protected templateString(thumbs: Thumbnail[]): string {
        return `
        <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="reset.css">
    <title>Document</title>
</head>
<style>
    html{
        background-color: #F9F9F9;
    }
    .texto_thumb{
        font-size: 25px;
        padding-left: 150px;
        width: 180px;
        padding-top: 50px;
        position: absolute;
        line-height: 30px;
        text-shadow: 2px 2px 0px #000000, 5px 4px 0px rgba(0,0,0,0.15), 1px -1px 7px rgba(0,0,0,0.91);
        font-style: italic;
        font-weight: bold;
        color: white;
        font-family: "Open Sans";
        text-align: center;
    }
    .container{
        width: 710px;
        height: 195px;
        margin: 15px auto;
    }
    .thumb{
        width: 347px;
        height: 195px;
        float: left;
    }
    .texto{
        float: right;
        text-align: left;
        color: blue;
        height: 195px;
        width: 347px;
        font-family: "Roboto","Arial",sans-serif;
        font-weight: 400;
    }
    .texto h3{
        line-height: 26px;
        margin-bottom: 5px;
        font-size: 18px;
        color: #030303;
    }
    .texto p{
        color: #606060;
        font-size: 12px;
    }
    .clear{
        clear: both;
    }
    span{
        color: rgb(253, 238, 29);
    }
    .canal{
        margin-top: 18px;
        margin-bottom: 20px;
    }
    .canal p{
        color: rgb(96, 96, 96);
        font-size: 12px;
        font-weight: 400;
        margin-left: 32px;
        padding-top: 6px;
    }
    .icone{
        float: left;
        height: 25px;
        width: 25px;
        border-radius: 50%;
    }
</style>
<body>
    ${thumbs.map( thumb => {
        return `
        <div class="container">
        <img class="thumb" src="${thumb.image}" alt="">
        <div class="texto_thumb">${thumb.text}</div>
        
        <div class="texto">
            <h3>${thumb.title}</h3>
            <p>${thumb.numViews} visualizações · ${thumb.date}</p>
            <div class="canal">
                <img class="icone" src="${thumb.avatar}" alt="">
                <p>${thumb.channelName}</p>
            </div>
            <p>---------- toda semana cortes novos do Yetz com um título chamativo</p>
        </div>
        <div class="clear"></div>
    </div>
        `
    }).join('')}
</body>
</html>
        `
    }
}