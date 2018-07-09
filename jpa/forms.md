## Getting Started with HTML Forms

-   By the end of this guide, students will be able to
    -   Develop an understanding of how to use HTML forms
    -   Add and remove items from a database using HTML forms
    -   Display updated pages containing newly constructed data

### Project Setup

-   Clone [temp-courses-forms](https://github.com/WeCanCodeIT/temp-courses-forms)
-   Navigate into this directory and run `gradle eclipse`
-   Import the project into `Eclipse`

### Project Review

-   This project is very similar to previous but is now `JPA` enabled
-   Shows all courses and you can dive into an individual course

### Intro to HTML Forms

-   Reference: [MDN HTML forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form)
-   Forms are one way a user can interact with our application. They allow us to collect data from our user and use it to perform tasks in our application. Most of the time that data is sent to the web server, but the web page can also intercept it to use it on its own.
-   Made up of widgets
    -   Text Inputs
    -   Buttons
    -   Check Boxes
    -   Select Boxes
    -   Radio Buttons
-   There are many ways to use inputs. For example, `<input type="text">`, `<input type="radio">`, and `<input type="submit">`.
-   To receive data from our users we use the `POST` HTTP verb.

### Implementing our form

-   All HTML forms begin with a `<form>` element:

```bash
<form action="<some-action>" method="<SOME_HTTP_VERB>">

</form>
```

-   We are going to build a structure to accept input from our user

```bash
<form action="/submit-course" method="POST">
    <label>First Name: <input type="text" name="firstName" /></label>
    <input type="submit" value="Submit" />
</form>
```

### How does it all link together?

-   Your form will pass a request body to your `Controller` when you use the `POST` method
-   The name attributes on your `input` tags will correspond to parameters inside your `Controller`

### Create an HTML form to dynamically add a course to the application

-   Include a text input field for course `name`
-   Include a text input field for course `description`
-   Include a text input field for `instructorName`
-   Include a button that maps to `@{/add-course}`

### Create a method in the `Controller` to `submitCourse`

-   Ensure the `RequestMapping` matches with the `action` attribute on the `form`
-   Access values from text fields of course information
-   `save` the `newCourse` to the `Repository`
-   This route in your `Controller` should redirect the user back to the `courses` page, displaying all courses including the new one.
-   **Stretch Task:** Ensure duplicates cannot be added. Think first of how you would identify if something already exists in a collection _without_ using code. Use that logic to think about how you can check your current collection to do the same _with_ code.

### Create an HTML form and `Controller` to `removeCourse` in the application

-   Include a text input field for course `name` as we are going to remove a course by its name
-   **Stretch Task:** Take no action with your data if the submitted course for removal doesn't exist.

### Search Courses by Instructor and return all courses that particular instructor is teaching

This is quite the task so lets break it down step by step...

Right now our instructor is simply a `String` of their name. It is a rare case that you will simply be using `String`s to identify elements like an instructor. As I'm sure you can imagine, `Instructor`s can have a multitude of properties and perform many tasks. In that case, we should be making `Instructor` objects.

-   `Instructor` only requires the `name` property for now.
-   One instructor will be able to teach many different courses, but a course will be taught by just one instructor.
-   Update existing classes to build in this functionality
-   Issues will happen in our `Controller` as we can no longer create a course using a `String` value for the `Instructor`. So the constructor for a `Course` should change to accommodate.
-   We should have an `InstructorRepository` now to keep track of `Instructor`s. So we should use that for this query.
    -   Think about the query that you will need to access the `Courses` of a given `Instructor`.

### Summary

Forms allow us to interact with the user and collect information in predictable ways. This demo is just the beginning. Here are some stretch tasks for you to tackle:

-   Build out more queries and attach a button to trigger these responses

    -   Sort the information (`Course`s or `Instructor`s) in some way
    -   Add details to the course (maybe tags or categories) and pull the courses in this fashion
    -   Add some JavaScript. (i.e. an alert box that asks if your are sure you want to remove a `Course`)
    -   Wire up to the H2 console and make a persistent database
    -   Style your form to make it beautiful (This is less of a stretch task and more of something to do after your functionality is handled)
