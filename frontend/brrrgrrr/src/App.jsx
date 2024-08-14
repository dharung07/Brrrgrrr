import { useContext } from "react"
import AppBar from "./components/AppBar"
import Checkout from "./components/Checkout"
import IngredientsGrid from "./components/IngredientsGrid"
import { GlobalContext } from "./context/context"
import Banner from "./components/Banner"

function App() {
  return (
    <div>

      <AppBar />

      <div className="p-3 sm:p-5 md:p-5">
        <Banner />
      </div>

      <div className="p-3 flex flex-col gap-5 sm:flex-row sm:p-5 md:flex-row md:p-5">
        <IngredientsGrid />
        <Checkout />
      </div>

    </div>
  )
}

export default App