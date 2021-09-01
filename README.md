# Crime Levels
 Website created for the purpose of interview

# How to run?
1. Clone repository and launch it in VS Code.
2. Open terminal in folder 'crime-level'.
3. Run the command in terminal 'npm install' to install all dependencies.
4. When installation is completed run 'npm run serve' in terminal
5. Open 'http://localhost:8080' in your browser

# Explanation
- Components:
    - Chart: rendering chart component which extends Bar and creating Char component for implementing graphical representation of committed crimes within the cities
    - Footer: rendering footer component to the main app
    - NavBar: rendering navigation component to the main app
    - NewsBox: rendering crimes data component to Crime page which displaying in list committed crimes in the cities
- router: navigation within the application
- style: include global variables for scss styling
- vies:
    - About: about page including general information
    - Crimes: page including NewsBox and Chart for displaying chart data
    - Home: main page of the application
- App: core of the application
- main.js:creating vue application

# Application has not been build and is still in development process

# Tips:
- API is causing some issues in Crimes page and changing date to 07/2021 and down will fix the issue;
- console is displaying errors when fetching data from API due source not having set up Allowed-Origin in headers

Thank you and please enjoy :)