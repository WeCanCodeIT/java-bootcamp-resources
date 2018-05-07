# Optional: An Introduction

## Then and Now

The value `null` and the associated `NullPointerException` are a huge source of anguish and expense. To avoid `null`, we can use techniques like assigning default values for instance attributes and applying the [Null Object](https://en.wikipedia.org/wiki/Null_object_pattern) pattern.

As of Java 8, we can use the `java.util.Optional` class to avoid **ever** encountering another `NullPointerException`. There is no longer any good reason to allow `null` in our code (apart from being forced by some other API).

Before `Optional`, it was necessary to check a variable's value before calling its methods whenever we couldn't be sure its value was not `null`:

```java
public void doSomething(String value) {
	if (value != null) {
		System.out.println("The string's length is " + value.length());
	}
}
```

Now that we can use `Optional`, we have several… ahem… *options*. Some of these are:

- We can check to see whether it contains a value, though this isn't usually the best way:

	```java
	public void doSomething(Optional<String> value) {
		if (value.isPresent()) {
			int length = value.get().length();
			System.out.println("The string's length is " + length);
		}
	}
	```

- We can specify a default value to be used if no value is present. This is preferred to checking whether a value is present. Here, the empty String (`""`) will be used if no value is present:

	```java
	public void doSomething(Optional<String> value) {
		int length = value.getOrElse("").length();
		System.out.println("The string's length is " + length);
	}
	```

- Often, if no value is present, this isn't what we expect. In this case, we can tell the `Optional` to throw an exception (better sooner than later). This requires a `java.util.function.Supplier` that will return an `Exception`. Here we use a method reference, causing an `IllegalStateException` to be thrown if no value is present:

	```java
	public void doSomething(Optional<String> value) {
		int length = value.getOrThrow(IllegalStateException::new);
		System.out.println("The string's length is " + length);
	}
	```



## Creating an Optional

`Optional` offers a few static methods to initialize/create `Optional` values.

### of(T)

- don't do this

TODO
- verify that code snippets work