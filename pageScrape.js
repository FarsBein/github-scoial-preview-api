const axios = require('axios')

const fetchPage = async (url) => {
    const page = await axios.get(url)
    console.log(page.data)
}

fetchPage('http://127.0.0.1:5500/index.html')