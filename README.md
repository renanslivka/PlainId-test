# PlainID Junior Frontend Assignment - React

## Prerequisites
You need the following stuff installed on your computer to complete this assignment:
* [node.js](https://nodejs.org)

##  Getting started
All commands should be run from this projects root directory.
1. Run `npm install && npm start` 
2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The web application will update automatically when the source files changes.

##  Task
This project contains an unfinished Registration page - react web application.
Complete the following Tasks to help us finish it:

1. After the application initialized, data should be fetched (using the **fetchData** function from the service file), loaded into the app state and used as the form fields (only firstName & lastName) initial values.
2. While preparing the data, an **ActivityIndicator** should be displayed on the screen.
3. On **Department** field change: **Title** field options should be loaded asynchronously based on the department value (using the **fetchTitlesByDepartment** function from the service file).
4. On submit: the **saveData** function from the service file should be called. If  success = true the form fields data should be displayed in an alert message.
5. Install the [material-ui](https://github.com/mui-org/material-ui) package and replace existing app components with **TextField**, **Select**, **Input**, **CircularProgress** using the *outlined* style/variant where possible.
6. **BONUS**: Add your own touch and style/align the application to make it look better.

*Service file is located in '/services/dataService'