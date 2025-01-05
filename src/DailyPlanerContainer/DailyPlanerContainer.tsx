import {json} from './data';
import PlanContainer from "./PlanContainer.tsx";
import styles from './dailyPlanerContainer.module.css'
import PlusButton from "./PlusButton.tsx";

export type PlanTag = {
  name: string;
}

export type Plan = {
  date: string;
  name: string;
  isChecked: boolean;
  tags: PlanTag[];
  isDone: boolean;
}

type PlanPerDay = {
  date: string;
  plans: Plan[];
}

export default function DailyPlanerContainer() {
  const plans: Plan[] = json;
  const planPerDay: PlanPerDay[] = [];
  
  plans.forEach((plan) => {
    const index = planPerDay.findIndex((data: PlanPerDay) => data.date === plan.date);
    // Exist
    if (index > -1) {
      planPerDay[index].plans.push(plan);
    } else { // Not Exist
      planPerDay.push({
        date: plan.date,
        plans: [plan],
      })
    }
  });
  
  return (
    <div className={styles.container}>
      {planPerDay.map((plan) => (
          <div className={styles.contents}>
            <PlusButton/>
            {plan.plans.map((data) => (
              <PlanContainer key={data.name} plan={data}/>
            ))}
          </div>
      ))}
      {planPerDay.map((plan) => (
          <div className={styles.contents}>
            <PlusButton/>
            {plan.plans.map((data) => (
              <PlanContainer key={data.name} plan={data}/>
            ))}
          </div>
      ))}
      {planPerDay.map((plan) => (
          <div className={styles.contents}>
            <PlusButton/>
            {plan.plans.map((data) => (
              <PlanContainer key={data.name} plan={data}/>
            ))}
          </div>
      ))}
    </div>
  )
}
