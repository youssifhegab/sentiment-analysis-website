function handleSubmit(event) {
//    event.preventDefault()

    // check what text was put into the form field
//    alert('holaaaaa')
    let formText = document.getElementById('URL').value
    if(checkForUrl(formText) === true){
        alert('helllo')
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8080/test')
           .then(res => res.json())
           .then(function(res) {
               document.getElementById('results').innerHTML = "heelllo"
           })
    }else{
        alert('please try with a valid url')
    }
}

export { handleSubmit }
