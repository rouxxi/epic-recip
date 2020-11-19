import styled from "styled-components";
import Backgroundimg from "./images/background.svg";
import bannerImg from './images/Banner.svg';
import tavernierImg from './images/tavernier.svg';


const Apps = styled.div`
  margin: 0;
  padding: 0;
  background-image: url(${Backgroundimg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

const Block = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Banner = styled.div`
    background-image: url(${bannerImg});
    background-size: contain;
    background-repeat: no-repeat;
    width: 465px;
    height: 152px;
    margin: auto;
`;

const Tavern = styled.div`
    flex: 0 0 30%;
    max-width: 30%;
    
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
    height:150px;
    background-color: rgba(196, 196, 196, 0.5);
    border-radius: 5px;
`;

const Instructions = styled.div`
    flex: 0 0 20%;
    max-width: 20%;
    margin: 10px 0 0 100px;
    height: 500px;
    background-color: rgba(196, 196, 196, 0.5);
    border-radius: 5px;
`;

const Recipe  = styled.div`
    margin: 10px 100px 0 0;
    flex: 0 0 20%;
    max-width: 20%;
    height: 500px;
    background-color: rgba(196, 196, 196, 0.5);
    border-radius: 5px;
`;

const PlayerStuff = styled.div`
    height:150px;
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

function App() {
  return (
    <div className="App">
      <Apps>
      <Banner/>
            <Block>
                <Instructions>
                    <Title>Instructions</Title>
                </Instructions> 
                <Tavern>
                    <TavernKeeper/>
                    <StuffTavernKeeper>
                    <Title>Stuff tavern keeper</Title>
                    </StuffTavernKeeper>
                </Tavern>
                <Recipe> 
                    <Title>Recipe of the Day</Title>        
                </Recipe>
            </Block>
            <PlayerStuff>
                <Title>Your Stuff</Title> 
            </PlayerStuff>
      </Apps>
      
    </div>
  );
}

export default App;
