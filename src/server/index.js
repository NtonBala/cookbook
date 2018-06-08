import express from 'express';
import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';

const server = express();
server.set('view engine', 'ejs');

server.get(['/', '/recipes/:recipeId'], (req, res) => {
    serverRender(req.params.recipeId)
        .then(({initialMarkup, initialData}) => {
            res.render('index', {
                initialMarkup,
                initialData
            });
        })
        .catch(console.err); //eslint-disable-line no-console
});

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));
server.use('/api', apiRouter);
server.use(express.static('public'));
server.use('/recipes', express.static('public'));

server.listen(config.port, config.host, () => {
    console.log('Listening on port', config.port); //eslint-disable-line no-console
});

//const MongoClient = require('mongodb').MongoClient;
//const assert = require('assert');
/*
const url = 'mongodb://anton_balashov:17101983AB@ds237620.mlab.com:37620/cookbook';
server.get('/api/testDB', (req, res) => {
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
*/