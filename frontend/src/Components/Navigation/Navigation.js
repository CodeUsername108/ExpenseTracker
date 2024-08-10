import React from 'react'
import avatar from '../../img/avatar.png'
import { menuItems } from '../../utils/menuItems.js'
import '../../styles/Navigation.css'
export function Navigation({active, setActive}) {
    return (
        <div className="navigation">
            <div className="user-con">
                {/* <img src={avatar} alt=""/> */}
                <div className="text">
                    <h2>Expense App</h2>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={()=>setActive(item.id)}
                        className={active === item.id ? 'active' : ''}
                    >
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
        </div>
    )
}
