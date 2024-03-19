import React from 'react'
import EducationInstituteForm from './EducationInstituteForm'
import {FunctionContext } from '../pages/Dataform'
import useRenderDisplay from '../customHooks/useRenderDisplay'

export default function EducationInfo(){
    const {initialiseForm,removeItemForm} = React.useContext(FunctionContext)

    const [count,addDisplay,removeDisplay,display] = useRenderDisplay()


    function removeInstitute(event){
        const name = event.target.id
        console.log(name)
        removeItemForm("education",name)
        removeDisplay(name)
    }

    function addInstitute(){
        const name = `institute${count}`
        initialiseForm("education",name)
        addDisplay(name,
            <EducationInstituteForm
                key = {name}
                institute = {name}
                removeInstitute={removeInstitute}
                category="education"
             /> 
        )
    }

    return(
        <div className = "form-category-wrapper">
            <h3>Education Information</h3>
            {display}
            <button onClick={addInstitute}>Add institute</button>
        </div>
    )
}

