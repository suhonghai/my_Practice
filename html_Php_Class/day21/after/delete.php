<?php 
	// 获取修改的ID
	$id = $_GET["id"];

	/* 连接数据库，验证用户名与密码是否正确 */
	// 连接服务器
	mysql_connect("localhost:3306", "root", "");
	// 读写库编码
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");
	// 选择数据库
	mysql_select_db("h51710");

	// SQL语句
	$sql = "DELETE FROM users WHERE ids='$id'";
	// 执行SQL语句，返回布尔值
	$result = mysql_query($sql);
	echo '<meta charset="utf-8">';
	if ($result)
		echo "删除成功";
	else
		echo "删除失败";

	mysql_close();
 ?>