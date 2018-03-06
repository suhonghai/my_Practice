<?php 
	// 获取请求中传递过来的用户名与密码
	$username = $_GET["username"];
	$password = $_GET["password"];
	/*$username = $_POST["username"];
	$password = $_POST["password"];
	$username = $_REQUEST["username"];
	$password = $_REQUEST["password"];*/

	/*echo "输入：username = $username, password = $password";*/

	echo "<meta charset='utf-8'>";
	// 处理......
	if ($username === "admin" && $password === "abc") {
		echo "<script>location.href='success.html';</script>";
	} else {
		echo "<script>alert('注册失败'); location='register.html';</script>";
	}
 ?>