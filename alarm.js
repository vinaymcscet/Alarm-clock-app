console.log("Alarm Clock");

// You have to create an alarm clock in Javascript
// Alow user to set alarm for a certain time

// add an event listener to the submit button
const alarmSubmit = document.getElementById('alarmSubmit');
var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');


alarmSubmit.addEventListener('click', setAlarm);

// functions to play the alarm ringtone
function ringBell() {
    audio.play();
}
//   this function will run whenever alarm is set from the ui
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    // debugger;
    console.log(alarm.value);
    let feedback = document.getElementsByClassName('invalid-feedback')[0];
    if (alarm.value == NaN || alarm.value == '') {
        console.log("This is not an valid Date. Alarm cannot be Set right now");
        feedback.style.display = "block";
        feedback.innerHTML = 'This is not an valid Date. Alarm cannot be Set right now';
    } else {
        console.log(`Setting Alarm for ${alarmDate}...`);
        feedback.style.display = "none";
        now = new Date();
        let timeToAlarm = alarmDate - now;
        console.log(alarmDate - now);
        if (timeToAlarm >= 0) {
            setTimeout(() => {
                console.log("Ringing now");
                ringBell();
            }, timeToAlarm);
        }
    }
}