// TODO: get the button for submit
// TODO: add event listener to it when the click to call handleSubmit function
/**
 * TODO
 *  - Get Value of the input for URL
 *  - Check if it's URL or not
 *      yes
 *          send it to the backend
 *      no
 *          show user message it's not valid URL
 */
import { checkForUrl } from './js/checkURL'
import { handleSubmit } from './js/formHandler'

import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
//import './styles/resets.scss'



window.addEventListener('DOMContentLoaded', ()=>{
    const buttonSub = document.getElementById('btn-submit')
    buttonSub.addEventListener('click', ()=>{
        handleSubmit()
    })
})

export {checkForUrl, handleSubmit}
