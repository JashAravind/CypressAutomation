# cypressautomation

Clone Repo
git clone https://github.com/JashAravind/cypressautomation.git

Cypress Installation
Before installing cypress , check system requirements - https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements

npm installation
go to working folder and in terminal run npm install

Cypress Test Runner

To invoke cypress test runner and run git.repository.spec.ts follow below steps

Step 1 - Change directory - working folder (Root)
Step 2 - In terminal run "node_modules/.bin/cypress open"
Step 3 - Wait for Cypress test runner
Step 4 - Choose git.repository.spec.ts and click on Run (You can choose which browser it has to run)

Run Cypress through terminal

From terminal run command - npm run test

Reporting , Video Recording

After run is executed through terminal , in working folder mochawesome report will be generated under mochawesome-report , it will contain video recording for all test and if test fails it will have screenshot

Test data

Personal token provided in this framework is dummy(security reason), to see how this framework works follow below steps

1. Create your own personal git repository
2. Generate personal access token (Write and Read access)
3. add those as Enum in location 'cypressautomation/cypress/util/tokenaccess.ts'
