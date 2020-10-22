import React from 'react';
import styled from 'styled-components'


const ContainerFiltro = styled.div`
    border: 1px solid black;
    padding: 16px
    
`
const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 8px;
`




export class Filtro extends React.Component{
    render(){
        return(
    <ContainerFiltro>
       <h1>Filtro</h1>
       <ContainerInput>
       <label>
             Valor Mínimo:
            <input 
                type="number" 
                value={this.props.filtroMin} 
             />     
       </label>
       </ContainerInput>
       <ContainerInput>
       <label>
             Valor Máximo:
            <input 
                type="number" 
                value={this.props.filtroMax} 
             />     
       </label>
       </ContainerInput>
       <ContainerInput>
       <label>
             Buscar por nome:
            <input 
                type="text" 
                value={this.props.filtroNome} 
             />     
       </label>
       </ContainerInput>
       
     </ContainerFiltro>
        )
    }
}

export default Filtro