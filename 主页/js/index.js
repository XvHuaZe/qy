

{
	let pagers=document.querySelectorAll(".shouye");
	let n=0
	console.log(pagers);
	pagers.forEach(function(){
		n++
		n.onmouseover=function(){
			for(let i=0;i<pagers.length;i++){
				pagers[i].classList.remove('active');
				
			}
			pagers[n].classList.add('active');
		}
	})
}
