
npm install -g @angular/cli
ng new my-app-name

cd my-app
ng serve --open

ng generate component <component-name>



npm install bootstrap --save
after the installation of Bootstrap 4, we Need two More javascript Package that is Jquery and Popper.js without these two package bootstrap is not complete because Bootstrap 4 is using Jquery and popper.js package so we have to install as well
2) Install JQUERY
   npm install jquery --save
3) Install Popper.js
   npm install popper.js --save
   Now Bootstrap is Install on you Project Directory inside node_modules Folder
   open angular.json this file are available on you angular directory open that file and add the path of bootstrap, jquery, and popper.js files inside styles[] and scripts[] path see the below example
   "styles": [   
   "node_modules/bootstrap/dist/css/bootstrap.min.css",
   "styles.css"
   ],
   "scripts": [  
   "node_modules/jquery/dist/jquery.min.js",
   "node_modules/popper.js/dist/umd/popper.min.js",
   "node_modules/bootstrap/dist/js/bootstrap.min.js"
   ],
   Note: Don't change a sequence of js file it should be like this
   Method 3


Sent from Mail for Windows 10

