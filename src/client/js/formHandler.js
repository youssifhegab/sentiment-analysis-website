import { checkForUrl } from "./checkURL"

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
    console.log('hello')
    if(checkForUrl(formText)){

        alert('thats a valid url')
        console.log("::: Form Submitted :::")
        post('http://localhost:8080/', {formText}).then(data =>{
            document.getElementById('text').innerHTML = `Polarity: ${data.text}`
            document.getElementById('agreement').innerHTML = `Polarity: ${data.agreement}`
            document.getElementById('subjectivity').innerHTML = `Polarity: ${data.subjectivity}`
            document.getElementById('confidence').innerHTML = `Polarity: ${data.confidence}`
            document.getElementById('irony').innerHTML = `Polarity: ${data.irony}`
            document.getElementById('score_tag').innerHTML = `Polarity: ${data.score_tag}`

        })
    }else{
        alert('please try with a valid url')
    }
}

export { handleSubmit }
