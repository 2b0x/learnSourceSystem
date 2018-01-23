		var mask = document.getElementById("mask");
		var mask_box = document.getElementById("mask-box");
		var login_box = document.getElementById("login-box");
		
		var user=document.getElementById("user");
		user.addEventListener("click",function(){
			mask.style.display = "block";
			mask_box.style.display = "block";
		});
		
		var login = document.getElementById("login");
		login.addEventListener("click",function(){
			mask.style.display = "block";
//			mask_box.style.display = "block";
			login_box.style.display = "block";
		});
		
		var exit = document.getElementById("exit");
		exit.addEventListener("click",function(){
			mask.style.display = "none";
			mask_box.style.display = "none";
		});
		
		var login_exit = document.getElementById("login-exit");
		login_exit.addEventListener("click",function(){
			mask.style.display = "none";
			login_box.style.display = "none";
		});
		
		$(".body-r-nav li").click(function(){
			var _id = $(this).index();
			console.log(_id);
			$(this).addClass('body-r-nav-active').siblings().removeClass('body-r-nav-active');
			$('.body-r-body').find('.video-box').eq(_id).css('display','block').siblings('.video-box').css('display','none');
		});
		
		
