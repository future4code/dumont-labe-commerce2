import React from "react";
import {ItemDoCarrinho} from "./ItemDoCarrinho";
import styled from 'styled-components';

const ContainerDoCarrinho = styled.div`
    border: 1px solid black;
    height: 80vh;
    width: 20%;
    padding: 10px;
`

const ContainerDaListaDeItens = styled.div`
    padding: 10px
`

export class Carrinho extends React.Component {
    somaDosValoresNoCarrinho = () => {
        let valorTotal = 4758347583

        return valorTotal
    }

    render() {
        return(
            <ContainerDoCarrinho>
                <h1>Carrinho</h1>
                <ContainerDaListaDeItens>
                    <ItemDoCarrinho />
                </ContainerDaListaDeItens>
                <p>Total: R${this.somaDosValoresNoCarrinho()},00</p>
            </ContainerDoCarrinho>
        )
    }
}