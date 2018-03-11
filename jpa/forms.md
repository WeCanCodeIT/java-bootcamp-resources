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
 <button th:formaction="@{requestmapping}"> button text</button>
 </div>
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
- `return "redirect:/show-courses"` will refresh the page and dynamically update with the newly added course!
- **Stretch Task:** Ensure duplicates cannot be added (you will need to first look for the existence of the course, creating `findByName(name)` can come in handy in the `Course Repository`!

### Create an HTML form and `Controller` to dynamically `removeCourse`  in the application
- Include a text input field for course `name` as we are going to remove a course by its name
- **Stretch Task:** Simply refresh the page if user ties to remove a course that doesn't exist

### Search by Instructor and find all the courses that particular instructor is teaching
This is quite the task so lets break it down step by step...Right now our instructor is simply a `String` of their name. This is not going to go over well when we try and connect a course to a particular instructor.
- Let's JPA enable our `Instructor`
- `Instructor` will have one field, simply `name`
- One instructor will be able to teach many different courses 
- Update necessary classes to build in this functionality
- Issues will happen in our `Controller` as we can no longer add a course by `String instructorName`
  - Think about it...how can we still pull our instructor's name? How do we get the needed access to this info? Where should we begin?
  - Once we get this info...we need to update our `newCourse` which has parameters (`String`, `String`, `Instructor`)
- Now that we can add and remove courses let's `findCoursesByInstructor` in our `Controller`
  - Again we need to connect the HTML form's text field for `instructorName` to our `Instructor` object...how can we do this?
  - `model.addAttribute("courses", courseRepo.?);`
  - `return "instructor"` as we will now create a new Thymeleaf template for our instructor and the classes he/she teaches

### Summary 
HTML forms will allow the user to interact with the information in customized ways. This demo is just the start. Here are some stretch tasks for you to tackle:
- Build out more queries and attach a button to trigger these responses
  - Sort the information in some way
  - Add details to the course (maybe tags or categories) and pull the courses in this fashion
  - Add some javascript...like an alert box when you go to remove a course that asks are you sure?
  - Wire up to the H2 console and make a persistent database
  

