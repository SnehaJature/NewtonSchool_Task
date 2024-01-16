Context API Assignment
Overview
This assignment is designed to assess your understanding of the React Context API. You will be building a small React application that demonstrates the usage of the Context API to manage user login/logout functionality. Additionally, you'll write Cypress test cases to ensure the proper functioning of the app.

Table of Contents
Task Overview
Instructions
Part 1: Building the React App
Part 2: Writing Cypress Test Cases
Part 3: Creating the Boilerplate

Task Overview
Part 1: Building the React App
Use Create React App (CRA) as the boilerplate for your React application.
Create a Context named UserContext.js that manages user login/logout functionality.
Implement the Context in your app to demonstrate its usage.
Create a Home component that interacts with the Context.
Run the app (npm start) to verify its correctness.
Part 2: Writing Cypress Test Cases
Install Cypress using npm install cypress --save-dev.
Write Cypress test scripts in cypress/integration/context-api.spec.js to validate the user login/logout functionality.
Run the Cypress tests using npx cypress open to ensure all tests pass.
Part 3: Creating the Boilerplate
Copy the entire source code of the React app to a new folder named "context-api-boilerplate."
Remove the bits related to the Context API in the copied code, ensuring that the Cypress tests fail when run against this modified code.
