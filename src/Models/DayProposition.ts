import { DishProps } from "./DishProps"

export interface DayProposition {
    dayPropositionId: number
    dayPropositionPartName: string
    dayTimeName: string
    dayPropositionCaloriesLimitValue: number
    usedBudget: number
    dishes: DishProps[]
    selectedDishes: DishProps[]
} 