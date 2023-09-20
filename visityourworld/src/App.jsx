import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import PageNav from "./components/PageNav";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

const App = () => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const baseURL = 'http://localhost:9000';

  useEffect(() => {
    async function fetchCitiesData(){
      try {
        setIsLoading(true);
        const resp = await fetch(`${baseURL}/cities`);
        const data = await resp.json();
        setCities(data);
      } catch (error) {
        console.log(error, 'error');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCitiesData();
  }, []);
 /*  console.log(cities);
 <Navigate to="cities" replace/> : Delcarative way
 Imperative way
 const navigate = useNavigate()
onClick={() => navigate('form')} OR onClick={() => navigate(-1)}
 */

  return (
   <>
   <BrowserRouter>
   <PageNav></PageNav>
      <Routes> 
        {/* <Route path="/" element={<Homepage />}/> */}
        <Route index element={<Homepage />} />
        <Route path="/product" element={<Product />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/app" element={<AppLayout />}>
         <Route index element={<Navigate to="cities" replace/>} />
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>}/>
          <Route path="cities/:id" element={<City />} />
          <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>} />
          <Route path="form" element={<Form />} />
        </Route>  
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App