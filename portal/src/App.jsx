import Navbar from "./Component/Navbar"
import * as ReactDOM from "react-dom/client";
/* import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; */
import { Route,Routes } from "react-router-dom";
import Login from "./Component/auth/Login";
import Home from "./Component/Home";
import SignUp from "./Component/auth/SignUp";

/* const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/",
    element: <Home/>,
  },
  
]); */
function App() {


  return (
    <>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign" element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App
