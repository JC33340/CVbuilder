import React from "react"
import {Form, Link} from 'react-router-dom'
import GeneralInfoForm from "../components/GeneralInfoForm"
import EducationInfo from "../components/EducationInfo"

const FunctionContext = React.createContext()
const DataContext = React.createContext()

export function Dataform() {
    const [FormData,setFormData] = React.useState({})
    console.log(FormData)

    function handleChange(event){
        const {name,value} =event.target
        setFormData((prev)=>{
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function handleChangeEducation(event){
        const {id,name,value,type,checked} = event.target
        setFormData((prev)=>{
            return{
                ...prev,
                education:{
                    ...prev.education,
                    [id]:{
                        ...prev.education[id],
                        [name]: type==="checkbox"? checked:value
                    }
                }
            }
        })
    }

    
    const functionContext={handleChange:handleChange , handleChangeEducation:handleChangeEducation}

    return(
        <DataContext.Provider value = {{FormData:FormData,setFormData:setFormData}}>
            <FunctionContext.Provider value ={functionContext} >
                <>
                    <Link to="preview" >Preview</Link>
                    <GeneralInfoForm/>
                    <EducationInfo 
                        FormData={FormData}
                        setFormData={setFormData}
                    />
                </>
            </FunctionContext.Provider>
        </DataContext.Provider>
    )
}

export {FunctionContext,DataContext}