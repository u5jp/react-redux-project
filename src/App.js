import React from 'react';

function App() {
  return (
    <div>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked")}}/>
    </div>
  )
}

// function App() {
//   return React.createElement(
//     "div",
//     null,
//     "hello worlddd"
//   );
// }


export default App;
