import React from 'react';
import './styles/styles.css';
import Calculator from './layout/Calculator/Calculator'; //first letter casting (import w upper case)

const app = () => (
<div className ="app">
    <Calculator />
</div>
);


export default app;

//https://blog.usejournal.com/everything-react-first-app-188b33a880ca

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
