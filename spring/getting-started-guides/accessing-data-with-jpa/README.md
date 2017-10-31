# Guide: Accessing Data with JPA

First, refer to the general guidelines in [Project Setup for Spring Getting Started Guides](../project-setup).

This document contains modifications to [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/).

## Create an Application Class

In the [Create an Application Class](https://spring.io/guides/gs/accessing-data-jpa/#_create_an_application_class) section, rather than the `Application` class they specify, use the following classes:

```java
package hello;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CustomerApplication {

	public static void main(String[] args) {
		SpringApplication.run(CustomerApplication.class);
	}
}
```

```java
package hello;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class CustomerPopulator implements CommandLineRunner {

	private Logger log = LoggerFactory.getLogger(CustomerPopulator.class);

	@Resource
	private CustomerRepository repository;
	
	@Override
	public void run(String... args) throws Exception {
		// save a couple of customers
		repository.save(new Customer("Jack", "Bauer"));
		repository.save(new Customer("Chloe", "O'Brian"));
		repository.save(new Customer("Kim", "Bauer"));
		repository.save(new Customer("David", "Palmer"));
		repository.save(new Customer("Michelle", "Dessler"));

		// fetch all customers
		log.info("Customers found with findAll():");
		log.info("-------------------------------");
		for (Customer customer : repository.findAll()) {
			log.info(customer.toString());
		}
		log.info("");

		// fetch an individual customer by ID
		Customer customer = repository.findOne(1L);
		log.info("Customer found with findOne(1L):");
		log.info("--------------------------------");
		log.info(customer.toString());
		log.info("");

		// fetch customers by last name
		log.info("Customer found with findByLastName('Bauer'):");
		log.info("--------------------------------------------");
		for (Customer bauer : repository.findByLastName("Bauer")) {
			log.info(bauer.toString());
		}
		log.info("");
	}

}
```

## Turn on debug SQL logging

Hibernate (the underlying JPA implementation) supports the logging of generated SQL statements to the console. To enable it, create an `src/main/resources/application.properties` file with the following contents:

```properties
spring.jpa.show-sql=true
```

Afterwards, start (or restart) your server and examine the generated SQL statements.

## Web-enable your app

After you've verified that everything is working as expected, web-enable your app.

### Add thymeleaf and devtools as dependencies

Adding thymeleaf as a dependency will transitively include MVC dependencies. Adding devtools will enable server restarts on code changes as well as allowing us to view our H2 console, as we'll see later.

Add the following dependencies to `build.gradle`:

```gradle
compile("org.springframework.boot:spring-boot-starter-thymeleaf")
runtime("org.springframework.boot:spring-boot-devtools")
```

### Create a template to display customers

Create a controller (annotated with @Controller), and a thymeleaf template to display a customer list. The `CustomerRepository` class extends `org.springframework.data.repository.CrudRepository<Customer, Long>`, so you can use its `Iterable<Customer> findAll()` method to fetch your customers.

### Examining the in-memory database with H2

Once you have turned the app into an MVC app, you can use devtools to examine the in-memory H2 database that your app is using.

#### Add devtools as a dependency

Add the following line to the `dependencies` section in your `build.gradle`:

After doing this, remember to run `gradle eclipse`, then refresh project.

#### View H2 console in the browser

View the H2 console by going to `http://localhost:8080/h2-console`. For *JDBC URL*, specify `jdbc:h2:mem:testdb`.
