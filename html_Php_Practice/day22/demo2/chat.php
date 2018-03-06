<?php 
	// 允许跨域资源访问
	header("Access-Control-Allow-Origin:*");
	// 获取当前执行动作：send(发送聊天消息)   receive(接收聊天消息)
	$action = $_GET["action"];

//	 echo $actionl;

	// 获取客户端IP地址函数
	function getClientIP()  
	{
		$ip = "Unknow";
		if (getenv("HTTP_CLIENT_IP"))
			$ip = getenv("HTTP_CLIENT_IP");
		else if(getenv("HTTP_X_FORWARDED_FOR"))
			$ip = getenv("HTTP_X_FORWARDED_FOR");
		else if(getenv("REMOTE_ADDR"))
			$ip = getenv("REMOTE_ADDR");
		return $ip;
	}

	/* 连接数据库 */
	$conn = mysql_connect("localhost:3306","root","");
	if (!$conn) {
		die ("error : " . mysql_error());
	}

	/* 指定连接的具体数据库名称 */
	mysql_select_db("h51710", $conn);

	/* 设置向数据库读写数据时的编码 */
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");

	// 判断操作
	if ("receive" == $action) { // 接收聊天数据
		// 查询所有聊天消息的 SQL 语句
		$sql = "SELECT id, nickname, message, ip, createtime FROM chat";
		// 执行查询
		$result = mysql_query($sql);
		// 处理查询结果
		$arr = array();
		while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
			$arr[] = $row;
		}
		// 返回响应
		echo '{"status":1, "message":"success", "data":'. json_encode($arr) .'}';
	} else if ("send" == $action) { // 发送聊天数据
		// 获取发送聊天消息
		$nickname = $_GET["nickname"];
		$message = $_GET["message"];
		$ip = getClientIP();
		// 生成 SQL 语句
		$sql = "INSERT INTO chat (nickname, message, ip) VALUES ('$nickname', '$message', '$ip')";
		// 执行 SQL 语句
		$result = mysql_query($sql, $conn);
		// 判断执行结果
		if ($result) {			
			$sql = "SELECT id, nickname, message, ip, createtime FROM chat WHERE nickname='$nickname' ORDER BY id DESC limit 0, 1";
			$result = mysql_query($sql);
			$row = mysql_fetch_array($result, MYSQL_ASSOC);
			echo '{"status":1, "message":"success", "data":'. json_encode($row) .'}';
		} else {
			echo '{"status":0, "message":"failed", "data":{}}';
		}
	}

	// 关闭数据库连接，释放资源
	mysql_close($conn);
 ?>