import React from 'react';
import {Header} from "./components/Header"
import CharacterSelectbox from "./components/CharacterSelectbox"
import ObjectiveSelectbox from "./components/ObjectiveSelectbox"
import TimedSelectbox from "./components/TimedSelectbox"
import Submit from "./components/Submit"
import {Footer} from "./components/Footer"

import styled from 'styled-components'

// custom styling using styled-components!
const AppContainer = styled.div`
  margin: 30vh 30vw;
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <CharacterSelectbox/>
      <ObjectiveSelectbox/>
      <TimedSelectbox/>
      <Submit/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
