import { jwtDecode } from "jwt-decode"

export const hasExpiredToken = (token) => {
    const { exp } = jwtDecode(token)
    const current = new Date().getTime();
    if (exp <= current) {
        return true
    }
    return false
}