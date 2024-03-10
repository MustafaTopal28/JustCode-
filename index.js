//Hello World!

function displayCurrentHour () {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let currentHour = hour + ":" + minutes + ":" + seconds;

    console.log("Current time : " + currentHour)
}

displayCurrentHour()