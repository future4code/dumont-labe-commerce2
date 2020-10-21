import React from 'react';
import styled from "styled-components"

const ContainerProdutos = styled.div`
display:flex;
flex-direction:column;
border: 1px solid black;
height:80%;
width:50%;`

const NavProdutos = styled.div`
display:flex;
justify-content:space-between;
border: 1px solid black;
height:10%;
width:100%;`

const FlexProdutos = styled.div`
display:flex;
flex-wrap:wrap;
border: 1px solid black;
height:90%;
width:100%;`

const Produto = styled.div`
display:flex;
flex-direction:column;
border: 1px solid black;
height:50%;
width:20%;`

const ImagemProduto = styled.img`
height:30%;
width:100%;
`
 
export class Home extends React.Component {
  
    render(){
        return (
            <ContainerProdutos>
       <NavProdutos>
        <p>Quantidade de produtos:8</p>
        <p>dropdown de preços</p>
       </NavProdutos>
       <FlexProdutos>
         <Produto>
           <ImagemProduto src="https://i.pinimg.com/736x/de/d8/34/ded834163abe2ba47a380c72f155c2da.jpg" />
           <p>Item</p>
           <p>Preço</p>
           <button></button>
         </Produto>
         <Produto>
           <ImagemProduto src="https://i.pinimg.com/736x/de/d8/34/ded834163abe2ba47a380c72f155c2da.jpg" />
           <p>Item</p>
           <p>Preço</p>
           <button></button>
         </Produto>
         <Produto>
           <ImagemProduto src="https://i.pinimg.com/736x/de/d8/34/ded834163abe2ba47a380c72f155c2da.jpg" />
           <p>Item</p>
           <p>Preço</p>
           <button></button>
         </Produto>
         <Produto>
           <ImagemProduto src="https://i.pinimg.com/736x/de/d8/34/ded834163abe2ba47a380c72f155c2da.jpg" />
           <p>Item</p>
           <p>Preço</p>
           <button></button>
         </Produto>
         <Produto>
           <ImagemProduto src="https://i.pinimg.com/736x/de/d8/34/ded834163abe2ba47a380c72f155c2da.jpg" />
           <p>Item</p>
           <p>Preço</p>
           <button></button>
         </Produto>
         <Produto>
           <ImagemProduto src="https://i.pinimg.com/736x/de/d8/34/ded834163abe2ba47a380c72f155c2da.jpg" />
           <p>Item</p>
           <p>Preço</p>
           <button></button>
         </Produto>
         <Produto>
           <ImagemProduto src="https://i.pinimg.com/736x/de/d8/34/ded834163abe2ba47a380c72f155c2da.jpg" />
           <p>Item</p>
           <p>Preço</p>
           <button></button>
         </Produto>
         <Produto>
           <ImagemProduto src="https://i.pinimg.com/736x/de/d8/34/ded834163abe2ba47a380c72f155c2da.jpg" />
           <p>Item</p>
           <p>Preço</p>
           <button></button>
         </Produto>
       </FlexProdutos>
     </ContainerProdutos>
        )
    }
}