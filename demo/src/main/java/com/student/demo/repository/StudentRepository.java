package com.student.demo.repository;

import com.student.demo.model.student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<student,Integer> {

}
