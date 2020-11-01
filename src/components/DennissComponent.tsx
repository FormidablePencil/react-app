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




// parts:
// 1. navigation

// 2. snippets

// 3. what different boxes do

// the rest is training the speed of these 3


//  navigation: alt + tab
//  terminal open: Ctrl + below esc    create terminal control shift below esc     delete: control shift del
//  cut line: ctrl + x
//  insert line below: control + enter && with shift
//  toggles comment: contol + /
//  toggle block comment    SHIFT ALT A
//  glossary and opening files: control + p && with shift
//  Control + w: close tab
//  reopen control z for a tab: Control + shift + tab
//  moving between words: alt > or < && with control
//  Find: Control + F
//  TOGGLE sidebar: Control + B
//  Show extensions: control shift x, go back, control e
//  navigation between files: control (shift) tab         control + pg up or down 
//  control + del or with backspace
//  control down or up
//  correct format: shift alt f
//  alt down && select words and alt down or up
//  END && HOME
//  Control shift k
//  delete all left configre and also right
//  move file to the left: control alt < or