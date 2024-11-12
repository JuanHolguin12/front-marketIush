
import { BrowserRouter } from "react-router-dom"
import { AdminRouter } from "./router/AuthRouter"
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AdminRouter />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
