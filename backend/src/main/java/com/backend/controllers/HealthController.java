package com.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/health")
public class HealthController {
    @GetMapping
    public String sayWelcome() {
        return "<h1 style=\"background-color:#A8E7CA; padding: 50px; text-align: center;\">" +
                    "Welcome in my employee management app" +
                "</h1>";
    }
}