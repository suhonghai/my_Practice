<?php
	//连接服务器
	mysql_connect("localhost","root","");
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");
	//连接数据库
	mysql_select_db("users");
	//查找语句
	$sql = "select * from user";
	//查找
	$result = mysql_query($sql);
	//定义数组
	$arr = array();
	?>