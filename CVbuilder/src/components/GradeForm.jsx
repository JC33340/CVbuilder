import React from "react"
import InputField from "./InputField"

export default function GradeForm(){
    return(
        <>
            <InputField
                name = "subject"
                type="text"
                label = "Subject"
            />
            <InputField 
                name="grade"
                type="text"
                label = "Grade"
            />
        </>
    )
}