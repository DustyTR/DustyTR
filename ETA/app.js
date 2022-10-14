const express = require('express')
const path = require('path')
const app = express()
const port = 80

app.use(express.static(__dirname + '/pages/home/'));
app.use(express.static(__dirname + '/pages/conntact/'));
app.use(express.static(__dirname + '/pages/info/'));
app.use(express.static(__dirname + '/images/'));

app.get('', (req, res) =>{
    res.sendFile(__dirname + '/pages/home/index.html');
})

app.get('/ev', (req, res) =>{
    res.sendFile(__dirname + '/pages/home/index.html');
})

app.get('/hakkinda', (req, res) =>{
    res.sendFile(__dirname + '/pages/info/index.html');
})

app.get('/iletisim', (req, res) =>{
    res.sendFile(__dirname + '/pages/conntact/index.html');
})

app.listen(port, () => console.info('Sunucu Başlatıldı Port: ' + port))