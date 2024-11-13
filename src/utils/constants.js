/* const SERVER_IP = "j6cft8kk-3977.use2.devtunnels.ms" */
const SERVER_IP = "localhost:3000"

export const ENV = {
    BASE_PATH: `http://${SERVER_IP}`,
    BASE_API: `http://${SERVER_IP}`,
    //RUTAS DE LOS ENDPOINTS
    API_ROUTES: {
        LOGIN: "users/login",
        USER_ME: "users/email",
        USERS: "users",
        USER: "user",
        CREATE_USER: "create-user",
        REFRESH_ACCES_TOKEN: "auth/refresh_access_token",
        POSTS: "posts/recent",
        CREATE_PROPERTY: "/property",
        PROPERTY: "property",
        GET_PROPERTY: "properties",
    },
    JWT: {
        ACCESS: "access",
        REFRESH: "refresh",
        EMAIL: "email"
    }
}