import React from "react"
import InputField from "./InputField"

export default function GradeForm({grade,removeGrade,handleChange}){

    return(
        <div className = "grid grade-columns">
            <InputField
                id={grade}
                name = "subject"
                type="text"
                label = "Subject"
                onChange={handleChange}
            />
            <InputField 
                id={grade}
                name="grade"
                type="text"
                label = "Grade"
            />
            <button onClick={()=>removeGrade(grade)}>-</button>
        </div>
    )
}