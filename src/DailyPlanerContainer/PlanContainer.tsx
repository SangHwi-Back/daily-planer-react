import styles from "./planContainer.module.css";
import {Plan} from "./DailyPlanerContainer.tsx";
import {PlanContext} from "../context/PlanContext.ts";
import {useContext} from "react";
import {ModalContext} from "../context/ModalContext.ts";

interface Props {
  plan: Plan;
}

export default function PlanContainer({plan}: Props) {
  const {date, name, tags, isChecked, isDone} = plan;
  const deletePlan = useContext(PlanContext).deletePlan;
  const setShowModal = useContext(ModalContext).setShowModal;
  
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
            
            <button onClick={() => {
              deletePlan(plan);
              setShowModal(true);
            }}>Del</button>
          </div>
          {/*End of Top Area*/}
          
          <div className={styles.tagArea}>
            {tags.map(tag => (
              <span className={styles.roundedTag}>
                <div className={styles.subView}>{tag.name}</div>
              </span>
            ))}
          </div>
          {/*End of Bottom Area*/}
          
          <div className={styles.bottomArea}>
            {date}
          </div>
          
        </div>
        {/*End of Contents Trailing*/}
      </div>
    </div>
  )
}
