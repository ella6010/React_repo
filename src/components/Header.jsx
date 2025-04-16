<<<<<<< HEAD
export default function Header() {
  return (
    <header className="header-container">
=======
import styled from "styled-components";
import { flexMixin, fontMixin } from "../style/style";

//.header-container
const StyledHeader = styled.header`
  ${flexMixin({ justify: "space-between", align: "center" })}
  padding: 20px 20px;
  background-color: black;
  ul {
    ${flexMixin({ justify: "center", align: "center", gap: 20 })}
    li {
      ${fontMixin({ size: 16, weight: 400 })}
      list-style: none;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader className="header-container">
>>>>>>> 7b4c041 (React 11일차 과제)
      <h1>OZ코딩스쿨</h1>
      <ul className="menu-container">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
<<<<<<< HEAD
    </header>
  );
}
=======
    </StyledHeader>
  );
}
>>>>>>> 7b4c041 (React 11일차 과제)
