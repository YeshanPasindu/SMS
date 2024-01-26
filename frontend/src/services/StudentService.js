import axios from "axios";

const STUDENT_BASE_REST_API_URL = "http://localhost:8080/api/v1/students";

class StudentService {
  getAll(type) {
    return axios.get(STUDENT_BASE_REST_API_URL+"/"+ type);
  }

  // getAll() {
  //   return axios.get(STUDENT_BASE_REST_API_URL+"/gStudent");
  // }

  create(details,type) {
    return axios.post(STUDENT_BASE_REST_API_URL+ "/"+type , details);
  }

  deleteStudent(studentId) {
    return axios.delete(STUDENT_BASE_REST_API_URL + "/" + studentId);
  }

  getStudentById(studentId) {
    return axios.get(STUDENT_BASE_REST_API_URL + "/" + studentId);
  }

  updateStudent(studentId, student) {
    return axios.put(STUDENT_BASE_REST_API_URL + "/" + studentId, student);
  }
}

const studentService = new StudentService();
export default studentService;
