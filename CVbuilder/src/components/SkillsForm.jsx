import React from "react"
import useRenderDisplay from '../customHooks/useRenderDisplay'
import { FunctionContext } from '../pages/Dataform'
import IndividualSkillForm from "./IndividualSkillForm"

export default function SkillsForm(){

    const [count,addDisplay,removeDisplay,display] = useRenderDisplay()
    const {initialiseForm,removeItemForm} = React.useContext(FunctionContext)

    function addSkill(){
        const name = `skill${count}`
        initialiseForm("skills",name)
        addDisplay(name,<IndividualSkillForm
            key={name}
            removeSkill={removeSkill}
            id={name}
            category="skills"
            />)
    }

    
    function removeSkill(event){
        const name = event.target.id
        removeItemForm("skills",name)
        removeDisplay(name)
    }

    return(
        <div className="form-category-wrapper">
            <h3>Skills information</h3>
            {display}
            <button onClick={addSkill}>Add Skill</button>
        </div>
    )
}