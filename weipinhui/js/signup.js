function Test(){//主要功能是检测账号密码格式正确
    account()//验证账号
    password()//验证密码调用
}



function account(){//验证账号函数
    let _phone=document.querySelector(".phone");
    let _ok=document.getElementById("ok1");
    let _X=document.getElementById("X1");
    let _phoneTps=document.getElementById("phone_tps");
        _phone.onblur=function(){//账号验证正确和错误的效果
            let _account=document.querySelector(".phone").value;
            if(/^1(3|5|7|8)\d{9}$/g.test(_account)){
                _X.style.display="none";
                _phone.style.border="1px solid #666";
                _phoneTps.style.display="none";
               _ok.style.display="block";
            }else{
               _phone.style.border="1px solid red";
               _X.style.display="block";
               _phoneTps.style.display="block";
            }
        }
}


function password(){//验证密码函数
    let _pwd=document.getElementById("pwd");
    let _ok2=document.getElementById("ok2");
    let _X2=document.getElementById("X2");
    let pwd_tps=document.getElementById("pwd_tps");  
        _pwd.onfocus=function(){
            pwd_tps.innerText="";
            pwd_tps.style.display="block";
        }
        _pwd.onblur=function(){
            pwd_tps.style.display="none";
            let _password=document.getElementById("pwd").value;
            if(/^\w{6,20}$/.test(_password)){
                _X2.style.display="none";
                _pwd.style.border="1px solid #666";
               _ok2.style.display="block"; 
               pwd_tps.style.display="none";
            }else{
                _pwd.style.border="1px solid red";
                _X2.style.display="block";
                pwd_tps.style.display="block";
                pwd_tps.innerText="密码格式不对，请重新输入";
            }

            passwordRepe(_password)
        }   
}


function passwordRepe(_password){//再次确认密码函数
    let _pwd2=document.getElementById("pwd2"),
        pwd2_tps=document.getElementById("pwd2_tps");
        _pwd2.onblur=function(){
            let _password2=document.getElementById("pwd2").value;
            let _ok3=document.getElementById("ok3");
            let _X3=document.getElementById("X3");
            if(_password2===_password){
                pwd2_tps.style.display="none";
                _X3.style.display="none";
                _pwd2.style.border="1px solid #666";
                _ok3.style.display="block"; 
            }else{
                _pwd2.style.border="1px solid red";
                _X3.style.display="block";
                pwd2_tps.style.display="block";
            }
        }
}


function yzcode(){//随机验证码验证
    let _codeIn=document.getElementById("yz_left");
    let _show=document.getElementById("yz_right");
    let _ok4=document.getElementById("ok4");
    let _X4=document.getElementById("X4");
    var _arr=["a","b","c","d","e","f","g","h","i","j","k","m","l","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];
    var str="";
    var color1="#";
    color1+=(Math.random()*15).toString(16).slice(-6);//简化版随机颜色
    for(var i=0;i<4;i++){
        str+=_arr[Math.floor(Math.random()*35)];  
    }
    _show.innerText=str;
    _show.onclick=function(){
        yzcode()
        _show.style.backgroundColor=color1;
    }
    _codeIn.onblur=function(){
        let _codeInValue=document.getElementById("yz_left").value;
        let _showValue=document.getElementById("yz_right").innerText;
        if(_codeInValue===_showValue){
            _X4.style.display="none";
            _codeIn.style.border="1px solid #666";
            _ok4.style.display="block"; 
        }else{
            _codeIn.style.border="1px solid red";
            _X4.style.display="block";
        }
    }
}

function hook(){//该方法用来判断是否勾选中
    let _hook=document.getElementById("hook_left");
    let _tips=document.getElementById("tips");
    _hook.onclick=function(){
        if(_hook.checked===true){
            _tips.style.display="none";
        }else{
            _tips.style.display="block";
        }
    }
}