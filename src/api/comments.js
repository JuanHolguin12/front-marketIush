import { ENV } from "../utils/constants"

export class Comments {
    baseApi = ENV.BASE_API

    async getComments(accessToken, id) {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.COMMENTS}/${id}`
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

    async acceptComment(){}
}