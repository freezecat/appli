<?php

$postdata = file_get_contents("php://input");
//$request = json_decode($postdata);

//file_put_contents('liste.txt','$request');

file_put_contents('liste.json',$postdata);

 ?>