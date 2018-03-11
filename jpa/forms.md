## Getting Started with HTML Forms

  - By the end of this guide, students will be able to 
    - Develop an understanding of how to use HTML forms
    - Dynamically add and remove items from a database using HTML forms
    - Use forms to display queried data 
  

### Project Setup
- Clone [temp-courses-forms](https://github.com/WeCanCodeIT/temp-courses-forms)
- Navigate into this directory and run `gradle eclipse` 
- Import the project into `Eclipse`

### Project Review
- This project is very similar to previous but is now `JPA` enabled
- Shows all courses and you can dive into an individual course

### Intro to HTML Forms
- Reference: [MDN HTML FORMS](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form)
- HTML Forms are one of the main points of interaction between a user and a web site or application. They allow users to send data to the web site. Most of the time that data is sent to the web server, but the web page can also intercept it to use it on its own.
- Made up of widgets
  - Text Fields
  - Buttons
  - Check Boxes
  - Select Boxes
  - Radio Buttons
- The main difference between a HTML form and a regular HTML document is that most of the time, the data collected by the form is sent to a web server
- `<input type="text">` defines a text field
- `<input type="radio">` defines a radio button (for selecting one of many choices)
- `<input type="submit">` defines the submit button for form submission
- You will use `POST` more often than `GET` to submit secure form data


### Implementing our form
- All HTML forms begin with a `<form>` element that looks like this: 
```bash
<form action="/my-handling-form-page" method="post">

</form>
```
- We are going to build a structure that looks like this...
```bash
<form method="POST">
 <div>
  <label>   </label>
  <input type="?" name="?" />
 </div>
 <div>
 <button th:formaction="@{requestmapping}" button text</button>
</form>
```

### How does it all link together?
- Your form will interact directly with your `Controller`
- The fields of the form will match with parameters created by a `Controller` `RequestMapping` 

### Create an HTML form to dynamically add a course to the application
- Include a text input field for course `name`
- Include a text input field for course `description`
- Include a text input field for `instructorName`
- Include a button that maps to `@{/add-course}`

### Create a method in the `Controller` to `addCourse`
- Ensure the `RequestMapping` matches with the button
- Read in parameters for the 3 require text fields of course information
- `save` the `newCourse` 
- `return "redirect:/courses"` will refresh the page and dynamically update with the newly added course!
- **Stretch Task:** Ensure duplicates cannot be added (you will need to first look for the existence of the course, creating `findByName(name)` can come in handy in the `Course Repository`!

### Create an HTML form and `Controller` to dynamically `removeCourse`  in the application
- Include a text input field for course `name` as we are going to remove a course by its name
- **Stretch Task:** Simply refresh the page if user ties to remove a course that doesn't exist



