<?php 
	// 获取登录用户名与密码
	$username = $_POST["username"];
	$password = $_POST["password"];

	/* 连接数据库，验证用户名与密码是否正确 */
	// 连接服务器
	mysql_connect("localhost:3306", "root", "");
	// 读写库编码
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");
	// 选择数据库
	mysql_select_db("h51710");
	// SQL语句
	$sql = "SELECT id, username, phone, address, score, level, create_time FROM users WHERE username='$username' AND password='$password'";
	// 执行查询，返回查询结果集
	$result = mysql_query($sql);
	// 处理查询结果集，定义变量，保存从查询结果集中读出的数组(一行)
	$row = mysql_fetch_array($result, MYSQL_ASSOC);
	echo "<meta charset='utf-8'>";
	if ($row) {
		echo "登录成功！" . json_encode($row);
	} else {
		echo "登录失败！用户名或密码错误......";
	}

	// 关闭数据库
	mysql_close();
 ?>