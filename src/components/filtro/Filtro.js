import React from 'react';
import styled from 'styled-components'


const FiltroContainer = styled.div`
    border: 1px solid black;
    padding: 16px;
    

     
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8px;
    
    

`

class Filtro extends React.Component{
    render(){
        return(
            <FiltroContainer>
                <h3>Filtros</h3>
                <InputContainer>
                    <label>Valor mínimo:</label>
                    <input type="number"/>
                </InputContainer>
                <InputContainer>
                    <label>Valor máximo:</label>
                    <input type="number"/>
                </InputContainer>
                <InputContainer>
                    <label>Buscar por nome:</label>
                    <input/>
                </InputContainer>
                
            </FiltroContainer>
        )
    }
}

export default Filtro