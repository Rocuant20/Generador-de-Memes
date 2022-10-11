const buttonImage = document.getElementById(`button-image`);
const buttonText = document.getElementById(`button-text`);
const buttonDarkMode = document.getElementById(`button-darkMode`);
const sectionSidebars = document.getElementById(`section-sidebars`);
const sectionImage = document.getElementById(`sidebar-image`);
const sectionText = document.getElementById(`sidebar-text`);
const headerTittle = document.getElementById(`encabezado`)
const sideBard = document.getElementById(`sidebars`)


buttonImage.addEventListener(`click`,(e) =>{
    e.preventDefault()
    sectionText.style.display = `none`
    sectionImage.style.display = `flex`
})
buttonText.addEventListener(`click`,(e)=>{
    e.preventDefault()
    sectionText.style.display = `flex`
    sectionImage.style.display = `none`
})
buttonDarkMode.addEventListener(`click`,(e)=>{
    e.preventDefault()
    document.body.classList.toggle(`lightmode`)
    headerTittle.classList.toggle(`ivorymode`)
    sideBard.classList.toggle('yellowmode')
})



