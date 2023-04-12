package com.backend.controllers;

import com.backend.services.EmployeeService;
import com.backend.models.Employee;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }


    @GetMapping("/all")
    public ResponseEntity<List<Employee>> getAllEmployees(Principal principal){
        if(principal==null)new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        String username = principal.getName();
        List<Employee> employees = employeeService.findEmployeesByUser(username);
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee, Principal principal){
        if(principal==null)new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        String username = principal.getName();
        Employee newEmployee = employeeService.addEmployee(employee,username);
        return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee, Principal principal){
        if(principal==null || !Objects.equals(employeeService.findEmployeeById(employee.getId()).getName(), principal.getName()))
            new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        Employee updateEmployee = employeeService.updateEmployee(employee, principal.getName());
        return new ResponseEntity<>(updateEmployee, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id, Principal principal){
        if(principal==null || !Objects.equals(employeeService.findEmployeeById(id).getName(), principal.getName()))
            new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        employeeService.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
