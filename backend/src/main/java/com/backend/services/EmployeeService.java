package com.backend.services;

import com.backend.models.Employee;
import com.backend.models.User;
import com.backend.repositories.EmployeeRepository;
import com.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    private final UserRepository userRepository;
    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository, UserRepository userRepository) {
        this.employeeRepository = employeeRepository;
        this.userRepository = userRepository;
    }

    public Employee addEmployee(Employee employee, String username) {
        employee.setUser(getUserByUsername(username));
        return employeeRepository.save(employee);
    }

    public List<Employee> findAllEmployees() {
        return employeeRepository.findAll();
    }

    public List<Employee> findEmployeesByUser(String username) {
        return employeeRepository.findAllByUser(getUserByUsername(username));
    }

    public Employee findEmployeeById(Long id) {
        return employeeRepository.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("Employee not found.")
        );
    }

    public Employee updateEmployee(Employee employee, String username){
        employee.setUser(getUserByUsername(username));
        return employeeRepository.save(employee);
    }

    public void deleteEmployee(Long id){
        employeeRepository.deleteById(id);
    }

    public User getUserByUsername(String username){
        return userRepository.findByUsername(username).orElseThrow(
                () -> new UsernameNotFoundException("User not found.")
        );
    }
}