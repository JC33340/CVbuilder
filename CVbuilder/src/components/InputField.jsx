import React from "react"

export default function InputField({name,type,onChange=()=>{},label,id,value="",category="",maxLength=0}){

    let inputcomponent;

    if(type==="textarea"){
        inputcomponent = (
            <textarea data-category={category} value = {value} maxLength={maxLength} placeholder= {`Max Length ${maxLength}`} name = {name} onChange = {onChange}></textarea>
        )
        
    } else{
        inputcomponent = (
            <input data-category={category} value={value} checked={value} placeholder={label} type={type} name={name} id={id} onChange ={onChange} />
        )
    }
    
    return(
        <label> {label} {label&&":"} <br />
                {inputcomponent}
        </label>
    )
}