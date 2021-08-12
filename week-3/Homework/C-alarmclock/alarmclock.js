function setAlarm() {
  let inputedNumbers = document.getElementById('alarmSet');
  let timeRemaining = document.getElementById('timeRemaining');
  let initialTime = inputedNumbers.value;
  inputedNumbers.value = "";

  function setAlarmInternal() {
    timeRemaining.textContent = 'Time Remaining: ' + timeOutputFnc(initialTime);
    initialTime--;
    if (initialTime <= -1) {
      clearInterval(timer);
      playAlarm();
    }
  }

  function timeOutputFnc(time) {
    if (time>=60) {
      var timeParsed= parseInt(time, 10); 
       var minutes = Math.floor(timeParsed / 60);
       var seconds = timeParsed - (minutes * 60);
        return minutes + ":" + seconds;
       }
    else if (time<=59&&time>=10) { return "00:" + time }
    else {return "00:0" + time}
  }
 
  
  let timer = setInterval(setAlarmInternal, 1000);  

  
}


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
