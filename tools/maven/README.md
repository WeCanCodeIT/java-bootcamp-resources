# Apache Maven

[Apache Maven](https://maven.apache.org/) is a previous generation tool used in a role similar to Gradle. Sometimes exercises are given to job candidates using Gradle since large organizations can be slow to change. Even within the same organization, some groups may use Maven for older projects while newer projects use Gradle.

## Installing Maven (in Windows)

Here are the [official installation instructions](https://maven.apache.org/install.html).

1. Install the Oracle Java SE (Standard Edition) JDK

	You probably already have this installed and on your system path. To verify, run `java` from a Git Bash or command prompt. If you need to download it and install it, you can [find it here](http://www.oracle.com/technetwork/java/javase/downloads/index.html).

1. Configure the JAVA_HOME environment variable

	`JAVA_HOME` should point to your JDK installation directory. To verify it is configured, try `echo $JAVA_HOME` (from Git Bash) or `echo %JAVA_HOME%` (from command prompt). If it's not, see [these instructions](http://www.robertsindall.co.uk/blog/blog/2011/06/28/setting-java-home-variable-in-windows/)

1. Download and extract Maven

	Download a *binary zip archive* [here](https://maven.apache.org/download.cgi). Extract it to a convenient location. The current version as of this writing is `3.5.2`, so the zip file is `apache-maven-3.5.2-bin.zip`. If I extract this to `c:\`, this will result in a `c:\apache-maven-3.5.2` folder containing Maven.

1. Add Maven to the PATH

	Add Maven's `bin` directory to your `PATH` environment variable. Access your environment variables as per the link above (for configuring JAVA_HOME). The `bin` folder resides directly beneath the installation directory. For example, if you extracted Maven to `c:\apache-maven-3.5.2`, its `bin` folder can be found at `c:\apache-maven-3.5.2\bin`. This is what you would add to the path.

1. Verify Maven is installed correctly

	From a (new) Git Bash or command prompt, type `mvn -v`.

## Configuring Eclipse (in Windows)

We need to add a *classpath variable* so that Eclipse can find your dependencies in your local Maven repository. To do this, select *Preferences* from your *Window* menu, then *Java->Build Path->Classpath Variables*. Create a *New…* variable with the *Name* `M2_REPO` and the *Path* to "C:\Documents and Settings\\*your-username*\\.m2\repository".

## Setting up your project

To create and configure a project using Maven (we will assume you already have a `pom.xml` file):

1. Create a project folder

	Create a folder to house your project. For my example, I will call this `myProject`.

1. Place `pom.xml` in the project folder

1. Create source folders

	Like Gradle, Maven expects Java production code in `src/main/java` and tests in `src/test/java`. You can create these files from Explorer, or from the Git Bash prompt, `mkdir -p src/main/java` and `mkdir -p src/test/java`. My example project would have folders called `myProject/src/main/java` and `myProject/src/test/java`.

1. Creating Eclipse configuration

	To create your Eclipse configuration, run `mvn eclipse:eclipse` from your project root. (In my example, that would be `myProject`.) If you ever need to complete rebuild your configuration, you can run `mvn eclipse:clean`, then `mvn eclipse:eclipse` again.

1. Import your project into Eclipse

	Your project is ready to be imported now as an existing project!

## Running tests from a command line prompt

Surefire is the test plugin for Maven, and `test` is the goal that executes tests. By default it is bound to the `test` lifecycle phase, so you can run the unit tests in your project from the command line (if your project structure is correct) by typing `mvn test` while in the root project directory.

You should do this in addition to running your tests from your IDE (Eclipse), because whoever looks at your project submission will probably do this to verify your code and your project structure.