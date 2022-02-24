import {handleRightPress, handleLeftPress, handleUpPress, handleDownPrress} from './button-press.js'

const mapper = {
  1: (rv, cv) => handleDownPrress(rv, cv),
  2: (rv, cv) => handleRightPress(rv, cv),
  3: (rv, cv) => handleLeftPress(rv, cv),
  4: (rv, cv) => handleUpPress(rv, cv),
}

export const initializeAutoSolver = (rv, cv) => handleAutoSolver(rv, cv)

async function handleAutoSolver(rv, cv) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 4);
  });

  const number = Math.floor(Math.random() * (4 - 1 + 1)) + 1;;
  mapper[number](rv, cv)
  handleAutoSolver(rv, cv)
}