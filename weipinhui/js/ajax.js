class Ajax{
    create(){
        try{
            return new XMLHttpRequest();
        }catch(e){
            try{
                return ActiveXObject("Microsoft.XMLHTTP")
            }catch(e){
                return null;
            }
        }
    }
    request(_config){
        let _xhr=this.create();
        if(_xhr){
            _xhr.onreadystatechange=function(){
                if(_xhr.status===200 && _xhr.readyState===4){
                    _config.success(_xhr.responseText)
                }
            }
            var _method=(_config.method+"").toUpperCase()==="POST"?"POST":"GET";
            var _url=_method==="GET"?_config.url+"?"+_config.data : _config.url;
            var _async=_config.async?true:(_config.async !== false);
            _xhr.open(_method,_url,_async);
            _xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");
            _xhr.send(_method==="GET"?null:_config.data);
        }
    }
}
