import { render } from 'react-dom'

import './styles/index.scss'
const myObj = {
  name: 'ali'
}

const myObjCopy = { ...myObj }
console.log(myObjCopy)

render(<h1>Hello from react!</h1>, document.getElementById('root'))
