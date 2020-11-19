import React from 'react';
import styled from 'styled-components';

const Inventory = styled.div`

`;


class InventoryTavern extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Inventory>
                <img src={this.props.image} alt={this.props.name}/>
            </Inventory>
        )
    }
}

export default InventoryTavern;