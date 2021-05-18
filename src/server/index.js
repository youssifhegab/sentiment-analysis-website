const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')

const app = express()
const fetch = require('node-fetch')
require("regenerator-runtime/runtime");

//solve body being undefined https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
//////////////////////////////////////////////////////////////////////////////////////////////////////


app.use(express.static('dist'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
let server = app.listen(process.env.PORT || 8081, function () {
    console.log('Example app listening on port ' + (process.env.PORT || 8081))
})

app.post('/', async function (req, res) {
    try {    
        const url = req.body.url;
        const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`;
        const responseObj = await fetch(apiUrl);
        let data = await responseObj.json()
        const result = {
            model: data.model,
            irony: data.irony,
            agreement: data.agreement,
            subjectivity: data.subjectivity,
            confidence: data.confidence,
            score_tag: data.score_tag,
        };
        res.send(result);
    }catch{
        console.log(error.message)
    }
})

// export{app}