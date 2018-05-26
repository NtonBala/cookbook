const express = require('express');
const os = require('os');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const app = express();

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

const url = 'mongodb://anton_balashov:17101983AB@ds237620.mlab.com:37620/cookbook';
app.get('/api/testDB', (req, res) => {
    MongoClient.connect(url, function (err, db) {
        assert.equal(err, null);

        var cursor = db.collection('recipes').find();
        cursor.toArray(function (err, items) {
            assert.equal(err, null);

            const message = 'Connection estalished!';
            res.send({message, items});

            db.close();
        });
    });
});

app.listen(8080, () => console.log('Listening on port 8080!'));
