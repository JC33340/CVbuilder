import React from "react"
import useRenderDisplay from '../customHooks/useRenderDisplay'
import { FunctionContext,DataContext } from '../pages/Dataform'
import IndividualSkillForm from "./IndividualSkillForm"

export default function SkillsForm(){

    const [count,addDisplay,removeDisplay,display,setExistingInfo] = useRenderDisplay()
    const {initialiseForm,removeItemForm} = React.useContext(FunctionContext)
    const {FormData} = React.useContext(DataContext)

    React.useEffect(()=>{
        var existingData
        var newDisplay
        if(FormData.skills){
            existingData = Object.entries(FormData.skills)
        }
        if (existingData!=null){
            newDisplay = existingData.map((item)=>{
                return [item[0],<IndividualSkillForm
                    key = {item[0]}
                    id = {item[0]}
                    removeSkill={removeSkill}
                    category="skills"
                />]
            })
            setExistingInfo(newDisplay)
        }
        
    },[])

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
        console.log("remove")
        removeItemForm("skills",name)
        removeDisplay(name)
    }

    return(
        <div className="form-category-wrapper main">
            <div className="section-title"><h2>Skills information</h2></div>
            {display}
            <button onClick={addSkill}>Add Skill</button>
        </div>
    )
}