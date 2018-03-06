<?php
	$username = $_POST["username"];
	$password = $_POST["password"];
	mysql_connect("localhost", "root", "");
	mysql_slect_db("users");
	
	?>