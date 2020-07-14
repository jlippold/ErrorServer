
const express = require('express')
const fs = require('fs-extra')
const app = express()
const port = 3001

app.get('*', function (req, res) {
    fs.readJson('./config.json', (err, config) => {
        if (err) console.error(err);
        setTimeout(function() {
            res.statusCode = config.statusCode || 501;
            res.send("Hey now");
        }, config.delayMS);
    });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
