export default function Login() {
    return (
    <div classname="loginForm">
        <form action="" method="POST">
            <label for="username">Username: </label>
            <input name="username" id="username" type="text"></input>
            <label for="password">Password: </label>
            <input name="password" id="password" type="password"></input>
        </form>
    </div>
    )
}