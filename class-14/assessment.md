# Code 301 Final Assessment

This assessment comes in 2 parts (applications), a **client** and a **server** that together, will allow a user to create a list of items.

Each application is intended to be operated and tested independently, while also working together.

- The server, written in express, will be the API that the react application uses for data retrieval and storage.

## Feature Tasks

- Fix the bugs in the server.
- Fix the bugs in the client.
- Add **DELETE** functionality on both the server and client.
  - The client app has a "Delete Button" that is there but not wired up. Wire it up.
- Change the styling of the items list.

### The API Server

Located in your `back-end` exam repository, this is an express server designed to perform CRUD (Create, Read, Update, Delete) operations on a mongo/mongoose data model: `items`.

#### Note: this server does not require you to install or configure MongoDB, that will be handled automatically.

> However, this server is broken in other ways. Your task is to fix the bugs and add the missing features.

How will you know that you've found them all? The tests will all pass!

#### Server: Running the tests

- Make sure the server is **NOT** running.
- From the root directory of the server in the terminal, run the command `npm test`.
- You should receive a list of the tests that are passing and failing just like you have seen in your code challenges.

#### Server: Getting Started

- Navigate to your personal final exam `back-end` repository, as given to you by your instructor
- Fork this repository and clone the fork to your development machine
- Install your dependencies.
- Run the tests.
  - with the server turned off run the command: `npm test`
- A "bug" is a defect or missing feature. Find the bugs and fix them.
  - You will know you have found the bugs when the tests all pass.
- Deploy to the cloud.

#### Server: Notes

- You may inspect the tests, but do not change them.
- Once you have this working, keep it running. The React app will be using it to save and retrieve data.

### The React App

The React application will allow a user to:

- Display current items.
- Add a new item.
- Delete an item from the list.

#### React App: Getting Started

- Navigate to your personal final exam `front-end` repository, as given to you by your instructor
- Fork this repository and clone the fork to your development machine
- Install your dependencies.
- Run the tests.
  - with the React App turned off run `npm test`
- A "bug" is defect or missing feature. Find the bugs and fix them
  - You will know you have found the bugs when the tests all pass
- Deploy to Netlify

#### React App: Change Styling

- Using React Bootstrap, use `Accordion` for showing the items in the list instead of `Table`.
  - Use `Accordion` in expected fashion.
  - Remove `Table` related code.

#### React App Notes

- Throughout the application code, you will see that some components/markup have a prop called **data-testid** that look like the below. **Do not remove or change these, as they are required for the tests and grading**.
  - ```data-testid="---"```
- When you are running the application and manually testing in the browser, it'll use your server and will not operate unless it is running.
- However, it's not sufficiently set up at first to reach the API.
  - You'll need to properly configure the app in order to reach the server.
- When you are running the tests with `npm test` the application will simulate having a server, so it's not necessary to have your server up while executing the tests.
- In the project directory, you can run `npm start`
  - Runs the app in the development mode.
  - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  - The page will reload if you make edits.
  - You will also see any lint errors in the console.

## Git Flow

- You are expected to follow a proper git flow like so:
  - Accept your invites into the base repositories.
  - Fork them to your GitHub profile.
  - Clone your forked version of the repos down to your local machine.
  - Create a branch and do your work to pass the tests.
  - ACP
  - Create a Pull Request in your forked repo from your working branch and merge it into main when you're ready.
  - Deploy from your forked version on GitHub.
  - To get a grade, create a Pull Request from your forked repo's main branch back to the base repo's main branch.

## Submitting this assignment

- When you are ready to submit, please make a Pull Request from your forked repo to the base repo.
  - Do NOT merge!
- Submit the URLs to:
  - The base GitHub repositories from which you forked your frontend and backend code.
  - URLs to both your deployed frontend and backend applications.

## Rubric

- 100 points total.
- 80 required to pass.

### Back End - 35 Points

- 05 points: server tests other than delete passing.
- 25 points: delete test passing.
- 05 points: deployed to the cloud.

### Front End - 35 Points

- 05 points: tests other than delete passing.
- 25 points: delete test passing.
- 05 points: deploy to Netlify.

### Integration - 5 Points

- 05 points: deployed Applications are properly configured to interoperate fully.

### Styling - 25 Points

- 15 points: functional use of Accordion component.
- 10 points: removal of all Table related elements.

## STRETCH GOALS

No extra points, just the satisfaction of being stretchy.

- Integrate Mongo Atlas so deployed server and client are fully functional.
