
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

 const hour = new Date().getHours();
 const minute = new Date().getMinutes();
 const seconds = new Date().getSeconds(); 

 if ( (hour == 6 || hour == 18) && minute == 0 && seconds == 0) {
  window.location.reload();
}
 
 function colorNumbers(id) {
   if (hour >= 6 && hour <= 18) {
    document.getElementById(id).classList.add('clock_number_black');  
    document.getElementById('urenwijzer_big').classList.add('urenwijzer_black'); 
    document.querySelector('.big_circle').classList.add('background_clock_grey'); 
    document.getElementById('current_date').style.color = 'black'; 

   }
else {
   document.getElementById(id).classList.add('clock_number_white');  
   document.getElementById('urenwijzer_big').classList.add('urenwijzer_white'); 
   document.querySelector('.big_circle').classList.add('background_clock_black'); 
   document.getElementById('current_date').style.color = 'white'; 

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
      return data;
      })
    .then((arraydata) => {
   let hour = parseInt(arraydata.datetime.split('T')[1].split(':')[0]);
   let time = new Date().getTime();

 const minute = new Date(time).getMinutes();
 const seconds = new Date(time).getSeconds();

 let date = arraydata.datetime.split('-')[2].split('T')[0];
 let month = arraydata.datetime.split('-')[1];

 if ( (hour == 6 || hour == 18) && minute == 0 && seconds == 0) {
 window.location.reload();
}
 
if (hour >= 6 && hour <= 18) {
   document.getElementById(hr).classList.add('urenwijzer_black'); 
   document.getElementById(clock_id).children[0].classList.remove('background_clock_black'); 
   document.getElementById(clock_id).children[0].classList.add('background_clock_grey'); 

   }

 else {
  document.getElementById(hr).classList.add('urenwijzer_white'); 
  document.getElementById(clock_id).children[0].classList.remove('background_clock_grey'); 
  document.getElementById(clock_id).children[0].classList.add('background_clock_black'); 
 }


 document.getElementById(hr).
 style.transform = `rotate(${(hour * 30) + (minute * 0.5)}deg)`;

 document.getElementById(min).
 style.transform = `rotate(${(minute * 6) + (seconds * 0.1)}deg)`;

 document.getElementById(sec).
 style.transform = `rotate(${(seconds * 6)}deg)`;

document.getElementById(clock_id).nextElementSibling.innerHTML = places[clock_id.split('k')[1]] + '<br>' + date + '-' + month

    }) 

    .catch((error) => {
      console.log(error)
    });
        
  }
  
showLocalTime('urenwijzer_big', 'minutenwijzer_big', 'secondewijzer_big');
getAndShowTime('Pacific', 'Auckland', 'clock0', 'urenwijzer_small0', 'minutenwijzer_small0','secondewijzer_small0');
getAndShowTime('Asia','Shanghai','clock1','urenwijzer_small1', 'minutenwijzer_small1','secondewijzer_small1');
getAndShowTime('America','Sao_Paulo', 'clock2','urenwijzer_small2', 'minutenwijzer_small2', 'secondewijzer_small2');
getAndShowTime('America','Lima', 'clock3','urenwijzer_small3', 'minutenwijzer_small3', 'secondewijzer_small3');
getAndShowTime('America','Los_Angeles', 'clock4', 'urenwijzer_small4', 'minutenwijzer_small4', 'secondewijzer_small4');


setInterval(() => { 
  showLocalTime('urenwijzer_big', 'minutenwijzer_big', 'secondewijzer_big');
  getAndShowTime('Pacific','Auckland','clock0','urenwijzer_small0', 'minutenwijzer_small0', 'secondewijzer_small0'); 
  getAndShowTime('Asia','Shanghai', 'clock1', 'urenwijzer_small1', 'minutenwijzer_small1', 'secondewijzer_small1');
  getAndShowTime('America','Sao_Paulo', 'clock2','urenwijzer_small2', 'minutenwijzer_small2', 'secondewijzer_small2');
  getAndShowTime('America','Lima', 'clock3','urenwijzer_small3', 'minutenwijzer_small3', 'secondewijzer_small3');
  getAndShowTime('America','Los_Angeles','clock4', 'urenwijzer_small4', 'minutenwijzer_small4', 'secondewijzer_small4');
}  , 1000);

