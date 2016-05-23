//头部文字轮播；
 var textli=document.querySelectorAll("#textul li");

 var tindex=0;
 var ttimer=null;
  ttimer=setInterval(function(){
        tindex++;
         if(tindex>textli.length-1){
            tindex=0;
         }
         for(i=0;i<textli.length;i++){
            textli[i].style.opacity="0";
         }
         textli[tindex].style.opacity="1";
},3000)
//头部图片轮播
var ul2=document.getElementById("ul2");
	var li1=document.querySelectorAll("#ul1 li");
	var li2=document.querySelectorAll("#ul2 li");
	var index=0;
	var timer=null;
	function opa(){
         index++;
         if(index>li1.length-1){
         	index=0;
         }
         for(i=0;i<li1.length;i++){
         	li1[i].style.opacity="0";
            li2[i].className="";
         }
         li1[index].style.opacity="1";
         li2[index].className="color";
	}
	timer=setInterval(opa,4000);
	for(i=0;i<li1.length;i++){
		li2[i].index=i;
		li2[i].onclick=function(){
            
			for(i=0;i<li1.length;i++){
         	li1[i].style.opacity="0";
            li2[i].className="";
             }
            
			this.className="color";
			li1[this.index].style.opacity="1";
			index=this.index;
		}
	}
   ul2.onmouseenter=function(){
   	   clearInterval(timer);
   }
   ul2.onmouseleave=function(){
   	   clearInterval(timer);
   	   timer=setInterval(opa,4000);
   }
