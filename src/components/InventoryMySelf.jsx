import React from 'react';
import styled from 'styled-components';

const Inventory = styled.div`
  img {
    width: 60px;
    height: 60px;
  }
`;

class InventoryMySelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { image, name } = this.props;
    return (
      <Inventory>
        <img src={image} alt={name} />
      </Inventory>
    );
  }
}

export default InventoryMySelf;
