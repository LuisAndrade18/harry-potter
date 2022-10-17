import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import Icon from "../assets/Icon.png";
import { GlobalStyles } from "../Styles/Globalstyled";
import * as S from "../Styles/Styled-Header";

const Header = () => {
  return (
    <>
      <S.Header>
        <GlobalStyles />
        <S.img2 src={Icon} alt="" />
        <S.Legacy>Hogwarts Legacy</S.Legacy>
        <nav>
          <S.nav>
            <S.Hover>Inicio </S.Hover>
            <S.Hover>
              <a style={{textDecoration:`none`}} href="https://www.livrobingo.com.br/harry-potter">Historia</a>
            </S.Hover>
            <S.Hover><a href="https://segredosdomundo.r7.com/casas-de-hogwarts/">Casas</a></S.Hover>
          </S.nav>
        </nav>
      </S.Header>
      <Main />
    </>
  );
};

export default Header;
