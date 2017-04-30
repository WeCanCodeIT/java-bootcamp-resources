package org.wecancodeit.examples.spring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class HelloWorld implements CommandLineRunner {

	@Override
	public void run(String... args) throws Exception {
		System.out.println("HELLO WORLD!");
	}

}
