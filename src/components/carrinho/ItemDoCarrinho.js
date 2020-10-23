import React from "react";
import styled from 'styled-components';
import {Produto} from "./../home/Produto";

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
const ImagemCarrinho = styled.img`
height:5vh;
width:5vh;` 
const FlexInformacoesItem = styled.div`
display:flex;
flex-direction:column;
`
export class ItemDoCarrinho extends React.Component {
    render() {
        return(
            <ContainerDosItems>
                {this.props.carrinho.map((produto) => {
                      return (
                      <Item>
                        <FlexInformacoesItem>
                            <ImagemCarrinho src={produto.urlDaImagem}/>
                            <h4>{produto.nome}:R${produto.preco}</h4>
                        </FlexInformacoesItem>
                        <Botao onClick={()=>this.props.removeCarrinho(produto)}>
                            Remover
                        </Botao>
                      </Item>
                )})}
            </ContainerDosItems>
        )
    }
}