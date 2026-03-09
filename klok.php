<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Cookie&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap" rel="stylesheet">
    <title>Analoge klok</title>
    <link rel="stylesheet" href="./assets/style.css">
    <script defer src="./assets/script.js"></script> 
</head>

<?php

echo '
<body>

<div id="knoppen">';
 /*
        <img src="./assets/sound_on.png" onclick="playtick()">
        <br>
        <img src="./assets/sound_off.png" onclick="mutetick()">
        */

echo '
</div>


<div class="main_container"> 

<div class="big_clock_container">

<div class="big_circle">

 <hr id="urenwijzer_big">
 <hr id="minutenwijzer_big"> 
 <hr id="secondewijzer_big">

 <div id="current_date"></div>
    
 <div id="twee">deux</div>
 <div id="vier">4</div>
 <div id="vijf">V</div>
 <div id="acht">ocho</div>
 <div id="tien">X</div>
 <div id="elf">11</div>

</div>

</div>

<div class="container_small_clocks">';


/*include('./getHour.php'); 

getHourTimezone();
*/


for ($i=0; $i < 5; $i++) {

echo '

<div class="container_clock_label'.$i.'">

<div id="clock'.$i.'" class="small_clock_container">

<div class="small_circle">

 <hr id="urenwijzer_small'.$i.'">
 <hr id="minutenwijzer_small'.$i.'"> 
 <hr id="secondewijzer_small'.$i.'">

</div>
</div>
<div id="place"></div>
</div>';
}
?>

</div>
</div>

</body>

   <audio id="tick">
        <source src="./assets/tick.wav" type="audio/ogg">
    </audio>

</html>