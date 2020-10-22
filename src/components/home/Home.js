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

    filtraProdutoLista = () =>{
        return this.props.produtos
            .filter((produto) => produto.preco < this.props.filtroMax)
            .filter((produto) => produto.preco > this.props.filtroMin)
            //.filter((produto) => produto.nome.includes(this.props.filtroNome))
            
    }

  render(){
      const filtroProdutoEordenarLista = this.filtraProdutoLista()
      return (
          <ContainerHome>
              <NavHome>
                  <p>Quantidade de produtos:8</p>
                  <label>
                      Ordenar por:
                      <select>
                          <option>Crescente</option>
                          <option>Decrescente</option>
                      </select>
                  </label>
              </NavHome>
              <GridProdutos>
                  {filtroProdutoEordenarLista.map((produto) => {
                      return <Produto produto={produto}/>
                  })}
              </GridProdutos>
          </ContainerHome>
      )
  }
}