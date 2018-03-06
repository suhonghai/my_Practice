$(function(){
	$(".search :text").keyup(function(){
		// jsonp 接口
		let val = $(this).val(),
			url = `https://suggest.taobao.com/sug?code=utf-8&q=${val}&callback=?`;
		// jQuery 中 $.getJSON(url, function(){})
		/*$.getJSON(url, function(data){
			let html = "";
			data.result.forEach(function(curr){
				html += `<div>${curr[0]}</div>`;
			});
			$(".suggest_info").html(html);
		});*/
		$.ajax({
			type : "get",
			url : url,
			dataType : "jsonp",
			success : function(data){
				let html = "";
				data.result.forEach(function(curr){
					html += `<div>${curr[0]}</div>`;
				});
				$(".suggest_info").html(html);
			}
		});
	});
});