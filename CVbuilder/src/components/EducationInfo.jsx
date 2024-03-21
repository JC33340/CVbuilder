import React from 'react'
import EducationInstituteForm from './EducationInstituteForm'
import {FunctionContext,DataContext } from '../pages/Dataform'
import useRenderDisplay from '../customHooks/useRenderDisplay'

export default function EducationInfo(){
    const {initialiseForm,removeItemForm} = React.useContext(FunctionContext)
    const {FormData} = React.useContext(DataContext)

    const [count,addDisplay,removeDisplay,display,setExistingInfo] = useRenderDisplay()

    React.useEffect(()=>{
        var existingData
        var newDisplay
        if(FormData.education){
            existingData = Object.entries(FormData.education)
        }
        if (existingData!=""){
            newDisplay = existingData.map((item)=>{
                return [item[0],<EducationInstituteForm
                    key = {item[0]}
                    institute = {item[0]}
                    removeInstitute={removeInstitute}
                    category="education"
                />]
            })
            setExistingInfo(newDisplay)
        }
        
    },[])

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

