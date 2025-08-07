import { FamilyMember } from "./FamilyMember"

export interface FamiliesProps {
    familyId: number
    familyName: string
    familyCount: number
    familyCreatedAt: string
    familyAvgCaloricDemand: number
    familyMembers: FamilyMember[] | undefined
}