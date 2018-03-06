// 动态加载渲染数据
$(function(){
	// 加载热销商品数据
	$.getJSON("/demo_Practice/mock/hotsell.json", function(data){
		let prod = data.res_body,
			html = `<img src="${prod.img}" class="img-responsive" alt=""/>
					<div class="banner_desc">
						<div style="display:none;">${prod.pid}</div>
						<h1>${prod.title}<h1>
						<h2>${prod.desc}<h2>
						<h5>
							${prod.price}
							<small>Only<small>
						<h5>
						<a href="#" class="btn1 btn4 btn-1 btn1-1b">Add To Cart</a>
					</div>`;
			$("banner_left").html(html);
	});

	// 加载其他所有的Tshirts
	$.getJSON("/demo_Practice/mock/tshirts.json", function(data){
		//渲染模板
		let rendData = {//准备渲染的数据
			products :data.res_body.products
		}
		let html = template("tshirt_template", rendData);//渲染
		//显示
		$(".grid_2").prepend(html);
	});
});


/********************************************/
// 加入购物车
// $(function(){
// 	//事件委派
// 	$(".grid_2").on("click", "a", function(){
// 		//当前选购商品对象
// 		var product = {
// 			pid: $(this).find(".pid").text(),
// 			title: $(this).find(".title").text(),
// 			price: $(this).find(".price").text(),
// 			img: $(this).find(".img").attr("src"),
// 			amount: 1
// 		};
// 		// cookie
// 		$.cookie.json = true;
// 		//先查找cookie中是否已有保存购物车
// 		let _products = $.cookie("products") || [];
// 		_products.push(product);
// 		//重新保存回cookie中
// 		$.cookie("products", _products, {expries:7, path:"/"});
// 		alert("加入成功");
// 		return false;
// 	});
// });
/*****************************************************/
// 加入购物车
$(function(){
	$(".grid_2").on("click", "a", function(){
		//获取当前选购商品信息
		var product = {
			pid: $(this).find(".pid").text(),
			title: $(this).find(".title").text(),
			price: $(this).find(".price").text(),
			img: $(this).find(".img").attr("src"),
			amount: 1
		};
		//cookie
		$.cookie.json = true;
		//先查找cookie中是否已经保存有购物车
		let _products = $.cookie("products") || [],
			index = exist(product.pid, _products);
			if(index ===-1){//新添加商品
				_products.push(product);		
			}else{
				_products[index].amount++;
			}
		
		//保存在cookie中
		$.cookie("products", _products, {expries: 7, path:"/"});
		alert("加入成功");

		/**显示所购的所有商品总价*/
		let sum = 0;
			$.each(_products, function(index, element){
				sum += Number(this.price);
			});
		$(".bag_right p").text(sum);
		return false;
	});

	//查找指定id的商品在数组中的坐标
	function exist(id, products){
		for(let i = 1;i < products.length;i++){
			if(products[i].pid === id)
				return i;
		}
		return -1;
	}
});

/*轮播图*/
$(function(){
	$(".flexslider").carousel({
		imgs: [
			{src:"/demo_Practice/images/banner.jpg",href:"#"},
			{src:"/demo_Practice/images/banner1.jpg",href:"#"}
		],
		width: 855,
		height: 575,
		duration: 3000
	});
});