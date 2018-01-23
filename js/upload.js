var upload_box = document.getElementById("upload-box");
var upload_btn = document.getElementById("upload-btn");
upload_btn.addEventListener("click",function(){
	mask.style.display = "block";
	upload_box.style.display = "block";		
});
		
var upload_exit = document.getElementById("upload-exit");
upload_exit.addEventListener('click',function(){
	mask.style.display = "none";
	upload_box.style.display = "none";
});