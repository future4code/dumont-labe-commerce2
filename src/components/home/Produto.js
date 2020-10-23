import React from 'react';
import styled from 'styled-components';
import {ItemDoCarrinho} from '../../components/carrinho/ItemDoCarrinho'

const ContainerDosProdutos = styled.div`
    border: 1px solid black;
    display:flex;
    flex-direction:column;
`

const ImagemDoProduto = styled.img`
    max-width: 200px;
    padding: 10px;
`

const InformacaoDoProduto = styled.div`
    display: flex;
    flex-direction:column;
    padding: 10px;
    p {
        margin: 4px 0;
    };
    button {
        margin-top: 4px;
        align-self: center;
    }
`

export class Produto extends React.Component {
    state = {
        
    }
   
 
    render() {
        const produto = this.props.produto
        return (
            <ContainerDosProdutos>
                <ImagemDoProduto src={produto.urlDaImagem} />
                <InformacaoDoProduto>
                    <p>{produto.nome}</p>
                    <p>R$ {produto.preco}</p>
                    <button onClick={()=>this.props.adicionaProdutoCarrinho(produto.id,produto.nome,produto.preco,produto.urlDaImagem)}>Adicionar ao carrinho</button>
                </InformacaoDoProduto>
            </ContainerDosProdutos>
        )
    }
}