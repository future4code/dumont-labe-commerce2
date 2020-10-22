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


class App extends React.Component {

  state = {
    
    filtroMin: "",
    filtroMax: "",
    nomeFiltro: ""
  }


  render(){
    return (
    <ContainerSite>
      <Filtro 
        filtroMin={this.state.filtroMin}
        filtroMax={this.state.filtroMax}
        filtroNome={this.state.nomeFiltro}
      />
      <Home />
      <Carrinho />
    </ContainerSite>
    );
}
}
  

export default App;
