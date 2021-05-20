import { checkForUrl } from './js/checkURL'
import { handleSubmit } from './js/formHandler'

import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'



window.addEventListener('DOMContentLoaded', ()=>{
    const buttonSub = document.getElementById('btn-submit')
    buttonSub.addEventListener('click', (event)=>{
        handleSubmit(event)
    })
})

export {checkForUrl, handleSubmit}
