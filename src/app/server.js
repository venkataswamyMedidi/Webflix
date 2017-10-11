/**
 * Created by Medidi venkata swamy on 9/5/2017.
 */
const path = require('path');
const express = require('express');


module.exports = {
    app: function () {
        const app = express();
        const indexPath = path.join(__dirname, 'index.html');
        const publicPath = express.static(path.join(__dirname, 'public/scripts/'));

        app.use('/public/scripts/', publicPath);
        app.get('*', function (_, res) { res.sendFile(indexPath) });
        return app
    }
};