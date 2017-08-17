<?php
/**
 * Created by PhpStorm.
 * User: zkl
 * Date: 2017/8/14
 * Time: 21:34
 */
namespace  App\Http\Controllers;

 use Illuminate\Http\Request;

 class ManagerController extends  Controller {
    public function orderMainOperate(Request $request){
        echo 'hellow';
        $data = $request->input("user");
//        $data = $request->all();
//        $data = array_merge($data,['type' => $user]);
        return $data=$data+1;
    }
}
