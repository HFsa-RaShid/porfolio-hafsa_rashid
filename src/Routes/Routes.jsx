import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Root from "../Components/Root/Root";
import Projects from "../Components/Projects/Projects";
import About from "../Components/About/About";
import Contact from "../Components/contacts/Contact";
import ErrorPage from "../Components/errorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      
      children: [
        {
          path: "/",
          element: <Home></Home>,
          
        },
        {
            path: "/about",
            element: <About></About>,
            
          },
        {
            path: "/projects",
            element: <Projects></Projects>,
            
          },
          {
            path: "/contact",
            element: <Contact></Contact>,
            
          },
        
        
      ],
    },
  ]);