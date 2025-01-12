import {FC, ReactElement, useCallback, useState} from "react";
import {Plan} from "../DailyPlanerContainer/DailyPlanerContainer.tsx";
import {Planer_Context, PlanContext} from "./PlanContext.ts";
import {json} from '../data';

interface Props {
  children: ReactElement;
}

const PlanContextProvider: FC<Props> = ({ children }): ReactElement => {
  const [plans, setPlans] = useState<Plan[]>(json);
  
  const addPlan = useCallback((plan: Plan) => {
    setPlans((prev: Plan[]) => {
      return [...prev, plan];
    })
  }, [setPlans]);
  
  const deletePlan = useCallback((plan: Plan) => {
    if (plans.indexOf(plan) === -1) {
      return;
    }
    
    setPlans((prev: Plan[]) => {
      return prev.filter(p => p !== plan);
    });
  }, [plans, setPlans]);
  
  const context: Planer_Context = {
    plans, addPlan, deletePlan,
  };
  
  return <PlanContext.Provider value={context}>{children}</PlanContext.Provider>
};

export default PlanContextProvider;
