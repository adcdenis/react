# react
Primeiros Projetos React, Exemplos e Comandos básicos

-------------------------------------------------------------------------------------------------------------------------------------------
REPOSITÓRIO DO CURSO

Todos os exercícios e projetos estão em... https://github.com/cod3rcursos/curso-react-redux

APOSTILA DO CURSO
http://files.cod3r.com.br/apostila-react-redux.pdf

-------------------------------------------------------------------------------------------------------------------------------------------

Instalar Node
Instalar MongoDB
https://www.mongodb.com/download-center/community

-------------------------------------------------------------------------------------------------------------------------------------------

Abrir Visual Studio Code na pasta corrente
code .

-------------------------------------------------------------------------------------------------------------------------------------------

//Comando para corrigir problemas fatal error
git rm --cached . -f

-------------------------------------------------------------------------------------------------------------------------------------------
//BackEnd comandos
npm init -y

npm i --save -E body-parser@1.15.2 express@4.14.0 mongoose@4.7.0 node-restful@0.2.5 pm2@2.1.5

λ npm i --save-dev -E nodemon@1.11.0

-------------------------------------------------------------------------------------------------------------------------------------------
Postman Caminho instalação
%USERPROFILE%\AppData\Local\Postman\

Pode copiar e mudar local se desejado

-------------------------------------------------------------------------------------------------------------------------------------------

REACT-ROUTER
npm install react-router --save

-------------------------------------------------------------------------------------------------------------------------------------------

<b>INICIAR FRONT END</b>
npm start dev

-------------------------------------------------------------------------------------------------------------------------------------------
MONITORAR PM2 PRODUCTION BACKEND
cd node-modules/.bin/pm2 monit


-------------------------------------------------------------------------------------------------------------------------------------------
DEPLOY HEROKY BACK END

https://github.com/cod3rcursos/deploy-heroku-backend


https://github.com/adcdenis/react/tree/master/my-money-app/backend

heroku git:remote -a adcdenis-my-money-app-backend


mongodb://<dbuser>:<dbpassword>@ds261332.mlab.com:61332/heroku_pgmnb2sr

mongodb://mymoneyapp:mymoneyapp1@ds261332.mlab.com:61332/heroku_pgmnb2sr

heroku config:set MONGOLAB_URI=mongodb://mymoneyapp:mymoneyapp1@ds261332.mlab.com:61332/heroku_pgmnb2sr

heroku config:set AUTH_SECRET=4bc12841oiklasdi@#71ab76b99699d6


git subtree push --prefix my-money-app/backend  heroku master


https://adcdenis-my-money-app-backend.herokuapp.com/


----------------------------------------------------------
DEPLOY HEROKU FRONTEND


heroku create adcdenis-my-money-app-frontend

heroku git:remote -a adcdenis-my-money-app-frontend

git add .
$ git commit -am "Ajustando URLs do backend"

git subtree push --prefix my-money-app/frontend  heroku master

heroku logs --tail














