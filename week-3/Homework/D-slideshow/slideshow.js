//
let images = ["https://upload.wikimedia.org/wikipedia/commons/7/76/TapetumLucidum.JPG" ,
    "https://upload.wikimedia.org/wikipedia/commons/b/bb/Kittyply_edit1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Domestic_Cat_Face_Shot.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/1dayoldkitten.JPG"
 ];
let image = document.getElementById('img-ele');

let i = 0;
image.src = images[i];


//setting the manual buttons
document.getElementById('next-button').addEventListener('click', () => { 
    if (i===images.length-1) { 
        i = 0;
        image.src = images[i];
      }
    else {
    i++;
    image.src = images[i];
    }
    
    })
document.getElementById('prev-button').addEventListener('click', () => { 
    if (i===0) { 
        i = images.length-1;
        image.src = images[i];
        
      }
    else {
    i--;
    image.src = images[i];
    
    }
    
    })
//setting input field automation
let iField = document.getElementById('input-field');
let timeInSeconds = iField.value*1000;
 console.log(timeInSeconds);

delayTime= 3000;
 

//setting next automation
function setNextIntervalFnc (){
    
    inter = setInterval( autoNextFnc, delayTime);
}

function autoNextFnc(){
    if (i===images.length-1) { 
        i = 0;
        image.src = images[i];
      }
    else {
    i++;
    image.src = images[i];
    }
}

document.getElementById('autonext-button').addEventListener('click', setNextIntervalFnc);

function stopNextFnc () {clearInterval(inter) };
document.getElementById('stop-button').addEventListener('click',stopNextFnc);

//setting prev automation 

function setPrevIntervalFnc (){
    inter = setInterval( autoPrevFnc, delayTime)}

function autoPrevFnc(){
    if (i===0) { 
        i = images.length-1;
        image.src = images[i];
        
      }
    else {
    i--;
    image.src = images[i];
    
    }
}

document.getElementById('autoprev-button').addEventListener('click', setPrevIntervalFnc);

function stopNextFnc () {clearInterval(inter) };
document.getElementById('stop-button').addEventListener('click',stopNextFnc);

