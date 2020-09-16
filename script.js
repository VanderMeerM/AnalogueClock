const maanden = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
const dagen = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];

let hour = new Date().getHours();
let day = new Date().getDay();
let date = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear();

let tick = document.getElementById('tick');

function playtick() {
  tick.muted = false;
 
  setInterval(() => {
    tick.play()
  }, 1000);
}

function mutetick() {
  tick.muted = true;
  }

function showTime() {
 let time = new Date().getTime();
 const minute = new Date(time).getMinutes();
 const seconds = new Date(time).getSeconds();

 document.getElementById('urenwijzer').
   style.transform = `rotate(${(hour * 30) + (minute * 0.5)}deg)`;

 document.getElementById('minutenwijzer').
   style.transform = `rotate(${(minute * 6) + (seconds * 0.1)}deg)`;

 document.getElementById('secondewijzer').
   style.transform = `rotate(${(seconds * 6)}deg)`;

  document.getElementById('datum').innerHTML =
    `${dagen[day]} 
    ${date} 
    ${maanden[month]}
    ${year}`;
    
// change background in grey when evening or night 

  if (hour < 6) {
  document.body.style.backgroundColor= "grey"
 } else if (hour >= 18) {
  document.body.style.backgroundColor= "#FF4C00"
 } else {
  document.body.style.backgroundColor = "white"
 }

};

showTime();

setInterval(showTime, 1000);

function selectActiveButton(event) {
let allButtons = document.getElementById('buttons');
let activeClass = allButtons.getElementsByClassName('active')
activeClass[0].classList.remove("active");
event.target.classList.add("active")
}


function showLocalTime() {
selectActiveButton(event)
 hour = new Date().getHours();
 day = new Date().getDay();
 date = new Date().getDate();
 month = new Date().getMonth();
 year = new Date().getFullYear();

 showTime
}

async function setNewTime(continent, city) {
  selectActiveButton(event)
  let apiUrl = `https://worldtimeapi.org/api/timezone/${continent}/${city}`;
      try {
      const res = await fetch(apiUrl, { method: 'GET' });
      const data = await res.json()
      const dateSplit = data.datetime.split('-').splice(0,3).join('-').split('+')[0]
               
     iOSdevices= ['iPad','iPhone','iPod'];

      (iOSdevices.includes(navigator.platform))?
      newTime= (new Date(dateSplit).getTime()-(7200 * 1000)):
      newTime = new Date(dateSplit).getTime()
      
      day= data.day_of_week
      hour = new Date(newTime).getHours()
      date = new Date(newTime).getDate();
      month = new Date(newTime).getMonth();
      year = new Date(newTime).getFullYear();
     
      showTime 
    }
          
    catch(error) {console.log(error)}
  
    
  }
