import { AddStudent } from "./components/AddStudent";
import AddSubject from "./components/AddSubject";
import SingleStudent from "./components/SingleStudent";
import Student from "./components/Student";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Subjects from "./components/Subjects";
import { NavLink } from "react-router-dom";



function App() {
  
  return (
    <div className=" text-[40px]">
      <Router>
        <div className="bg-black w-screan">
          <p className="text-red-400 text-[40px] ml-[180px] ">
            Studen Management System
          </p>
        </div>
        <div className="flex  bg-black mt-[1px]">
          
          <div className="w-[120] ml-[165px] m-[5px] ">
            <button className="d text-white text-[19px]  font-sans font-[600] mb-[1px] flex">
              <NavLink to="/">
                <p className=" ml-[20px] text-center">STUDENTS</p>
              </NavLink>
            </button>
          </div>
          <div className="w-[120] ml-[40px] m-[5px]">
            <button className=" text-white text-[19px]  font-sans font-[600] mb-[1px] flex">
              <NavLink to="subjects">
                <p className=" ml-[10px] text-center">SUBJECTS</p>
              </NavLink>
            </button>
          </div>
        </div>
        <div className="ml-[180px]">
          <Routes>
            <Route exact path="/students" Component={Student}></Route>
            <Route path="/" Component={Student}></Route>
            <Route path="/add-student" Component={AddStudent}></Route>
            <Route path="/edit-student/:id" Component={AddStudent}></Route>
            <Route path="/SingleStudent/:id" Component={SingleStudent}></Route>
            <Route path="/add-subject" Component={AddSubject}></Route>
            <Route path="/subjects" Component={Subjects}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
