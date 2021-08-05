/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(function (obj){ 
      content.innerHTML += '<h1>' + obj.name +'</h1>'
      content.innerHTML += '<h2>' + obj.job +'</h2>'
    })
  }
  

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  content.innerHTML += '<ul><p>Shopping List</p><li>bananas</li><li>peanut butter</li><li>muesli</li> </ul>'
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  var listCreate = document.createElement("ul");
  content.appendChild(listCreate);
  var listCont = document.querySelector("ul:nth-of-type(2)")

  books.forEach(function (book){
    var paraCont = document.createElement("p");
    var elementCont = document.createElement("li");

    listCont.appendChild(elementCont) 
    elementCont.appendChild(paraCont)
    paraCont.textContent = book.title + " - " + book.author

    var imgCont = document.createElement("img");
    imgCont.src = "https://upload.wikimedia.org/wikipedia/en/f/fb/Le_Livre_d%27image.png";
    elementCont.appendChild(imgCont);    

    if (book.alreadyRead) {
      elementCont.classList.add("orangeBtn")
    }
    else if (book.alreadyRead === false) {
      elementCont.classList.add("greenBtn")
    }
    
  })

}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
