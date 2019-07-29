<?php
    header("content-type:text/html;charset=utf-8");         //设置编码
    header('Access-Control-Allow-Origin:*');
    session_start();
    $req=$_POST;
    $account=$req["account"];
    $pwd=$req["pwd"];
    if(isset($_SESSION["account"]) && $_SESSION["account"]===$account){
        echo "{code:200,comment:'success',account:'".$_SESSION["account"]."'}";
    }else{
        $connection=new mysqli("127.0.0.1","root","root","wph");
        if($connection->error){
            die("数据可错误");
        }else{
            $rs=$connection->query("select * from signup where s_name='".$account."' and s_pwd='".$pwd."';");
            if($row=$rs->fetch_assoc()){
                $_SESSION["account"]=$account;
                echo "{code:200}";
            }else{
                echo "{code:100}";
            }
            $connection->close();
        }
    }
?>