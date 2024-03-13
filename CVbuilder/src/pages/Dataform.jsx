import React from "react"
import GeneralInfoForm from "../components/GeneralInfoForm"
import EducationInfo from "../components/EducationInfo"
import { DataContext } from "../App"

const FunctionContext = React.createContext()

export function Dataform() {
    const {FormData,setFormData} = React.useContext(DataContext)

    function handleChange(event){
        setFormData((prev)=>{
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    
    const functionContext={handleChange:handleChange}

    return(
        <FunctionContext.Provider value ={functionContext} >
            <>
                <GeneralInfoForm
                    FormData = {FormData}
                    handleChange = {handleChange}
                />
                <EducationInfo 
                    
                />
            </>
        </FunctionContext.Provider>
    )
}

export {FunctionContext}