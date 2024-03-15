import React from 'react'
import EducationInstituteForm from './EducationInstituteForm'
import { DataContext } from '../pages/Dataform'

export default function EducationInfo(){
    const {FormData,setFormData} = React.useContext(DataContext)
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
        setFormData((prev)=>{
            return{
                ...prev,
                education:{
                ...prev.education,
                    [name]:{}
                }
            }
        })
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

