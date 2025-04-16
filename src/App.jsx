
import styled from "styled-components";
// import "./App.scss";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { flexMixin } from "./style/style";

//section
const ContentsContainer = styled.section`
  ${flexMixin({ justify: "center", align: "center", wrap: "wrap", gap: 20 })}
  padding: 20px 40px;
`;
function App() {
  return (
    <>
      <Header />
      <ContentsContainer>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </ContentsContainer>
    </>
  );  
}

export default App;
