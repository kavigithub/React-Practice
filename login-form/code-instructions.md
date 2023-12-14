[Problem Statement]

Develop a pseudo Front End Application which would let the users login and display a message..

[Minimum Requirement] (entry level)

— Design (Try to replicate the wireframe as closely as possible. Ideally pixel perfect)

— Use of Web API to · Authenticate an User https://reqres.in/api/login (https://reqres.in/api/login)

· Pass two parameters in the (POST) request body i.e email and password. "email": "eve.holt@reqres.in",

"password": "cityslicka"

After Successful User Login, In Api response you will be able to get user details including auth token. you will use this token for calling a secure API to get the list of users.

https://reqres.in/api/users (https://reqres.in/api/users)

headers: {

'Authorization': 'Bearer <token>',

‘Content-type’:’application/json’

}

Print the list of users in console

· After login, Should give user friendly error messages (Invalid username /password) or Successfully logged in as Toast/Popup/Inline

— Scaffolding is available here, Fork the repository and start coding! All the best!

Prefer to use standard fetch rather than axios or other libraries as they sometimes have issues with stackblitz. Angular - https://stackblitz.com/edit/wissen-angular-coding-challenge-2022 React - https://stackblitz.com/edit/wissen-react-coding-challenge-2022 React Native - https://stackblitz.com/edit/react-native-web-starter?file=index.js

[Plus Point] (intermediate)

— Usage of libraries (redux, rx, bootstrap etc is allowed)

— Usage of local storage/session storage to auto login on a valid session and logout after 5 mins of non activity

— Unit test cases (jest/jasmine/framework of your choice)

— Show table with list of users that you received instead of printing in conso