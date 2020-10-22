import React from "react";
import styled from 'styled-components';

const ContainerDosItems = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px dashed black;
`
const Item = styled.div`
display:flex;`
const Botao = styled.button`
    padding: 0;
    height: 25px;
`

export class ItemDoCarrinho extends React.Component {

    removeProduto = (produto) => {
        {this.props.carrinho.map((produtoCarrinho) => {
            if (produto ===  produtoCarrinho.id){
                console.log("REMOVE")
            }
        })}
    }
    render() {
        return(
            <ContainerDosItems>
                {this.props.carrinho.map((produto) => {
                      return <Item><p>{produto.nome},{produto.preco}</p><Botao onClick={()=>this.removeProduto(produto.id)}>Remover</Botao></Item>
                  })}
                
            </ContainerDosItems>
        )
    }
}