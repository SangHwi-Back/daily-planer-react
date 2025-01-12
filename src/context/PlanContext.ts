import {Plan} from "../DailyPlanerContainer/DailyPlanerContainer.tsx";
import {createContext} from "react";

export interface Planer_Context {
  plans: Plan[];
  addPlan: (plan: Plan) => void;
  deletePlan: (plan: Plan) => void;
}

export const PlanContext = createContext<Planer_Context>({
  plans: [],
  addPlan: () => {},
  deletePlan: () => {}
});
