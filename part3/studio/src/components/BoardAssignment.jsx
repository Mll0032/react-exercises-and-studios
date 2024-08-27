import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setboardName] = useState("no board yet")
   const boards = [
      {label:"sushi lovers", value: "sushi-lover"}, 
      {label:"asian cuisine", value: "asian-cuisine"}, 
      {label:"mostly rice", value: "mostly-rice"}
   ];



   const handleChange = (event) => {
      setboardName(event.target.value);
   };

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board, index) => {
            return(<option key={index} value={board.value}>{board.label}</option>);
           })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
