import React from 'react'
import useRenderDisplay from '../customHooks/useRenderDisplay'
import { FunctionContext } from '../pages/Dataform'
import WorkExperienceItem from './WorkExperienceItem'

export default function WorkExperienceForm(){

    const [count,addDisplay,removeDisplay,display] = useRenderDisplay()
    const {initialiseForm,removeItemForm} = React.useContext(FunctionContext)

    function addWorkExperience(){
        const name = `workExperience${count}`
        initialiseForm("workExperience",name)
        addDisplay(name,<WorkExperienceItem
            key={name}
            removeWorkExperience={removeWorkExperience}
            id = {name}
            category="workExperience"
            />)
    }


    function removeWorkExperience(event){
        const name = event.target.id
        removeItemForm("workExperience",name)
        removeDisplay(name)
    }

    return(
        <div className ="form-category-wrapper">
            <h3>Work Experience</h3>
            {display}
            <button onClick = {addWorkExperience}>Add Work Experience</button>
        </div>
    )
}