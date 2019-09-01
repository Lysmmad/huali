$(function(){
	$(".bigshowdetaill li").hide();
	$(".bigshowdetaill li").eq(0).show();
	var i;
	$(".smallshowdetaill li").hover(function() {
		i = $(this).index();
		$(".bigshowdetaill li").eq(i).show().siblings('').hide();
		$(".smallshowdetaill li").eq(i).css('border', '1px solid #fe7a24').siblings('').css('border', '');;
		$(".smallshowdetaill li").children('').css('border', '');
		$(".smallshowdetaill li").eq(i).children('').css('border', '1px solid #fe7a24');
	});

	$(".showdetailrprice ul li").hover(function() {
		var x = $(this).index();
		$(".showdetailrprice ul li").eq(x).css('border', '2px solid #fe7a24').siblings('').css('border', '2px solid #d9d9d9');
		$(".showdetailrprice ul .addchose").css('border', '2px solid #fe7a24');
	},function(){
		$(".showdetailrprice ul li").css('border', '2px solid #d9d9d9');
		$(".showdetailrprice ul .addchose").css('border', '2px solid #fe7a24');
	});

	$(".chooseaddress").hide();
	$(".showdetailrdetail p span").hover(function() {
		$(this).css('border', '1px solid #ccc');
		$(this).css('border-bottom', '1px solid #fff');
		$(".chooseaddress").show();
	}, function() {
		$(".chooseaddress").hide();
		$(this).css('border', '');
	});

	$('.appbuy').hide();
	$('.applogo1').hover(function() {
		$(this).css('border', '1px solid #ccc');
		$(this).css('border-bottom', '1px solid #fff');
		$('.appbuy').show();
	}, function() {
		$(this).css('border', '1px solid #f7f7f7');
		$('.appbuy').hide();
	});
	$('.weixibuy').hide();
	$('.applogo2').hover(function() {
		$(this).css('border', '1px solid #ccc');
		$(this).css('border-bottom', '1px solid #fff');
		$('.weixibuy').show();
	}, function() {
		$(this).css('border', '1px solid #f7f7f7');
		$('.weixibuy').hide();
	});

	$('.aboutUsnow li').eq(0).children('span').css('background-position', '0px 60px');
	$('.aboutUsnow li').hover(function() {

		var a = $(this).index();
		i = a*60;
		$(".aboutUsnow li span").css('background-position', '');
		$(".aboutUsnow li p").css('color', '#737373');
		$(this).children('p').css('color', '#ff6600');
		$(this).children('span').css('background-position', -i+'px 60px');
		$(".aboutUsnowimg li").eq(a).css('z-index', '2').siblings('').css('z-index', '');
	});

	$(".shearder").hide();
	$(window).scroll(function(event) {
		var h = $(window).scrollTop();
		console.log(h)
		if (h>1100) {
			$(".shearder").show();
		}else{
			$(".shearder").hide();
		}
	});
})