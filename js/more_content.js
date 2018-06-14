function t() {
	/*
	document.getElementById('more-btn').onclick = function(){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "posts.json", true);
		xmlhttp.send();
		xmlhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		        document.getElementById("more_content_addon").innerHTML = xmlhttp.responseText;
		    }
		};
	}
    */
	/*
	request.open("POST", "create.php", true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.send("name=张三&sex=男");
	*/

	var title        = "蜀道难";
	var titleLink    = "./article.html";
	var img          = "./static/matrix.jpg";
	var note         = "噫吁嚱，危乎高哉！蜀道之难，难于上青天！";
	var author       = "Metak";
	var authorLink   = "./user_index.html";
	var datetime     = "发表于 2018-6-2 11:12:03";
	var comments     = "0条评论";
	var commentsLink = "./article.html";

	for (i = 0; i < 5; i++){
		document.getElementById('more_content_addon').innerHTML += '<div class="mod_block"><article class="post"><div class="post_header"><h3 class="post_title"><a class="title_link" href="'+titleLink+'">'+title+'</a></h1></div><div class="post_content"><div class="author_image"><img class="author_img" src="'+img+'"></div><h5 class="post_note">'+note+'</h5></div><div class="post_meta"><a class="post_author" href="'+authorLink+'">'+author+'</a><p class="post_datetime">'+datetime+'</p><a class="post_comments" href="'+commentsLink+'">'+comments+'</a></div></article></div>';
	}
}

