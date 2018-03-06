<?php 
	/* 连接数据库，验证用户名与密码是否正确 */
	// 连接服务器
	mysql_connect("localhost:3306", "root", "");
	// 读写库编码
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");
	// 选择数据库
	mysql_select_db("h51710");

	// SQL 语句
	$sql = "SELECT * FROM users";
	// 执行查询，返回查询结果集
	$result = mysql_query($sql);
	// 处理查询结果集
	$arr = array();
	while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
		$arr[] = $row;
	}
	echo "所有用户：" . json_encode($arr);

	// 关闭连接
	mysql_close();
 ?>