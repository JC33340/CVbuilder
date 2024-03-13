import React from "react"

export default function InputField({name,type,onChange,label}){

    let inputcomponent;

    if(type=="text"){
        inputcomponent = (
            <input placeholder={label} type={type} name={name} onChange ={onChange} />
        )
    } else if(type==="textarea"){
        inputcomponent = (
            <textarea maxLength={500} placeholder="Max length 500" name = {name} onChange = {onChange}></textarea>
        )
    }
    
    return(
        <label> {label} {label&&":"}<br />
                {inputcomponent}
        </label>
    )
}