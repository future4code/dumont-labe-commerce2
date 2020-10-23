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
  // produtos que aparecem na tela principal
  {
    id: 1,
    nome: "Big Falcon Rocket",
    preco: 22,
    urlDaImagem: "https://cdn.vox-cdn.com/thumbor/ERS1_Blbu0L6QQtEPQCM7smC0_E=/0x0:888x501/1200x800/filters:focal(373x180:515x322)/cdn.vox-cdn.com/uploads/chorus_image/image/62364681/Screen_Shot_2018_09_17_at_9.21.53_PM.0.png",
    quantidade:0
  },
  {
    id: 2,
    nome: "Falcon Heavy",
    preco: 87,
    urlDaImagem: "https://super.abril.com.br/wp-content/uploads/2018/02/spacex-falconheavy.png",
    quantidade:0
  },
  {
    id: 3,
    nome: "Apollo 11",
    preco: 87,
    urlDaImagem: "https://assets.b9.com.br/wp-content/uploads/2019/07/national-geographic-apollo11.jpg",
    quantidade:0
  },
  {
    id: 4,
    nome: "Space Shuttle",
    preco: 87,
    urlDaImagem: "https://cdn.mos.cms.futurecdn.net/ka5acHNs3trfycsfvB5aeY-1200-80.jpg",
    quantidade:0
  },
  {
    id: 5,
    nome: "Millennium Falcon",
    preco: 67,
    urlDaImagem: "https://images.virgula.com.br/2015/12/Millennium-Falcon_018ea796.jpeg",
    quantidade:0
  },
  {
    id: 6,
    nome: "X-wing starfighter",
    preco: 79,
    urlDaImagem: "https://www.wallpaperup.com/uploads/wallpapers/2015/09/28/811207/cd04cc40bd2e7060c7a2b417b1743b74-700.jpg",
    quantidade:0
  },
  {
    id: 7,
    nome: "USS Enterprise (NCC-1701-D)",
    preco: 82,
    urlDaImagem: "https://i.pinimg.com/originals/b7/23/64/b723645d40bc83af75b2838c470d7a5a.jpg",
    quantidade:0
  },
  {
    id: 8,
    nome: "USS Voyager",
    preco: 91,
    urlDaImagem: "https://upload.wikimedia.org/wikipedia/pt/5/58/USS_Voyager.jpg",
    quantidade:0
  },
]
const novoProduto= [...produtos]



class App extends React.Component { 
  state = {
    filtroMin: 0,
    filtroMax: 87018364543534500000,
    filtroNome: "",
    carrinhoDeCompras: [
      // produtos que aparecem na tela principal
    
    ],
    valorCompra: 0,
  }
  adicionaProdutoCarrinho = (idNovo,nomeNovo,precoNovo,urlDaImagemNovo) => {
    novoProduto.map((produto) => {
        if(idNovo === produto.id){
         produto.quantidade += 1
         this.setState({
          valorCompra:produto.preco + this.state.valorCompra
        })
         }
         let novoCarrinho = novoProduto.filter(function(e){
           return e.quantidade > 0;
         })
         this.setState({
           carrinhoDeCompras:novoCarrinho
         })
         
      })
    }
  removeCarrinho = (carrinho) => {
  // Fórmula que remove produto do carrinho e subtrai valor do prouto do valor total.
  novoProduto.map((produto)=>{
    if(carrinho.id === produto.id){
      produto.quantidade -= 1
      this.setState({
        valorCompra:this.state.valorCompra - carrinho.preco
      })
    }
    let novoCarrinho = novoProduto.filter(function(e){
      return e.quantidade > 0;
    })
    this.setState({
      carrinhoDeCompras:novoCarrinho
    })
    
  })
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
        produtos={produtos} 
        carrinho={this.state.carrinhoDeCompras} 
        adicionaCarrinho={this.adicionaCarrinho} 
        adicionaProdutoCarrinho = {this.adicionaProdutoCarrinho}
        valorCompra={this.state.valorCompra} 
        somaValorCompra={this.somaValorCompra}
        filtroMin={this.state.filtroMin}
        filtroMax={this.state.filtroMax}
        filtroNome={this.state.nomeFiltro}
        />
      <Carrinho 
        produtos={produtos} 
        carrinho={this.state.carrinhoDeCompras} 
        removeCarrinho={this.removeCarrinho} 
        valorCompra={this.state.valorCompra} 
        somaValorCompra={this.somaValorCompra}
        />
    </ContainerSite>
    );
}
}

export default App;
