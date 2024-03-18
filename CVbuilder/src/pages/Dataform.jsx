import React from "react"
import {Link} from 'react-router-dom'
import GeneralInfoForm from "../components/GeneralInfoForm"
import EducationInfo from "../components/EducationInfo"
import WorkExperienceForm from "../components/WorkExperienceForm"

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

    function handleChangeNested(event){
        const {id,name,value,type,checked} = event.target
        const category = event.target.getAttribute('data-category')
        setFormData((prev)=>{
            return{
                ...prev,
                [category]:{
                    ...prev[category],
                    [id]:{
                        ...prev[category][id],
                        [name]: type==="checkbox"? checked:value
                    }
                }
            }
        })
    }

    function initialiseForm(category,name){
        setFormData((prev)=>{
            return{
                ...prev,
                [category]:{
                    ...prev[category],
                    [name]:{}
                }
            }
        })
    }

    function removeItemForm(category,name){
        setFormData((prev)=>{
            delete prev[category][name]
            return{
                ...prev
            }
        })
    }

    return(
        <DataContext.Provider value = {{FormData:FormData,setFormData:setFormData}}>
            <FunctionContext.Provider value ={{handleChange:handleChange , handleChangeNested:handleChangeNested,initialiseForm:initialiseForm,removeItemForm:removeItemForm}} >
                    <Link to="preview" >Preview</Link>
                    <GeneralInfoForm/>
                    <EducationInfo 
                        FormData={FormData}
                        setFormData={setFormData}
                    />
                    <WorkExperienceForm />
            </FunctionContext.Provider>
        </DataContext.Provider>
    )
}

export {FunctionContext,DataContext}