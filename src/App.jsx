import React from 'react';
import './App.css';
import InventoryTavern from './components/InventoryTavern';
import InventoryMySelf from './components/InventoryMySelf';
import ingredientsList from './components/ingredientsList';
import Recipes from './components/Recipes';
import recipesList from './components/recipesList';
import Backgroundimg from './images/background.svg';
import ButtonImg from './images/button2.png';
import styled from 'styled-components';
import bannerImg from './images/Banner.svg';
import tavernierImg from './images/tavernier.svg';
import victoire from './images/Victory.png';
import defeat from './images/defeat2.png';
import Audio from './components/Audio';
import bg_paneau from './images/boutton.png';

const Reroll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    padding: 0;
    margin: 0;
  }
`;

const IngredientTavern = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

const IngredientBackpack = styled.div`
  padding: 5px;
  margin: 5px;
`;

const Apps = styled.div`
  margin: 0;
  padding: 0;
  background-image: url(${Backgroundimg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  font-family: cursive;

  .ButtonChangeDraft {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background-image: url(${ButtonImg});
    background-position: center;
    background-size: cover;
    margin-top: 5%;
  }

  .player,
  .tavernier {
    text-align: center;
    height: auto;
    width: 100%;
    padding: 5px;
  }
`;

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  padding-top: 0;
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
  position: absolute;
  left: 0;
  right: 0;
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
  background-color: rgba(196, 196, 196, 0.7);
  border-radius: 5px;
`;

const Instructions = styled.div`
  flex: 0 0 25%;
  height: fit-content;
  margin: 10px 0 0 50px;
  background-color: rgba(196, 196, 196, 0.7);
  border-radius: 5px;

  p {
    text-align: center;
    line-height: 1.5;
    padding: 0 25px;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const PlayerStuff = styled.div`
  width: 700px;
  margin: 30px auto 0 auto;
  background-color: rgba(196, 196, 196, 0.7);
  border-radius: 5px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 29px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 5px;
  margin-top: 0px;
`;

const Victory = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  z-index: 10;
  display: ${({ end }) => (end ? 'flex' : 'none')};
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: ${({ end }) => (end ? 1 : 0)};
`;

const Intro = styled.p`
  font-size: 1.2rem;
`;

const BUBU = styled.button`
  position: absolute;
  left: auto;
  right: auto;
  bottom: 80px;
  padding: 5px;
  font-size: 28px;
  font-weight: 900;
  text-shadow: 1px 1px 0 #423b35;
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  outline-style: none;
  background-image: url(${bg_paneau});
  background-position: center;
  background-repeat: no-repeat;
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
        img: './images/Patate.png',
        name: 'Patate',
        rating: 88,
        rarity: 'commun',
      },
      myStuff2: {
        id: 12,
        img: './images/Patate.png',
        name: 'Patate',
        rating: 88,
        rarity: 'commun',
      },
      myStuff3: {
        id: 12,
        img: './images/Patate.png',
        name: 'Patate',
        rating: 88,
        rarity: 'commun',
      },
      counterlife: 10,
      clickTavern: false,
      clicMySelf: false,
      tavernValue: null,
      mySelfValue: null,
      tavernButton: null,
      mySelfButton: null,
      endGame: false,
      victory: false,
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

    if (
      (this.state.myStuff1.name === this.state.menu.ingredient1 ||
        this.state.myStuff1.name === this.state.menu.ingredient2 ||
        this.state.myStuff1.name === this.state.menu.ingredient3) &&
      (this.state.myStuff2.name === this.state.menu.ingredient1 ||
        this.state.myStuff2.name === this.state.menu.ingredient2 ||
        this.state.myStuff2.name === this.state.menu.ingredient3) &&
      (this.state.myStuff3.name === this.state.menu.ingredient1 ||
        this.state.myStuff3.name === this.state.menu.ingredient2 ||
        this.state.myStuff3.name === this.state.menu.ingredient3)
    ) {
      this.setState({
        victory: true,
        endGame: true,
        myStuff1: {
          id: 12,
          img: './images/Patate.png',
          name: 'Patate',
          rating: 88,
          rarity: 'commun',
        },
        myStuff2: {
          id: 12,
          img: './images/Patate.png',
          name: 'Patate',
          rating: 88,
          rarity: 'commun',
        },
        myStuff3: {
          id: 12,
          img: './images/Patate.png',
          name: 'Patate',
          rating: 88,
          rarity: 'commun',
        },
      });
    } else if (this.state.counterlife === -1) {
      this.setState({
        endGame: true,
        counterlife: 0,
      });
    }
  }
  randomRarityCalc() {
    const random = Math.floor(Math.random() * 100) + 1;
    let rarity = 'commun';

    if (random < 20) {
      rarity = 'rare';
    } else if (random < 50) {
      rarity = 'uncommun';
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
      <div className='App'>
        <Apps>
          <Victory end={this.state.endGame}>
            <div>
              <img
                src={this.state.victory ? victoire : defeat}
                alt='victoire'
              />
            </div>
            <BUBU onClick={() => window.location.reload(false)}>Rejouer</BUBU>
          </Victory>
          <Header>
            <Banner />
            <Audio />
          </Header>
          <Block>
            <Instructions className='instructions'>
              <Title>Instructions</Title>
              <Intro>
                Oyé Oyé voyageur ! Es-tu prêt à relever le défi ? Les règles
                sont simples … Ton but est de réaliser la recette du jour en
                récupérant tous ses ingrédients. Pour ce faire, il va falloir
                user de tes talents de troqueur et négocier avec le tavernier
                (peu commode) en lui proposant un échange d’un de tes
                ingrédients contre un des siens . Mais attention chaque
                ingrédient a une valeur et une rareté, le tavernier ne se
                laissera pas avoir...
              </Intro>
            </Instructions>
            <GameBoard>
              <TavernKeeper />
              <StuffTavernKeeper className='tavernier'>
                <Title>Stuff tavern keeper</Title>
                <IngredientTavern>
                  <div>
                    <Button
                      onClick={() =>
                        this.setState({
                          tavernValue: this.state.ingredient1,
                          tavernButton: 1,
                        })
                      }
                      type='button'
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
                      type='button'
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
                      type='button'
                    >
                      <InventoryTavern
                        image={ingredient3.img}
                        name={ingredient3.name}
                      />
                    </Button>
                  </div>
                  <Reroll>
                    <p>Reroll Restant {this.state.counterlife} </p>
                    <button
                      className='ButtonChangeDraft'
                      onClick={() =>
                        this.setState({
                          ingredient1: this.newImage(),
                          ingredient2: this.newImage(),
                          ingredient3: this.newImage(),
                          counterlife: this.state.counterlife - 1,
                        })
                      }
                    ></button>
                  </Reroll>
                </IngredientTavern>
              </StuffTavernKeeper>
              <PlayerStuff className='player'>
                <Title>Your Stuff</Title>
                <IngredientBackpack>
                  <button
                    type='button'
                    onClick={() =>
                      this.setState({
                        mySelfValue: this.state.myStuff1,
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
                    type='button'
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
                    type='button'
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
            <Recipes menu={this.state.menu} />
          </Block>
        </Apps>
      </div>
    );
  }
}
export default App;
