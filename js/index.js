import {handleRightPress, handleLeftPress, handleUpPress, handleDownPrress} from './button-press.js'

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
  document.addEventListener('keypress', handleKeyPress)
}

const handleKeyPress = (e) => {
  switch(e.key.toLowerCase()){
    case 'w':
      handleUpPress(rv, cv)
      return
      break;
    case 'arrowup':
      handleUpPress(rv, cv)
      return
      break;
    case 's':
      handleDownPrress(rv, cv)
      return
      break;
    case 'd':
      handleRightPress(rv, cv)
      return
      break;
    case 'a':
      handleLeftPress(rv, cv)
      return
      break;
    default:
      return
  } 
}