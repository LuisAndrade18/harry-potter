import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import { GlobalStyles } from './Styles/Globalstyled';

const App = () => {
  return (
    <div>
      <GlobalStyles/>
      <Header />
      <Main />
    </div>
  );
};
export default App;
