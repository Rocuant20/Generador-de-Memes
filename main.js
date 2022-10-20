const buttonImage = document.getElementById(`button-image`);
const buttonText = document.getElementById(`button-text`);
const buttonDarkMode = document.getElementById(`button-darkMode`);
const buttonResetFilters = document.getElementById(`reset-filters-button`);
const sectionSidebars = document.getElementById(`section-sidebars`);
const sectionImage = document.getElementById(`sidebar-image`);
const sectionText = document.getElementById(`sidebar-text`);
const headerTittle = document.getElementById(`encabezado`);
const memeBox = document.getElementById(`meme`);
const urlText = document.getElementById(`url-text`);
const topText = document.getElementById(`texto-arriba`);
const bottomText = document.getElementById(`texto-abajo`);
const topURL = document.getElementById(`Texto-Superior`);
const bottomURL = document.getElementById(`Texto-Inferior`); 
const backgroundOptions = document.getElementById(`background-filters`);
const brightnessRange = document.getElementById(`sidebar-brightness`);
const opacityRange = document.getElementById(`sidebar-opacity`);
const contrastRange = document.getElementById(`sidebar-contrast`);
const blurRange = document.getElementById(`sidebar-blur`);
const grayscaleRange = document.getElementById(`sidebar-grayscale`);
const sepiaRange = document.getElementById(`sidebar-sepia`);
const hueRange = document.getElementById(`sidebar-hue`);
const saturateRange = document.getElementById(`sidebar-saturate`);
const negativeRange = document.getElementById(`sidebar-negative`);
const fontOptions = document.getElementById(`font-options`);
const fontSize = document.getElementById(`number-button`);
const textPositionLeft = document.getElementById(`position-text-left`);
const textPositionCenter = document.getElementById(`position-text-center`);
const textPositionRight = document.getElementById(`position-text-right`);
const outlineButtonNone = document.getElementById(`outline-none`);
const outlineButtonBright = document.getElementById(`outline-bright`);
const outlineButtonDark = document.getElementById(`outline-dark`);
const textSpace = document.getElementById(`space`);
const interlinedOptions = document.getElementById(`interline-options`);



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
    topText.classList.toggle(`ivorymode`)
    bottomText.classList.toggle(`ivorymode`)
    sectionSidebars.classList.toggle('yellowmode')
    buttonImage.classList.toggle(`ivorymodebuttons`)
    buttonText.classList.toggle(`ivorymodebuttons`)
    buttonDarkMode.classList.toggle(`ivorymodebuttons`)
    buttonResetFilters.classList.toggle(`ivorymodebuttons`)
    urlText.classList.toggle(`rangeivorymode`)
    backgroundOptions.classList.toggle(`rangeivorymode`)
    brightnessRange.classList.toggle(`rangeivorymode`)
    opacityRange.classList.toggle(`rangeivorymode`)
    contrastRange.classList.toggle(`rangeivorymode`)
    blurRange.classList.toggle(`rangeivorymode`)
    grayscaleRange.classList.toggle(`rangeivorymode`)
    sepiaRange.classList.toggle(`rangeivorymode`)
    hueRange.classList.toggle(`rangeivorymode`)
    saturateRange.classList.toggle(`rangeivorymode`)
    negativeRange.classList.toggle(`rangeivorymode`)
    topURL.classList.toggle(`rangeivorymode`)
    bottomURL.classList.toggle(`rangeivorymode`)
    fontOptions.classList.toggle(`rangeivorymode`)
    fontSize.classList.toggle(`rangeivorymode`)
    textPositionLeft.classList.toggle(`ivorymodebuttons`)
    textPositionCenter.classList.toggle(`ivorymodebuttons`)
    textPositionRight.classList.toggle(`ivorymodebuttons`)
    outlineButtonNone.classList.toggle(`ivorymodebuttons`)
    outlineButtonBright.classList.toggle(`ivorymodebuttons`)
    outlineButtonDark.classList.toggle(`ivorymodebuttons`)
    textSpace.classList.toggle(`rangeivorymode`)
    interlinedOptions.classList.toggle(`rangeivorymode`)
})
urlText.addEventListener(`input`, () =>{
    memeBox.style.backgroundImage = `url("${urlText.value}")`
})
topURL.addEventListener(`input`,() =>{
    topText.innerHTML = `<h1>${topURL.value}</h1>`
})

console.log(topURL)


