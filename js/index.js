document.getElementById('submit-button').addEventListener('click', handleRowColumnValueSubmission)

let rv = 0;
let cv = 0;
function handleRowColumnValueSubmission() {
  let rowValue = document.getElementById('row').value
  let columnValue = document.getElementById('column').value

  rv = rowValue
  cv = columnValue

  if(!rowValue || !columnValue) {
    alert('Please Select row and column values')
    return
  }
  


  const body = document.getElementById('main-body') 
  const numberArray = Array.from(Array(rowValue * columnValue).keys())
  numberArray.shift()
  
  for(let i=1; i<= rowValue * columnValue; i++) {
    const row = document.createElement('div')
    row.classList.add('element')
    if (i != 1 ) {
      const newNumber = numberArray[Math.floor(Math.random()*numberArray.length)]
      numberArray.splice(numberArray.indexOf(newNumber), 1)
      row.innerHTML= newNumber
      row.classList.add('checked')
    } else {
      row.setAttribute('unchecked', 'true')
    }
    body.appendChild(row)
    body.style.display = "grid"
    body.style.gridTemplateColumns = `repeat(${rowValue}, 1fr)`
  } 
  document.getElementById('board-size').remove()

  initializeGame()
}

function checkCollision(elm1, elm2) {
  var elm1Rect = elm1.getBoundingClientRect();
  var elm2Rect = elm2.getBoundingClientRect();

  return (elm1Rect.right >= elm2Rect.left &&
      elm1Rect.left <= elm2Rect.right) &&
    (elm1Rect.bottom >= elm2Rect.top &&
      elm1Rect.top <= elm2Rect.bottom);
}

function initializeGame() {
  const adjElement  = adjacentElements()

  for (let k=0;k<adjElement.length;k++) {
    adjElement[k].addEventListener('click', (e) => handleDivClick(e))
  }
}


function initialElement() {
  return document.querySelector('[unchecked="true"]')
}

function adjacentElements() {
  return document.getElementsByClassName('element')
}

function handleDivClick(e) {
  const currentElement = e.currentTarget
  const initElement = initialElement()

  if (checkCollision(initElement, currentElement)) {
    initElement.innerHTML = currentElement.innerHTML
    currentElement.innerHTML = ''
    initElement.removeAttribute('unchecked')
    initElement.classList.add('checked')
    currentElement.setAttribute('unchecked', 'true')

    checkForWinner()
  }
}

function checkForWinner() {
  const nArray = Array.from(Array(rv * cv).keys())
  nArray.shift()
  const allElement = adjacentElements()
  let newArray = []
  for(let i=0;i<allElement.length;i++) {
    newArray[i] = allElement[i].innerHTML
  }

  if (newArray.indexOf('') === (newArray.length -1 )) {
    newArray = newArray.filter(item => item).map(k => Number(k))
  }

  console.log(nArray, newArray)
  if(arraysEqual(nArray, newArray)) {
    alert('you won')
  }
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}