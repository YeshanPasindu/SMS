import { AddStudent } from "./components/AddStudent";
import Student from "./components/Student";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className=" text-[40px]">
      <Router>
        <div className="bg-black w-screan">
          <p className="text-red-400 text-[40px] ml-[180px] ">
            Studen Management System
          </p>
        </div>
        <div className="ml-[180px]">
          <Routes>
            <Route exact path="/students" Component={Student}></Route>
            <Route path="/" Component={Student}></Route>
            <Route path="/add-student" Component={AddStudent}></Route>
            <Route path="/edit-student/:id" Component={AddStudent}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
