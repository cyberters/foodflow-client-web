import { jwtDecode } from "jwt-decode"

type JWTPayload = {
    expired: number
    [key: string]: any
}

export function CheckTokenExpired(token: string) : boolean 
{
    try {
        const decoded = jwtDecode<JWTPayload>(token)

        if (!decoded.exp) {
            console.warn("Token does not contain 'expired' claim");
            return true;
        }

        const currentTime = Math.floor(Date.now() / 1000);
        return decoded.exp < currentTime;
    } catch (error) {
        console.error("Failed to decode token", error);
        return true;
    }
}