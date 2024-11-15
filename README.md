# Capstone Project- Web Development

Name: Khushmandeep Student number: 041128153 GitHub username: khushmandeep10

# Quiz App

# Overview

This is a simple Quiz web application that fetches random quiz questions from the QuizAPI based on user-selected difficulty. Users can answer the questions and get immediate feedback on whether their answer was correct or incorrect. The app tracks the number of correct and incorrect answers and stores these statistics in local storage, allowing users to reset the stats at any time.

# Features

Fetches random quiz questions using the QuizAPI. Allows users to select the difficulty level of the questions (easy, medium, hard). Provides immediate feedback after answering a question (correct/incorrect). Tracks the number of correct and incorrect answers. Stores the stats (correct/incorrect answers) in local storage so they persist across sessions. Users can reset the stats whenever they wish. Responsive layout to support desktop and mobile views.

# Technologies Used

HTML for structuring the app. CSS for styling the layout and making the app responsive. JavaScript for handling the logic, including fetching questions, processing answers, and managing local storage. Fetch API for making asynchronous requests to the QuizAPI.

# API Information

QuizAPI: This app uses the QuizAPI to fetch questions. You can register and generate your API key on QuizAPI. The API response includes: The question text. Multiple answer options. A correct_answers object, which indicates the correct options.

# Mockup Overview
The main functions and design of the Quiz Web Application are depicted in this mockup. The goal of the design is to give quiz takers an enjoyable and intuitive experience.

# Design Decisions

**User Interface Elements**
   - A question display area, answer input fields, submit buttons, and a statistics summary section are among the essential elements of the mockup.
   - For user convenience, a reset button is also included, enabling users to change their quiz results whenever they choose.

**Layout and Responsiveness**
   - A responsive design that works on desktop and mobile devices is ensured by the mockup's display of layouts for various screen sizes.
   - Important activities are conveniently accessible, and key elements are grouped to offer a smooth user experience.

**Color Scheme and Branding**
   - A striking colour scheme was used to improve user interaction and add visual appeal to the program.
   - Buttons and feedback messages are coloured differently to increase visibility and user involvement.
   - In keeping with the application's quiz-like format, the branding conveys an entertaining and educational vibe.

**Typography**
   - To guarantee readability on all devices, typefaces that are clear and readable were selected.
   - Consistent font styles and sizes give the program a unified appearance.

# Resources/Technologies Used
- HTML: For the web application's fundamental framework.
- CSS: To improve user experience and style the program.
- A front-end framework called Bootstrap is used to make applications aesthetically pleasing and responsive.
- JavaScript: Used to create features like score tracking, quiz logic, and API calls.
An external API called QuizAPI offers quiz questions according to the chosen degree of difficulty.

# Steps

## Set Up Project Structure:
made the required JavaScript, CSS, and HTML files.
Bootstrap is linked for responsive design.

## Design the User Interface
Forms and containers were made to display quiz questions and allow users to choose the level of difficulty.
CSS was used to style the application for a visually pleasing layout.

## Implement Functionality with JavaScript:
functions that are written to manage user interactions, such initiating the test and sending in responses.
Scores were persistent across sessions using localStorage.

## Fetch Quiz Data:
To get quiz questions according to the chosen difficulty level, an API call was implemented.
dynamically showed the questions and response choices after parsing the received data.

## Manage Quiz Flow:
For every question, a timer was added, along with logic to advance to the next one.
Record the right and wrong responses.

## Testing and Debugging:
To make sure all features function as intended, the program was extensively tested.
Any problems that arose during testing were debugged.


# Challenges
## API Integration: 
It took some trial and error to figure out how to efficiently retrieve and handle data from the Quiz API.
## Score Persistence: 
It was difficult to implement local storage to track scores.
## Responsive Design: 
It required more work to make sure the program was responsive and looked well on various screen sizes.

# Conclusion
Several web technologies are skilfully combined in the Quiz Web Application to produce an interesting educational resource. I learnt a lot about front-end development, user experience design, and API integration from this project. The difficulties encountered during development gave me the chance to study and solve problems, which improved my programming abilities in the end.