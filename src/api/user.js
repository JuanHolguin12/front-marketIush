import { ENV } from "../utils/constants"

export class User {
    baseApi = ENV.BASE_API

    async getUsers(accessToken, active = undefined) {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.USERS}?active=${active}`
            const params = {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            }

            const response = await fetch(url, params)
            const result = await response.json()

            if (response.status !== 200) throw result
            return result
        } catch (error) {
            throw error
        }
    }

    async getMe(email) {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.USER_ME}/${email}`

            const response = await fetch(url)
            const result = await response.json()

            if (response.status !== 200) throw result

            return result
        } catch (error) {
            throw error
        }
    }

    async createUser(accessToken, data) {
        try {

            const url = `${this.baseApi}/${ENV.API_ROUTES.CREATE_USER}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(data),
            };
            console.log(JSON.stringify(data));
            const response = await fetch(url, params);
            const result = await response.json();

            if (response.status !== 201) throw result;

            return result;
        } catch (error) {
            throw error;
        }
    }

    async updateUser(accessToken, id, data) {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.USER}/${id}`
            const params = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(data)
            }

            const response = await fetch(url, params)
            const result = await response.json()

            if (response.status !== 200) throw result

            return result

        } catch (error) {
            throw (error);
        }
    }

    async deleteUser(accessToken, id) {
        const url = `${this.baseApi}/${ENV.API_ROUTES.USER}/${id}`
        const params = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        }
        const response = await fetch(url, params)
        const result = await response.json()

        if (response.status !== 200) throw result

        return result
    }
} 