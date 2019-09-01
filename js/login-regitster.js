$(function(){
	$(".loginweixi").hide();
	$(".loginphone").hide();
	$(".formrlogin li").click(function(event) {
		var i = $(this).index();
		$(".formrlogin li span").removeClass('formadd');
		$(".formrlogin li span").eq(i).addClass('formadd');
		if(i==0){
			$(".loginweixi").show();
			$(".loginpassword").hide();
			$(".loginphone").hide();
		}else if(i==1){
			$(".loginweixi").hide();
			$(".loginpassword").show();
			$(".loginphone").hide();
		}else{
			$(".loginweixi").hide();
			$(".loginpassword").hide();
			$(".loginphone").show();
		}
	});
})

