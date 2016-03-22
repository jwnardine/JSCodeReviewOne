# _Jon's Github API Code Review_

#### By _**Jon Nardine**_

## Description

_This is Jon Nardine's first JS code review, which will test his ability to use Javascript, Node, Bower, and API keys. On this page, a user will be able to search for a github user by their username. Upon this action, the user will receive profile information on the searched user, such as their profile, number of followers, number of people the user follows, etc._

## Setup

Please visit this website:

https://github.com/jwnardine/JSCodeReviewOne

Clone the repository onto your desktop using the command _git clone https://github.com/jwnardine/JSCodeReviewOne.git_ Make sure you have Node installed. Then, from the project directory, run the commands _npm install_ and _bower install_.

For this project, you'll need an API key from Github.com. If you do not already have one, signup/sign in to github.com, go to Settings from your profile link in the top right corner. On the left side of the Settings screen is a link to "Personal access tokens". Check none of the boxes and make a request for a new token. Then in the main project directory, create a file called .env, and place the following text inside:

exports.githubKey = "INSERT-YOUR-API-KEY";

This will give you access to the GitHub API. Now run the command _gulp build --production_ and then  _gulp serve_ to have the project run in your browser.

### Technologies Used
* HTML
* CSS
* SCSS
* JavaScript
* jQuery
* Node.js
* bower
* npm

### Legal

Copyright (c) 2016 **_Jon Nardine_**

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
