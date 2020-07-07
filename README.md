The Zip and City search API (ctp-zip-api)
http://ctp-zip-api.herokuapp.com/

For this project we will be developing two simple applications, (1) the first app allows us to search for City names and details for a given zip code, and (2) the second app allows us to find all of Zip codes associated with a given City name.

Below is a description of the relevant API endpoints for the projects:

/zip/:zipcode - find Cities associated with a zipcode
http://ctp-zip-api.herokuapp.com/zip/:zipcode

provide the zipcode in the url and you will receive a JSON response with an array containing an object for each city found.

http://ctp-zip-api.herokuapp.com/zip/10016

/city/:cityname - find Zip Codes associated with a city name
http://ctp-zip-api.herokuapp.com/city/:cityname

:cityname must be in all caps

provide the city name in the url and you will receive a JSON response with an array containing a list of all zip codes for that city:

http://ctp-zip-api.herokuapp.com/city/SPRINGFIELD

Groups and submission
Due 7/7/20 at 2PM. To submit, please send a link to your github repo via Slack, as well as the names of the group members you worked with. You can work by yourself, or in groups of 2 or 3.

Project 1: Zip Code Search app
In this project you will build a simple Zip Code search app. We will need an input field where the user can enter a zip code, like in the following image:

Before Search
We will use the user input to search the ctp-zip-api. If the zip code is valid the API will respond with an object for each city. Use that response to display each city in a separate div like in the following image:

After Search
Getting started
To get started run the following commands

create-react-app zip-search
cd city-search
npm start
At this point you should see the React hello world page running on your browser. You should leave it running in the background while you work on this project.

Project 2: City Search app
In this project we will allow the user to provide us a City name and we will display all of the associated zip codes to the user.

To get started run the following commands

create-react-app city-search
cd city-search
npm start
Using the same API as project 1, we will build a City search app, where given a city name, we will display all returned zip codes.

Primary Tasks
Using the same ctp-zip-api we used in project 1:

Implement a City Search field that takes city names
it should allow city names to be entered in upper, lower, or mixed case letters
Display all zip codes received from the API
