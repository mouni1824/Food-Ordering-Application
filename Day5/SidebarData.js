import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title : 'Home',
        path:'/home',
        icons :<AiIcons.AiOutlineHome/>,
        cName:"nav-text"
    },
    {
        title : 'Restaurants',
        path:'/restaurant',
        icons :<IoIcons.IoMdPeople/>,
        cName:"nav-text"
        
    },
    {
        title : 'Reviews',
        path:'/reviews',
        icons :<AiIcons.AiOutlineContacts/>,
        cName:"nav-text",   
    }
]
