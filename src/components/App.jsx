import React from 'react'
import '../styles/index.scss'

const myObj = {
  name: 'ali'
}

const myObjCopy = { ...myObj }
console.log(myObjCopy)

const App = () => {
  return <div>This is the app component</div>
}

export default App
