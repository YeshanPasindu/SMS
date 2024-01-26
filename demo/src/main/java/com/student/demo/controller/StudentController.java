package com.student.demo.controller;

import com.student.demo.exception.ResourceNotFoundException;
import com.student.demo.model.student;
import com.student.demo.model.subject;
import com.student.demo.repository.StudentRepository;
import com.student.demo.repository.SubjectRepository;
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

    @Autowired
    private SubjectRepository subjectRepository;

    @GetMapping("/gStudent")
    public List<student> getAllStudent(){

        return studentRepository.findAll();
    }

    @GetMapping("/gSubject")
    public List<subject> getSubject(){

        return subjectRepository.findAll();
    }

    @PostMapping("/cStudent")
    public student createStudent(@RequestBody student Student){

        return studentRepository.save(Student);
    }

    @PostMapping("/cSubject")
    public subject createSubject(@RequestBody subject Subject){
        return subjectRepository.save(Subject);
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
