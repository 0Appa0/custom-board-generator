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


function initialElement() {
  return document.querySelector('[unchecked="true"]')
}

function adjacentElements() {
  return document.getElementsByClassName('element')
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

  if(arraysEqual(nArray, newArray)) {
    alert('you won')
  }
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function handleKeyPress(e) {
  switch(e.key.toLowerCase()){
    case 'w':
      handleUpPress()
      return
      break;
    case 's':
      handleDownPrress()
      return
      break;
    case 'd':
      handleRightPress()
      return
      break;
    case 'a':
      handleLeftPress()
      return
      break;
    default:
      return
  } 
}

function handleDownPrress() {
  let initElement = initialElement()
  let allEm = adjacentElements()

  let index = Array.prototype.indexOf.call(allEm, initElement)

  if((index - rv) < 0)
    return
  let currentElement = allEm[index-rv]

  initElement.innerHTML = currentElement.innerHTML
  currentElement.innerHTML = ''
  initElement.removeAttribute('unchecked')
  initElement.classList.add('checked')
  currentElement.setAttribute('unchecked', 'true')

  initElement.animate([
    // keyframes
    { transform: 'translateY(-100%)' },
    { transform: 'translateY(0)' }
  ], {
    // timing options
    duration: 200,
  })

  checkForWinner()
}

function handleLeftPress() {
  let initElement = initialElement()
  let allEm = adjacentElements()

  let index = Array.prototype.indexOf.call(allEm, initElement)
  if(((index%rv) + 1) === Number(rv))
    return
  let currentElement = allEm[index+1]

  initElement.innerHTML = currentElement.innerHTML
  currentElement.innerHTML = ''
  initElement.removeAttribute('unchecked')
  initElement.classList.add('checked')
  currentElement.setAttribute('unchecked', 'true')

  initElement.animate([
    // keyframes
    { transform: 'translateX(100%)' },
    { transform: 'translateX(0)' }
  ], {
    // timing options
    duration: 200,
  })

  checkForWinner()
}


function handleRightPress() {
  let initElement = initialElement()
  let allEm = adjacentElements()

  let index = Array.prototype.indexOf.call(allEm, initElement)

  if(((index%rv) - 1) < 0)
    return
  let currentElement = allEm[index-1]

  initElement.innerHTML = currentElement.innerHTML
  currentElement.innerHTML = ''
  initElement.removeAttribute('unchecked')
  initElement.classList.add('checked')
  currentElement.setAttribute('unchecked', 'true')

  initElement.animate([
    // keyframes
    { transform: 'translateX(-100%)' },
    { transform: 'translateX(0)' }
  ], {
    // timing options
    duration: 200,
  })

  checkForWinner()
}


function handleUpPress() {
  let initElement = initialElement()
  let allEm = adjacentElements()

  let index = Array.prototype.indexOf.call(allEm, initElement)
  if((index + Number(rv)) >= (Number(rv) * Number(cv)))
    return
  let currentElement = allEm[index+Number(rv)]

  initElement.innerHTML = currentElement.innerHTML
  currentElement.innerHTML = ''
  initElement.removeAttribute('unchecked')
  initElement.classList.add('checked')
  currentElement.setAttribute('unchecked', 'true')

  checkForWinner()

  initElement.animate([
    // keyframes
    { transform: 'translateY(100%)' },
    { transform: 'translateY(0)' }
  ], {
    // timing options
    duration: 200,
  })

  checkForWinner()
}