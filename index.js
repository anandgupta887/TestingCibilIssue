const express = require('express')
const app = express()
const fs = require('fs')


app.post('/', function (req, res) {
    fs.readFile('response.txt', (err, inputD) => {
        if (err) throw err;
        res.send({ data: inputD.toString() });
    })
})

app.listen(3000)