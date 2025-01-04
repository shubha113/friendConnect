import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Login from "./components/auth/Login"
import "./styles/common.css"

function App() {

  return (
    <BrowserRouter>
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/login" element= {<Login/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
