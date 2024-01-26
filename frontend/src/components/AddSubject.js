import React, { useState } from "react";
    import StudentService from "../services/StudentService";
    import { useNavigate} from "react-router-dom";
    

export default function AddSubject() {
    
    
      const navigate = useNavigate();
    
    
      const [subject, setSubject] = useState("");
      const [teacher, setTeacher] = useState("");
      const [teacherNumber, setTeacherNumber] = useState("");
      const [fees, setFees] = useState("");
    
      const saveSubject = () => {
    
        const subjects = { subject, teacher, teacherNumber, fees };

        const type = "cSubject"; 
    
        
          StudentService.create(subjects,type)
            .then((response) => {
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
            });
        
      };
    
    //   useEffect(() => {
    //     StudentService.getStudentById(id)
    //       .then((response) => {
    //         setName(response.data.name);
    //         setEmail(response.data.email);
    //         setNumber(response.data.number);
    //         setAddress(response.data.address);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }, []);
    
    //   const title = () => {
    //     if (id) {
    //       return <h2>Update Student</h2>;
    //     } else {
    //       return <h2>Add New Student</h2>;
    //     }
    //   };

    
      return (
        <div>
          <p>Add Subjects</p>
          <div className="form text-[25px] font-[400]  w-[600px] ml-[50px] mt-[20px]">
            <form>
              <div className="form-input mb-[10px]">
                <label className="">Subject Name :</label>
                <input
                  type="text"
                  className="form-control border rounded-md "
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                ></input>
              </div>
              <div className="form-input mb-[10px]">
                <label>Teacher  :</label>
                <input
                  type="text"
                  className="form-control border rounded-md ml-[90px]"
                  value={teacher}
                  onChange={(e) => setTeacher(e.target.value)}
                ></input>
              </div>
              <div className="form-input mb-[10px]">
                <label>Number :</label>
                <input
                  type="text"
                  className="form-control border rounded-md ml-[70px]"
                  value={teacherNumber}
                  onChange={(e) => setTeacherNumber(e.target.value)}
                ></input>
              </div>
              <div className="form-input mb-[10px]">
                <label>Fees :</label>
                <input
                  type="text"
                  className="form-control border rounded-md ml-[72px]"
                  value={fees}
                  onChange={(e) => setFees(e.target.value)}
                ></input>
              </div>
              <button
                className="w-[75px] h-[32px] bg-blue-700 rounded-md text-white text-sm ml-[260px] font-sans font-[600] mt-[30px] flex"
                onClick={(e) => saveSubject()}
              >
                <p className="pt-[5px] ml-[20px] text-center">SAVE</p>
              </button>
            </form>
          </div>
        </div>
      );
    };
    
