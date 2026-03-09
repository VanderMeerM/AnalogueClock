
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

  function showLocalTime(hr, min, sec) {

    /*
    let apiUrl = `https://time.now/developer/api/ip`;
  
  fetch(apiUrl, { method: 'GET' })
      .then((res) => {
       let data = res.json(); 
      return data;
      })
    .then((arraydata) => {
   //let hour = parseInt(arraydata.datetime.split('T')[1].split(':')[0]);


 //let time = new Date().getTime();
*/
 const hour = new Date().getHours();
 const minute = new Date().getMinutes();
 const seconds = new Date().getSeconds(); 

 
 function colorNumbers(id) {
   if (hour >= 6 && hour <= 18) {
    document.getElementById(id).classList.add('clock_number_black');  
    document.getElementById('urenwijzer_big').classList.add('urenwijzer_black'); 
    document.querySelector('.big_circle').classList.add('background_clock_grey'); 

   }
else {
   document.getElementById(id).classList.add('clock_number_white');  
   document.getElementById('urenwijzer_big').classList.add('urenwijzer_white'); 
   document.querySelector('.big_circle').classList.add('background_clock_black'); 
 }
 }

colorNumbers('twee');
colorNumbers('vier');
colorNumbers('vijf');
colorNumbers('acht');
colorNumbers('tien');
colorNumbers('elf');


 document.getElementById(hr).
 style.transform = `rotate(${(hour * 30) + (minute * 0.5)}deg)`;

 document.getElementById(min).
 style.transform = `rotate(${(minute * 6) + (seconds * 0.1)}deg)`;

 document.getElementById(sec).
 style.transform = `rotate(${(seconds * 6)}deg)`;

  document.getElementById('current_date').textContent = 
  dagen[day] + ' ' + date + ' ' + maanden[month] + ' ' + year;

 }

function getAndShowTime(continent, city, clock_id, hr, min, sec) {

const places=['Queenstown (NZ)', 'Beijing', 'Rio de Janeiro', 'Lima', 'San Francisco'];

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

 let date = arraydata.datetime.split('-')[2].split('T')[0];
 let month = arraydata.datetime.split('-')[1];

if (hour >= 6 && hour <= 17) {
   document.getElementById(hr).classList.add('urenwijzer_black'); 
   document.getElementById(clock_id).children[0].classList.add('background_clock_grey'); 

   }

 else {
  document.getElementById(hr).classList.add('urenwijzer_white'); 
  document.getElementById(clock_id).children[0].classList.add('background_clock_black'); 
 }


 document.getElementById(hr).
 style.transform = `rotate(${(hour * 30) + (minute * 0.5)}deg)`;

 document.getElementById(min).
 style.transform = `rotate(${(minute * 6) + (seconds * 0.1)}deg)`;

 document.getElementById(sec).
 style.transform = `rotate(${(seconds * 6)}deg)`;

//console.dir(document.getElementById('clock0').nextElementSibling.textContent);
document.getElementById(clock_id).nextElementSibling.innerHTML = places[clock_id.split('k')[1]] + '<br>' + date + '-' + month
//document.getElementById(clock_id).nextElementSibling.textContent; // + '<br>' + date + '-' + month; 
/*
colorNumbers('twee');
colorNumbers('vier');
colorNumbers('vijf');
colorNumbers('acht');
colorNumbers('tien');
colorNumbers('elf');



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
  
 showLocalTime('urenwijzer_big', 'minutenwijzer_big', 'secondewijzer_big');
//getAndShowTime('Europe', 'Amsterdam', 'urenwijzer_big', 'minutenwijzer_big', 'secondewijzer_big');
getAndShowTime('Pacific', 'Auckland', 'clock0', 'urenwijzer_small0', 'minutenwijzer_small0','secondewijzer_small0');
getAndShowTime('Asia','Shanghai','clock1','urenwijzer_small1', 'minutenwijzer_small1','secondewijzer_small1');
getAndShowTime('America','Sao_Paulo', 'clock2','urenwijzer_small2', 'minutenwijzer_small2', 'secondewijzer_small2');
getAndShowTime('America','Lima', 'clock3','urenwijzer_small3', 'minutenwijzer_small3', 'secondewijzer_small3');
getAndShowTime('America','Los_Angeles', 'clock4', 'urenwijzer_small4', 'minutenwijzer_small4', 'secondewijzer_small4');


setInterval(() => { 
   showLocalTime('urenwijzer_big', 'minutenwijzer_big', 'secondewijzer_big');
  //getAndShowTime('Europe','Amsterdam', 'urenwijzer_big', 'minutenwijzer_big', 'secondewijzer_big');
  getAndShowTime('Pacific','Auckland','clock0','urenwijzer_small0', 'minutenwijzer_small0', 'secondewijzer_small0'); 
  getAndShowTime('Asia','Shanghai', 'clock1', 'urenwijzer_small1', 'minutenwijzer_small1', 'secondewijzer_small1');
  getAndShowTime('America','Sao_Paulo', 'clock2','urenwijzer_small2', 'minutenwijzer_small2', 'secondewijzer_small2');
  getAndShowTime('America','Lima', 'clock3','urenwijzer_small3', 'minutenwijzer_small3', 'secondewijzer_small3');
  getAndShowTime('America','Los_Angeles','clock4', 'urenwijzer_small4', 'minutenwijzer_small4', 'secondewijzer_small4');
}  , 1000);


/* 

Niet meer gebruikte code 

function showTime_small() {
 let time = new Date().getTime();
 let hour = getAndShowTime('Pacific','Auckland');

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

*/