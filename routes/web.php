<?php

use App\Models\Post;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    //Grab all posts from the db that are created to the current authenticated user
   $posts = auth()->check()
    ? Post::where('user_id', auth()->id())->latest()->get()
    : [];
    return view('home');
});

Route::post("/register", [UserController::class, "register"]);

Route::post("/logout", [UserController::class, "logout"]);

Route::post("/login", [UserController::class, "login"]);

Route::post("/create-post", [UserController::class, "create_post"]);