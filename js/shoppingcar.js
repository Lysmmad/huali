$(function(){
	var c;
	var s;
	$(".shopcarse .select").click(function(event) {
		c = $(this).css("background-image");
		$(this).css('background-image',' url("../images/ico_checkout.png")');
		s =$(this).css("background-image");
		if(c==s){
			$(this).css('background-image',' url("../images/ico_unchecked.png")');
		}else{
			$(this).css('background-image',' url("../images/ico_checkout.png")');
		}
	});

	$(".othercomment").click(function(event) {
		$(this).css({'color': ' #ff6a00','border-bottom':'1px solid #fff','font-weight':'bold','width':'160px'});
		$(".chocolate").css({'color': '','border-bottom':'','font-weight':'','width':'110px'});
	});
	$(".chocolate").click(function(event) {
		$(this).css({'color': ' #ff6a00','border-bottom':'1px solid #fff','font-weight':'bold','width':'130px'});
		$(".othercomment").css({'color': '#737373','border-bottom':'1px solid #ccc','font-weight':'normal','width':'145px'});
	});
})
