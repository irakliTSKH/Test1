// import { Route, Routes } from "react-router-dom";
// import NavBar from "./Components/NavBar/NavBar";
// import AdminPanel from "./Components/AdminPanel/AdminPanel";
// import { Container } from './App.styled'

// import Comp1 from "./Components/Comp1";
// import Comp2 from "./Components/Comp2";
// import Home from "./Components/Home/Home";
// import { useState } from "react";

//  function App() {

//    const [pages, setPages] = useState([]);

//    const [text, setText] = useState("");

//    const addNewPage = (newPages) => {
//      setPages([...pages , newPages]);
//     }

//     const deletePage = (index) => {
//       const updatedPages = pages.filter((_, i) => i !== index);
//       setPages(updatedPages);
//     }

//   const dynamicRouteComponents = pages.map((route, index) => {
//     if (route.design === "Comp1") {
//       return <Route key={index} path={route.name} element={<Comp1 text={text}/>} />;
//     } else if (route.design === "Comp2") {
//       return <Route key={index} path={route.name} element={<Comp2 text={text}/>} />;
//     } else {
//       return null;
//     }
//   })

//   return (
//     <>
//       <Container>
//         <NavBar pages= {pages} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="adminpanel" element={ <AdminPanel
//            addNewPage={addNewPage}
//            deletePage={deletePage}
//            pages={pages}
//            setText={setText}
//             />}
//            />
//           {dynamicRouteComponents}
//         </Routes>
//       </Container>
//     </>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import { Container } from "./App.styled";

import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import Home from "./Components/Home/Home";
import { useState } from "react";

function App() {
  const [pages, setPages] = useState([]);

  const [text, setText] = useState("");

  const addNewPage = (newPages) => {
    setPages([...pages, newPages]);
  };

  const deletePage = (index) => {
    const updatedPages = pages.filter((_, i) => i !== index);
    setPages(updatedPages);
  };

  // const dynamicRouteComponents = pages.map((route, index) => {
  //   if (route.design === "Comp1") {
  //     return <Route key={index} path={route.name} element={<Comp1 text={text}/>} />;
  //   } else if (route.design === "Comp2") {
  //     return <Route key={index} path={route.name} element={<Comp2 text={text}/>} />;
  //   } else {
  //     return null;
  //   }
  // })

  const dynamicRouteComponents = pages.map((route, index) => {
    if (route.design === "Comp1") {
      return (
        <Route
          key={index}
          path={route.name}
          element={<Comp1 text={route.text} />}
        />
      );
    } else if (route.design === "Comp2") {
      return (
        <Route
          key={index}
          path={route.name}
          element={<Comp2 text={route.text} />}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <>
      <Container>
        <NavBar pages={pages} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="adminpanel"
            element={
              <AdminPanel
                addNewPage={addNewPage}
                deletePage={deletePage}
                pages={pages}
                setText={setText}
                setPages={setPages}
              />
            }
          />
          {dynamicRouteComponents}
        </Routes>
      </Container>
    </>
  );
}

export default App;
