# Declaring variables

## Only declare one variable per line

Unless the variables are very simple and closely related, do not combine declarations / initializations of multiple variables on the same line.

Instead of:

```java
int x, y = 5, z;
```

Do this:

```java
int x;
int y = 5;
int z;
```

### Why?

This reduces *cognitive load*, making your code easier to read. It also enables *refactoring*—if we have several variables in a method, the method should probably be decomposed into several, smaller methods. Having several variable declarations on a single line makes this refactoring more difficult.

## Declare variables close to where they are used

Declare variables close to where they are used. Do not declare all of the variables to be used within a method/code block at the top of the code block.

### Why?

We want to minimize the *cognitive load* necessary to understand our code. If we need to go find a variable declaration, we increase the risk that we will misinterpret our code. We are also forced to look for other code that may be manipulating our variable's value.

Also, a common, straightforward, and powerful refactoring is *Extract Method* [Fowler]. If our variables are declared far from where they are used, this refactoring becomes more difficult.

Sometimes, you will see a list of variable declarations at the beginning of a method.

## Combine declaration and initialization into one line where possible

Instead of:

```java
int myNumber;

// do something else that doesn't assign a value to myNumber

myNumber = 42;
```

Do this:

```java
int myNumber = 42;
```