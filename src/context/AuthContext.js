import { useState, useEffect, createContext } from "react"

import { Auth, User } from "../api"
//import { hasExpiredToken } from "../utils"
const hasExpiredToken = () => {

}
//import { hasExpiredToken } from "../utils"

const userController = new User()
const authController = new Auth()

export const AuthContext = createContext()

export function AuthProvider(props) {
  const { children } = props

  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const localStorage = authController.getAccessToken()

      if (!localStorage.acces) {
        logout()
        setLoading(false)
      }
      else {
        await login(localStorage.acces, localStorage.email)
      }
      setLoading(false)
    })()
  }, [])


  const login = async (accesToken, email) => {
    try {
      const response = await userController.getMe(email)
      setUser(response)
      setToken(accesToken)
    } catch (error) {
      console.error(error);
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    authController.removeTokens()
  }

  const data = {
    "accessToken": token,
    user,
    login,
    logout
  }

  if (loading) return <div className="h-screen flex justify-center items-center"><h1 className="font-semibold text-5xl">loading...</h1></div>

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}