import React, { useState, useEffect } from "react";
import StudentService from "../services/StudentService";
import {  useParams } from "react-router-dom";

export default function SingleStudent() {

    const { id } = useParams();

    const [studentData, setStudentData] = useState({
        name: "",
        email: "",
        number: "",
        address: "",
      });
      
      useEffect(() => {
        StudentService.getStudentById(id)
          .then((response) => {
            setStudentData({
              name: response.data.name,
              email: response.data.email,
              number: response.data.number,
              address: response.data.address,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
      
      // Now you can access the data like this:
    //   const name = studentData.name;
    //   const email = studentData.email;
    //   const number = studentData.number;
    //   const address = studentData.address;
      

  return (
    <div>SingleStudent
        <div>
            <p>{studentData.name}</p>
            <p>{studentData.email}</p>
            <p>{studentData.number}</p>
            <p>{studentData.address}</p>
        </div>
    </div>
  )
}
