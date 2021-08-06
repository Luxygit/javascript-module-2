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
//var booksCover = ["https://upload.wikimedia.org/wikipedia/commons/f/f3/Open_book_01.svg", "https://upload.wikimedia.org/wikipedia/en/f/fb/Le_Livre_d%27image.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Books-aj.svg_aj_ashton_01.svg/800px-Books-aj.svg_aj_ashton_01.svg.png"]
//var number = 0



function exerciseThree(books) {
  //setting the ul parents
  var listCreate = document.createElement("ul");
  content.appendChild(listCreate);
  var listCont = document.querySelector("ul:nth-of-type(2)")

books[0].coverArt = "https://upload.wikimedia.org/wikipedia/commons/f/f3/Open_book_01.svg";
books[1].coverArt = "https://upload.wikimedia.org/wikipedia/en/f/fb/Le_Livre_d%27image.png";
books[2].coverArt = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Books-aj.svg_aj_ashton_01.svg/800px-Books-aj.svg_aj_ashton_01.svg.png";

  //start of foreach
  books.forEach(function (book){
    var paraCont = document.createElement("p");
    var elementCont = document.createElement("li");
//creatig and appending paragraphs and list items
    listCont.appendChild(elementCont) 
    elementCont.appendChild(paraCont)
    paraCont.textContent = book.title + " - " + book.author
//setting and appending img
    var imgCont = document.createElement("img");
    imgCont.src = book.coverArt;
    imgCont.classList.add("img-size")
    elementCont.appendChild(imgCont);    
//setting background class colour to each li element
    if (book.alreadyRead) {
      elementCont.classList.add("orangeBtn")
    }
    else if (book.alreadyRead === false) {
      elementCont.classList.add("greenBtn")
    }
    
  })
//end of foreach


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
