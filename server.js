const express = require('express')
const app = express()
const serverless = require("serverless-http");
const {fetchPage} = require('./pageScraper')

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.get('/api', async (req, res) => {
    // getting the user name and repo name from url
    const user = req.query.user 
    const repo = req.query.repo
    // call fetch page to scrap the image from the repo
    const img = await fetchPage(user,repo)

    res.send({
        img
    })
})

app.listen(PORT, console.log(`Server is starting at port ${PORT}`));

module.exports.server = serverless(app);