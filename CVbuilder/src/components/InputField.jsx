import React from "react"

export default function InputField({name,type,onChange=()=>{},label,id}){

    let inputcomponent;

    if(type=="text"|| type === "number"|| type === "checkbox"){
        inputcomponent = (
            <input placeholder={label} type={type} name={name} id={id} onChange ={onChange} />
        )
    } else if(type==="textarea"){
        inputcomponent = (
            <textarea maxLength={500} placeholder="Max length 500" name = {name} onChange = {onChange}></textarea>
        )
    }
    
    return(
        <label> {label} {label&&":"}{!(type==="textarea") && <br />}
                {inputcomponent}
        </label>
    )
}