import React from 'react';

// class App extends Component {
//   render() {
//     return (
//       <>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log('clicked!')}}/>
//       </>
//     )
//   }
// }

const App = () => {
  return (
    <>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
