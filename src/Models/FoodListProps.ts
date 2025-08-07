import { DayProposition } from "./DayProposition"
import { DayProps } from "./DayProps"
import { FamiliesProps } from "./FamiliesProps"
import { FoodProposition } from "./FoodPropositionProps"

export interface FoodListProps 
{
    foodListId: number
    foodListName: number
    dayNumber: number
    daysCount?: number
    dayPropositions: DayProposition[]
    family: FamiliesProps
    days: DayProps[]
}