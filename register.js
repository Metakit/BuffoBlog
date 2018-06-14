$("#btn_register_try").on("click", function (e){
	var username = $("#username").val()
	var password = $("#userpass").val()

	$.ajax({
		url:"http://localhost/api/register",
		method:"POST",
		dataType:"JSON",
		data:{
			username:username,
			userpass:password
		}
	})
	.done(function (json) {
		if (json === 0)
			alert("Register Succeed")
		else 
			alert(json.message)
	})
})