/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
var para = document.querySelectorAll("p");
console.log(para)
//const paraArray = Array.from(para);
//paraArray.forEach((e) => {
  //  if (e.length = 6) {
  //      console.log(e)}
//})
var firstdiv = document.querySelector("div");
console.log(firstdiv);

var jumboText = document.querySelector("#jumbotron-text");
console.log(jumboText);

var shortP = document.querySelectorAll(".primary-content p");
console.log(shortP);
/*const shortPArray = Array.from(shortP);
shortPArray.forEach((el) => {
    if (el.length = 3) {
        console.log(el)}
})
*/

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", alertFnc);

function alertFnc() {
    alert("Thanks for visiting Bikes for Refugees!")
}



/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var changeColour = document.querySelector("#bgrChangeBtn");
changeColour.addEventListener("click", changeColourFnc);

function changeColourFnc() {
    document.body.style.backgroundColor = "red";
}

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

var addText = document.querySelector("#addTextBtn");
addText.addEventListener("click", addTextFnc);

function addTextFnc() {
    let para = document.createElement("p");
    let parent = document.querySelector("#mainArticles")
    parent.appendChild(para);
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var changeSize = document.querySelector("#largerLinksBtn");

var linksQuery = document.querySelectorAll("a");
var allA = Array.from(linksQuery);

/*changeSize.addEventListener("click", changeSizeFnc);
allA.forEach(function changeSizeFnc() {
    document.allA.style.fontSize = "larger";
    }
    )
*/





/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
addTextFnc


/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
const colourArray = ["red", "black", "blue", "green", "purple"];

function changeColourFnc() {
    document.body.style.backgroundColor = "red";
}

