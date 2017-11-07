var Service = require('node-windows').Service;

//Cria um novo Objeto Serviço
var svc = new Service({
    name: 'GIRA',
    description: 'Gerenciamento de Instalações de Rádio Amador',
    script: 'C:\\inetpub\\wwwroot\\gira'
});

//Inicia o serviço
svc.on('install', function(){
    svc.start();
});

svc.install();
