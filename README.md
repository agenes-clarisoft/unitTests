# **Unit Test**

##Summary

This is a full stack, AngularJS client, Node Express server utilizing webpack.

##Platform Technologies

*Our frontend uses AngularJS and Angular RouterSummar://github.com/angular/angular


## Installation

Install Node (v6.10.2) (https://nodejs.org/dist/latest-v6.x/) and NPM (v3.10.10) (https://www.npmjs.com/)

Open terminal or command prompt and type node -v to make sure node is installed.

cd into the parent directory of where you want the code to be located

    # git clone https://github.com/agenes-clarisoft/unitTest.git
    # cd unitTest

Point your browser to:

    https://localhost/

## State Organization

This project uses ui-router, as such each page is a state, and all files
for a state are in a directory.

*controller js file
*spec.js unit test
*.html file for partial

```
├── feature
    ├── feature.controller.js
    ├── feature.spec.js
    ├── feature.html
    ├── featuredialogbox
        ├── featuredialogbox.controller.js
        ├── featuredialogbox.spec.js
        ├── featuredialogbox.html

```