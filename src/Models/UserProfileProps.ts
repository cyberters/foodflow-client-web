import { ActiveMetricProps } from "./ActiveMetricProps"
import { DietProps } from "./DietProps"

export interface UserProfileProps 
{
    userFirstName: string
    userAge: number
    userWeight: number
    userHeight: number
    userAlergic: string
    caloricDemandValue: number
    activeMetric: ActiveMetricProps
    diet: DietProps
}