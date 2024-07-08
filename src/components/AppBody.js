import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from "./Login";
import { RouterProvider } from 'react-router-dom';


const AppBody = () => {
    
    
  const appRouter =  createBrowserRouter(
   [
    {
        path: "/",
        element: <Login />
    }
   ]
  ); 
    
    
    
    
    
    return (
     <div>
     <RouterProvider router={appRouter} />
    
     </div>
    );
}

export default AppBody;