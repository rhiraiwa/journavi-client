import { Route, Routes } from "react-router-dom";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import PackingList from "./components/pages/PackingList";
import Schedule from "./components/pages/Schedule";
import Plan from "./components/pages/Plan";
import MemberSelect from "./components/pages/MemberSelect";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/PackingList' element={<PackingList/>}/>
        <Route path='/Schedule' element={<Schedule/>}/>
        <Route path='/Plan' element={<Plan/>}/>
        <Route path='/MemberSelect' element={<MemberSelect/>}/>
      </Routes>
    </div>
  );
}

export default App;
