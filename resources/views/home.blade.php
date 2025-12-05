<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body style="border:2px solid #9999; padding:10px">
<h2>Fake Blog Posts</h2>    
    @auth
    <div>
        <p>Congratulations on being a member!</p>
            <form action="/logout" method="POST">
            @csrf
            <button>LOGOUT</button>
        </form>
    </div>
    <div style="margin-top:20px; border:1px black solid;  border-radius:10px;">
        <form action="/create-post" method="POST">
            @csrf
            <input type="text" name="title" id="title" placeholder="Post Title">
            <br>
            <input type="text" name="body" id="body" cols="30" rows="10" placeholder="Add your text here.....">
            <br>
            <button>Submit Post</button>
        </form>
    </div>
    <div style="margin-top:20px; border:1px black solid;  border-radius:10px;">
        @foreach ($posts as $post)
            <div style="border:1px black solid;  border-radius:10px;">
                <h3>{{$post->title}}</h3>
                <p>{{$post->body}}</p>
            </div>
        
        @endforeach
    </div>
    @else
    <div>
        <h3>Register</h3>
        <form action="/register" method="post">
            @csrf
            <input type="text" name="name" id="name" placeholder="Name">
            <br>
            <input type="Email" name="email" id="email" placeholder="Email">
            <br>
            <input type="Password" name="password" id="password" placeholder="password">
            <br>
            <button>Submit</button>   
        </form>
        <h3>Login</h3>
        <form action="/login" method="post">
            @csrf
            <input type="text" name="loginName" id="loginName" placeholder="Username">
            <br>
            <input type="Password" name="loginPassword" id="loginPassword" placeholder="password">
            <br>
            <button>Submit</button>   
        </form>
    </div>
    @endauth
    
</body>
</html>