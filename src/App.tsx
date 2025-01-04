import roundedStyles from './roundedRectangle.module.css';
import mainStyles from './main.module.css';
import DatePicker from './DatePicker';

function App() {
  return (
    <>
      <div className={roundedStyles.roundedRectangle}>
        <header className={roundedStyles.roundedRectangle + mainStyles.headerPosition}>Daily Planer</header>
        <DatePicker />
      </div>
    </>
  );
}

export default App
