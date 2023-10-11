// import {
//   Container,
//   CreatePagesDiv,
//   PagesArray,
//   Inputs,
//   ItemDIv,
// } from "./AdminPanel.Styled";
// import { useState } from "react";

// function AdminPanel({ addNewPage, pages, deletePage, setText }) {
//   const [name, setName] = useState("");
//   const [design, setDesign] = useState(null);

//   const createNewPage = (name, design) => {
//     if (name.trim() !== "") {
//       const page = {
//         name,
//         design,
//       };

//       addNewPage(page);
//       setName("");
//     }
//   };

//   const pageArr = pages.map((page, index) => (
//     <ItemDIv key={index}>
//       <h2>{page.name}</h2>
//       <button onClick={() => deletePage(index)}>Delete</button>
//       <button> Add context...</button>
//       <input 
//         onChange={(e) => setText(e.target.value)} 
//         type="text" 
//       />
//     </ItemDIv>
//   ));

//   return (
//     <Container>
//       <CreatePagesDiv>
//         <h2>Create New Page</h2>
//         <input
//           type="text"
//           value={name}
//           placeholder="Page Name"
//           required
//           onChange={(e) => setName(e.target.value)}
//         />

//         <Inputs>
//           <label htmlFor="comp1">Design 1</label>
//           <input
//             type="radio"
//             name="design"
//             id="comp1"
//             value="Comp1"
//             onChange={(e) => setDesign(e.target.value)}
//             required
//           />
//         </Inputs>

//         <Inputs>
//           <label htmlFor="comp2">Design 2</label>
//           <input
//             type="radio"
//             name="design"
//             id="comp2"
//             value="Comp2"
//             onChange={(e) => setDesign(e.target.value)}
//             required
//           />
//         </Inputs>

//         <button onClick={() => createNewPage(name, design)}>Add Page</button>
//       </CreatePagesDiv>

//       <PagesArray>{pageArr}</PagesArray>
//     </Container>
//   );
// }
// export default AdminPanel;


import {
  Container,
  CreatePagesDiv,
  PagesArray,
  Inputs,
  ItemDIv,
} from "./AdminPanel.Styled";
import { useState } from "react";

function AdminPanel({ addNewPage, pages, deletePage, setPages }) {
  const [name, setName] = useState("");
  const [design, setDesign] = useState(null);

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

  const pageArr = pages.map((page, index) => (
    <ItemDIv key={index}>
      <h2>{page.name}</h2>
      <button onClick={() => deletePage(index)}>Delete</button>
      <button> Add context...</button>
      <input 
      onChange={(e) => {
        // Create a copy of the pages array
        const updatedPages = [...pages];
        // Update the text property for the specific page
        updatedPages[index].text = e.target.value;
        // Update the state with the modified pages array
        setPages(updatedPages);
      }}
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
          <label htmlFor="comp1">Design 1</label>
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
          <label htmlFor="comp2">Design 2</label>
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

      <PagesArray>{pageArr}</PagesArray>
    </Container>
  );
}
export default AdminPanel;
