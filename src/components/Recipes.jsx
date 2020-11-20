import React from "react";
import styled from "styled-components";

const Inventory = styled.div`
  background-color: red;
  height: 100px;
  width: 100%;
`;

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { menu } = this.props;
    return (
      <Inventory>
        <p>{menu.name}</p>
        <p>{menu.description}</p>
        <img src={menu.img1} alt={menu.name} />
        <img src={menu.img2} alt={menu.name} />
        <img src={menu.img3} alt={menu.name} />
      </Inventory>
    );
  }
}

export default Recipes;
