import React, { useState } from "react"
import { users } from "../util/data"

export default function Login() {

    function loginHandler(e) {
        e.preventDefault();

        users.map((user) => {
          if(e.target.userName.value == user.userName && e.target.password.value == user.password) {
            return console.log("Yes")
          }else {
            return console.log("No")
          }
        })
    }

   

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