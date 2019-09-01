$(function(){
	$(".item-body input").click(function(event) {
		$(this).css('border', '1px solid #ff6600').siblings('').css('border', '');;
	});
})
