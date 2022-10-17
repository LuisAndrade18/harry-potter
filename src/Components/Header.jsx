import React from 'react';
import Main from './Main';
import Icon from '../assets/Icon.png';
import * as S from '../Styles/Styled-Header';

const Header = () => {
  return (
    <>
      <S.Header>
        <S.Img2 src={Icon} alt="" />
        <S.Legacy>Hogwarts Legacy</S.Legacy>
        <nav>
          <S.Nav>
            <S.Hover>Inicio </S.Hover>
            <a
              style={{
                textDecoration: 'none',
              }}
              href="https://www.livrobingo.com.br/harry-potter"
            >
              <S.Hover>Historia</S.Hover>
            </a>
            <a href="https://segredosdomundo.r7.com/casas-de-hogwarts/"><S.Hover>
              
                Casas
              
            </S.Hover></a>
          </S.Nav>
        </nav>
      </S.Header>
      <Main />
    </>
  );
};

export default Header;
