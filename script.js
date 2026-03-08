const maanden = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
const dagen = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];

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


function getTimeFromTimeZone(continent, city, hr, min, sec) {

let apiUrl = `https://time.now/developer/api/timezone/${continent}/${city}`;
  
  fetch(apiUrl, { method: 'GET' })
      .then((res) => {
       let data = res.json(); 
       //const dateSplit = data.datetime.split('-').splice(0,3).join('-').split('+')[0]
      return data;
      })
    .then((arraydata) => {
   let hour = parseInt(arraydata.datetime.split('T')[1].split(':')[0]);
   let time = new Date().getTime();

 const minute = new Date(time).getMinutes();
 const seconds = new Date(time).getSeconds();

 document.getElementById(hr).
 style.transform = `rotate(${(hour * 30) + (minute * 0.5)}deg)`;

 document.getElementById(min).
 style.transform = `rotate(${(minute * 6) + (seconds * 0.1)}deg)`;

 document.getElementById(sec).
 style.transform = `rotate(${(seconds * 6)}deg)`;

/*
  document.getElementById('datum').textContent =
   `${dagen[day]} 
    ${date} 
    ${maanden[month]}
    ${year}`;
*/

// change background in red when evening or grey when night 

 /*     
if 
 (hour < 6) {
 document.querySelector('.big_circle').style.backgroundColor= "black";
 document.querySelector('.big_circle').style.backgroundColor= "black";
  } 
else if
  (hour >= 18) {
 document.querySelector('.big_circle').style.backgroundColor= "#FF4C00";
 document.querySelector('.big_circle').style.backgroundColor= "#FF4C00";
} 
else {
 document.querySelector('.big_circle').style.backgroundColor= "white";
 document.querySelector('.big_circle').style.backgroundColor= "white";
 }
    
     iOSdevices= ['iPad','iPhone','iPod'];

      (iOSdevices.includes(navigator.platform))?
      newTime= (new Date(dateSplit).getTime()-(7200 * 1000)):
      newTime = new Date(dateSplit).getTime()
      
      day= data.day_of_week
      date = new Date(newTime).getDate();
      hour = parseInt(data.datetime.split('T')[1].split(':')[0]); //new Date(newTime).getHours();
      month = new Date(newTime).getMonth();
      year = new Date(newTime).getFullYear();  

     }
    */
    }) 

    .catch((error) => {
      console.log(error)
    });
        
  }
  

getTimeFromTimeZone('Europe', 'Amsterdam', 'urenwijzer_big', 'minutenwijzer_big', 'secondewijzer_big');
getTimeFromTimeZone('Pacific', 'Auckland', 'urenwijzer_small0', 'minutenwijzer_small0','secondewijzer_small0');
getTimeFromTimeZone('Asia','Shanghai','urenwijzer_small1', 'minutenwijzer_small1','secondewijzer_small1');
getTimeFromTimeZone('America','Sao_Paulo', 'urenwijzer_small2', 'minutenwijzer_small2', 'secondewijzer_small2');
getTimeFromTimeZone('America','Lima', 'urenwijzer_small3', 'minutenwijzer_small3', 'secondewijzer_small3');
getTimeFromTimeZone('America','Los_Angeles', 'urenwijzer_small4', 'minutenwijzer_small4', 'secondewijzer_small4');


setInterval(() => { 
  getTimeFromTimeZone('Europe','Amsterdam', 'urenwijzer_big', 'minutenwijzer_big', 'secondewijzer_big');
  getTimeFromTimeZone('Pacific','Auckland', 'urenwijzer_small0', 'minutenwijzer_small0', 'secondewijzer_small0'); 
  getTimeFromTimeZone('Asia','Shanghai', 'urenwijzer_small1', 'minutenwijzer_small1', 'secondewijzer_small1');
  getTimeFromTimeZone('America','Sao_Paulo', 'urenwijzer_small2', 'minutenwijzer_small2', 'secondewijzer_small2');
  getTimeFromTimeZone('America','Lima', 'urenwijzer_small3', 'minutenwijzer_small3', 'secondewijzer_small3');
  getTimeFromTimeZone('America','Los_Angeles', 'urenwijzer_small4', 'minutenwijzer_small4', 'secondewijzer_small4');
}  , 1000);




function showTime_small() {
 let time = new Date().getTime();
 let hour = getTimeFromTimeZone('Pacific','Auckland');

 const minute = new Date(time).getMinutes();
 const seconds = new Date(time).getSeconds();

 document.getElementById('urenwijzer_small').
 style.transform = `rotate(${(hour * 30) + (minute * 0.5)}deg)`;

 document.getElementById('minutenwijzer_small').
 style.transform = `rotate(${(minute * 6) + (seconds * 0.1)}deg)`;

 document.getElementById('secondewijzer_small').
 style.transform = `rotate(${(seconds * 6)}deg)`;
}

//showTime_small();

//setInterval(showTime_small, 1000);

function showLocalTime() {
selectActiveButton(event)
 hour = new Date().getHours();
 day = new Date().getDay();
 date = new Date().getDate();
 month = new Date().getMonth();
 year = new Date().getFullYear();

 showTime
}

async function setNewTime() {
  //selectActiveButton(event)
  //let apiUrl = `https://time.now/developer/api/timezone/${continent}/${city}`;
   let apiUrl = `https://time.now/developer/api/timezone/Pacific/Auckland`;


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
  


function selectActiveButton(event) {
let allButtons = document.getElementById('buttons');
let activeClass = allButtons.getElementsByClassName('active')
activeClass[0].classList.remove("active");
event.target.classList.add("active")
}

