# Test Anatomy
## Test Patterns
### Arrange-Act-Assert
From http://wiki.c2.com/?ArrangeActAssert:
> Each method should group these functional sections, separated by blank lines:
>  1. **Arrange** all necessary preconditions and inputs.
>  2. **Act** on the object or method under test.
>  3. **Assert** that the expected results have occurred.

### Given-When-Then
Developed as part of [Behavior-Driven Development](http://dannorth.net/introducing-bdd/), this is a pattern similar to Arrange-Act-Assert, but focused on behavior.
From http://martinfowler.com/bliki/GivenWhenThen.html:
> - The **given** part describes the state of the world before you begin the behavior you're specifying in this scenario. You can think of it as the pre-conditions to the test.
> - The **when** section is that behavior that you're specifying.
> - Finally the **then** section describes the changes you expect due to the specified behavior.

## TDD
### Overview
Test-Driven Development is a technique which Kent Beck is largely credited with developing, though he sees himself as "rediscovering" it. From https://www.quora.com/Why-does-Kent-Beck-refer-to-the-rediscovery-of-test-driven-development:
> The original description of TDD was in an ancient book about programming. It said you take the input tape, manually type in the output tape you expect, then program until the actual output tape matches the expected output. After I'd written the first xUnit framework in Smalltalk I remembered reading this and tried it out. That was the origin of TDD for me. When describing TDD to older programmers, I often hear, "Of course. How else could you program?" Therefore I refer to my role as "rediscovering" TDD. 

Sometimes it is referred to as ["test first"](http://www.extremeprogramming.org/rules/testfirst.html). Since it is a design technique, many have started referring to it as [Test-Driven Design](http://www.drdobbs.com/architecture-and-design/test-driven-design/240168102).

### Schools of TDD for Unit Testing

#### Test Doubles
The schools vary in their approaches regarding how test doubles are used.

#### References
[Fowler, Martin; Mocks Aren't Stubs](http://martinfowler.com/articles/mocksArentStubs.html)

# TODOs
- [ ] Uncle Bob's three rules of TDD
- [ ] move TDD stuff into its own article (out of TestAnatomy)?
- [ ] common JUnit annotations
- [ ] things to avoid (hard to test)
  - [ ] global state
    - [ ] System/environment properties
    - [ ] static (class) attributes other than final constants
  - [ ] things that are difficult to mock/stub
    - [ ] static methods
    - [ ] final classes
    - [ ] final methods
- [ ] [Mockito v1.10.19 main javadoc](http://static.javadoc.io/org.mockito/mockito-core/1.10.19/org/mockito/Mockito.html)