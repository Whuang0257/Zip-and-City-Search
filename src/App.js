import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
      (fetch('http://ctp-zip-api.herokuapp.com', {
        method: 'post',
          headers: {
            'Content-type': 'application/json'
          },
              body: JSON.stringify( {
                State: "state"
              })
          })
              .then(res => {
                  return res.json()
              })
              .then(data => console.log(data))
              .catch(error => console.log('Error'))
      )

    function zipcode(e){
        let api = 'http://ctp-zip-api.herokuapp.com/zip/';
        api = api + e.target.value;

        fetch(api)
            .then(res => res.json())
            .then(data => {
                for(let i = 0; i< data.length; i++) {
                let obj = data[i];
                let newDiv = document.createElement('div');
                newDiv.className = "divResult";
                let finalDiv = document.getElementById('final');
                finalDiv.innerHTML = "Results for zipcode:";
                newDiv.innerHTML =
                    obj.City + ", " + obj.State +
                    "</br></br> " +
                    "State: " + obj.State +
                    "</br>Location:(" + obj.Lat + obj.Long + ")" +
                    "</br>Population(estimated): " + obj.EstimatedPopulation +
                    "</br>Total Wages: " + obj.TotalWages +
                    "</br>";

                finalDiv.appendChild(newDiv);
            }})
            .catch(error => {
                let el = document.getElementById('final');
                while ( el.firstChild ) el.removeChild( el.firstChild );
                if (el.innerHTML === "") {
                    el.innerHTML = "No results for Zipcode"
                }
            })
    }

    function city(e){
        let api = 'http://ctp-zip-api.herokuapp.com/city/';


        api = api + e.target.value.toUpperCase();

        fetch(api)
            .then(res => res.json())
            .then(data => {
                    let newDiv = document.createElement('div');
                    newDiv.className = "divResult";
                    let finalDiv = document.getElementById('city');
                    finalDiv.innerHTML = "Results for city";
                    let text = "";
                    for(let i = 1; i< data.length; i++) {
                        text += data[i];
                        text += "</br>";
                    }
                    newDiv.innerHTML = text;
                    finalDiv.appendChild(newDiv);
                })
            .catch(error => {
                let el = document.getElementById('city');
                while ( el.firstChild ) el.removeChild( el.firstChild );

                if (el.innerHTML === "") {
                    el.innerHTML = "No results for City"
                }
            })

    }

    return(
        <div>
            <input type="text" id="box" placeholder="Zip code" onChange = {zipcode}></input>
            <input type="text" id="box" placeholder="City" onChange = {city}></input>
            <div id = "final">
            </div>

            <div id = "city">
            </div>
        </div>
    )
}

export default App;
