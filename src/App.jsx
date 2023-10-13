
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import { Container,Footer, ModeDiv } from "./App.styled";

import Comp1 from "./Components/Comp1/Comp1";
import Comp2 from "./Components/Comp2/Comp2";
import Home from "./Components/Home/Home";
import { useState } from "react";

function App() {
  const [pages, setPages] = useState([]);
  const [text, setText] = useState("");
  const [mode, setMode] = useState(false)

  const addNewPage = (newPages) => {
    if(pages.length < 5) {
      setPages([...pages, newPages]);
    } else return
  };

  const deletePage = (index) => {
    const updatedPages = pages.filter((_, i) => i !== index);
    setPages(updatedPages);
  };

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
      <Container mode={mode}  >
        <NavBar pages={pages} />

        <ModeDiv>
          <input type="checkbox" id="mode" onChange={() => setMode(!mode)}/>
          <label htmlFor='mode'></label>
        </ModeDiv>

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
        <Footer>
          <a href="https://iraklisportfolio.netlify.app/">Contact me</a>
        </Footer>
      </Container>
    </>
  );
}

export default App;
