$(function(){
	// 验证注册的邮箱是否被占用
	let isExist = true;
	$(".reg_form :text[name='email']").blur(function(){
		$.getJSON("/demo_Practice/php/check.php", {email: $(this).val()}, function(data){
			if(data.res_body.status === 0){
				isExist = false;
				$(".email_info").text("邮箱可用");
			}
			else{
				isExist = true;
				$(".email_info").text("邮箱已被注册，请重新输入");
			}
		});
	});
	//提交注册表单，注册用户
	$(".reg_form").submit(function(){
		if(!isExist){//邮箱为被占用则提交注册信息
			$.ajax({
				type: "post",
				url: "/demo_Practice/php/register.php",
				data: $(this).serialize(),
				dataType: "json",
				success:function(data){
					console.log(data);
					if(data.res_code === 0){
						//保存注册成功的用户信息到cookie中
						$.cookie.json = true;//自动调用json.parse/json.stringfy
						$.cookie("loginUser", data.res_body, {path:"/demo_Practice"});
						location = "/demo_Practice/index.html";
					}
					else{
						$(".error").tetx("用户注册失败");
					}
				},
			});
		}
		return false;
	});
});