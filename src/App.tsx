import mainStyles from './main.module.css';
import DatePicker from './DatePicker';
import DailyPlanerContainer from "./DailyPlanerContainer/DailyPlanerContainer.tsx";

function Spacer() {
  return <div style={{height: '10px'}}/>;
}

function App() {
  return (
    <div className={mainStyles.roundedRectangle}>
      <header className={mainStyles.headerPosition}>Daily Planer</header>
      <Spacer />
      <DatePicker/>
      <Spacer />
      <DailyPlanerContainer/>
    </div>
  );
}

export default App
