Node.js on OpenShift
====================================================================
.openshift folder is important for the code to get deployed on open shift.

How to run this app
--------------------
1. npm install -g nodemon
2. npm install
3. nodemon server.js 

Technology stack
-------------------
- Node.js 0.10+
- Express 4.0
- Angular 1.4
- Mongo (only 2.4 available on openshift)

(bower and grunt are used to inject client side dependencies into home.html using following commands.No need to run these when deploying app.Look into grunt.js and .bowerc to get details)

1. bower install
2. grunt.cmd (on windows) / grunt (on linux)




