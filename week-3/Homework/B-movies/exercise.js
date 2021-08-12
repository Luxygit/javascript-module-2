/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];


/*Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"
*/
// create showMovies function 
function showMovies () {
  
  let parentDiv = document.getElementById("all-movies");
  let movieNumberField = document.getElementById("movies-number");
  movieNumberField.textContent = movies.length
  
  movies.map((mov) => {
  let newParagraph = document.createElement("p");
  newParagraph.classList.add("name-of-films");
  newParagraph.textContent = mov.title + " - " + mov.director;
  parentDiv.appendChild(newParagraph)})
};

//setTimeout(showMovies, 1000);

/* Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?*/
// create a new movie object for your favorite movie

let favFilm = {
    title: "Pokemon",
    director: "Dr. Oak",
    type: "Fantasy",
    haveWatched: true,
  };

// create addMovies function

function addMovies (newMov) { movies.push(newMov) };

setTimeout(addMovies, 2000, favFilm);
setTimeout(showMovies, 2000);
/*
Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks
*/

function logFnc () {movies.map(x => console.log(x.title + x.director)) };
logFnc();
setTimeout(logFnc, 2000);
/*
Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3
*/
let newForm = document.createElement("form");
let parentDiv = document.getElementById("main");
let body = document.querySelector("body")

let newInputTitle = document.createElement("input");
newInputTitle.setAttribute("placeholder", "Title");
let newInputDirector = document.createElement("input");
newInputDirector.setAttribute("placeholder", "Director");
let newInputType = document.createElement("input");
newInputType.setAttribute("placeholder", "Type");
let newInputWatched = document.createElement("input");
newInputWatched.setAttribute("placeholder", "Watched?");
let saveButton = document.createElement("button");


parentDiv.appendChild(newForm);
newForm.appendChild(newInputTitle);
newForm.appendChild(newInputDirector);
newForm.appendChild(newInputType);
newForm.appendChild(newInputWatched);
newForm.appendChild(saveButton);
saveButton.textContent = "Save";


saveButton.addEventListener('click', (e) => {
 	   	e.preventDefault();
   		const titleInInput = newInputTitle.value.trim();
      const directorInInput = newInputDirector.value.trim();
      const typeInInput = newInputType.value.trim();
      const watchedInInput = newInputWatched.value.trim();
      
      const movieFromForm = {
            title: titleInInput,
            director: directorInInput,
            type: typeInInput,
            haveWatched: watchedInInput,
            };


addMovies (movieFromForm);
document.querySelector("form").reset();
document.querySelectorAll('.name-of-films').forEach(e => e.remove()); //im proud of myself//
showMovies();
 
})
