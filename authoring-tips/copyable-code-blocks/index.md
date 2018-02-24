# Creating copyable code blocks

We have implemented support to automajically add copy buttons to elements with with the `copyable` class. To do this with a code block, create Markdown similar to the following:

	```java
	public void bar() {};
	```
	{: .copyable}

Note that the only additional thing necessary is to add the `{: .copyable}` line after the code block. This is how we specify what kramdown calls a [*Block Inline Attribute List*](https://kramdown.gettalong.org/syntax.html#block-ials).

Here it is in action:

```java
public void bar() {};
```
{: .copyable}