package com.backend.repositories;

import com.backend.models.Employee;
import com.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{
    List<Employee> findAllByUser(User user);
}
