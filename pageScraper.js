const axios = require('axios')
const {parse} = require('node-html-parser')

const fetchPage = async (url) => {
    const page = await axios.get(url) //get all the details about the page
    const data = page.data            //get the html of the page that is saved in data
    const parsed = parse(data)        //Translate the data into dictionaries instead of staying as strings
    const meta = parsed.querySelectorAll('meta')                     // get all keys with meta tag
        .filter((acc) => acc.getAttribute("property") == 'og:image') // get only the one with property == 'og:image' (where social preview is saved)
    const imageLink = meta[0]['_attrs']['content']                  // get the content which contains the url
    console.log('image:',imageLink)                                 
}

fetchPage('https://github.com/FarsBein/GitMe')