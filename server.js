const express = require('express')
const app = express()

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post('/create-request', function (req, res) {
    // getting the user name and repo name from url
    const user = req.body.user 
    const repo = req.body.repo

    res.send({
        user,
        repo
    })
})

app.get('/api', function (req, res) {
    // getting the user name and repo name from url
    const user = req.query.user 
    const repo = req.query.repo

    res.send({
        user,
        repo
    })

    // if (true) {
    //     res.sendFile(__dirname + '/successful.html');
    // } else {
    //     res.sendFile(__dirname + '/unsuccessful.html');
    // }
})

// http://localhost:8000/?user=FarsBein&repo=GitMe
app.listen(PORT, console.log(`Server is starting at port ${PORT}`));
