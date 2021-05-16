function checkForUrl(myURL) {
   var validUrl = require('valid-url');
  let isUrl = validUrl.isUri(myURL)
   if (isUrl){
       alert('Looks like a URL');
   } else {
       alert('Not a URL');
   }
   return (isUrl == true)
}

export { checkForUrl }