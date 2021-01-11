import React from 'react';
import styled from 'styled-components';

const Inventory = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(196, 196, 196, 0.7);
  border-radius: 5px;
  height: 100%;
  width: 100%;
  margin: 10px 50px 0 0;
  flex: 0 0 25%;
  max-width: 28%;
  min-height: 400px;
  height: fit-content;

  p {
    font-size: 25px;
    text-align: center;
    line-height: 1.5;
    padding: 0 25px;
  }
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
  align-items: center;
  flex-wrap: wrap;
  img {
    margin-top: 2rem;
  }
`;
const Title2 = styled.h1`
  text-align: center;
  font-size: 36px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 5px;
  margin-top: 0px;
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
        <Title2>Recipe of the Day</Title2>
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
