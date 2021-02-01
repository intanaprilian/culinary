import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';

console.log('Hello Coders! :)');
const restaurantListElement = document.querySelector("restaurant-list");

//var data = require('../DATA.json')
//console.log(data);
//const urlPict = JSON.stringify(data.restaurants[0].pictureId);
// 'use strict';
// const fs = require('fs');
// const json_data = require('../DATA.json');

// fs.readFile(json_data, 'utf8', function (err, data) {
//     try {
//         data = JSON.parse(data);
//         console.log(data);
//         // for (let i in data){
//         // console.log('Name:',data[i].name)
//         // }
//     } catch (e) {
//         // Catch error in case file doesn't exist or isn't valid JSON
//     }
// });

console.log(data.restaurants[0].pictureId);
restaurantListElement.setAttribute("class", "grid");
restaurantListElement.innerHTML = "";
data.restaurants.forEach(restaurant => {
    const list = document.createElement("article");
    list.innerHTML = `
    <img src=${restaurant.pictureId} alt="Poster">
    <div class="text">
        <h3>${restaurant.name}</h3></br>
        <p>${restaurant.description}</p>
    </div>
    `;
    restaurantListElement.appendChild(list);
    //restaurantListElement.innerHTML = `<img class="card-img-top art" src=${pictureId} alt="Poster"> ${pictureId}`
})

// JSON.parse(data.restaurants.forEach(re => {
//     restaurantListElement.innerText = restaurants.pictureId;
//     //restaurantListElement.innerHTML = `<img class="card-img-top art" src=${pictureId} alt="Poster"> ${pictureId}`
// }))

// restaurantListElement.innerHTML = `<img class="card-img-top art" src=${urlPict} alt="Poster"> ${JSON.stringify(data.restaurants.pictureId)}`
// JSON.stringify(data.restaurants.forEach.pictureId);

// fetch("../styles/DATA.json")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         //restaurantListElement.innerText = JSON.stringify(data);
//     })