import React from "react";
import "./App.css";
import InventoryTavern from "./components/InventoryTavern";
import InventoryMySelf from "./components/InventoryMySelf";
import ingredientsList from "./components/ingredientsList";
import styled from "styled-components";

const IngredientTavern = styled.div``;
const IngredientBackpack = styled.div``;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient1: [],
      ingredient2: [],
      ingredient3: [],
      counterlife: 10,
      clickTavern: false,
      clicMySelf: false,
    };
  }

  randomRarityCalc() {
    const random = Math.floor(Math.random() * 100) + 1;
    let rarity = "commun";

    if (random < 20) {
      rarity = "rare";
    } else if (random < 50) {
      rarity = "uncommun";
    }
    return rarity;
  }

  newImage() {
    const rare = this.randomRarityCalc();
    const firstFilter = ingredientsList.filter(
      (element) => element.rarity === rare
    );
    const nbElement = firstFilter.length;
    const newRandom = Math.floor(Math.random() * nbElement);

    console.log(firstFilter[newRandom]);
    return firstFilter[newRandom];
  }

  render() {
    const { ingredient1, ingredient2, ingredient3 } = this.state;
    return (
      <div className="App">
        <h1>Epic Recipe</h1>

        <IngredientTavern>
          <button type="button">
            <InventoryTavern image={ingredient1.img} name={ingredient1.name} />
          </button>
          <button type="button">
            <InventoryTavern image={ingredient2.img} name={ingredient2.name} />
          </button>
          <button type="button">
            <InventoryTavern image={ingredient3.img} name={ingredient3.name} />
          </button>
        </IngredientTavern>

        <button
          onClick={() =>
            this.setState({
              ingredient1: this.newImage(),
              ingredient2: this.newImage(),
              ingredient3: this.newImage(),
            })
          }
        >
          change the draft
        </button>

        <IngredientBackpack>
          <InventoryMySelf />
          <InventoryMySelf />
          <InventoryMySelf />
        </IngredientBackpack>
      </div>
    );
  }
}

export default App;
