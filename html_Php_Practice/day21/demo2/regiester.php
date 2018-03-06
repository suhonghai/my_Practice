<?php
	$username = $_POST["username"];
	$password = $_POST["password"];
	$email= $_POST["email"];
	//连接服务器
	mysql_connect("localhost:3306", "root",""); 
	//设置读写库编码
	mysql_query("set charset set 'utf8'");
	mysql_query("set names 'utf8'");
	//连接数据库
	mysql_select_db("html1710");
	//创建插入语句
	$sql = "INSERT INTO users(username, password, email)
				VALUES('$username', '$password', '$email')";
	//把数据插入到数据库中
	$result = mysql_query($sql);
	//判断是否注册成功
	echo "<meta charset = 'utf-8'>";
	if($result){
		echo "<script>location = 'success.html';</script>";
	}else{
		echo "<script>alert('注册失败');location = 'regiest.html';</script>";
	}
			
	?>