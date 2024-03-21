import React from 'react'
import useRenderDisplay from '../customHooks/useRenderDisplay'
import { FunctionContext,DataContext } from '../pages/Dataform'
import WorkExperienceItem from './WorkExperienceItem'

export default function WorkExperienceForm(){

    const [count,addDisplay,removeDisplay,display,setExistingInfo] = useRenderDisplay()
    const {initialiseForm,removeItemForm} = React.useContext(FunctionContext)
    const {FormData} = React.useContext(DataContext)

    React.useEffect(()=>{
        var existingData
        var newDisplay
        if(FormData.workExperience){
            existingData = Object.entries(FormData.workExperience)
        }
        if (existingData!=""){
            newDisplay = existingData.map((item)=>{
                return [item[0],<WorkExperienceItem
                    key = {item[0]}
                    id = {item[0]}
                    removeWorkExperience={removeWorkExperience}
                    category="workExperience"
                />]
            })
            setExistingInfo(newDisplay)
        }
        
    },[])

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