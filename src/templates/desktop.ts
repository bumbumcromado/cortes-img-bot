import Template from "../entities/template"
import Thumbnail from "../entities/thumbnail"

export const desktop = (thumb: Thumbnail):Template => {
    return {
        name: 'desktop',
        height: 233,
        width: 760,
        templateString: `<!DOCTYPE html>
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
                font-size: 20px;
                padding-left: 173px;
                max-width: 165px;
                padding-top: 30px;
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
        </style>
        <body>
            <div class="container">
                <img class="thumb" src="./imagens/thumb${thumb.image}.png" alt="">
                <div class="texto_thumb">${thumb.text}</div>
                
                <div class="texto">
                    <h3>${thumb.title}</h3>
                    <img src="./imagens/views2.png" alt="">
                    <p>---------- Esse corte não é real e foi gerado apenas para fins de entretenimento!</p>
                </div>
                
            </div>
        </body>
        </html>
        `
    }
}