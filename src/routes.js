import CreateQuote from "./components/CreateQuote";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Details from "./components/Details";
export const routes = [
    {path:"/" , element:<Home/> },
    {path:"/login" , element:<Login/>},
    {path:"/signup" , element:<Signup/>},
    {path:"/profile" , element:<Profile/>},
    {path:"/create" , element:<CreateQuote/>},
    {path:"/details", element:<Details/>}
]