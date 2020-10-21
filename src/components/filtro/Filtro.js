import React from 'react';
import styled from 'styled-components'


const ContainerFiltro = styled.div`
display:flex;
flex-direction:column;
border: 1px solid black;
height:100vh;
width:20%;`



export class Filtro extends React.Component{
    render(){
        return(
    <ContainerFiltro>
       <h1>Filtro</h1>
       <label>Valor Minimo</label>
       <input></input>
       <label>Valor Máximo</label>
       <input></input>
       <label>Buscar Produto</label>
       <input></input>
       
     </ContainerFiltro>
        )
    }
}

export default Filtro