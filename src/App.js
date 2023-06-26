import { Route, Routes } from "react-router-dom";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Portal from "./components/pages/Portal";
import Plan from "./components/pages/Plan";
import TermSelect from "./components/pages/TermSelect";
import MemberSelect from "./components/pages/MemberSelect";
import Schedule from "./components/pages/Schedule";
import ConfirmPlan from "./components/pages/ConfirmPlan";
import PackingList from "./components/pages/PackingList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Portal' element={<Portal/>}/>
        <Route path='/Plan' element={<Plan/>}/>
        <Route path='/TermSelect' element={<TermSelect/>}/>
        <Route path='/MemberSelect' element={<MemberSelect/>}/>
        <Route path='/Schedule' element={<Schedule/>}/>
        <Route path='/ConfirmPlan' element={<ConfirmPlan/>}/>
        <Route path='/PackingList' element={<PackingList/>}/>
      </Routes>
    </div>
  );
}

export default App;
