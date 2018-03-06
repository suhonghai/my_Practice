<?php 
	// 获取注册的用户名、密码、电话、地址
	$username = $_POST["username"];
	$password = $_POST["password"];
	$phone = $_POST["phone"];
	$address = $_POST["address"];

	/* 向数据库中保存注册的用户信息 */
	// 连接服务器
	mysql_connect("localhost:3306", "root", "");

	// 设置读写库编码
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");
	// 选择数据库
	mysql_select_db("h51710");
	// 创建插入语句
	$sql = "INSERT INTO users (username, password, phone, address) VALUES('$username', '$password', '$phone', '$address')";
	// 执行SQL语句，返回执行结果，true表示执行成功，false表示执行失败
	$result = mysql_query($sql);
	echo "<meta charset = 'utf-8'>";
	// 判断是否注册成功
	if ($result) {
		echo "<script>location='success.html';</script>";
	} else {
		echo "<script>alert('注册失败');location='register.html';</script>";
	}

	// 关闭数据库连接
	mysql_close();
 ?>