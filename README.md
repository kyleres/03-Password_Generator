# 03-Homework - Password Generator

## Introduction
For our third homework assignment, we were tasked with creating a random password generator that would meet certain requirements provided by the user. This exercise was meant to develop our skills for Javascript and to be more comfortable with programming logic.

## Acceptance Criteria
NOTE: Beginning with this assignment, I will post any criteria given in the section below so the reader can get a better idea of the requirements for each project.
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Motivation

My goal for this assignment was to go beyond my surface-level understanding of Javascript and dive into some of its more specific uses. Learning JS has been challenging for me because of two things: 1) the coder has to understand the way a computer "thinks" and 2) the coder must learn the right language to communicate with the computer. Unlike HTML and CSS, the functionality that JS can provide to any website or application makes it challenging to master simply because there are so many different ways to do the same thing. One thing that I kept in mind during this whole exercise is effeciency; that is, how to make the application with the least amount of JS code. To do so, I had to pull from a few different sources to learn the most effecient way of creating the application, and in the process, I had to learn new JS scripts and understand how they work. I also had to learn a little bit more about HTML forms to make the UI smoother and avoid using so many prompts that could potentially annoy the user. Credits for these sources are given below.

## Version List
### v1.0
* created README.md
* revised index.html
    * added lock icon through Font Awesome
    * created form
        * added character length option
        * added checkboxes for the user's preferred character sets
* revised style.css
    * revised styles for existing HTML elements
    * added styling for form
    * added styling for lock icon
* revised script.js
    * revised and added universal variables
    * added arrays and functions for using ASCII characters for password character sets
    * added functionality for Generate Password button
        * added randomizer for chosen character set
    * added functionality for form and Password Display
        * added functionality for password length value and checkboxes
        * added functionality for password display
        * added alerts
* tested application for functionality and responsiveness

## Credits
* Web Dev Simplified for his instructional video on Youtube [here](https://youtu.be/iKo9pDKKHnc) about a similar project. His GitHub repository for the video can be found [here](https://github.com/WebDevSimplified/JavaScript-Password-Generator)
* [w3schools.com](https://www.w3schools.com/) for all their resources regarding HTML, CSS and JS
* [Eloquent Javascript](https://eloquentjavascript.net/) by Marijn Haverbeke for some in-depth reading about JS
* [Font Awesome](https://fontawesome.com/) for the lock icon
* Special thanks to my instructor Nick and my awesome TAs Jimi and Chris for answering all my questions and teaching me the skills I need to get this done!