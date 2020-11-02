import React from 'react'

function MyList() {
  const hotkeys = [
    {code: 'ctrl + shift + esc', description: 'open terminal' }
  ]
  
  return (
    <div>
      {hotkeys.map(item =>
        <div> </div>
      
          )}
    </div>
  )
}

export default MyList



//yarn create react-app my-app --template typescript