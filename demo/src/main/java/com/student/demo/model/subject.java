package com.student.demo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="subject")
public class subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="subject")
    private String subject;

    @Column(name="teacher")
    private String teacher;

    @Column(name="teacher_number")
    private String teacherNumber;

    @Column(name="fees")
    private String fees;
}
