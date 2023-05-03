//  1.   render hardcoded values of height and width as a grid. 
//         for height, add new divs, for width, add divs within width divs

const heightEl = document.getElementById('height-input')
const widthEl = document.getElementById('width-input')
const generateBtn = document.getElementById('generate-grid')
const mainEl = document.getElementById('main-board')
const resetBtn = document.getElementById('reset')
const colorBtn = document.querySelectorAll('.color-btn')
const colorToggle = document.getElementById('color-toggle')

let penColor = 'black'  //default pen color

let height = 16         //default 16x16 grid
let width = 16

renderGrid(height,width)   //renders the grid for the given inputs
color()                     //coloring functionality


// Clear grid and generate new grid if button is pressed, runs color() for coloring functionality with new grid
generateBtn.addEventListener('click', () => {
    console.log('clicked')
    clearGrid(mainEl)
    height = heightEl.value
    width = widthEl.value
    renderGrid(height,width)
    color()
})


// allows for color selecting with buttons on left
colorBtn.forEach((button) => {
    button.addEventListener('click', function (e) {
        console.log(e.target.id)
        if(e.target.id === 'blue') {
            penColor = 'blue'
        } else if (e.target.id === 'aqua'){
            penColor = 'aqua'
        } else if (e.target.id === 'sky-blue'){
            penColor = 'skyblue'
        } else if (e.target.id === 'dodger-blue'){
            penColor = 'dodgerblue'
        } else if (e.target.id === 'midnight-blue'){
            penColor = 'midnightblue'
        } else {
            penColor = 'black'
        }
    
    }) 
})

// function to render grid based on height/width. 
//renders height # of rows first (appends them to mainEl) then creates width # of divs inside of rows
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

// removes all divs from mainEl, necessary to generate a new grid

function clearGrid(mainEl) {
    
   while (mainEl.firstChild) {
    mainEl.removeChild(mainEl.firstChild)
} }

//listening for a key to allow for coloring

let isKeyDown = false
window.addEventListener('keydown', () => {
    if (isKeyDown) {
        isKeyDown = false
        colorToggle.innerText = 'Coloring is: OFF'
    } else {
    isKeyDown = true
    colorToggle.innerText = 'Coloring is: ON'
} console.log(`keydown iskeydown variable = ${isKeyDown}`)})

//color functionality, must be run after any reset of divs

function color() {
const divsEl =  document.querySelectorAll('.gridbox')
divsEl.forEach((div) => {
    div.addEventListener('mouseover', ()  => {
        console.log('mousedown')
        if (isKeyDown) {
        div.style.backgroundColor = `${penColor}`
    } else {return }})
})
}

//clears only the grid off the css background coloring

resetBtn.addEventListener('click', function cleanGrid() {
    const allDivsEl = document.querySelectorAll('div')
    allDivsEl.forEach((div) => {
        div.style.backgroundColor = 'white'
    })
    
})