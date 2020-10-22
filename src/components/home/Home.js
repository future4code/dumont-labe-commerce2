import React from 'react';
import {Produto} from "./Produto";
import styled from "styled-components"

const ContainerHome = styled.div`
display:flex;
flex-direction:column;
border: 1px solid black;
height:80%;
width:60%;`

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
justify-items:center;`

export class Home extends React.Component {
  state = {
    ordem: 'crescente'
  }

  filtrarEOrdenar = () => {
    return (this.props.produtos
      .filter((produtos) => produtos.preco < this.props.filtroMax)
      .filter((produtos) => produtos.preco > this.props.filtroMin)
      // .filter((produtos) => produtos.nome.includes(this.props.nomeFiltro))
      // .sort((a, b) => this.state.sort === 'crescente' ? a.preco - b.preco : b.preco - a.preco)
    )
  }

  render(){
    const listaFiltradaEOrdenada = this.filtrarEOrdenar()
    return (
      <ContainerHome>
        <NavHome>
          <p>Quantidade de produtos: {listaFiltradaEOrdenada.length}</p>
          <label>
            Ordenar por:
            <select value={this.state.ordem}>
              <option value={'crescente'}>Preço crescente</option>
              <option value={'decrescente'}>Preço decrescente</option>
            </select>
          </label>
        </NavHome>
        <GridProdutos>
          {listaFiltradaEOrdenada.map((produto) => {
            return <Produto produto={produto}/>
          })}
        </GridProdutos>
      </ContainerHome>
      )
  }
}