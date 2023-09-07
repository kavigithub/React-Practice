import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import PageNav from "./components/PageNav";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

const App = () => {
  return (
   <>
   <BrowserRouter>
   <PageNav></PageNav>
      <Routes> 
        <Route path="/" element={<Homepage />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/app" element={<AppLayout />}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App