import { createGlobalStyle } from 'styled-components';
import Background from '../assets/Background.jpg';
import Responsivo from '../assets/Responsivo.jpg';

export const GlobalStyles = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing: border-box;
font-family: 'Harry Potter', sans-serif;
body{
    background-image:url(${Background});
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: 100%;
    @media(max-width: 768px){
        background-image:url(${Responsivo});
        background-size:150%;
        background-attachment:fixed;
    }
}

}
`;
