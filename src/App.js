import React from 'react';
import Main from "./components/Main";

function App() {
  localStorage.setItem('chakra-ui-color-mode', 'dark')
  return (
      <Main />
  );
}

export default App;
