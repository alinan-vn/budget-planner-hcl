# Phase 4 - Team Budget Planner -- HCL ASSESSMENT

## Description
As a developer, write a program using JavaScript to decide the budget of a specific team. As a developer, you are assigned to a project. You need to develop a website where program managers of a specific team will add details of professional deals they want to have with vendors. The finance team will check expenses of those teams and will decide their annual budget.

## Steps
1. run `npm install`
2. run `npm start`

## Requirements
- Tasks: 
    - Business Functionality should include:
        - There will be (at least) 2 views: Product Manager View and Finance View. however, no security or login is requried to enforce the distinction).
        - The ability to view, edit, add, and delete vendors. (Product Managers primarily do this)
        - The ability to view, edit, add, and delete deals. It's up to you to decide what this should look like. There may be some kind of "task" or project info.
        - The ability to view, edit, etc cost/budget (Finance Team Members do this).
        - Some test data should be loaded (hardcoded) at page load time in order to have some data to show.
        - Project Managers should be able to edit project details like vendor, name, technology... etc....
        - Finance Team should be able to edit project financials such as project cost.
        - One possibility is to implment some degree of detail around expenses or line-item of budget??? (Optional)
        - As we have no back-end for maintaining state, state only needs to be maintained on the current user view. State maintained between views or session management is not required.
    - Some ways that you can do the two different views: (It's fine that this is a bit artificial):
        - Tabs
        - Separate Pages
        - Toggle Button (toggle views)
        - Simulated "login" page (one user account goes to finance, other one to project)
- Use these Tools:
    - JavaScript: A programming language (All business logic should be implemented in client-side javascript).
    - Git: To connect and push files from the local system to GitHub
    - GitHub: To store the application code and track its versions
    - JavaScript concepts: Functions, prototypes, primitives, objects, IIFEs, promises, async, and webpack
    - Client-Side Javascript libraries such as bootstrap, jquery, angular, react, request, etc are all welcome to be used.
- Requirements:
    - Versions of the code should be tracked on GitHub repositories
    - Team Budget Planner should work properly
    - There is no backend required. There is no database required. All business logic should be implemented in client-side javascript.
    - There is no persistence required, so any test data to be loaded at runtime can simply be hardcoded as javascript / json objects. Any user data can be added interactively, but does not need to persist between sessions.
    - There is no need for security to be implemeted in this project. One can assume that by the time the user is able to access your application that user identy has been authenticated and authorized.
    - There are no specific requirments for the UI other than than it be functional to present the business data to the user.