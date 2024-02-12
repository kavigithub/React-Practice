import { Suspense, lazy, useState } from "react"
import Loader from "./Loader";
//import Clock from "./Clock"

const Clock = lazy(() => import('./Clock'))

const Headers = () => {
  const [showDate, setShowDate] = useState(false);
  /* 
  Speed Up Your React Apps With Code Splitting
  https://www.youtube.com/watch?v=JU6sl_yyZqs */
  return (
    <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">LOGO</svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 text-white">About</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
        </form>

        <div className="text-end">
          <button type="button" onClick={() => setShowDate((prevVal) => !prevVal)} className="btn btn-outline-light me-2">DATE & TIME</button>
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
      <Suspense fallback={<Loader />}>{showDate && <Clock /> }</Suspense>
    
    </div>
  </header>
  )
}

export default Headers