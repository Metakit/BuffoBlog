$("#btn_login_try").on("click", function (e){
    var username = $("#username").val()
    var password = $("#userpass").val()

    $.ajax({
        url:"http://localhost/api/login",
        method:"POST",
        dataType:"JSON",
        data:{
            username:username,
            userpass:password
        }
    })
    .done(function (json) {
        if (json === 0)
            alert("Login Succeed")
        else 
            alert(json.message)
    })
})