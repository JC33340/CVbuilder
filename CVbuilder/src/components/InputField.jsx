import React from "react"

export default function InputField({name,type,onChange=()=>{},label,id,value=""}){

    let inputcomponent;

    if(type==="textarea"){
        inputcomponent = (
            <textarea value = {value} maxLength={500} placeholder="Max length 500" name = {name} onChange = {onChange}></textarea>
        )
        
    } else{
        inputcomponent = (
            <input value={value} checked={value} placeholder={label} type={type} name={name} id={id} onChange ={onChange} />
        )
    }
    
    return(
        <label> {label} {label&&":"}{!(type==="textarea") && <br />}
                {inputcomponent}
        </label>
    )
}