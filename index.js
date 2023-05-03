//  1.   render hardcoded values of height and width as a grid. 
//         for height, add new divs, for width, add divs within width divs

const heightEl = document.getElementById('height-input')
const widthEl = document.getElementById('width-input')
const generateBtn = document.getElementById('generate-grid')
const mainEl = document.getElementById('main-board')
const resetBtn = document.getElementById('reset')


let height = 16
let width = 16

renderGrid(height,width)
color()

generateBtn.addEventListener('click', () => {
    console.log('clicked')
    clearGrid(mainEl)
    height = heightEl.value
    width = widthEl.value
    renderGrid(height,width)
    color()
})


function renderGrid(height,width) {

for (let i = 0; i < height; i++) {
    renderHeightWidth(i)

}

function renderHeightWidth(i) {
    const div = document.createElement('div')
    div.setAttribute('id',`row${i}`)
    div.setAttribute('class','row')
    mainEl.appendChild(div)
    for (let n = 0; n < width; n++) {
        const boxDiv = document.createElement('div')
        boxDiv.setAttribute('class','gridbox')
        div.appendChild(boxDiv)
    }
}

}

function clearGrid(mainEl) {
    
   while (mainEl.firstChild) {
    console.log(`running clear`)
    mainEl.removeChild(mainEl.firstChild)
    console.log(`removeddiv`)
} }


let isKeyDown = false
window.addEventListener('keydown', () => {
    if (isKeyDown) {
        isKeyDown = false
    } else {
    isKeyDown = true
} console.log(`keydown iskeydown variable = ${isKeyDown}`)})


function color() {
const divsEl =  document.querySelectorAll('.gridbox')
divsEl.forEach((div) => {
    div.addEventListener('mouseover', ()  => {
        console.log('mousedown')
        if (isKeyDown) {
        div.style.backgroundColor = 'black'
    } else {return }})
})
}

resetBtn.addEventListener('click', function cleanGrid() {
    const allDivsEl = document.querySelectorAll('div')
    allDivsEl.forEach((div) => {
        div.style.backgroundColor = 'white'
    })
    
})