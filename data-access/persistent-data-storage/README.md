# Using persistent storage (vs embedded) for H2 data access

So far, we've been using a temporary embedded database

Java does this in a standardized way, using something called a JDBC URL. It consists of the server name and some sort of path, sometimes with a protocol. We can still run H2 as embedded (as opposed to installing a standalone server) but use a persistent datastore. To do this, add a JDBC URL to `application.properties` (`src/main/resources/application.properties`) that looks like this:

```
spring.datasource.url=jdbc:h2:/path/to/my/database/file
```

In examples elsewhere, you will see additional properties, maybe something like this:

```
spring.datasource.url=jdbc:h2:/path/to/my/database/file
spring.datasource.username=sa
spring.datasource.password=
spring.datasource.driver-class-name=org.h2.Driver
```

Spring (Boot) infers these as defaults based on the "h2" in our JDBC URL, so it isn't necessary for us to include these additional properties unless we need to use something other than the defaults.

## H2 database files

## Path guidelines

Specifying JDBC URLs is usually something that is done in a build process or similar, since paths can vary from environment to environment. In the interest of keeping it simple, it's a good idea to use a relative path. That way each developer will have a db created close to his or her source.

# Example

My fishes app resides at `~/WCCI/java-fishes-mvc-jpa`. If I use a JDBC URL of `jdbc:h2:../fishesDb/fishes`, running the app for the first time after this change will result in the directory `~/WCCI/fishesDb` being created containing a file called `fishes.mv.db` (full path `~/WCCI/fishesDb/fishes.mv.db`). Later, I will initialize my fishesDb folder as a git repository so that I can push to github. My github repository's contents will be the `fishes.mv.db` file and whatever extra documentation, etc that I add to my repository.

## Database Initialization

From the Spring Boot Reference:

> You can set `spring.jpa.hibernate.ddl-auto` explicitly and the standard Hibernate property values are `none`, `validate`, `update`, `create`, `create-drop`. Spring Boot chooses a default value for you based on whether it thinks your database is embedded (default `create-drop`) or not (default `none`). An embedded database is detected by looking at the `Connection` type: `hsqldb`, `h2` and `derby` are embedded, the rest are not. Be careful when switching from in-memory to a ‘real’ database that you don’t make assumptions about the existence of the tables and data in the new platform. You either have to set `ddl-auto` explicitly, or use one of the other mechanisms to initialize the database.

We are using h2, so by default Spring Boot uses `create-drop`, creating tables on startup, then dropping (deleting) them on shutdown.

## References

- [Spring Boot reference: Database Initialization](https://docs.spring.io/spring-boot/docs/current/reference/html/howto-database-initialization.html)
