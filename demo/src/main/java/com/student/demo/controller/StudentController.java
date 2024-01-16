package com.student.demo.controller;

import com.student.demo.exception.ResourceNotFoundException;
import com.student.demo.model.student;
import com.student.demo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/students")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping
    public List<student> getStudent(){

        return studentRepository.findAll();
    }

    @PostMapping
    public student createStudent(@RequestBody student Student){

        return studentRepository.save(Student);
    }

    @GetMapping("{id}")
    public ResponseEntity<student> getStudentById(@PathVariable int id){

        student Student = studentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("not found"));

        return ResponseEntity.ok(Student);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus>  deleteStudent(@PathVariable int id){

        student Student = studentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("not found"));

        studentRepository.delete(Student);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("{id}")
    public ResponseEntity<student> updateStudent(@PathVariable int id,@RequestBody student studentDetails){

        student updateStudent = studentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student not found"));

        updateStudent.setName(studentDetails.getName());
        updateStudent.setEmail(studentDetails.getEmail());
        updateStudent.setNumber(studentDetails.getNumber());
        updateStudent.setAddress(studentDetails.getAddress());

        studentRepository.save(updateStudent);

        return ResponseEntity.ok(updateStudent);
    }
}
