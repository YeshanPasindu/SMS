import React, { useState, useEffect } from "react";
import StudentService from "../services/StudentService";
import { useNavigate, useParams } from "react-router-dom";

export const AddStudent = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const saveOrUpdateStudent = (e) => {
    e.preventDefault();

    const student = { name, email, address, number };

    if (id) {
      StudentService.updateStudent(id, student)
        .then((response) => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      StudentService.createStudent(student)
        .then((response) => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    StudentService.getStudentById(id)
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
        setNumber(response.data.number);
        setAddress(response.data.address);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2>Update Student</h2>;
    } else {
      return <h2>Add New Student</h2>;
    }
  };

  return (
    <div>
      {title()}
      <div className="form text-[25px] font-[400]  w-[600px] ml-[50px] mt-[20px]">
        <form>
          <div className="form-input mb-[10px]">
            <label className="">Student name :</label>
            <input
              type="text"
              className="form-control border rounded-md "
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="form-input mb-[10px]">
            <label>E-Mail :</label>
            <input
              type="text"
              className="form-control border rounded-md ml-[90px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="form-input mb-[10px]">
            <label>Number :</label>
            <input
              type="text"
              className="form-control border rounded-md ml-[70px]"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            ></input>
          </div>
          <div className="form-input mb-[10px]">
            <label>Address :</label>
            <input
              type="text"
              className="form-control border rounded-md ml-[72px]"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
          <button
            className="w-[75px] h-[32px] bg-blue-700 rounded-md text-white text-sm ml-[260px] font-sans font-[600] mt-[30px] flex"
            onClick={(e) => saveOrUpdateStudent(e)}
          >
            <p className="pt-[5px] ml-[20px] text-center">SAVE</p>
          </button>
        </form>
      </div>
    </div>
  );
};
