import React from "react"
import { MENUS } from "../../util/data.js"
import '../../Styles/navbar.css'

export default function Navbar() {
    return (
        <nav>
            <ul>
                {MENUS.map((menu,index) => (
                <li key={index}>
                    <a href={menu.url}>{menu.name}</a>{" "}
                </li>
                ))}
            </ul>
        </nav>
    );
}