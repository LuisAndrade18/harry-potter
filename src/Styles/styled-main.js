import styled from 'styled-components';

export const Nomes = styled.li`
  font-size: 30px;
  color: white;
  @media (max-width: 768px) {
    font-size: 25px;
    color: black;
  }
`;

export const Imagem = styled.img`
  width: 250px;
  @media (max-width: 768px) {
    width: 150px;
    border-radius: 4px;
    box-shadow: 3px 5px 5px 0px;
  }
`;

export const Caixa = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Listas = styled.ul`
  list-style: none;
`;