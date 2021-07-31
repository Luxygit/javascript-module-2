const blueBtn = document.querySelector("#blueBtn");
const orangeBtn = document.querySelector("#orangeBtn");
const greenBtn = document.querySelector("#greenBtn");

const jumbotron = document.querySelector(".jumbotron");
const donate = document.querySelector(".buttons a:first-child");
const volunteer = document.querySelector(".buttons a:nth-child(2)");


blueBtn.addEventListener("click", () => changeColour(`#588fbd`, `#ffa500`, `black`, `white` ));
orangeBtn.addEventListener("click", () => changeColour(`#f0ad4e`, `#5751fd`, `#31b0d5`, `white` ));
greenBtn.addEventListener("click", () => changeColour(`#87ca8a`, `black`, '#8c9c08'));

function changeColour(jumboColour, donateColour, volunteerBack, volunteerText) {
    jumbotron.style.backgroundColor = jumboColour;
    donate.style.backgroundColor = donateColour;
    volunteer.style.backgroundColor = volunteerBack;
    volunteer.style.color = volunteerText;
}

let form = document.querySelector("form");
form.addEventListener("submit", checkUserInput);
let userEmail = document.querySelector("#exampleInputEmail1");
let exampleText = document.querySelector("#example-text-input");
let textArea = document.querySelector("#exampleTextarea");



function checkUserInput(event) {
    event.preventDefault();
    let isEmailValid = userEmail.value.includes("@");
    let isExampleValid = exampleText.value.trim().length > 0;
    let isTextAreaValid = textArea.value.trim().length > 0;
    
    
    if (!isEmailValid)  { 
            userEmail.classList.remove("whiteBackground");
            userEmail.classList.add("redBackground");
    }
    
    if (!isExampleValid)  {
            exampleText.classList.remove("whiteBackground");
            exampleText.classList.add("redBackground");
        
    }
    if (!isTextAreaValid)  {
            textArea.classList.remove("whiteBackground");
            textArea.classList.add("redBackground");
    } 
   

    if (isEmailValid ) {
        userEmail.classList.remove("redBackground");
        userEmail.classList.add("whiteBackground");
        
    }
    if (isExampleValid) {
        exampleText.classList.remove("redBackground");
        exampleText.classList.add("whiteBackground");
        
    }
    if (isTextAreaValid) {
        textArea.classList.remove("redBackground");
        textArea.classList.add("whiteBackground");
        
    }
     if (isEmailValid && isExampleValid && isTextAreaValid) {
         userEmail.value = "";
         textArea.value = "";
         exampleText.value = "";
    alert("Thank you for filling out the form");}
}
