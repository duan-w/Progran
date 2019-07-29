function Close() {
    var head_left = document.getElementsByClassName("head_left")[0],
		urban=document.getElementById("urban"),
		Close=document.getElementById("Close");
    head_left.onmouseover=function(){
		head_left.style.cssText="background-color:#fff;border:1px solid #ccc;border-bottom-color:#fff;z-Index:2";
		urban.style.display="block";
    };
	urban.onmouseout=function(){
		urban.style.display="none";
		head_left.style.cssText="background-color:#f5f5f5;border:none";
	};
	Close.onclick=function(){
		urban.style.display="none";
		head_left.style.cssText="background-color:#f5f5f5;border:none";
	}
}

function Sign(){
	var _sign=document.getElementById("Sign"),
		hidd_sign=document.getElementById("hidd_Sign"),
		hidd_line=document.getElementById("hidd_line");
		_sign.onmouseover=function(){
			hidd_sign.style.display="block";
			hidd_line.style.display="block";
			_sign.children[0].style.cssText="position:relative;z-Index:5"
			_sign.style.cssText="background-color:#fff;border:1px solid #ccc;"
		}
		_sign.onmouseout=function(){
			hidd_sign.style.display="none";
			hidd_line.style.display="none";
			_sign.style.cssText="background-color:#f5f5f5;border:none"
		}
}



function select(){////下拉列表
	var _nav_left=document.getElementsByClassName("nav_left")[0],
		_menu=document.getElementById("menu"),
		_len=_menu.children,
		t_over,
		t_leave,
		data=document.getElementsByClassName("data")[0];
		_heihgt=_menu.offsetHeight;		
	_nav_left.onmouseover = function() {//鼠标移入事件调用函数并且清楚定时器
		window.clearTimeout(t_leave);
		add();
		
	}
	_nav_left.onmouseout = function() {//鼠标移出事件调用函数并且清楚定时器
		window.clearTimeout(t_over);
		sub();
	}
	function add() {
		_heihgt += 15;
		if (_heihgt<= 450) {
			_menu.style.height = _heihgt + 'px';
			t_over = setTimeout(add,10);
		}else {
			_menu.style.heigh="465px";	
			return;
		}
	//	console.log(_heihgt)
	}
	function sub() {
		_heihgt -= 15;
		if (_heihgt > 0) {
			_menu.style.height = _heihgt + 'px';
			t_leave = setTimeout(sub,10);
		}else {
			_menu.style.height = '0px'
			return;
		}
	}
	//鼠标移入li改变字颜色
	for(var i=0;i<_len.length;i++){
		_len[i].onmouseover=function(){
			this.children[0].style.color="#f10180";
		}
		_len[i].onmouseout=function(){
			this.children[0].style.color="#fff";
		}
	}
	
	
}
function SelectData(){//下拉列表中的请求数据
	var _data;
	let _xhr=new XMLHttpRequest();
	_xhr.onreadystatechange=function(){
		if(_xhr.readyState==4&&_xhr.status==200){
			_data=window.eval("("+_xhr.responseText+")");
			Selectcreate(_data[0])
			a(_data)
		}
	}
	_xhr.open("get","json/number.json",true);
	_xhr.send(null);
}
SelectData()
function Selectcreate(_data){//下拉列表创建
	let nav_left=document.getElementsByClassName("nav_left")[0];
	let data=document.getElementsByClassName("data")[0];
	data.innerHTML = ''
	var _div,_dl,_dt,_dd,_span,_i,_a,_img;
		_div=document.createElement("div");
		_div.id="data_left";
		_div2=document.createElement("div");
		_div2.id="data_right";
		_img=new Image();
	data.appendChild(_div);
	data.appendChild(_div2);
	for(var i=0;i<_data.length;i++){
		_dl=document.createElement("dl");
		_dt=document.createElement("dt");
		_i=document.createElement("i");
		_i.innerHTML=">";
		_span=document.createElement("span");
		_span.innerHTML=_data[i].tiele;
		_dt.appendChild(_i);			
		_dt.appendChild(_span);
		_dl.appendChild(_dt);
		_dd=document.createElement("dd");
		for(var n=0;n<_data[i].text.length;n++){
			_a=document.createElement("a");
			_a.innerHTML=_data[i].text[n].text;
			_dd.appendChild(_a);
		}
		_dl.appendChild(_dd);
		_div.appendChild(_dl);
		_img.style.width="100%";
		_img.src=_data[i].img;
		_div2.appendChild(_img);
	}
	_div.lastChild.style.border="none";
}
function a(_data){//下拉列表该方法用来鼠标移入显示列表数据
	var _menu=document.getElementById("menu"),_index;
	var _box=document.querySelector(".data");
	var nav_lef=document.querySelector(".nav_left");
	var _len=_menu.children;
	var _arr=Array.from(_len)//把维数组转换成数组
	for(var i=0;i<_arr.length;i++){
		_arr[i].onmouseenter=function(){
			_index=_arr.indexOf(this)//获取当前的鼠标的下标
			_box.style.display="block";
			b(_data,_index)
		}
		nav_lef.onmouseleave=function(){
			_box.style.display="none";
		}
	}
}
function b(_data,_index){//下拉列表该方法将下标传参给创建
	for(var i=0;i<_data.length;i++){
		Selectcreate(_data[_index])//传下标去创建的方法
	}
}


