$(function(){
	$(".banrr li").hover(function() {
		var i = $(this).index();
		$(".banrr li").stop().eq(i).css('left', '-5px').siblings('').css('left', '0px');
	},function() {
		$(".banrr li").css('left', '0px');
	});

	$(".bannerbgul li").eq(0).css('opacity', '1').siblings('').css('opacity', '0');
	$(".bannerbgpot li").eq(0).css('background-color', '#ff6600');
	var timer;
	var n=0;
	bannergo();
	function bannergo(){
		clearInterval(timer);
		timer=setInterval(function(){
		if(n<4){
			$(".bannerbgul li").eq(n).animate({'opacity':'1'}, 1000).siblings('').animate({'opacity':'0'}, 800);
			$(".bannerbgpot li").eq(n).css('background-color', '#ff6600').siblings('').css('background-color', '');
			n++;
			}else{
			n=0;
			}
		},2000)
	}
	

	$(".banner").hover(function() {
		clearInterval(timer);
	}, function() {
		bannergo();
	});
	$(".bannerbg span").hover(function() {
		$(this).css('color', 'white');
	}, function() {
		$(".bannerbg span").css('color', '');
	});
	$(".bannerbg .btnl").click(function(){
		clearInterval(timer);
		if(n==0){
			n=3;
			$(".bannerbgul li").eq(n).animate({'opacity':'1'}, 1000).siblings('').animate({'opacity':'0'}, 800);
			$(".bannerbgpot li").eq(n).css('background-color', '#ff6600').siblings('').css('background-color', '');
		}else{
			n-=1;
			$(".bannerbgul li").eq(n).animate({'opacity':'1'}, 1000).siblings('').animate({'opacity':'0'}, 800);
			$(".bannerbgpot li").eq(n).css('background-color', '#ff6600').siblings('').css('background-color', '');
		}
	});
	$(".bannerbg .btnr").click(function(){
		clearInterval(timer);
		if(n==3){
			n=0;
			$(".bannerbgul li").eq(n).animate({'opacity':'1'}, 1000).siblings('').animate({'opacity':'0'}, 800);
			$(".bannerbgpot li").eq(n).css('background-color', '#ff6600').siblings('').css('background-color', '');
		}else{
			n+=1;
			$(".bannerbgul li").eq(n).animate({'opacity':'1'}, 1000).siblings('').animate({'opacity':'0'}, 800);
			$(".bannerbgpot li").eq(n).css('background-color', '#ff6600').siblings('').css('background-color', '');
		}
	});
	$(".bannerbgpot li").hover(function() {
		n = $(this).index();
		$(".bannerbgul li").stop().eq(n).animate({'opacity':'1'}, 1000).siblings('').animate({'opacity':'0'}, 800);
		$(".bannerbgpot li").stop().eq(n).css('background-color', '#ff6600').siblings('').css('background-color', '');
	}, function() {
		bannergo();
	});


	// 侧导航栏
	$(".sideleft").hide();
	$(".sidecenter li").hover(function() {
		$(this).children('').show();
	}, function() {
		$(".sideleft").hide();
	});
	$(".sidebottom li").hover(function() {
		$(this).children('').show();
	}, function() {
		$(this).children('').hide();
	});


	// 返回顶部
	$(".sidgotop").hide();
	$(window).scroll(function(event) {
		var h = $(window).scrollTop();
		if (h>200) {
			$(".sidgotop").show();
		}else{
			$(".sidgotop").hide();
		}
	});
	$(".sidgotop").click(function(event) {
			$("html,body").animate({scrollTop:0},500)
		});


	// banner的弹出框
	$(".banlfhaver").hide();
	$(".banlfhaveopen").hover(function() {
		$(this).children('').show();
		$(this).css('border', '1px solid #e9e9e9');
		$(this).children('.banlfhd').css('z-index', '6');
	}, function() {
		$(".banlfhaver").hide();
		$(this).css('border', '1px solid #fff');
		$(this).children('.banlfhd').css('z-index', '');
	});
})
