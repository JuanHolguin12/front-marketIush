
import { BrowserRouter } from "react-router-dom"
import { AdminRouter } from "./router/AuthRouter"

function App() {
  return (
    <BrowserRouter>
      <AdminRouter />
    </BrowserRouter>
  );
}

export default App;
