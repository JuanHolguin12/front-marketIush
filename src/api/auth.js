import { ENV } from "../utils/constants"

export class Auth {
    baseApi = ENV.BASE_API

    async login(data) {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.LOGIN}`

            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
            const response = await fetch(url, params)
            const result = await response.json()

            if (response.status !== 201) throw result

            return result
        } catch (error) {
            throw error
        }
    }

    async refreshAccessToken(refreshToken) {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.REFRESH_ACCES_TOKEN}`
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token: refreshToken
                })
            }
            const response = await fetch(url, params)
            const result = response.json()

            if (response.status !== 200) throw result

            return result

        } catch (error) {
            throw error
        }
    }

    setAccessToken(token, email) {
        localStorage.setItem(ENV.JWT.ACCESS, token)
        localStorage.setItem("email", email)
    }

    getAccessToken() {
        return { acces: localStorage.getItem(ENV.JWT.ACCESS), email: localStorage.getItem(ENV.JWT.EMAIL) }
    }

    setRefreshToken(token) {
        localStorage.setItem(ENV.JWT.REFRESH, token)
    }

    getRefreshToken() {
        return localStorage.getItem(ENV.JWT.REFRESH)
    }

    removeTokens() {
        localStorage.removeItem(ENV.JWT.ACCESS)
        localStorage.removeItem(ENV.JWT.EMAIL)
    }
}