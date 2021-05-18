// import { text } from 'body-parser'
const fetch = require('node-fetch')
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
// const MeaningCloud = require('meaning-cloud')
const dotenv = require('dotenv');
var bodyParser = require('body-parser')
var cors = require('cors')

const PORT = 8080
const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'
const app = express()


dotenv.config();

// const meaning = new MeaningCloud();
// meaning.append("key", process.env.API_KEY);
// console.log(`Your API key is ${process.env.API_KEY}`);



app.use(express.static('dist'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))


console.log(JSON.stringify(mockAPIResponse))

// app.get('/', function (req, res) {
//     res.json(mockAPIResponse);
// })

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
    // res.sendFile('dist/index.html')
})

app.post('/add-url', async(req,res) =>{
    try{
        const url = req.body.url;
        const apiKey = process.env.API_KEY;
        const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${url}&lang=en`;
        const { data } = fetch(apiUrl);
        const result = {
            irony: data.irony,
            agreement: data.agreement,
            subjectivity: data.subjectivity,
            confidence: data.confidence,
            score_tag: data.score_tag,
        };
        res.send(result);
    } catch{
        console.log(error.message)
    }
})



// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// export{app}