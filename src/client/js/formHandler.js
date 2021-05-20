import { checkForUrl } from "./checkURL"
require("regenerator-runtime/runtime");

const fetch = require('node-fetch')

const post = async(url='', data = {}) =>{
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try{
        return await response.json()
    } catch (error){
        console.log(error)
    }
}
function handleSubmit(event) {
   event.preventDefault()

    // check what text was put into the form field
//    alert('holaaaaa')
    let formText = document.getElementById('URL').value
    if(checkForUrl(formText) == true){
        console.log("::: Form Submitted :::")
        try{
            post('http://localhost:8080/', {url: formText}).then(data =>{
                document.getElementById('model').innerHTML = `model:${data.model}`
                document.getElementById('agreement').innerHTML = `agreement: ${data.agreement}`
                document.getElementById('subjectivity').innerHTML = `subjectivity: ${data.subjectivity}`
                document.getElementById('confidence').innerHTML = `confidence: ${data.confidence}`
                document.getElementById('irony').innerHTML = `irony: ${data.irony}`
                document.getElementById('score_tag').innerHTML = `score_tag: ${data.score_tag}`
            })
        } catch (error){
            console.log("there was an error while fetching the data")
        }
    }else{
        alert('please try with a valid url')
    }
}

export { handleSubmit }
