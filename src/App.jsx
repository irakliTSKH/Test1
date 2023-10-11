import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import AdminPanel from "./Components/AdminPanel/AdminPanel";

import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import Home from "./Components/Home";
import { useState } from "react";
 

 
 function App() {
   
   const [pages, setPages] = useState([]);
   
   const addNewPage = (newPages) => {
     setPages([...pages , newPages]);
    };

  const dynamicRouteComponents = pages.map((route, index) => {
    if (route.design === "Comp1") {
      return <Route key={index} path={route.name} element={<Comp1 />} />;
    } else if (route.design === "Comp2") {
      return <Route key={index} path={route.name} element={<Comp2 />} />;
    } else {
      return null; 
    }
  });


  return (
    <>
      <NavBar pages= {pages} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="adminpanel" element={ <AdminPanel addNewPage={addNewPage} pages={pages} />} />
        {dynamicRouteComponents}
      </Routes>
    </>
  );
}

export default App;
