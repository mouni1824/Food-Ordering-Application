import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title : 'Home',
        path:'/',
        icons :<AiIcons.AiOutlineHome/>,
        cName:"nav-text"
        
    },
    {
        title : 'About Us',
        path:'/about',
        icons :<IoIcons.IoMdPeople/>,
        cName:"nav-text"
        
    },
    {
        title : 'ContactUs',
        path:'/contact',
        icons :<AiIcons.AiOutlineContacts/>,
        cName:"nav-text"
        
    }
]
