import React from "react";
import styled from "styled-components"

const ContainerCarrinho = styled.div`
display:flex;
flex-direction:column;
border: 1px solid black;
height:100vh;
width:20%;`
export class Carrinho extends React.Component {
    state = {
        itensNoCarrinho: []
    }

    render() {
        

        return(
            <ContainerCarrinho>
            <h3>Carrinho</h3>
            <p>Total: R$0</p>
          </ContainerCarrinho>
        )
    }
}