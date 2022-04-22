const express = require('express');
const app = express();



app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
})

app.get('/app1', (req, res) => {
    res.sendFile(__dirname + '/html/app1.html');
})

app.get('/app2', (req, res) => {
    res.sendFile(__dirname + '/html/app2.html');
})

app.get('/app3', (req, res) => {
    res.sendFile(__dirname + '/html/app3.html');
})

app.get('/common', (req, res) => {
    res.sendFile(__dirname + '/html/common.html');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})