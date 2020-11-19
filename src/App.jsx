import styled from "styled-components";
import Backgroundimg from "./background.svg";

const Apps = styled.div`
  margin: 0;
  padding: 0;
  background-image: url(${Backgroundimg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  padding-bottom: 20em;
`;

function App() {
  return (
    <div className="App">
      <Apps></Apps>
    </div>
  );
}

export default App;
