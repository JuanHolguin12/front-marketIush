import { method } from "lodash"
import { ENV } from "../utils/constants"

export class Articules {
    baseApi = ENV.BASE_API

    async getArticules(accessToken) {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.POSTS}`
            const params = {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }

            const response = await fetch(url, params)
            const result = await response.json()

            if (response.status !== 200) throw result

            return result

        } catch (error) {
            throw error
        }
    }

    async createPost(accessToken, data) {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.CREATE_POST}`
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify(data),
            }

            const response = await fetch(url, params)
            const result = await response.json()

            if (response.status !== 201) throw result

            return result

        } catch (error) {
            throw error
        }
    }
}