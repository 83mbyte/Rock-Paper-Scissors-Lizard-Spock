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
      </div>

    </>
  );
}

export default App;
