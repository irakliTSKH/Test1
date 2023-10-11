import { Container } from "./AdminPanel.Styled";
import { useState } from "react";


function AdminPanel({ addNewPage, pages, deletePage}) {
  const [name, setName] = useState("");
  const [design, setDesign] = useState(null);

  const createNewPage = (name, design) => {
    if (name.trim() !== "" ) {
      const page = {
        name,
        design,
      };
  
      addNewPage(page);
      setName("");
      setDesign(null);
    }
  };
  
    
    const pageArr = pages.map((page, index) => (
      <div key={index}>
        <h2>{page.name}</h2>
        <button onClick={() => deletePage(index)}>Delete</button>
      </div>
  ));
  
    const changeDesign = (e) => {
      setDesign(e.target.value);
    };


  return (
    <Container>
      <input
        type="text"
        value={name}
        placeholder="name"
        required
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="radio"
        name="design"
        id="comp1"
        value="Comp1"
        onChange={changeDesign}
      />
      <label htmlFor="comp1">Design 1</label>

      <input
        type="radio"
        name="design"
        id="comp2"
        value="Comp2"
        onChange={changeDesign}
      />
      <label htmlFor="comp2">Design 2</label>

      <button onClick={() => createNewPage(name, design)}>AddPage</button>

      <div>{pageArr}</div>
    </Container>
  );
}
export default AdminPanel;