import React from 'react';
import './App.css';
import styled from "styled-components"
import {Home} from "../src/components/Home"
import {Carrinho} from "./components/carrinho/Carrinho"
import Filtro from './components/filtro/Filtro';


const ContainerSite = styled.div`
display:flex;
justify-content:space-between;
margin:10px;`

const ContainerFiltro = styled.div`
display:flex;
flex-direction:column;
border: 1px solid black;
height:100vh;
width:20%;`




function App() {
  return (
   <ContainerSite>
     <Filtro />
     <Home />
     <Carrinho />
   </ContainerSite>
  );
}
  

export default App;