//////////////导航////////////
function FixedNav(){
	let _nav=document.querySelector(".nav_big");
		_heihgt=_nav.offsetTop+_nav.offsetHeight;
	let _scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	if(_scrollTop>=_heihgt){
		_nav.style.position='fixed';
		_nav.style.top='0';
		_nav.style.zIndex='999';
	}else{
		_nav.style.position = 'static';
	}	
	
}
window.onscroll=FixedNav;
//////////////导航结束////////////
function Magnifier(){
	let big_img=document.querySelector(".big_img");
	let show_img=document.querySelector(".show_img");
	let block=document.querySelector("block");
	big_img.onmouseenter=function(e){
		e = e || window.event;
		show_img.style.display = "block";
		setposition(e)
	}
	big_img.onmousemove=function(e){
		e = e || window.event;
		setposition(e)
	}
	big_img.onmouseleave=function(e){
		e = e || window.event;
		setposition(e)
		show_img.style.display = "none";
	}	
}
function setposition(e){
	let big_img=document.querySelector(".big_img");
	let show_img=document.querySelector(".show_img");
	let block=document.querySelector(".block");
	var top=e.pageY-big_img.offsetTop-(block.offsetHeight/2);
	var left=e.pageX-big_img.offsetLeft-(block.offsetWidth/2);
	//边界处理
	var tempL = 0,tempT = 0;
	var minL = 0,minT = 0,maxL = big_img.offsetWidth - block.offsetWidth,maxT = big_img.offsetHeight - block.offsetHeight ;
	if(left<minL){
		block.style.left=minL+"px";
		tempL=minL;
	}else if(left>maxL){
		block.style.left=maxL+"px";
		tempL=maxL;
	}else{
		block.style.left=left+"px";
		tempL=left;
	}
	if(top<minT){
		block.style.top=minT+"px";
		tempT=minT;
	}else if(top>maxT){	
		block.style.top=maxT+"px";
		tempT=maxT;
	}else{
		block.style.top=top+"px";
		tempT=top;
	}
	console.log(tempL,tempT)
	var _img=show_img.getElementsByTagName("img")[0];
	_img.style.left = -tempL*2 + "px";
	_img.style.top = -tempT*2 + "px";
	
}
function evens(){
	let imgs=document.querySelector(".small_img").children;
	let big_img=document.querySelector(".big_img");
	let show_img=document.querySelector(".show_img").children[0];
	console.log(big_img)
	for(var i=0;i<imgs.length;i++){
		imgs[i].onmouseenter=function(e){
			e = e || window.event;
			big_img.style.backgroundImage ='url('+this.src+')';
			show_img.src=this.src;
		}
	}
}