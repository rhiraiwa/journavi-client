import { Route, Routes } from "react-router-dom";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
