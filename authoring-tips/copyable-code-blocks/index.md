# Creating copyable code blocks

We have implemented support to automajically add copy buttons to elements with with the `copyable` class. To do this with a code block, create Markdown similar to the following:

	```java
	public void bar() {};
	```
	{: .copyable}

Note that the only additional thing necessary is to add the `{: .copyable}` line after the code block. This is how we specify what kramdown calls a [*Block Inline Attribute List*](https://kramdown.gettalong.org/syntax.html#block-ials).

What this does is grabs each `copyable` element, wraps it in a `<figure>`, then adds a button as a sibling. The output looks something like this:

```html
<figure class="code-block">
	<div class="language-java copyable highlighter-rouge">
		<pre class="highlight"><code><span class="kd">public</span> <span class="kt">void</span> <span class="nf">bar</span><span class="o">()</span> <span class="o">{};</span></code></pre>
	</div>
	<button class="copy-code-button" />
</figure>
```

Here it is in action:

```java
public void bar() {};
```
{: .copyable}