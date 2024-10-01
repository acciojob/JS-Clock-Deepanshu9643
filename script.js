//your code here
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

   
    const secondDegrees = ((seconds / 60) * 360) + 90; // Offset for CSS rotation
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90; // Offset for CSS rotation
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90; // Offset for CSS rotation

    document.querySelector('.second-hand').style.transform = `rotate(${secondDegrees}deg)`;
    document.querySelector('.min-hand').style.transform = `rotate(${minuteDegrees}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate(); 
