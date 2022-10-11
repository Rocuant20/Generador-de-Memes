const buttonImage = document.getElementById(`button-image`);
const buttonText = document.getElementById(`button-text`);
const buttonDarkMode = document.getElementById(`button-darkMode`);
const sectionSidebars = document.getElementById(`section-sidebars`);
const sectionImage = document.getElementById(`sidebar-image`);
const sectionText = document.getElementById(`sidebar-text`);
const headerTittle = document.getElementById(`encabezado`);
const sideBard = document.getElementById(`sidebars`);
const memeBox = document.getElementById(`meme`);
const urlText = document.getElementById(`url-text`);
const topText = document.getElementById(`texto-arriba`);
const bottomText = document.getElementById(`texto-abajo`);
const topURL = document.getElementById(`Texto-Superior`);
const bottomURL = document.getElementById(`texto-inferior`);


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
urlText.addEventListener(`input`, () =>{
    memeBox.style.backgroundImage = `url("${urlText.value}")`
})
topURL.addEventListener(`input`,() =>{
    topText.innerHTML = `<h1>${topURL.value}</h1>`
})

console.log(topURL)


