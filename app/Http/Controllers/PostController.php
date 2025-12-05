<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function create_post(Request $request){
        //Grabbing the data from request
        $validateData = $request->validate([
            "title" => "required|string|[max:255]",
            "body" => "required|string"
        ]);
        //Sanitize data to avoid script injection
        $validateData["title"] = strip_tags($validateData["title"]);
        $vaidateData["body"] = strip_tags($validateData["body"]);
        $validateData["user_id"] = auth()->id();

        Post::Create($validateData);
    }
}
