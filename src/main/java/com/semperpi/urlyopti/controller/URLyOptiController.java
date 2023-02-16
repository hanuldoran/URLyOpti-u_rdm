package com.semperpi.urlyopti.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class URLyOptiController
{
    @GetMapping("/test/hello")
    public String hello()
    {
        return "<h1>hello SpringBoot</h1>";
    }
}
