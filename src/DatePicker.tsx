import styles from './datePicker.module.css';

const LeftArrowTwoHead = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 19L8 12L15 5"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LeftArrowOneHead = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 5L16 12L9 19"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RightArrowOneHead = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 19L8 12L15 5M8 12L1 5L8 12L1 19"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RightArrowTwoHead = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 19L16 12L9 5M16 12L23 19L16 12L23 5"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function DatePicker() {
  return (
    <div className={styles.datePicker}>
      {LeftArrowTwoHead}
      {LeftArrowOneHead}
      <input type="date" value={new Date().toISOString().split('T')[0]} pattern="\d{4}.\d{2}.\d{2}" />
      <input type="date" value={new Date().toISOString().split('T')[0]} pattern="\d{4}.\d{2}.\d{2}" />
      {RightArrowOneHead}
      {RightArrowTwoHead}
    </div>
  );
}