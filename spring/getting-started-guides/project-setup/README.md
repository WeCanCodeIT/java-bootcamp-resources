# Guide: Project Setup for Spring Getting Started Guides

The [Getting Started Guides](https://spring.io/guides#gs) are an excellent resource, but they make a few assumptions about your development environment. They are not focused on using Eclipse to build/run the application. This guide describes changes to the Getting Started Guides necessary to support our development environment.

Often while dealing with these guides, it will be necessary to modify files outside of Eclipse. See [Modifying Files Outside of Eclipse](../../../eclipse/tips/#modifying-files-outside-of-eclipse) in Eclipse Tips for more information on this.

This guide will refer to [Serving Web Content with MVC](https://spring.io/guides/gs/serving-web-content/) for specific examples/links.

## Building with gradle

We want to start from scratch, so we will follow the [Build with Gradle](https://spring.io/guides/gs/serving-web-content/#scratch) instructions with a few caveats.

### Directory structure

In addition to the guidelines in the [Create the directory structure](https://spring.io/guides/gs/serving-web-content/#_create_the_directory_structure) section, we also need to add `src/main/resources` so that Eclipse recognizes this as a source folder, including it when our application is built and run. In addition to the command(s) specified by the guide, run the following command from your project directory in your bash terminal:

```bash
mkdir -p src/main/resources
```

### Creating Eclipse project configuration

After you've created your `build.gradle` (as per the instructions in [Create a Gradle build file](https://spring.io/guides/gs/serving-web-content/#_create_a_gradle_build_file)), run the following command from your bash terminal:

```bash
gradle eclipse
```

This will create your Eclipse project configuration files. After this command finishes, import your project into Eclipse (*__File->Import…->General/Existing Projects into Workspace__*).

## The application class

In the [Make the application executable](https://spring.io/guides/gs/serving-web-content/#_make_the_application_executable) section, the guide you're following may suggest naming your application class `Application`. It is recommended that you change this to something more descriptive; otherwise, it may be difficult to tell *which* application you're running. Follow the guide, then use Eclipse's *__Rename…__* refactoring to give `Application` a more specific name. (To use this refactoring, right click on your class name, then choose *__Refactor->Rename…__* from the context menu.) For example, if we were following the [Serving Web Content with MVC](https://spring.io/guides/gs/serving-web-content/) guide, we might choose to rename `Application` to `HelloWorldApplication`.

## Running the application

For now, we will run the application from within Eclipse, so you can safely ignore the [Build an executable JAR](https://spring.io/guides/gs/serving-web-content/#_build_an_executable_jar) section. Simply locate your application class (the one annotated with `@SpringBootApplication`), and run it as a Java application just like we've run all of our other application classes.