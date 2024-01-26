package com.student.demo.repository;

import com.student.demo.model.subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<subject,Integer> {
}
