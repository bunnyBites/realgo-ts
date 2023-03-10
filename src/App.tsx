import { BrowserRouter } from "react-router-dom"
import { RoutesProvider } from "./core/provider/Routes.provider"
import { Appbar } from "./public/_shared/components/appbar/Appbar.component";

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <RoutesProvider />
  </BrowserRouter>
  )
}

export default App
