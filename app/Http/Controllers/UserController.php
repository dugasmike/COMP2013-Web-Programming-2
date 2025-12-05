<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function register(Request $request){
        $incommingData = $request->validate([
            "name" => ["required", "string", "max: 255"],
            "email" => ["required", "string"],
            "password" => ["required", "string", "min: 3"]
        ]);
        $incommingData["password"] = bcrypt($incommingData["password"]);
        $user = User::create($incommingData);
        auth()->login($user);
        return redirect("/");
    }
    public function logout(Request $request){
        auth()->logout();
        return redirect("/");
    }
    public function login(Request $request){
        $credentials = $request->validate([
            "loginName" => ["required" , "string"],
            "loginPassword" => ["required", "string"]
        ]);

        if(auth()->attempt([
            "name" => $credentials["loginName"],
            "password"=> $credentials["loginPassword"],
        ])){
            $request->session()->regenerate();
            return redirect("/");
        }
        return redirect("/")->withErrors([
            "loginError" => "Incorrect Username and Password"
        ]);
    }
}
