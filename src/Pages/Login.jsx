import React, { useState } from "react"
import { users } from "../util/data"

export default function Login() {
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    function loginHandler(e) {
        e.preventDefault();
        setuserName(e.target.userName.value);
        setPassword(e.target.password.value);
    }

    function loginHandler(userName, password) {
        users.map((users) => {
          if(userName === users.userName && password === users.password) {
            return alert("Yes");
          }else {
            return alert("NO");
          }
        })
      }

    console.log(userName);
    console.log(password);
    

    return (
        <div>
            <form onSubmit={loginHandler}>
                <input type="text" name="userName" placeholder="username" />
                <input type="text" name="password" placeholder="password" />
                <button type="submit">Login</button>
                <input type="button" value="Register" />
            </form>
        </div>
    )
}