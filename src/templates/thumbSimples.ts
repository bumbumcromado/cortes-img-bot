import ITemplate from "../interfaces/ITemplate"
import IThumbnail from "../interfaces/IThumb"


export const thumbSimples = (thumb: IThumbnail):ITemplate => {
    return {
        nome: 'thumbSimples',
        height: 397,
        width: 538,
        templateString: `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <title>teste mobile</title>
        </head>
        <style>
            html{
                background-color: #F9F9F9;
            }
            .container{
                width: 540px;
                height: 500px;
                margin: 0 auto;
            }
            .container img{
                max-width: 540px;
            }
            .texto_container{
                max-width: 450px;
                float: right;
            }
            .menu {
                width: 20px;
                height: 20px;
                float: right;
                margin-top: 5px;
            }
            .menu img{
                padding-right: 3px;
                padding-top: 3px;
                width: 17px;
                height: 20px;
            }
            .texto{
                margin-top: 7px;
                padding-left: 7px;
                font-family: "Roboto";
            }
            .texto h3{
                color: #030303;
                font-weight: 400;
                font-size: 23px;
            }
            .texto p{
                color: #606060;
                padding-top: 5px;
                font-size: 16px;
            }
            .icone{
                float: left;
                height: 50px;
                width: 50px;
                margin-left: 10px;
                margin-top: 5px;
                border-radius: 50%;
            }.texto_thumb{
                font-size: 32px;
                padding-left: 300px;
                padding-top: 60px;
                max-width: 200px;
                position: absolute;
                text-shadow: 2px 2px 0px #000000, 5px 4px 0px rgba(0,0,0,0.25), 1px -1px 7px rgba(0,0,0,0.91);
                font-style: italic;
                font-weight: bold;
                color: white;
                font-family: "Open Sans";
                text-align: center;
            }
        </style>
        <body>
            <div class="container">
                <div class="texto_thumb">${thumb.texto}</div>
                <img src="${thumb.imagem}" alt="" srcset="">
                
                <img class="icone" src="${thumb.avatar}" alt="">
                <div class="menu"><img src="https://i.imgur.com/S28MI3T.png" alt=""></div>
                <div class="texto_container">
                    <div class="texto">
                        
                        <h3>${thumb.titulo}</h3>
                        
                        <p>${thumb.nomeCanal} · ${thumb.numViews} visualizações · há ${thumb.data}</p>
                        
                    </div>
                </div>
        
            </div>
        </body>
        </html>
        `
    }
}