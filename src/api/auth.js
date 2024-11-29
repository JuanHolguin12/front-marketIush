import { method } from "lodash"
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

    async register(data) {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.CREATE_USERS}`

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


    setAccessToken(token, email) {
        localStorage.setItem(ENV.JWT.ACCESS, token)
        localStorage.setItem(ENV.JWT.EMAIL, email)
    }

    getAccessToken() {
        return { acces: localStorage.getItem(ENV.JWT.ACCESS), email: localStorage.getItem(ENV.JWT.EMAIL) }
    }

    removeTokens() {
        localStorage.removeItem(ENV.JWT.ACCESS)
        localStorage.removeItem(ENV.JWT.EMAIL)
    }
}