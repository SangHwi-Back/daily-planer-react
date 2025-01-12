import {useContext} from 'react';
import mainStyles from './main.module.css';
import DatePicker from './DatePicker';
import DailyPlanerContainer from "./DailyPlanerContainer/DailyPlanerContainer.tsx";
import Modal from './Modal';
import {ModalContext} from "./context/ModalContext.ts";

function Spacer() {
  return <div style={{height: '10px'}}/>;
}

function App() {
  const {showModal, setShowModal} = useContext(ModalContext);

  return (
    <div className={mainStyles.roundedRectangle}>
      <header className={mainStyles.headerPosition}>Daily Planer</header>
      <Spacer />
      <DatePicker/>
      <Spacer />
      <DailyPlanerContainer/>
      <Spacer />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>Modal Title</h2>
        <p>This is a modal content!</p>
      </Modal>
    </div>
  );
}

export default App;
