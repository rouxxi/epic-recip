import React from "react";
import styled from "styled-components";
import imageBut from "../images/Ananas.png";

const Inventory = styled.div``;

class InventoryTavern extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { image, name } = this.props;
    console.log(image);
    return (
      <Inventory img={image}>
        <img src={image} alt={name} />
      </Inventory>
    );
  }
}

export default InventoryTavern;
