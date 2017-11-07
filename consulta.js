var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var idRadio = new ObjectID('59bd0fc65735114512233c13');

MongoClient.connect('mongodb://127.0.0.1:27017/dbradio',

    function (erro, db) {
        if (erro) throw err;
        db.collection('radio').findOne({ _id : idRadio },
            function (erro, radio) {
                if (erro) throw err;
                console.log(radio);
            }
        );

    }
);