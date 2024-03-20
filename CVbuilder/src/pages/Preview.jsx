import React from 'react'
import {Link, useOutlet, useOutletContext} from "react-router-dom"

export default function Preview(){

    const {FormData} = useOutletContext()

    return(
        <>
        <button onClick={()=>{console.log(FormData)}}>Click me!</button>
        YEEHAW
        </>
    )
}