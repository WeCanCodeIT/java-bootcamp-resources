# Using the H2 console with an embedded test instance

To access the temporary embedded H2 database that Spring creates for us using the H2 console (after the application is running), access http://localhost:8080/h2-console from your browser. The connection properties should be as follows (you'll probably only need to change the JDBC URL):

property | value
-------- | -----
Driver Class | org.h2.Driver
JDBC URL | jdbc:h2:mem:testdb
User Name | sa
Password | *leave blank*