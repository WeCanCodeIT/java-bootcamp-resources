# Test Anatomy
## Unit Tests
### Unit Test Patterns
#### Arrange-Act-Assert
From http://wiki.c2.com/?ArrangeActAssert:
> Each method should group these functional sections, separated by blank lines:
>  1. Arrange all necessary preconditions and inputs.
>  2. Act on the object or method under test.
>  3. Assert that the expected results have occurred.
#### Given-When-Then
Developed as part of [Behavior-Driven Development](http://dannorth.net/introducing-bdd/), this is a pattern similar to Arrange-Act-Assert, but focused on behavior.
From http://martinfowler.com/bliki/GivenWhenThen.html:
> - The given part describes the state of the world before you begin the behavior you're specifying in this scenario. You can think of it as the pre-conditions to the test.
> - The when section is that behavior that you're specifying.
> - Finally the then section describes the changes you expect due to the specified behavior.

