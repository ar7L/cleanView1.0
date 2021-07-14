let btns = document.querySelectorAll(".btn-light");
console.log(btns.length);
for(let btn of btns){
	btn.addEventListener("mouseenter",()=>{
		btn.classList.add('animate__animated');
		btn.classList.add('animate__shakeX');

		console.log(btn);
	});
	btn.addEventListener("mouseleave",()=>{
		btn.classList.remove('animate__animated');
		btn.classList.remove('animate__shakeX');
		console.log(btn);
	});
}