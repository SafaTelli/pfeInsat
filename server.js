const express = require('express');

const app = express();

app.use(express.static('./dist/pfinsat'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/pfeinsat/'}),
);

app.listen(process.env.PORT || 8080);