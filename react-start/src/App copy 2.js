import logo from "./logo.svg";
import styled, { keyframes } from "styled-components";
import "./styles/style1.scss";
function App() {
  const rotate = keyframes`0%{
    transform: rotate(0);
  }50%{
    transform: rotate(180deg);
  }100%{
    transform: rotate(360deg);
  }
  `;
  const RootDiv = styled.div`
    background-color: #282c34;
    text-align: center;
  `;
  const AppHeader = styled.header`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: calc(10px + 2vmin);
  `;
  const MyA = styled.a`
    color: #61dafb;
  `;
  const AppLogo = styled.img`
    height: 40vmin;
    animation: ${rotate} 20s infinite linear;
  `;

  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="app" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
        <div className="hi">hi</div>
      </AppHeader>
    </RootDiv>
  );
}
export default App;
