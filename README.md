# Cookbook Application

**Cookbook** is a test task for **Binary Studio**. Consists of two applications: clintside and RESTfull api.
Client side rendering is used. Front-end app is created with *React*, *Redux* (*src/client*).
For back-end *Node* and *Express* are used to create RESTfull api (*src/server*). *MongoDB* is used as database.

## Development Environment

Dev environment is configured with *Webpack*, *Babel*, *Webpack Dev Server* and *Nodemon*.
*Eslint* is used as a linter. To run both apps in development mode install all dependencies and
run *npm run dev*. Go to http://localhost:3000.

## Production
To run **Cookbook** in production mode, run *npm run build* to build the project and then *npm start* to
run the server. Go to http://localhost:8080.
