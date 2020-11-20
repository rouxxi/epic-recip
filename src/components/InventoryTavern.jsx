import React from "react";
import styled from "styled-components";

const Inventory = styled.div`
  img {
    width: 80px;
    height: 80px;
  }
`;

class InventoryTavern extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { image, name } = this.props;
    return (
      <Inventory img={image}>
        <img src={image} alt={name} />
      </Inventory>
    );
  }
}

export default InventoryTavern;
