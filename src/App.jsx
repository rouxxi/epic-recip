import React from "react";
import "./App.css";
import InventoryTavern from "./components/InventoryTavern";
import InventoryMySelf from "./components/InventoryMySelf";
import ingredientsList from "./components/ingredientsList";
import Recipes from "./components/Recipes";
import recipesList from "./components/recipesList";
import Backgroundimg from "./images/background.svg";
import styled from "styled-components";
import bannerImg from "./images/Banner.svg";
import tavernierImg from "./images/tavernier.svg";
import Audio from './components/Audio'

const IngredientTavern = styled.div``;
const IngredientBackpack = styled.div``;

const Apps = styled.div`
  margin: 0;
  padding: 0;
  background-image: url(${Backgroundimg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  font-family: cursive;

  .ButtonChangeDraft {
    padding: 10px;
    background: red;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    color: #fff;
  }
`;

const Block = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;

`;

const Banner = styled.div`
  background-image: url(${bannerImg});
  background-size: contain;
  background-repeat: no-repeat;
  width: 465px;
  height: 152px;
  margin: auto;
`;

const GameBoard = styled.div`
  flex: 0 0 30%;
`;

const TavernKeeper = styled.div`
  background-image: url(${tavernierImg});
  background-size: contain;
  background-repeat: no-repeat;
  margin: auto;
  width: 327px;
  height: 411px;
`;

const StuffTavernKeeper = styled.div`
  height: 150px;
  background-color: rgba(196, 196, 196, 0.5);
  border-radius: 5px;
`;

const Instructions = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  margin: 10px 0 0 100px;
  background-color: rgba(196, 196, 196, 0.5);
  border-radius: 5px;

  p {
    font-size: 25px;
    text-align: center;
    line-height: 1.5;
    padding: 0 25px;
  }
`;

const Recipe = styled.div`
  margin: 10px 100px 0 0;
  flex: 0 0 20%;
  max-width: 20%;
  height: 500px;
  background-color: rgba(196, 196, 196, 0.5);
  border-radius: 5px;
  p {
    font-size: 25px;
    text-align: center;
    line-height: 1.5;
    padding: 0 25px;
  }
`;

const PlayerStuff = styled.div`
  height: 150px;
  width: 700px;
  margin: 30px auto 0 auto;
  background-color: rgba(196, 196, 196, 0.5);
  border-radius: 5px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  padding-top: 10px;
  margin-top: 0px;
`;

