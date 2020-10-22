import React from "react";
import {ItemDoCarrinho} from "./ItemDoCarrinho";
import styled from 'styled-components';
import App from "../../App"

const ContainerDoCarrinho = styled.div`
    border: 1px solid black;
    height: 80vh;
    width: 20%;
    padding: 10px;
`

const ContainerDaListaDeItens = styled.div`
    padding: 10px;
`
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

export class Carrinho extends React.Component {
  
    state = {
        carrinhoDeCompras: [
            {
            id: Date.now(),
            nome:"teste",
            preco:10
        },
        {
            id: Date.now(),
            nome:"teste",
            preco:2000
        }
        ]
    }
    
    somaDosValoresNoCarrinho = () => {
        let valorTotal = 1
        return valorTotal
    }
    removeProduto = (produto) => {
        {this.stat.carrinhoDeCompras.map((produtoCarrinho) => {
            if (produto ===  produtoCarrinho.id){
                console.log("REMOVE")
            }
        })}
    }

    render() {
        return(
            <ContainerDoCarrinho>
                <h1>Carrinho</h1>
                <ContainerDaListaDeItens>
                <ContainerDosItems>
                {this.props.produtos.map((produto) => {
                      return <Item><p>{produto.nome},{produto.preco}</p><Botao onClick={()=>this.removeProduto(produto.id)}>Remover</Botao></Item>
                  })}
                
            </ContainerDosItems>
                </ContainerDaListaDeItens>
                <p>Total: R${this.somaDosValoresNoCarrinho()},00</p>
            </ContainerDoCarrinho>
        )
    }
}