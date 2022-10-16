import React from 'react';
import Rotas from './Service/Routes'
import { GlobalStyle } from './Components/Global/index';
//import {Container} from './Style'

export default function App() {
  return(
    <>
      <GlobalStyle />
      <Rotas /> 
    </>
  )
}