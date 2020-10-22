import React from 'react';
import {Produto} from "./Produto";
import styled from "styled-components"

const ContainerHome = styled.div`
display:flex;
flex-direction:column;
border: 1px solid black;
height:80%;
width:50%;`

const NavHome = styled.div`
  display:flex;
  justify-content:space-between;
  align-items: center;
  border: 1px solid black;
  height:10%;
  width:100%;
`
const FlexProdutos = styled.div`
display:flex;
flex-wrap:wrap;
border: 1px solid black;
height:90%;
width:100%;`

export class Home extends React.Component {
  render(){
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
              <FlexProdutos>
                  {this.props.produtos.map((produto) => {
                      return <Produto produto={produto}/>
                  })}
              </FlexProdutos>
          </ContainerHome>
      )
  }
}