import styles from "./planContainer.module.css";
import {Plan} from "./DailyPlanerContainer.tsx";

interface Props {
  plan: Plan;
}

export default function PlanContainer({plan}: Props) {
  const {date, name, tags, isChecked, isDone} = plan;
  return (
    <div className={`${styles.planContainer} + ${isDone ? styles.donePlanContainer : styles.onGoingPlanContainer}`}>
      
      {/*End of Container*/}
      <div className={styles.planContents}>
        
        <div className={styles.contentsLeading}>
          <input type='checkbox' checked={isChecked}/>
        </div>
        {/*End of Contents Leading*/}
        
        <div className={styles.contentsTrailing}>
          <div className={styles.topArea}>
            <span className={styles.title}>{name}</span>
            <span className={styles.trailingButton}/>
            <span className={styles.trailingButton}/>
          </div>
          {/*End of Top Area*/}
          
          <div className={styles.bottomArea}>
            {tags.map(tag => (
              <span className={styles.roundedTag}>
                <div>{tag.name}</div>
              </span>
            ))}
          </div>
          {/*End of Bottom Area*/}
          
          {date}
        </div>
        {/*End of Contents Trailing*/}
      </div>
    </div>
  )
}
