import React from 'react';
import styled from "styled-components"
import {Home} from "./components/home/Home"
import {Carrinho} from "./components/carrinho/Carrinho"
import Filtro from './components/filtro/Filtro';

const ContainerSite = styled.div`
  display:flex;
  justify-content:space-between;
  margin:10px;
`

const produtos = [
  {
    id: 1,
	  nome: "Big Falcon Rocket",
	  preco: 346654400,
	  urlDaImagem: "https://cdn.vox-cdn.com/thumbor/ERS1_Blbu0L6QQtEPQCM7smC0_E=/0x0:888x501/1200x800/filters:focal(373x180:515x322)/cdn.vox-cdn.com/uploads/chorus_image/image/62364681/Screen_Shot_2018_09_17_at_9.21.53_PM.0.png",
  },
  {
    id: 2,
	  nome: "Falcon Heavy",
	  preco: 503208000,
	  urlDaImagem: "https://super.abril.com.br/wp-content/uploads/2018/02/spacex-falconheavy.png",
  },
  {
    id: 3,
	  nome: "Apollo 11",
	  preco: 870183600000,
	  urlDaImagem: "https://assets.b9.com.br/wp-content/uploads/2019/07/national-geographic-apollo11.jpg",
  },
  {
    id: 4,
	  nome: "Space Shuttle",
	  preco: 0,
	  urlDaImagem: "https://cdn.mos.cms.futurecdn.net/ka5acHNs3trfycsfvB5aeY-1200-80.jpg",
  },
  {
    id: 5,
    nome: "Millennium Falcon",
	  preco: 13833368722,
	  urlDaImagem: "https://images.virgula.com.br/2015/12/Millennium-Falcon_018ea796.jpeg",
  },
  {
    id: 6,
	  nome: "X-wing starfighter",
	  preco: 0,
	  urlDaImagem: "https://www.wallpaperup.com/uploads/wallpapers/2015/09/28/811207/cd04cc40bd2e7060c7a2b417b1743b74-700.jpg",
  },
  {
    id: 7,
	  nome: "USS Enterprise (NCC-1701-D)",
	  preco: 0,
	  urlDaImagem: "https://i.pinimg.com/originals/b7/23/64/b723645d40bc83af75b2838c470d7a5a.jpg",
  },
  {
    id: 8,
	  nome: "USS Voyager",
	  preco: 0,
	  urlDaImagem: "https://upload.wikimedia.org/wikipedia/pt/5/58/USS_Voyager.jpg",
  },
]

class App extends React.Component {
  state = {
    filtroMin: 0,
    filtroMax: 87018364543534500000,
    filtroNome: "",
    carrinhoDeCompras: [
      
    ]
  }

  render(){
    return (
    <ContainerSite>
      <Filtro 
        filtroMin={this.state.filtroMin}
        filtroMax={this.state.filtroMax}
        filtroNome={this.state.filtroNome}
      />
      <Home 
        filtroMin={this.state.filtroMin}
        filtroMax={this.state.filtroMax}
        filtroNome={this.state.filtroNome}
        produtos={produtos}/>
      <Carrinho />
    </ContainerSite>
    );
}
}

export default App;
