import {
  Container,
  CreatePagesDiv,
  PagesArray,
  Inputs,
  ItemDIv,
} from "./AdminPanel.Styled";
import { useState, useRef } from "react";

function AdminPanel({ addNewPage, pages, deletePage, setPages }) {
  const [name, setName] = useState("");
  const [design, setDesign] = useState(null);
  const [context, setContext] = useState("");

  const ref = useRef(null);

  const createNewPage = (name, design) => {
    if (name.trim() !== "") {
      const page = {
        name,
        design,
      };

      addNewPage(page);
      setName("");
    }
  };

  const addContext = (index) => {
    const updatedPages = [...pages];
    updatedPages[index].text = context;
    setPages(updatedPages);
    ref.current.value = '';
  };

  const pageArr = pages.map((page, index) => (
    <ItemDIv key={index}>
      <span>
        {index + 1}
        <h3>{page.name}</h3>
      </span>
      <button onClick={() => deletePage(index)}>Delete</button>
      <button onClick={() => addContext(index)}> Add context...</button>
      <textarea
      ref={ref}
        type="text"
        rows="3"
        cols="20"
        onChange={(e) => setContext(e.target.value)}
      />
    </ItemDIv>
  ));

  return (
    <Container>
      <CreatePagesDiv>
        <h2>Create New Page</h2>
        <input
          type="text"
          value={name}
          placeholder="Page Name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <Inputs>
          <label htmlFor="comp1">Blue Design</label>
          <input
            type="radio"
            name="design"
            id="comp1"
            value="Comp1"
            onChange={(e) => setDesign(e.target.value)}
            required
          />
        </Inputs>

        <Inputs>
          <label htmlFor="comp2">White Design</label>
          <input
            type="radio"
            name="design"
            id="comp2"
            value="Comp2"
            onChange={(e) => setDesign(e.target.value)}
            required
          />
        </Inputs>

        <button onClick={() => createNewPage(name, design)}>Add Page</button>
      </CreatePagesDiv>

      <PagesArray>
        <h3>Your Pages</h3>
        {pageArr}
      </PagesArray>
    </Container>
  );
}
export default AdminPanel;
