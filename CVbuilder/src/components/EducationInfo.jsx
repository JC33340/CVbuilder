import React from 'react'
import EducationInstituteForm from './EducationInstituteForm'
import {FunctionContext } from '../pages/Dataform'
import useRenderDisplay from '../customHooks/useRenderDisplay'

export default function EducationInfo(){
    const {initialiseForm,removeItemForm} = React.useContext(FunctionContext)
    /*
    const [elementArr,setElementArr] = React.useState({})
    const [count,setCount] = React.useState(0)
    */

    const [count,addDisplay,removeDisplay,display] = useRenderDisplay()


    function removeInstitute(event){
        const name = event.target.id
        removeItemForm("education",name)
        /*
        setElementArr((prev)=>{
            delete prev[name]
            return{
                ...prev
            }
        })
        */
       removeDisplay(name)
    }

    function addInstitute(){
        const name = `institute${count}`
        initialiseForm("education",name)
        /*
        setElementArr((prev)=>{
            return {
                ...prev,
                [name]: <EducationInstituteForm
                key = {name}
                institute = {name}
                removeInstitute={removeInstitute}
                 /> 
            }
        })
        setCount((prev)=>prev+1)
        */
        addDisplay(name,
            <EducationInstituteForm
                key = {name}
                institute = {name}
                removeInstitute={removeInstitute}
             /> 
        )
    }

   // const display = Object.entries(elementArr).map((item)=>item[1])

    return(
        <div className = "form-category-wrapper">
            <h3>Education Information</h3>
            {display}
            <button onClick={addInstitute}>Add institute</button>
        </div>
    )
}

