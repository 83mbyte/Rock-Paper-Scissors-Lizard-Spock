import React from 'react';

import './App.css';
import FooterContainer from './components/Footer/FooterContainer';
import MainScreen from './screens/MainScreen/MainScreen';
import ModalScreen from './screens/ModalScreen/ModalScreen';

function App() {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <div className="AppContainer">

        <MainScreen />
        <FooterContainer showModal={setShow} />
        <ModalScreen show={show} setShow={setShow} />

        <footer>
          <div class="attribution">
            Challenge by
            <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer noopener"
            >Frontend Mentor</a
            >. Coded by
            <a href="https://github.com/83mbyte" target="_blank" rel="noreferrer noopener">83mbyte</a>.
          </div>
        </footer>
      </div>

    </>
  );
}

export default App;
