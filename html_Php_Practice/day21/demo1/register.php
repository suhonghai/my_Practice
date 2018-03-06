<?php
	$name = $_GET["username"];
	$password = $_GET["password"];
	echo "<meta charset = 'utf-8'/>";
	if($name ==="abc" && $password ==="abc"){
		echo "<script>location = 'success.html';</script> ";
	}
	else{
		echo "<script>alert('请重新输入：');location='register.html';</script>";
	}
	?>