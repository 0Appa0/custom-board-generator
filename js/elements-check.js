export const initialElement = () => {
  return document.querySelector('[unchecked="true"]')
}

export const adjacentElements = () => {
  return document.getElementsByClassName('element')
}

export const  checkForWinner = (rv, cv) => {
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

export const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
