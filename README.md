Quiz App
Overview
This is a simple Quiz web application that fetches random quiz questions from the QuizAPI based on user-selected difficulty. Users can answer the questions and get immediate feedback on whether their answer was correct or incorrect. The app tracks the number of correct and incorrect answers and stores these statistics in local storage, allowing users to reset the stats at any time.

Features
Fetches random quiz questions using the QuizAPI.
Allows users to select the difficulty level of the questions (easy, medium, hard).
Provides immediate feedback after answering a question (correct/incorrect).
Tracks the number of correct and incorrect answers.
Stores the stats (correct/incorrect answers) in local storage so they persist across sessions.
Users can reset the stats whenever they wish.
Responsive layout to support desktop and mobile views.
Technologies Used
HTML for structuring the app.
CSS for styling the layout and making the app responsive.
JavaScript for handling the logic, including fetching questions, processing answers, and managing local storage.
Fetch API for making asynchronous requests to the QuizAPI.
Local Storage for storing user stats (correct and incorrect answers).
API Information
QuizAPI: This app uses the QuizAPI to fetch questions.
You can register and generate your API key on QuizAPI.
The API response includes:
The question text.
Multiple answer options.
A correct_answers object, which indicates the correct options.
