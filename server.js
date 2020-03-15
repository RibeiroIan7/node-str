'use strict'

//importando modulos
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

//criando app e setando porta 
const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//criando servidor
const server = http.createServer(app);
const router = express.Router();

//configurando rota
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

app.use('/', route);

//escutar porta
server.listen(port);
//chamando função de tratamento de erros
server.on('error', onError);

console.log('API rodando na porta ' + port);

//normalizando a porta
function normalizePort(val){
    const port = parseInt(val, 10);
    //verifica se não é número
    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }

    return false;
}

//tratando erros
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
    'Pipe' + port : 'Port' + port;

    switch(error.code){
        case 'EACCES' :
            console.error(bind + ' requires elevated privilage');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.log(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}