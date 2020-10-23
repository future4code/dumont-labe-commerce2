import React from 'react';
import {Produto} from "./Produto";
import styled from "styled-components"

const ContainerHome = styled.div`
  display:flex;
  flex-direction:column;
  border: 1px solid black;
  height:80%;
  width:60%;
`

const NavHome = styled.div`
  display:flex;
  justify-content:space-between;
  align-items: center;
  border: 1px solid black;
  height:10%;
  width:100%;
`

const GridProdutos = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  width:100%;
  justify-items:center;
`

export class Home extends React.Component {

state = {
    ordem: 'crescente'
  }

  filtrarEOrdenar = () => {
    return (this.props.produtos
      .filter((produtos) => {return (produtos.preco < this.props.filtroMax)})
      .filter((produtos) => {return (produtos.preco > this.props.filtroMin)})
      .filter((produtos) => {return produtos.nome.includes(this.props.filtroNome)})
      .sort((a, b) => {return this.state.sort === 'crescente' ? a.preco - b.preco : b.preco - a.preco})
    )
  }
  onChangeOrdenar = (event) => {
    this.setState({ordem: event.target.value})
  }
    
  render(){
    const listaFiltradaEOrdenada = this.filtrarEOrdenar()
      return (
          <ContainerHome>
              <NavHome>
                  <p>Quantidade de produtos: {listaFiltradaEOrdenada.length}</p>
                  <label>
                      Ordenar por:
                      <select value={this.state.ordem} onChange={this.onChangeOrdenar}>
                      <option value={'crescente'}>Preço crescente</option>
                      <option value={'decrescente'}>Preço decrescente</option>
                      </select>
                  </label>
              </NavHome>
              <GridProdutos>
                  {this.props.produtos.map((produto) => {
                      return <Produto produto={produto} 
                      carrinho={this.props.carrinho} 
                      adicionaProdutoCarrinho ={this.props.adicionaProdutoCarrinho}
                      valorCompra={this.props.valorCompra} 
                      somaValorCompra={this.props.somaValorCompra}
                      />
                  })}
              </GridProdutos>
          </ContainerHome>
    
// //   <GridProdutos>
//           {listaFiltradaEOrdenada.map((produto) => {
//             return <Produto produto={produto}/>
//           })}
//         </GridProdutos>


      )
  }
}