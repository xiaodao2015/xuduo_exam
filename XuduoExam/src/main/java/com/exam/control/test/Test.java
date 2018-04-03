package com.exam.control.test;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class Test {
	@RequestMapping("/")
	public String Hell() {
		return "hello xuduo4";
	}
	
	
}
