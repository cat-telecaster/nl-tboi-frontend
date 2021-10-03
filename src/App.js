import {Header} from "./components/Header"
import {CharacterSelectbox} from "./components/CharacterSelectbox"
import {ObjectiveSelectbox} from "./components/ObjectiveSelectbox"
import {TimedSelectbox} from "./components/TimedSelectbox"
import {Footer} from "./components/Footer"

import styled from 'styled-components'

/*
proposed structure/flow:
charselectbox -> character data
objselectbox -> obj data
timedselectbox -> timed obj data

POST outputted data to API when button is pressed
*/

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
      <Footer/>
    </AppContainer>
  );
}

export default App;
