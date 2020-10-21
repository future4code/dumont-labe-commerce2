import React from 'react';
import './App.css';
import styled from "styled-components"
import {Home} from "../src/components/Home"

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
const ContainerCarrinho = styled.div`
display:flex;
flex-direction:column;
border: 1px solid black;
height:100vh;
width:20%;`



function App() {
  return (
   <ContainerSite>
     <ContainerFiltro>
       <h1>Filtro</h1>
       <label>Valor Minimo</label>
       <input></input>
       <label>Valor Máximo</label>
       <input></input>
       <label>Buscar Produto</label>
       <input></input>
       
     </ContainerFiltro>
     <Home />
     <ContainerCarrinho>
       <h3>Carrinho</h3>
       <p>Total: R$0</p>
     </ContainerCarrinho>
   </ContainerSite>
  );
}
  

export default App;
