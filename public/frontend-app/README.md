# FrontendApp

1.Go to: Frontend-test -> public -> frontend-app .
2.Run command "npm install".
3.Change the API IP Address in Frontend-test -> public -> frontend-app -> src -> environments -> environment.ts, or use 'localhost'.
3.To run the app, go to app folder i.e frontend-app folder and run command "ng serve --open". Application will start at http://10.91.0.16:4200/.
  If using IP Address then run "ng serve --host 'your-ip-address'"
 
Q.What URL should be used to access your application?
Ans. http://10.91.0.96:4200/

Q.What libraries did you use to write your application?
Ans. We have used Angular4 at the frontend and backend is in nodeJs

Q.What steps did you take to insure your application was secure?
Ans. We can secure this application by using Access token with every Api Call and Http Authentication.

Q.What steps did you take to make your application user friendly?
Ans.We will go for webpack approach and Bootstrap, Sass  also other UI libraries as per the need of application.

Q.What influenced the design of your user interface??
Ans.The simple and readable component design and non redundant data influences the design of the interface.

Q.What could be done to the front end or back end to make it more secure?
Ans.At the frontend we can minify all of the data like css and js to single minified files and at the backend as discussed above we can use OAuth for secured api.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://10.91.0.96:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
