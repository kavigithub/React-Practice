import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import FetchingItems from "../Components/FetchingItems"
import { useSelector } from "react-redux"
import LoadingSpinner from "../Components/LoadingSpinner"

function App() {
  let isFetchDone = useSelector(state => state.fetchStatus);

  return (
   <div>
    <Header />
    <FetchingItems /> 
    <main>
        {isFetchDone.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
    </main>
    <Footer />
   </div>
  )
}

export default App
