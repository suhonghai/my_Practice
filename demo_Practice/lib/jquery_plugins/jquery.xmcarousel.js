 	/**
	*
	*轮播图插件
	*/
;
(function($){
	function Carousel({imgs, width, height, duration}){
		this.imgs = imgs; 
		this.width = width;
		this.height = height;
		this.duration = duration;
		this.currentIndex = 0;
		this.nextIndex = 1;
		this.allImgs = null;
		this.circles = null;
		this.prev = null;
		this.timer = null;
		this.container = null;
	}

	Carousel.prototype = {
		constructor:Carousel,
		init: function(container){//初始化动态生成dom结构
			this.container = container;
			let content = `
				<!-- 图片 -->
				<ul class="imgs"></ul>
				<!-- 小圆点 -->
				<div class="pages"></div>
				<!--向前/向后-->
				<div class="prev">&lt;</div>
				<div class="next">&gt;</div>`;
			//将布局框架结构加入到容器中
			$(container).addClass("xmcarousel").html(content);
			//动态添加图片和小圆点的布局
			let liHtml = "", iHtml = "";
			for(let i = 0, len = this.imgs.length;i < len;i++){
				liHtml +=`<li><a href="${this.imgs[i].href}"><img src="${this.imgs[i].src}"></a></li>`;
				iHtml +=`<i></i>`; 
			}
			$(".imgs", container).html(liHtml);//将li添加到ul中
			$(".pages",container).html(iHtml);//将i添加到div.pages中
			//动态设置布局盒子大小
			$(".imgs, .imgs li", container).css({
				width: this.width,
				height: this.height
			});
			$(".pages", container).css("width", this.width);
			//显示第一张图片
			$(".imgs li:first", container).show();
			$(".pages i:first", container).addClass("current");
			//找出所有轮播图片，小圆点
			this.allImgs = $(".imgs li", container);
			this.circles = $(".pages i", container);
			this.prev = $(".prev", container);
			this.next = $(".next", container);
			//注册时间监听
			this.register();
		},
		move :function(){//轮播切换图片
			//当前显示淡出，即将显示淡入
			this.allImgs.eq(this.currentIndex).fadeOut();
			this.allImgs.eq(this.nextIndex).fadeIn();
			//小圆点样式变换
			this.circles.eq(this.currentIndex).removeClass("current");
			this.circles.eq(this.nextIndex).addClass("current");
			//修改索引
			this.currentIndex = this.nextIndex;
			this.nextIndex++;
			if(this.nextIndex >= this.imgs.length)
				this.nextIndex = 0;
		},
		autoPlay: function(){
			this.timer = setInterval(()=>{
				this.move();
			},this.duration);
		},
		register:function(){
			/*鼠标移入移出容器，停止/重启自动轮播*/
			this.container.hover(()=>{
				clearInterval(this.timer);
			},()=>{
				this.autoPlay();
			});
			//小圆点移入
			let _this = this;
			this.circles.mouseover(function(){
				//获取当前移入小圆点在所有兄弟中的索引
				let index = $(this).index();
				if(_this.currentIndex === index)
					return;
				_this.nextIndex = index;
				_this.move();
			});
			/*向上向下翻页*/
			this.prev.click(()=>{
				this.nextIndex = this.currentIndex-1;
				if(this.nextIndex <0)
					this.nextIndex = this.imgs.length-1;
				this.move();
			});
			this.next.click(()=>{
				this.move();
			});	 		
		}
	};
	$.fn.carousel = function({imgs, width, height, duration}){
		this.each(function(){
			let c = new Carousel({imgs, width, height, duration});
			c.init($(this));
			c.autoPlay();
		});
	}
})(jQuery);
