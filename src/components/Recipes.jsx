import React from "react";
import styled from "styled-components";

const Inventory = styled.div`
  height: 100px;
  width: 100%;
`;
const Title = styled.h3`
  text-align: center;
  font-size: 26px;
  padding-top: 10px;
  margin-top: 0px;
`;
const ImgDivRecipes = styled.div`
  display: flex;
  justify-content: space-around;
  align-item: center;

  img {
    margin-top: 2rem;
  }
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
        <Title>{menu.name}</Title>
        <p>{menu.description}</p>
        <ImgDivRecipes>
          <img src={menu.img1} alt={menu.name} />
          <img src={menu.img2} alt={menu.name} />
          <img src={menu.img3} alt={menu.name} />
        </ImgDivRecipes>
      </Inventory>
    );
  }
}

export default Recipes;
