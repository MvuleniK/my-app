


import "./App.css";
import Welcome from "./components/Welcomepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          {/* <Route path="/homepage" element={<Homepage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;





// // import Registration  from './components/registration';
// // import Form from './components/form';
// import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
// import './App.css';
// import Login from "./components/login";
// import Register from "./components/register";
// import Todo from "./todo";
// import Landing from "./components/landing";
// import Welcome from "./components/Welcomepage";
// // import '../node_modules/bootstrap/dist/css/bootstrap.css';

// function App() {
//   return (


//     <div className="App">

//       {/* Pages go here */}

//       <Router>
//               <Routes>
//                     <Route path="/login" element = {<Login/>}/>
//                     <Route path="/register" element = {<Register/>}></Route>
//                     <Route path="/todo" element = {<Todo/>}></Route>
//               </Routes>
//       </Router>

//       {/* testing the array */}
//       {/* <Register/> */}

//       {/* Working Form  */}
//       {/* <Form/> */}

//       {/* Login */}
//       {/* <Login/> */}

//       {/* registation page/index page
//         <Registration/> */}


//     </div>
//   );
// }

// export default App;
