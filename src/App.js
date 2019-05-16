import React from 'react';

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">インプット</label>
      <input type="text" onClick={() => {console.log("I am clicked");}} />
    </React.Fragment>
  );
}

export default App;
