# CloudApp QA Challenge
This is a E2E test on CloudApp Website. It is a take home project for a position at CloudApp.

## The challenge
Write test automation code that goes to our website ([https://getcloudapp.com/](https://getcloudapp.com/))  
And does the following steps:  
- Sign up  
- Log out  
- Log in  
- Go to settings -> profile and update the avatar

## The approach

I opted for using Cypress for this challenge as its the latest test framework I have been using and I found that it suits well for what was proposed.

Just for example and demonstration I opted using the Page Objects model, even though it is not necessarily needed for this simple example. And there are other models to use with cypress, like the App Actions approach.


## Installation and usage

Clone the repository, then:
```
npm install
```
for headed run:
```
npm run cypress:headed
```
for headless run:
```
npm run cypress:headless
```