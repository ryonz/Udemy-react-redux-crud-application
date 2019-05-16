import React from 'react';

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">インプット</label>
//       <input type="text" onClick={() => {console.log("I am clicked");}} />
//     </React.Fragment>
//   );
// }

const App = () => {
  return <Cat />
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
