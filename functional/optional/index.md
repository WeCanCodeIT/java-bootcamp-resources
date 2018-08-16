# Optional: An Introduction

## The Problem of `null`

The value `null` and the associated `NullPointerException` are a huge source of anguish and expense. What does a `null` imply? It is ambiguous. Sometimes, it is used to indicate nothing or failure. In other cases, it might simply be an oversight. This uncertainty forces us to clutter up our code with checks like the following:

```java
public void printLength(String value) {
	if (value != null) {
		System.out.println("The string's length is " + value.length());
	}
}
```

If we avoid `null` in our code, we can avoid the check altogether. Also, what is the length of `null`? Is it zero? That's the length of the empty string (`""`). Ah, ambiguity.

## Avoiding `null` before Java 8

To avoid `null`, we do things like assigning default values for instance attributes and/or implementing the [Null Object](https://en.wikipedia.org/wiki/Null_object_pattern) pattern. A simple example of this is initializing a String variable to the empty string. Instead of:

```java
class MyClass {
	String stringProperty; // this would be initialized to null
}
```

We do this:

```java
class MyClass {
	String stringProperty = "";
}
```

## Java 8: Say Hello to `Optional`

As of Java 8, we can use the `java.util.Optional` class to avoid encountering `NullPointerException`. There is no longer any good reason to allow `null` in our code apart from external APIs (which we should wrap with our own code to eliminate `null` values). `Optional` offers us several… ahem… *options*.

### Check to see if a value is present

We can check to see whether an `Optional` instance contains a value using `isPresent`.

```java
public void printLength(Optional<String> value) {
	if (value.isPresent()) {
		int length = value.get().length();
		System.out.println("The string's length is " + length);
	}
}
```

This isn't usually the best way, since we are manually unwrapping it. It is **still** better than using `null`, since `value.get()` will throw a `NoSuchElementException` rather than a `NullPointerException` even if we forget or break our `if` conditional. Here's what that method looks like:

```java
public T get() {
	if (value == null) {
		throw new NoSuchElementException("No value present");
	}
	return value;
}
```

### Specify a default fallback value

We can specify a value to be used if no value is present. This is preferred to checking whether a value is present. Here, the empty String (`""`) will be used if no value is present:

```java
public void printLength(Optional<String> value) {
	int length = value.getOrElse("").length();
	System.out.println("The string's length is " + length);
}
```

### Fail if no value is present

Often, if no value is present, this isn't what we expect. In this case, we can tell the `Optional` to throw an exception (better sooner than later). This requires a `java.util.function.Supplier` that will return an `Exception`. Here we use an anonymous inner class to create a `Supplier`, causing an `IllegalStateException` to be thrown if no value is present:

```java
public void throwExceptionOnNoValue(Optional<String> value) {
	Supplier<IllegalStateException> exceptionSupplier = new Supplier<IllegalStateException>() {
		@Override
		public IllegalStateException get() {
			return new IllegalStateException("value must be present!");
		}
	};
	int length = value.orElseThrow(exceptionSupplier).length();
	System.out.println("The string's length is " + length);
}
```

A more common way to create a `Supplier` is by using a lambda expression or a method reference:

```java
public void printLength(Optional<String> value) {
	Supplier<IllegalStateException> exceptionSupplier = () -> new IllegalStateException("value must be present!"); // lambda expression
	int length = value.orElseThrow(exceptionSupplier).length();
	System.out.println("The string's length is " + length);
}
```

## Creating an Optional

`Optional` offers static methods to initialize/create `Optional` values.

### of(T)

If we know a value is *not* `null`, we can use `of` to create an `Optional` containing that value:

```java
Optional<String> value = Optional.of("foo");
System.out.println("The contained value is " + value.get());
```

Note that if we use `of`, but the value *is* `null`, a `NullPointerException` will be thrown.

### empty()

If we need to create an `Optional` that contains no value, we can use `empty`:

```java
Optional<String> value = Optional.empty();
if(!value.isPresent()) {
	System.out.println("This optional does not contain a value.");
}
```

### ofNullable(T)

We may not know whether a variable's value is `null`. This is often the case if we are protecting ourselves from `null` from external sources. This is where we use `ofNullable`:

```java
public void doSomethingWith(String parameter) {
	Optional<String> value = Optional.ofNullable(parameter);
	if(value.isPresent()) {
		System.out.println("The contained value is " + value.get());
	} else {
		System.out.println("This optional does not contain a value.");
	}
}
```
## Initializing `Optional` values

Ensure that `Optional` instance variables are initialized, or you'll find yourself in the land of `null` all over again. Just like any other instance variable, if an `Optional` is not assigned a value, its value will be `null`.

```java
public class Cage {
	private Optional<VirtualPet> inhabitant; // will be initialized to null!
}
```

Initialize these to empty instead:

```java
public class Cage {
	private Optional<VirtualPet> inhabitant = Optional.empty();
}
```

Then an `inhabitant` can be assigned via constructor:

```java
public class Cage {
	private Optional<VirtualPet> inhabitant = Optional.empty();

	public Cage(VirtualPet forPet) {
		this.inhabitant = Optional.of(forPet);
	}
}
```

### Aiming for immutability

Better yet, if you are aiming for *immutability* (a noble aspiration), give constructors for empty and non-empty cages. If possible, it's better to use two separate constructors here than to use `ofNullable`, since this clearly expresses intent:

```java
public class Cage {
	private final Optional<VirtualPet> inhabitant;

	/**
	 * Creates an empty cage.
	 */
	public Cage() {
		this.inhabitant = Optional.empty();
	}

	public Cage(VirtualPet forPet) {
		this.inhabitant = Optional.of(forPet);
	}
}
```

## Testing with `Optional`

There is no really good reason to fake an optional. Just use a real instance. Mock/dummy the object it contains if necessary. Mocking `Optional`s is difficult anyway, since `Optional` is a final class.

### A `Cage` that's a bit different

For the purposes of illustration, we'll change the `Cage` class a bit. We'll pass the `Optional` `inhabitant` into the constructor rather than creating it within the constructor. We'll also add some methods, then show how we would write tests to drive them. Note that this isn't suggested. The implementation of `Cage` above is cleaner and easier to work with unless we are already dealing with `Optional<VirtualPet>` instances.

Here's the updated class:

```java
public class Cage {

	private Optional<VirtualPet> inhabitant;

	/**
	 * false is the default for a boolean value, just stating it explicitly.
	 */
	private boolean locked = false;

	public Cage(Optional<VirtualPet> inhabitant) {
		this.inhabitant = inhabitant;
	}

	public boolean isLocked() {
		return locked;
	}

	public void lock() {
		locked = true;
	}

	public boolean isInhabited() {
		return inhabitant.isPresent();
	}
}
```

### Use `empty()` When the value doesn't matter

The `isLocked()` and `lock()` methods above do not rely on whether or not the cage is inhabited. Since the value of `inhabitant` doesn't matter, we can (and **should**) simply use `Optional.empty()` in our test. If we were to supply an actual inhabitant value, someone reading our tests may infer that it is significant.

```java
@Test
public void shouldBeUnlockedByDefault() {
	Cage cage = new Cage(Optional.empty());
	assertThat(cage.isLocked(), is(false));
}

@Test
public void shouldBeLockable() {
	Cage cage = new Cage(Optional.empty());
	cage.lock();
	assertThat(cage.isLocked(), is(true));
}
```

The test and implementation of `unlock()` is left to the reader. ;-)

### When the value matters

When the value matters, we would either create a real `VirtualPet` or create a mock, then use that to create an optional. Here, I will use a mock. Since we are test-driving `isInhabited()`, a method with a `boolean` return value, we'll need to create a test for each case:

```java
@Test
public void shouldBeInhabited() {
	// If we used this more than a few times, we would make this an instance variable and use the @Mock annotation.
	VirtualPet inhabitant = Mockito.mock(VirtualPet.class);
	Cage cage = new Cage(Optional.of(inhabitant));
	assertThat(cage.isInhabited(), is(true));
}

@Test
public void shouldNotBeInhabited() {
	Cage cage = new Cage(Optional.empty());
	assertThat(cage.isInhabited(), is(false));
}
```

*How many `null`s are in the above code? How could you force a `NullPointerException`? [Hint: this is one reason why creating the `Optional` inside our constructor is probably a better implementaion.]*
