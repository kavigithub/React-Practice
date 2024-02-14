import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import FetchingItems from "../Components/FetchingItems"

function App() {
  return (
   <div>
    <Header />
    <main>
        <FetchingItems /> 
        <Outlet />
    </main>
    <Footer />
   </div>
  )
}

export default App
