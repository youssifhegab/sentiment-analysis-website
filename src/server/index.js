// import { text } from 'body-parser'

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const MeaningCloud = require('meaning-cloud')
const dotenv = require('dotenv');
var bodyParser = require('body-parser')
var cors = require('cors')

const PORT = 8080
const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'
const app = express()


dotenv.config();

const meaning = new MeaningCloud();
meaning.append("key", process.env.API_KEY);
console.log(`Your API key is ${process.env.API_KEY}`);



app.use(express.static('dist'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))


console.log(JSON.stringify(mockAPIResponse))

// app.get('/test', function (req, res) {
//     res.json(mockAPIResponse);
// })

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/add-url', async(req,res) =>{
    try{
        
        const url = req.body.formText
        const data = {
            'text' : req.body.sentence_list[0]['text'],
            'agreement' : req.body.agreement,
            'subjectivity' : req.body.subjectivity,
            'confidence' :  req.body.confidence,
            'irony' : req.body.irony,
            'score_tag' : req.body.sentence_list[0]['score_tag']
        }
// a route that handling post request for new URL that coming from the frontend
/* TODO:
    1. GET the url from the request body
    2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes
     const sample = {
       text: '',
       score_tag : '',
       agreement : '',
       subjectivity : '',
       confidence : '',
       irony : ''
     }
*/
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