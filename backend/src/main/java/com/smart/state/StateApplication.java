package com.smart.state;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
@SpringBootApplication(scanBasePackages = "com.smart")
public class StateApplication {

	public static void main(String[] args) {
		SpringApplication.run(StateApplication.class, args);
	}

}
