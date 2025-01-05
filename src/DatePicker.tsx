import styles from './datePicker.module.css';
import leftArrow from './assets/arrow-sm-left-svgrepo-com.svg';
import leftTwoHeadArrow from './assets/two-arrow-left-svgrepo-com.svg';
import rightArrow from './assets/arrow-sm-right-svgrepo-com.svg';
import rightTwoHeadArrow from './assets/two-arrow-right-svgrepo-com.svg';

export default function DatePicker() {
  return (
    <div className={styles.datePickerContainer}>
      <img src={leftTwoHeadArrow} className={styles.iconImage} alt="leftTwoHeadArrow" />
      <img src={leftArrow} className={styles.iconImage} alt="leftArrow" />
      <input type="date" value={new Date().toISOString().split('T')[0]} pattern="\d{4}.\d{2}.\d{2}"/>
      {'...'}
      <input type="date" value={new Date().toISOString().split('T')[0]} pattern="\d{4}.\d{2}.\d{2}"/>
      <img src={rightArrow} className={styles.iconImage} alt="rightArrow" />
      <img src={rightTwoHeadArrow} className={styles.iconImage} alt="rightTwoHeadArrow" />
    </div>
  );
}
