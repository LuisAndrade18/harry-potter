import axios from 'axios';
import React, { useState, useEffect } from 'react';
import * as S from '../Styles/StyledMain';

const Main = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get(' https://hp-api.herokuapp.com/api/characters')
      .then((res) => {
        setCard(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log('foi mal meu chefe', err);
      });
  }, [card]);

  return (
    <>
      {card.splice(0, 10).map((item) => (
        <S.Caixa>
          <figure>
            <S.Img src={item.image} alt="" />
          </figure>
          <S.Listas>
            <S.Nomes>{item.name}</S.Nomes>
            <li>Casa: {item.house}</li>
            <li>Genero: {item.gender}</li>
            <li>Ano de nascimento: {item.yearOfBirth}</li>
          </S.Listas>
        </S.Caixa>
      ))}
    </>
  );
};

export default Main;
