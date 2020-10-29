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
       <input 
        onChange={this.props.onChangeFiltroMin}
        type="number" 
        value={this.props.filtroMin} 
       />
       <label>Valor Máximo</label>
       <input 
        onChange={this.props.onChangeFiltroMax}
        typer="number" 
        value={this.props.filtroMax}
        />
       <label>Buscar Produto</label>
       <input 
            onChange={this.props.onChangeFiltroNome}
           value={this.props.filtroNome}
       />
     </ContainerFiltro>
        )
    }
}

export default Filtro