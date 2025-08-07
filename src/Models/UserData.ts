import { UserProfileProps } from "./UserProfileProps"

export interface UserData
{
    userId: number
    userName: string
    userEmail: string
    createdAt: string
    userProfile?: UserProfileProps
}