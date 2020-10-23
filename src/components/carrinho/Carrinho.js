import React from "react";
import {ItemDoCarrinho} from "./ItemDoCarrinho";
import styled from 'styled-components';

const ContainerDoCarrinho = styled.div`
    border: 1px solid black;
    height: 200vh;
    width: 20%;
    padding: 10px;
`
const ContainerDaListaDeItens = styled.div`
    padding: 10px;
`
export class Carrinho extends React.Component {
    render() {
        return(
            <ContainerDoCarrinho>
                <h1>Carrinho</h1>
                <ContainerDaListaDeItens>
                    <ItemDoCarrinho 
                        carrinho={this.props.carrinho} 
                        removeCarrinho={this.props.removeCarrinho}/>
                </ContainerDaListaDeItens>
                <p>Total: R${this.props.valorCompra},00</p>
            </ContainerDoCarrinho>
        )
    }
}