<?php
    //注册：涉及密码，选择向服务器发送数据的方式：POST
    $req=$_POST;
    //将客户端输入的信息存入数据库中
    $connection=new mysqli("127.0.0.1","root","root","wph");
    if($connection->error){

    }else{
        $rs=$connection->query("insert into signup (s_name,s_pwd) values ('".$req["name"]."','".$req["password"]."');");
        if($rs>0){
            echo "success";
        }else{
            echo "failed";
        }
        $connection->close();
    }
?>