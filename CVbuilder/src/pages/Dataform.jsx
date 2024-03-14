import React from "react"
import {Form, Link} from 'react-router-dom'
import GeneralInfoForm from "../components/GeneralInfoForm"
import EducationInfo from "../components/EducationInfo"

const FunctionContext = React.createContext()

export function Dataform() {
    const [FormData,setFormData] = React.useState({})
    console.log(FormData)

    function handleChange(event){
        setFormData((prev)=>{
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleChangeEducation(event){
        const id = event.target.id
        const name = event.target.name
        const value = event.target.value
        setFormData((prev)=>{
            return{
                ...prev,
                education:{
                    ...prev.education,
                    [id]:{
                        ...prev.education[id],
                        [name]: value
                    }
                }
            }
        })
    }

    
    const functionContext={handleChange:handleChange , handleChangeEducation:handleChangeEducation}

    return(
        <FunctionContext.Provider value ={functionContext} >
            <>
                <Link to="preview" >Preview</Link>
                <GeneralInfoForm
                    FormData = {FormData}
                    handleChange = {handleChange}
                />
                <EducationInfo 
                    FormData={FormData}
                    setFormData={setFormData}
                />
            </>
        </FunctionContext.Provider>
    )
}

export {FunctionContext}