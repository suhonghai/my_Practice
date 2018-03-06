// $(function(){
// 	//加载头部
// 	$.ajax({
// 		url:"/demo_Practice/html/include/header.html",
// 		type: 'get',
// 		success: function(data){
// 			$(".container").prepend(data);
// 			//加载header.js文件
// 			$.getScript("/demo_Practice/js/header.js");
// 			//判断是否有登录成功的用户
// 			$.cookie.json = true;
// 			let user = $.cookie("loginUser");
// 			if(user){
// 				$(".rejister-info a").text(user.firstname).attr("href", "userinfo.html");
// 			}
// 		}
// 	});
// 	//加载尾部
// 	$(".footer").load("/demo_Practice/html/include/footer.html");
// 	// $.ajax({
// 	// 	url: "/demo_Practice/html/include/footer.html",
// 	// 	type: "get",
// 	// 	success: function(data){
// 	// 		$(".grid_3").after(data);
// 	// 	},
// 	// });
// });


$(function(){ // ready()
	// 加载头部
	$.ajax({
		url : "/demo_Practice/html/include/header.html",
		type : "get",
		success : function(data){
			$(".container").prepend(data);
			// 加载 header.js 文件
			$.getScript("/demo_Practice/js/header.js");
			// 判断是否有登录成功的用户信息
			$.cookie.json = true;
			let user = $.cookie("loginUser");
			if (user) {
				$(".register-info a").text(user.firstname)
						.attr("href", "userinfo.html");
			}
		}
	});
	// 加载尾部
	$.get("/demo_Practice/html/include/footer.html", function(data){
		$(".content_box").append(data);
	});
});