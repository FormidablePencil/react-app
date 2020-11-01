import React, { useState } from 'react'

function DennissComponent() {
  const [calculatorExecuted, setCalculatorExecuted] = useState(false)

  const lifeLived = {
    school: 12,
    allElse: 8,
  }

  const myCalculator = (first: any, second: any) => {
    let result
    if (calculatorExecuted) {
      result = first + second
    } else {
      result = 'unknown'
    }
    return result
  }

  const click = () => {
    setCalculatorExecuted(true)
  }

  return (
    <div className={calculatorExecuted ? 'evenLargerText' : 'bigText'} onClick={click}>
      <p>Dennis is = {myCalculator(lifeLived.school, lifeLived.allElse)}</p>
    </div>
  )
}

export default DennissComponent

// typescript
// npx create-react-app my-app
// navigating, nfn, rfce, useState, useSelector, useEffect, yarn

// yarn add - npm i
// yarn remove = npm uninstall
// yarn start = npm start
// yarn run start = npm run start

// navigate from tab to tab
// from app to app
// navigate in the code editor

// how would you jump to end of line?
// how to make window larger with hotkeys?
// how to delete whole line


// parts:
// 1. navigation

// 2. snippets

// 3. what different boxes do

// the rest is training the speed of these 3

