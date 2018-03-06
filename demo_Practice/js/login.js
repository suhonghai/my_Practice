$(function(){
	$(".login_form").submit(function(){
		$.post("/demo_Practice/php/login.php", $(this).serialize(), function(data){
			if(data.res_code === 0){
				//保存登录成功的信息到cookie中
				$.cookie.json = true;//自动调用JSON.stringfly(),JSON.parse()来转换json值
				$.cookie("loginUser", data.res_body, {path:"/demo_Practice"});
				location = "/demo_Practice/index.html"; 
			}
			else{
				$(".error").text("用户名密码错误");
			}
		},"json");
		return false;
	});
});