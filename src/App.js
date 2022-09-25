import React from 'react';
import Router from './Service/routes'
import { GlobalStyle } from './Components/Global/index';

export default function App() {
  return(
    <>
      <GlobalStyle />
      <Router />
    </>
  )
}