const Victory = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
`;

const Button = styled.button``;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      ingredient1: [],
      ingredient2: [],
      ingredient3: [],
      myStuff1: {
        id: 12,
        img: "./images/Patate.png",
        name: "Patate",
        rating: 88,
        rarity: "commun",
      },
      myStuff2: {
        id: 12,
        img: "./images/Patate.png",
        name: "Patate",
        rating: 88,
        rarity: "commun",
      },
      myStuff3: {
        id: 12,
        img: "./images/Patate.png",
        name: "Patate",
        rating: 88,
        rarity: "commun",
      },
      counterlife: 10,
      clickTavern: false,
      clicMySelf: false,
      tavernValue: null,
      mySelfValue: null,
      tavernButton: null,
      mySelfButton: null,
    };
  }
  componentDidMount() {
    const randomElement = Math.floor(Math.random() * recipesList.length);
    console.log(randomElement);
    console.log(this.state.menu);
    console.log(recipesList[randomElement]);
    this.setState({
      ingredient1: this.newImage(),
      ingredient2: this.newImage(),
      ingredient3: this.newImage(),
      menu: recipesList[randomElement],
    });
    console.log(this.state.menu);
  }

  componentDidUpdate(pP, pS) {
    if (this.state.tavernValue !== null && this.state.mySelfValue !== null) {
      if (this.state.tavernButton === 1) {
        if (this.state.mySelfButton === 1) {
          this.setState({
            ingredient1: this.state.mySelfValue,
            myStuff1: this.state.tavernValue,
            tavernValue: null,
            mySelfValue: null,
          });
        } else if (this.state.mySelfButton === 2) {
          this.setState({
            ingredient1: this.state.mySelfValue,
            myStuff2: this.state.tavernValue,
            tavernValue: null,
            mySelfValue: null,
          });
        } else if (this.state.mySelfButton === 3) {
          this.setState({
            ingredient1: this.state.mySelfValue,
            myStuff3: this.state.tavernValue,
            tavernValue: null,
            mySelfValue: null,
          });
        }
      } else if (this.state.tavernButton === 2) {
        if (this.state.mySelfButton === 1) {
          this.setState({
            ingredient2: this.state.mySelfValue,
            myStuff1: this.state.tavernValue,
            tavernValue: null,
            mySelfValue: null,
          });
        } else if (this.state.mySelfButton === 2) {
          this.setState({
            ingredient2: this.state.mySelfValue,
            myStuff2: this.state.tavernValue,
            tavernValue: null,
            mySelfValue: null,
          });
        } else if (this.state.mySelfButton === 3) {
          this.setState({
            ingredient2: this.state.mySelfValue,
            myStuff3: this.state.tavernValue,
            tavernValue: null,
            mySelfValue: null,
          });
        }
      } else if (this.state.tavernButton === 3) {
        if (this.state.mySelfButton === 1) {
          this.setState({
            ingredient3: this.state.mySelfValue,
            myStuff1: this.state.tavernValue,
            tavernValue: null,
            mySelfValue: null,
          });
        } else if (this.state.mySelfButton === 2) {
          this.setState({
            ingredient3: this.state.mySelfValue,
            myStuff2: this.state.tavernValue,
            tavernValue: null,
            mySelfValue: null,
          });
        } else if (this.state.mySelfButton === 3) {
          this.setState({
            ingredient3: this.state.mySelfValue,
            myStuff3: this.state.tavernValue,
            tavernValue: null,
            mySelfValue: null,
          });
        }
      }
    }
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
    return firstFilter[newRandom];
  }

  render() {
    const { ingredient1, ingredient2, ingredient3 } = this.state;
    return (
      <div className="App">
        <Apps>
          <Header>
            <Banner />
            <Audio/>
          </Header>
          <Block>
            <Instructions>
              <Title>Instructions</Title>
              <p>
                Oyé Oyé voyageur ! Es-tu prêt à relever le défi ? Les règles
                sont simples … Ton but est de réaliser la recette du jour en
                récupérant tous ses ingrédients. Pour ce faire, il va falloir
                user de tes talents de troqueur et négocier avec le tavernier
                (peu commode) en lui proposant un échange d’un de tes
                ingrédients contre un des siens . Mais attention chaque
                ingrédient a une valeur et une rareté, le tavernier ne se
                laissera pas avoir...
              </p>
            </Instructions>
            <GameBoard>
              <TavernKeeper />
              <StuffTavernKeeper>
                <Title>Stuff tavern keeper</Title>
                <IngredientTavern>
                  <Button
                    onClick={() =>
                      this.setState({
                        tavernValue: this.state.ingredient1,
                        tavernButton: 1,
                      })
                    }
                    type="button"
                  >
                    <InventoryTavern
                      image={ingredient1.img}
                      name={ingredient1.name}
                    />
                  </Button>
                  <Button
                    onClick={() =>
                      this.setState({
                        tavernValue: this.state.ingredient2,
                        tavernButton: 2,
                      })
                    }
                    type="button"
                  >
                    <InventoryTavern
                      image={ingredient2.img}
                      name={ingredient2.name}
                    />
                  </Button>
                  <Button
                    onClick={() =>
                      this.setState({
                        tavernValue: this.state.ingredient3,
                        tavernButton: 3,
                      })
                    }
                    type="button"
                  >
                    <InventoryTavern
                      image={ingredient3.img}
                      name={ingredient3.name}
                    />
                  </Button>
                </IngredientTavern>
                <button
                  className="ButtonChangeDraft"
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
              </StuffTavernKeeper>
              <PlayerStuff>
                <Title>Your Stuff</Title>
                <IngredientBackpack>
                  <button
                    type="button"
                    onClick={() =>
                      this.setState({
                        mySelfValue: this.state.myStuff2,
                        mySelfButton: 1,
                      })
                    }
                  >
                    <InventoryMySelf
                      image={this.state.myStuff1.img}
                      name={this.state.myStuff1.name}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      this.setState({
                        mySelfValue: this.state.myStuff2,
                        mySelfButton: 2,
                      })
                    }
                  >
                    <InventoryMySelf
                      image={this.state.myStuff2.img}
                      name={this.state.myStuff2.name}
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      this.setState({
                        mySelfValue: this.state.myStuff3,
                        mySelfButton: 3,
                      })
                    }
                  >
                    <InventoryMySelf
                      image={this.state.myStuff3.img}
                      name={this.state.myStuff3.name}
                    />
                  </button>
                </IngredientBackpack>
              </PlayerStuff>
            </GameBoard>
            <Recipe>
              <Title>Recipe of the Day</Title>
              <Recipes menu={this.state.menu} />
            </Recipe>
          </Block>
        </Apps>
      </div>
    );
  }
}
export default App;
