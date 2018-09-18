# Getting MEAN Second Edition application code

This is the code for the sample 'Loc8r' application that is built through the course of my book Getting MEAN Second Edition.

Getting MEAN Second Edition is published by Manning, and teaches readers how to develop web applications end-to-end using the MEAN stack with Node 6 and Angular 2. It is currently in early access through the MEAP program, with new chapters being released regularly.

> Note: if you have the First Edition of the book using Node 4 and Angular 1 you need the [First Edition code](https://github.com/simonholmes/getting-MEAN/) instead.

## The application at various stages

There will be named branches for the various states of the code throughout the book:

* `master` **Chapter 3 start**: A blank Express 4.14.0 project
* `chapter-03` **Chapter 3 end**: Creating and setting up a MEAN project
* `chapter-04-views` **Chapter 4 mid-point**: The data is hard coded into views
* `chapter-04` **Chapter 4 end**: Building a static site with Node.js and Express
* `chapter-05` **Chapter 5**: Building a data model with MongoDB and Mongoose
* `chapter-06` **Chapter 6**: Writing a REST API: Exposing your MongoDB database to the application
* `chapter-07` **Chapter 7**: Consuming a REST API: Using an API from inside Express
* `chapter-08` **Chapter 8**: Creating an Angular application with TypeScript
* `chapter-09` **Chapter 9**: Building a Single Page Application with Angular: Foundations
* `chapter-10` **Chapter 10**: Building a Single Page Application with Angular: The next level
* `chapter-11` **Chapter 11**: Authenticating users, managing sessions and securing APIs

## Get the code

Pre-requisites:

* Git installed
* A command line interface capable of running Git commands
* Node v6 installed (don't use 7 as it is unstable)

To get the code for a specific branch:

`$ git clone -b branch-name https://github.com/simonholmes/getting-MEAN-2.git`

Then change into the folder the git clone command will create:

`$ cd getting-MEAN-2`

And finally install the dependencies:

`npm install`
