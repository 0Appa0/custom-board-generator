import {
  initialElement, 
  adjacentElements,
  checkForWinner,
  arraysEqual
} from './elements-check.js'

export const  handleDownPrress = (rv, cv) => {
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
    duration: 150,
  })

  checkForWinner(rv, cv)
}

export const  handleLeftPress = (rv, cv) => {
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
    duration: 150,
  })

  checkForWinner(rv, cv)
}


export const  handleRightPress = (rv, cv) => {
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
    duration: 150,
  })

  checkForWinner(rv, cv)
}


export const  handleUpPress = (rv, cv) =>  {
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

  initElement.animate([
    // keyframes
    { transform: 'translateY(100%)' },
    { transform: 'translateY(0)' }
  ], {
    // timing options
    duration: 150,
  })

  checkForWinner(rv, cv)
}

