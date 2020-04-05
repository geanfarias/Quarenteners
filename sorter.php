<?php
include('options.php');

$size = sizeof($options);

echo $options[rand(0, $size - 1)];