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
    adicionaProdutoCarrinho = (idNovo,nomeNovo,precoNovo) => {
        let carrinhoDeComprasNovo = [...ItemDoCarrinho.state.carrinhoDeCompras]
        carrinhoDeComprasNovo.push({id:idNovo,nome:nomeNovo,preco:precoNovo})
        ItemDoCarrinho.setState({
            carrinhoDeCompras:carrinhoDeComprasNovo
        }) 
        console.log(this.state.carrinhoDeComprasNovo)
     }
 
    render() {
        const produto = this.props.produto
        return (
            <ContainerDosProdutos>
                <ImagemDoProduto src={produto.urlDaImagem} />
                <InformacaoDoProduto>
                    <p>{produto.nome}</p>
                    <p>R$ {produto.preco}</p>
                    <button onClick={()=>this.adicionaProdutoCarrinho(Date.now(),produto.nome,produto.preco)}>Adicionar ao carrinho</button>
                </InformacaoDoProduto>
            </ContainerDosProdutos>
        )
    }
}