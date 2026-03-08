<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Analoge klok</title>
    <link rel="stylesheet" href="./style.css">
    <script defer src="./script.js"></script> 
</head>

<?php

echo '
<body>

<div id="datum"></div>

<div class="main_container"> 

<div class="big_clock_container">

<div class="big_circle background_clock">

 <hr id="urenwijzer_big">
 <hr id="minutenwijzer_big"> 
 <hr id="secondewijzer_big">
    
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


$places=['Queenstown (NZ)', 'Beijing', 'Rio de Janeiro', 'Lima', 'San Francisco'];

for ($i=0; $i < 5; $i++) {

echo '

<div class="container_clock_label">

<div id="clock'.$i.'" class="small_clock_container">

<div class="small_circle background_clock">

 <hr id="urenwijzer_small'.$i.'">
 <hr id="minutenwijzer_small'.$i.'"> 
 <hr id="secondewijzer_small'.$i.'">

</div>
</div>
<div id="place">'.$places[$i].'</div>
</div>';
}
?>

</div>
</div>

</body>
</html>