# Spring Initializr 

[Spring Initializr](http://start.spring.io/) can be used to generate bootstrap code. This will generate a zip file containing `build.gradle`, source/resource folders, and the gradle wrapper. Go to [the site](http://start.spring.io/), then:

- [ ] Choose to generate a Gradle Project.
- [ ] Specify a Group (ID) of your choice -- your github user id is suggested.
- [ ] Specify your repository name as the Artifact (ID).
- Add the following starters for an MVC with Thymeleaf/JPA project, or others if you're doing something different:
    - [ ] Thymeleaf
    - [ ] JPA
    - [ ] DevTools
    - [ ] H2
- [ ] Generate Project
- [ ] Extract the zip file's contents into your repository folder. If you've extracted it correctly, `build.gradle` will be in the root of your project folder.