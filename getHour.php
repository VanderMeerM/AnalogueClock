
<?php 

function getHourTimezone($continent = null, $city = null) {


if ( (is_null($continent)) && (is_null($city)) ) {

$cur_url = 'https://time.now/developer/api/ip';
} else {

$cur_url = 'https://time.now/developer/api/timezone/'.$continent.'/'.$city;
}

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => $cur_url,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
));

$response = curl_exec($curl);

$response = json_decode($response, true);

date_default_timezone_set($response['timezone']);

$year = date('Y', $response['unixtime']);
$hour = date('H', $response['unixtime']);
$date = date('d', $response['unixtime']);
$month = date('m', $response['unixtime']);

}

?>
