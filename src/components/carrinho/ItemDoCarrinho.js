import React from "react";
import styled from 'styled-components';

const ContainerDoItem = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px dashed black;
`
const Botao = styled.button`
    padding: 0;
    height: 25px;
`

export class ItemDoCarrinho extends React.Component {
    state = {
        carrinhoDeCompras: [
            {
            nome:"teste",
            preco:"teste"
        }
        ]
    }
    render() {
        return(
            <ContainerDoItem>
                {this.state.carrinhoDeCompras.map((produto) => {
                      return <p>{produto.nome},{produto.preco}</p>
                  })}
                <Botao>Remover</Botao>
            </ContainerDoItem>
        )
    }
}