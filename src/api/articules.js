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

            if(response.status !== 200) throw result

            return result

        } catch (error) {
            throw error
        }
    }
}