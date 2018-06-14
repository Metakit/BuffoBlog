$("#logout_btn").on("click", function (e){

	$.ajax({
		url:"http://localhost/api/logout",
		method:"POST",
		dataType:"JSON",
		data:{
		}
	})
	.done(function (json) {
		if (json === 0)
		else 
			alert(json.message)
	})
})