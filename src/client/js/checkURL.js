function checkForUrl(myURL) {
    
    var validUrl = require('valid-url')
    let isUrl = validUrl.isUri(myURL)

    return (isUrl)
}

export { checkForUrl }