# NBA Stats API Backend
An interface for working with the NBA Stats API.

##Setup
There are a few files that are not included in the repo that this application needs in order to run. These files are excluded for a variety of reasons, including security and to make things easier for the dev team.

1) Make sure node.js and npm are installed.
2) Navigate to the project directory in your console and type "npm install"
3) Go to the "config" directory and copy "development.json.sample" twice. Name one "development.json" and the other "production.json".
4) Create a "logs" directory in the root directory of the project.
5) Create an "exceptions" directory in the "logs" directory you just created.
6) Navigate to the project directory in your console and type "npm run start" to make sure it works.
7) Use any HTTP agent / browser to navigate to "http://localhost:3001/api/". If you see a message, you're good!