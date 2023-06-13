import { Route, Routes } from "react-router-dom";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import PackingList from "./components/pages/PackingList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/PackingList' element={<PackingList/>}/>
      </Routes>
    </div>
  );
}

export default App;
