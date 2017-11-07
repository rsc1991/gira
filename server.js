var http = require('http');
var express = require('./config/express');

/*###########################################################################*/
/************* Conexão com o banco  ****************************/
var db = require('./config/database.js')

db('mongodb://localhost/dbradio');
//Iniciamos a conexao com o banco de dados
// junto com a aplicaçao 
//conecta-se ao MongoDB no servidor localhost
//para utilizar o banco de dados geren-tg

//db('mongodb://127.0.0.1:27017/dbradio');

/*###########################################################################*/
/************* Configurando as portas do SERVIÇO  ****************************/
var app = express();

http.createServer(app).listen(app.get('port'), app.get('ip'),
    function () {
        console.log('Express Server escutando na porta ' +
            app.get('port'));
    }
);
/*###########################################################################*/
/********************* Chamando as views do site  ****************************/

app.get('/ajuda', function (req, res) {
    res.render("funcoes/ajuda");
})
app.get('/login', function (req, res) {
    res.render("funcoes/login");
})
