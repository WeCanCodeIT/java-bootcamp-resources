# .gitignore files

From [git documentation]():

> A gitignore file specifies intentionally untracked files that Git should ignore. 

Usually, we create a `.gitignore` file in the root of our project so that git ignores things like our build directory(ies) and configuration files.

This is a standard `.gitignore` that will suffice for most of our work here. Feel free to copy/paste it into the content of your `.gitignore` file:

```
# Eclipse
.classpath
.project
.settings/
bin/

# Gradle
.gradle/
build/
``` 