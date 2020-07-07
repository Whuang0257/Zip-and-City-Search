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
