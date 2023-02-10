# User Authentication with Auth0

## Overview

Right now, books in your app aren't associated with who added them. Let's ensure only you can edit your books. To do this, we will need an authentication system to know a user is indeed who they say they are. But we don't want to deal with storing passwords... let's outsource it! Think about all the times you have signed up for an app using your Facebook or Google account. That is done through a process called OAuth. Essentially, the app allows "someone else" (an external identity "provider") to take care of making sure that you are who you say you are.

In this lab, we are going to use a service called Auth0 that will handle most of the challenges of working with external identity providers. Your job will be to create React components to allow users to sign in via the Auth0 service. This service will then give you a secure `jsonwebtoken` or JWT (pronounced "jot").

Once you have that hooked up, you will send that JWT (that essentially says that you are who you say you are) to your backend. You will use a library call `jsonwebtoken` on the server to open the JWT and will verify whether it is valid, and who the user is.

You will be provided starter code libraries for both your React application and your Express server to aid you in this process. Your job in this lab will be to integrate these modules and components into your client and server applications, not to write this functionality from scratch.

## Feature Tasks

See your team's Trello board for this lab's feature tasks.

## Documentation

You must have a complete `README.md` for your repository.

_Your `README.md` must include:_

```md
# Project Name

**Author**: Team Member Names Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
```

## Time Estimates

For each of the lab features, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```markdown
Name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```

Add this information to your README.

## Submission Instructions

1. Complete your Feature Tasks for the lab, according to the Trello cards.
1. Create a PR back to the `main` branch of your repository, showing ALL your work, and merge it cleanly.
1. On Canvas, submit a link to your PR. Add a comment in your Canvas assignment which includes the following:
    - A link to the deployed version of your latest code.
    - A link to your public Trello board.
    - A question within the context of this lab assignment.
    - An observation about the lab assignment, or related 'Ah-hah!' moment.
    - How long you spent working on this assignment.
