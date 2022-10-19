export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}


const database = {
    fish: [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFM4VJF00PCHR79a2v2MDF9aKNl_RxqgieXQ&usqp=CAU",
            name: "Bart",
            species: "Gold Fish" ,
            food: "crustaceans",
            length: 3 + " inches",
            location: "Florida"
        },
        {
            img: "https://static01.nyt.com/images/2022/07/19/science/00tb-lumpfish/00tb-lumpfish-superJumbo.jpg?quality=75&auto=webp",
            name: "Roberta",
            species: "Lump Fish",
            food: "cucumbers",
            length: 4.6 + " centimeters",
            location: "Madagascar"

        },
        {
            img: "https://cdn.britannica.com/07/162207-050-3D35600C/Puffer-Fish.jpg",
            name: "Charlay",
            species: "Puffer Fish",
            food: "coffee",
            length: 7 + " Feet",
            Location: "Virgin Islands"
            


        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Sunfish2.jpg/1200px-Sunfish2.jpg",
            name: "Loretta",
            species: "SunFish",
            food: "dead",
            length: 5.4 + " inches",
            location: "Argentina"


        }
    ]
}

// const database = {
//     tourDates: [
//       {
//         id: 1,
//         cityId: 2,
//         date: "05/25/2022",
//         time: "8:00 PM",
//         venue: "Northern Auditorium",
//         opener: 5
//       },
//       {
//         id: 2,
//         cityId: 5,
//         date: "05/28/2022",
//         time: "6:30 PM",
//         venue: "Winter Arena",
//         opener: 1
//       },

//step 1: export the openers from database
//step 2: import openers from database
//step 3: invoke the function that gets the openers and store in a variable
//step 4: create a function skeleton
//step 5: declare a variable to store empty html string
//step 6: for...of loop to iterate over openers
//step 7: add to the html string (in other words +=)
//step 8: return html string

// export const getOpeners = () => {
//     return database.openers.map((openerObject) => ({ ...openerObject }));
//   };
  

// index .js
// import { openerFunHTML } from "./bands.js";

/* 
  Responsibility:

  Invoke all of the functions that generate HTML and then use `console.log` 
  to output the resulting HTML strings to the console panel.
*/

// {/* <h1>Beyonce World Tour Dates</h1>
// <ol>
//   <li></li>
//   <li>Generate an ordered list of cities as HTML</li>
//   <li>Generate a list of tour dates that includes city and opening band as HTML</li>
// </ol>
// `; */}

// const beyonceTourDate = () => {
//   let html = `<h1>Welcome to Beyonce World Tour Dates</h1>`;
//   html += openerFunHTML();
//   return html;
// };

// const parentHTMLElement = document.querySelector("#app");
// parentHTMLElement.innerHTML = beyonceTourDate();
