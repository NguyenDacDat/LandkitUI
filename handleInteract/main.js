import { validateEmail } from './valid.js'

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const barElement = $('.navbar .icon-bars')
const navAccountElements = $$('.nav-mobile .subnav-account > li > a ')
const navMobile = $('.nav-mobile')
const iconCloseNavMobile = $('.nav-mobile .icon-close')
const btnSwitch = $('.btn-switch')

const formDownloadValue = {
    name: '',
    email: '',
    password: '',
}
const formDownloadElements = $$('.form-group input')
const errorsMessageFormDownload = $$('.form-group p')
const btnDowload = $('.session-about .body .button')

const dataSlide = [
    {
        id: 1,
        img: './assets/images/photo-1-slide.jpg',
        infoDetail: {
            img: './assets/images/Airbnb_Logo.png',
            desc: "“Landkit is hands down the most useful front end Bootstrap theme I've ever used. I can't wait to use it again for my next project.”",
        },
    },
    {
        id: 2,
        img: './assets/images/photo2-slide.jpg',
        infoDetail: {
            img: './assets/images/instagram.png',
            desc: "“I've never used a theme as versatile and flexible as Landkit. It's my go to for building landing sites on almost any project.”",
        },
    },
]

let indexSlide = 0

const validateFormDownload = () => {
    let errorNumber = 0
    console.log(errorNumber)
    formDownloadElements.forEach((formDownloadElement) => {
        const errorElement = findErrorMessageElement(formDownloadElement.name)
        switch (formDownloadElement.name) {
            case 'name': {
                if (!formDownloadElement.value) {
                    errorElement.classList.add('show')
                    errorNumber += 1
                } else {
                    errorElement.classList.remove('show')
                }
                break
            }
            case 'email': {
                if (!validateEmail(formDownloadElement.value)) {
                    errorElement.classList.add('show')
                    errorNumber += 1
                } else {
                    errorElement.classList.remove('show')
                }
                break
            }
            case 'password': {
                if (formDownloadElement.value.length < 8) {
                    errorNumber += 1
                    errorElement.classList.add('show')
                } else {
                    errorElement.classList.remove('show')
                }
                break
            }
        }
    })

    return !errorNumber ? true : false
}

navAccountElements.forEach((navAccountElement) => {
    navAccountElement.addEventListener('click', () => {
        const isShow = navAccountElement.classList.contains('show')
        navAccountElements.forEach((item) => {
            if (item.classList.contains('show')) {
                item.classList.remove('show')
            }
        })
        if (!isShow) {
            navAccountElement.classList.add('show')
        } else {
            navAccountElement.classList.remove('show')
        }
    })
})

barElement.addEventListener('click', () => {
    const htmlElement = $('html')
    htmlElement.style.overflow = 'hidden'
    navMobile.classList.add('show')
})

iconCloseNavMobile.addEventListener('click', () => {
    navMobile.classList.remove('show')
    const htmlElement = $('html')
    htmlElement.style.overflow = 'visible'
})

btnSwitch.addEventListener('click', (event) => {
    if (event.target.classList.contains('change')) {
        event.target.classList.remove('change')
    } else {
        event.target.classList.add('change')
    }
})

formDownloadElements.forEach((formDownloadElement) => {
    formDownloadElement.addEventListener('change', (event) => {
        validateFormDownload()
        formDownloadValue[event.target.name] = event.target.value
    })
    formDownloadElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if (validateFormDownload()) {
                console.log(formDownloadValue)
            }
        }
    })
})

const findErrorMessageElement = (name) => {
    return Array.from(errorsMessageFormDownload).find(
        (errorElement) => errorElement.id == name
    )
}

btnDowload.addEventListener('click', () => {
    if (validateFormDownload()) {
        console.log(formDownloadValue)
    }
})
