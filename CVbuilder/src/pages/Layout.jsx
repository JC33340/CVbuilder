import React from 'react'
import {Outlet,NavLink} from 'react-router-dom'

export default function Layout(){

    const [FormData,setFormData] = React.useState('')


    return(
        <>
        <header>
            <NavLink className={({isActive})=>isActive?"activeNavbarLink":"NavbarLink"} to="/" >Form</NavLink>
            <NavLink className = {({isActive})=>isActive?"activeNavbarLink":"NavbarLink"} to ="preview" >Preview</NavLink>
        </header>
            <Outlet context={{FormData,setFormData}} />
        </>
    )
}

