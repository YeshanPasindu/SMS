package com.student.demo;

import com.student.demo.model.student;
import com.student.demo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Autowired
	private StudentRepository studentRepository;

	@Override
	public void run(String... args) throws Exception {
//		student Student = new student();
//		Student.setName("yeshan");
//		Student.setEmail("yesh@gmail.com");
//		Student.setNumber("15544");
//		Student.setAddress("dffgrtht");
//		studentRepository.save(Student);
//
//		student Student1 = new student();
//		Student1.setName("pasinf");
//		Student1.setEmail("pas@gmail.com");
//		Student1.setNumber("15000");
//		Student1.setAddress("no 65 tyud");
//		studentRepository.save(Student1);

	}
}
