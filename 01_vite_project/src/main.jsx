import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

//1. works // works as function also
// function MyApp(){

//   return(<h1>Hello from MyApp component</h1>)
// }

//2. not works // because react render does not understand this syntax
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//         children: 'Google Link'    
// }

//3. works
// const anotherElement = (
//   <a href="https://google.com"> visit google</a>
// )
  
//4. works
const ReactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Google Link'
)

createRoot(document.getElementById('root')).render(
  
    ReactElement

 
)
