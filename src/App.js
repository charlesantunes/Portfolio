import React from 'react';
import Router from './Service/routes'
import { GlobalStyle } from './Components/Global/index';
//import {Container} from './Style'

export default function App() {
  return(
    <>
      <GlobalStyle />
      <Router /> 
    </>
  )
}