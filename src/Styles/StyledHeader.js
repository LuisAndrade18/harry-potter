import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Nav = styled.ul`
  width: 50vw;
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  font-size: 26px;
  list-style: none;
  margin-top: 2vw;
  left: 39vw;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImgTwo = styled.img`
  width: 8%;
  margin-left: 5vh;
  @media (max-width: 768px) {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 13vh;
  }
`;
export const Hover = styled.li`
  text-decoration: none;
  width: 22vw;
  a:hover {
    transform: scale(1);
    transition: ease-in-out 0.5s;
    width: 27vw;
    color: green;
  }
`;

export const Legacy = styled.h1`
  margin-bottom: 2vw;
  align-items: center;
  font-size: 8vh;
  @media (max-width: 768px) {
    display: none;
  }
`;
