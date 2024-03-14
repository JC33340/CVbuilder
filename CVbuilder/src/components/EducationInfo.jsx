import React from 'react'
import EducationInstituteForm from './EducationInstituteForm'

export default function EducationInfo({setFormData}){

    const [elementArr,setElementArr] = React.useState({})
    const [count,setCount] = React.useState(0)

    function removeInstitute(event){
        const id = event.target.id
        setFormData((prev)=>{
            delete prev.education[id]
            return{
                ...prev
            }
        })

        setElementArr((prev)=>{
            delete prev[id]
            return{
                ...prev
            }
        })
    }

    function addInstitute(){
        const name = `institute${count}`
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
        setFormData((prev)=>{
            return{
                ...prev,
                education:{
                ...prev.education,
                    [name]:{}
                }
            }
        })
        setCount((prev)=>prev+1)
        
    }
    const display = Object.entries(elementArr).map((item)=>item[1])

    return(
        <div className = "form-category-wrapper">
            <h3>Education Information</h3>
            {display}
            <button onClick={addInstitute}>Add institute</button>
        </div>
    )
}

