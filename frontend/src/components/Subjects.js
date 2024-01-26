import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import StudentService from "../services/StudentService";


Modal.setAppElement("#root");

export default function Subjects() {
  const [students, setStudents] = useState([]);
//   const [selectedStudentId, setSelectedStudentId] = useState(null);
//   const [selectedStudentName, setSelectedStudentName] = useState(null);
//   const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const type = "gSubject";
    const fetchStudents = async () => {
      try {
        const response = await StudentService.getAll(type);
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  });

//   const openModal = (studentId, studentName) => {
//     setSelectedStudentId(studentId);
//     setSelectedStudentName(studentName);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedStudentId(null);
//     setSelectedStudentName(null);
//     setModalIsOpen(false);
//   };

 

//   const deleteStudent = () => {
//     if (selectedStudentId) {
//       StudentService.deleteStudent(selectedStudentId)
//         .then(() => {
//           navigate("/students");
//           closeModal(); 
//         })
//         .catch((error) => {
//           console.log(error);
//           closeModal(); 
//         });
//     }
//   };

  return (
    <div className="ml-[3px] mt-[20px] gap-2">

<div className="flex ">
      <div className="w-[120] mr-[20px]">
        <button className="w-[165px] h-[32px] bg-green-800 rounded-md text-white text-[16px] font-sans font-[600] mb-[20px] mt-[40px] flex">
          <NavLink to="/add-student">
            <p className="pt-[5px] ml-[20px] text-center">Add New Student</p>
          </NavLink>
        </button>
      </div>
      <div className="w-[120]">
        <button className="w-[165px] h-[32px] bg-blue-800 rounded-md text-white text-[16px] font-sans font-[600] mb-[20px] mt-[40px] flex">
          <NavLink to="/add-subject">
            <p className="pt-[5px] ml-[20px] text-center">Add New Subject</p>
          </NavLink>
        </button>
      </div>
      </div>
      <div className="flex flex-row gap-[20px] font-[700] text-[25px] text-black pt-[5px] w-[1185px]">
        <div className="w-[60px] pb-2 font-sans">ID</div>
        <div className="w-[180px] pb-2 font-sans">Subject</div>
        <div className="w-[212px] font-sans">Teacher</div>
        <div className="w-[140px] font-sans">Number</div>
        <div className="w-[120px] font-sans">Fees</div>
      </div>

      <div className="font-[600]">
        {students.map((student) => (
          <div
            key={student.id}
            className="flex flex-row gap-[20px]  text-[20px] text-slate-600 rounded-md"
          >
            <div className="w-[60px] mb-[5px]">{student.id}</div>
            <div className="w-[180px] ">{student.subject}</div>
            <div className="w-[212px] ">{student.teacher}</div>
            <div className="w-[140px]">{student.teacherNumber}</div>
            <div className="w-[280px] ">{student.fees}</div>

            {/* <div className="w-[120] ml-[40px]">
              <button className="w-[90px] h-[32px] bg-blue-800 rounded-md text-white text-sm  font-sans font-[600] mb-[1px] flex">
                <NavLink to={`/SingleStudent/${student.id}`}>
                  <p className="pt-[5px] ml-[20px] text-center">VIEW MORE</p>
                </NavLink>
              </button>
            </div> */}
           

            {/* <div className="w-[120] ml-[40px]">
              <button className="w-[90px] h-[32px] bg-blue-800 rounded-md text-white text-sm  font-sans font-[600] mb-[1px] flex">
                <NavLink to={`/edit-student/${student.id}`}>
                  <p className="pt-[5px] ml-[20px] text-center">UPDATE</p>
                </NavLink>
              </button>
            </div> */}

            {/* <button
              className="w-[90px] h-[32px] bg-red-800 rounded-md text-white text-sm font-sans font-[600] mb-[1px] flex"
              onClick={() => openModal(student.id, student.name)}
            >
              <p className="pt-[5px] ml-[20px] text-center">DELETE</p>
            </button> */}
          </div>
        ))}
      </div>

      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmation Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
          content: {
            width: "300px",
            height: "150px",
            margin: "auto",
            borderRadius: "15px",
          },
        }}
      >
        <div className="">
          <h2>
            Are you sure you want to delete
            <p className="text-[20px] font-[600]">{selectedStudentName} </p>
          </h2>
          <div className="flex justify-around mt-4">
            <button
              className="w-[60px] h-[32px] bg-green-600 rounded-md text-white text-sm font-sans font-[600] flex"
              onClick={deleteStudent}
            >
              <p className="pt-[5px] ml-[18px] text-center">Yes</p>
            </button>
            <button
              className="w-[60px] h-[32px] bg-red-800 rounded-md text-white text-sm font-sans font-[600] flex"
              onClick={closeModal}
            >
              <p className="pt-[5px] ml-[20px] text-center">No</p>
            </button>
          </div>
        </div>
      </Modal> */}

 
    </div>
  );
}
