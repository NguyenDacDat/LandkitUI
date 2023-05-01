const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const bannerElementElements = $$('.banner-wrapper .banner > div')
const skillElements = $$('.session-skills-wrapper .session-skills-inner .item')
const aboutElements = $$('.session-about .about > div')
const experienceElements = $$('.experience > div')
const pricingElements = $$('.session-pricing .body > div')

const btnLeftNavigationSlide = $('.navigation-left')
const btnRightNavigationSlide = $('.navigation-right')

const itemsDescriptionSlide = $$('.slide-inner-text .right-space')
const itemsImageSlide = $$('.slides-wrapper .tmp-space > img')

console.log(itemsImageSlide)

const isInWindowView = (element) => {
    return element.getBoundingClientRect().top < window.innerHeight
}

const handleShowElement = () => {
    const elements = [
        ...bannerElementElements,
        ...skillElements,
        ...aboutElements,
        ...experienceElements,
        ...pricingElements,
    ]
    Array.from(elements).forEach((element) => {
        if (isInWindowView(element)) {
            element.classList.add('show')
        }
    })
}

window.addEventListener('scroll', (event) => {
    handleShowElement()
})

window.addEventListener('DOMContentLoaded', (event) => {
    handleShowElement()
})

/* animation slide */

let indexSlide = 0

btnLeftNavigationSlide.addEventListener('click', () => {
    indexSlide--
    if (indexSlide < 0) {
        indexSlide = itemsDescriptionSlide.length - 1
    }
    renderSlide(indexSlide, 'prev')
})

btnRightNavigationSlide.addEventListener('click', () => {
    indexSlide++
    if (indexSlide > itemsDescriptionSlide.length - 1) {
        indexSlide = 0
    }
    renderSlide(indexSlide, 'next')
})

const renderSlide = (indexCurrentSlide, option) => {
    itemsImageSlide.forEach((image, index) => {
        if (index == indexCurrentSlide) {
            image.style.display = 'block'
        } else {
            image.style.display = 'none'
        }
    })
    itemsDescriptionSlide.forEach((item, index) => {
        const valueTransition = parseInt(
            itemsDescriptionSlide[index].style.transform.match(/\d+/)[0]
        )
        console.log(valueTransition, index)
        if (option === 'next') {
            item.style.transition = '.3s ease'
            item.style.transform = `translateX(${valueTransition - 100}%)`

            if (valueTransition - 100 < 0) {
                setTimeout(() => {
                    itemsDescriptionSlide[index].style.transition = 'none'

                    itemsDescriptionSlide[
                        index
                    ].style.transform = `translateX(${
                        0 + (itemsDescriptionSlide.length - 1) * 100
                    }%)`
                }, 100)
            }
        } else if (option === 'prev') {
            item.style.transition = '.3s ease'
            item.style.transform = `translateX(${valueTransition + 100}%)`
            if (valueTransition + 100 !== 100) {
                item.style.transition = 'none'
                item.style.transform = `translateX(${-valueTransition}%)`
                setTimeout(() => {
                    itemsDescriptionSlide[index].style.transition = '.3s ease'

                    itemsDescriptionSlide[
                        index
                    ].style.transform = `translateX(${0}%)`
                }, 100)
            }
        }
    })
}
