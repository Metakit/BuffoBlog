$("#create_article").on("click", function (e){
	var title = $("#edit_header_input").val()
	var content = $("#edit_content_input").val()

	$.ajax({
		url:"http://localhost/api/add",
		method:"POST",
		dataType:"JSON",
		data:{
			title:title,
			content:contene
		}
	})
	.done(function (json) {
		if (json === 0)
		else 
			alert(json.message)
	})
})