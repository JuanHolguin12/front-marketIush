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
        CREATE_USERS: "users/register",
        COMMENTS: "comments",
        USER: "user",
        REFRESH_ACCES_TOKEN: "auth/refresh_access_token",
        POSTS: "posts/recent",
        POSTS_BY_USER: "posts/user",
        CREATE_POST: "posts/create/1",
        PROPERTY: "property",
        GET_PROPERTY: "properties",
    },
    JWT: {
        ACCESS: "access",
        REFRESH: "refresh",
        EMAIL: "email"
    }
}