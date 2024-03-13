import React from 'react'
import EducationInstituteForm from './EducationInstituteForm'

export default function EducationInfo(){

    return(
        <div className = "form-category-wrapper">
            <h3>Education Information</h3>
            {<EducationInstituteForm
                institute="institute1"
            />}
        </div>
    )
}