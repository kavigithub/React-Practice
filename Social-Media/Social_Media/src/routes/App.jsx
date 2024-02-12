import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Headers from "../components/Headers"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import { useState } from "react"
import PostListProvider from "../store/post-list-store"
import { Outlet } from "react-router-dom"


function App() {
  const [selected, setSelected] = useState('Home');

  return (
    <PostListProvider>
        <div className="container-fluid">
        <Headers></Headers>
        <div className="row">
        <div className="col-3">
           <Sidebar selected={selected} setSelected={setSelected}></Sidebar> 
          </div>
          <div className="col-9 mt-3">
            {/* {selected === "Home" ? <PostList /> : <CreatePost />} */}
            <Outlet></Outlet>
          </div>
        </div>
        <Footer></Footer>
      </div>
      </ PostListProvider>
  )
}

export default App
