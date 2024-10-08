//your code here
function updateClock() {
    const now = new Date();
 
    // Select the hour and minute hand elements
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.min-hand');
 
    // Get the current time
    const mins = now.getMinutes();
    const hour = now.getHours();
 
    // Calculate the rotation degrees for the hour hand
    const hourDegrees = (30 * hour + mins / 2) % 360 + 90;
    const hourRadians = hourDegrees * Math.PI / 180;
 
    // Build the rotation matrix for the hour hand
    let ha = Math.cos(hourRadians);
    let hb = Math.sin(hourRadians);
    let hc = -hb;
    let hd = ha;
    let he = 0;
    let hf = 0;
 
    // Round hour matrix values to six decimal places
    ha = parseFloat(ha.toFixed(6));
    hb = parseFloat(hb.toFixed(6));
    hc = parseFloat(hc.toFixed(6));
    hd = parseFloat(hd.toFixed(6));
    he = parseFloat(he.toFixed(6));
    hf = parseFloat(hf.toFixed(6));
 
    // Apply the matrix transformation to the hour hand
    hourHand.style.transform = `matrix(${ha}, ${hb}, ${hc}, ${hd}, ${he}, ${hf})`;
 
    // Calculate the rotation degrees for the minute hand
    const minuteDegrees = 6 * mins + 90;
    const minuteRadians = minuteDegrees * Math.PI / 180;
 
    // Build the rotation matrix for the minute hand
    let ma = Math.cos(minuteRadians);
    let mb = Math.sin(minuteRadians);
    let mc = -mb;
    let md = ma;
    let me = 0;
    let mf = 0;
 
    // Round minute matrix values to six decimal places
    ma = parseFloat(ma.toFixed(6));
    mb = parseFloat(mb.toFixed(6));
    mc = parseFloat(mc.toFixed(6));
    md = parseFloat(md.toFixed(6));
    me = parseFloat(me.toFixed(6));
    mf = parseFloat(mf.toFixed(6));
 
    // Apply the matrix transformation to the minute hand
    minuteHand.style.transform = `matrix(${ma}, ${mb}, ${mc}, ${md}, ${me}, ${mf})`;
}
 
// Update the clock every minute
setInterval(updateClock, 60000);
 
// Initial call to set the clock hands immediately
updateClock();