import React from 'react'
import InputField from './InputField'
import {FunctionContext,DataContext} from "../pages/Dataform"
import useRenderDisplay from '../customHooks/useRenderDisplay'
import GradeForm from './GradeForm'

export default function EducationInstituteForm({institute,removeInstitute}){

    const {handleChangeEducation} = React.useContext(FunctionContext)
    const{FormData,setFormData} = React.useContext(DataContext)
    const [count,addDisplay,removeDisplay,display] = useRenderDisplay()
    
    function addGrade(){
        
        const name = `grade${count}`
        setFormData((prev)=>{
            return{
                ...prev,
                education:{
                    [institute]:{
                        grades:{
                            ...prev.education[institute].grades,
                            [name]:{}
                        }
                    }
                }
            }
        })
        addDisplay(name,<GradeForm
             grade ={name}
             key={name}
             removeGrade={removeGrade}
             />)
        
    }

    function removeGrade(name){
        setFormData((prev)=>{
            delete prev.education[institute].grades[name]
            return{
                ...prev
            }
        })
        removeDisplay(name)
    }

    return(
        <>  
            <button onClick = {removeInstitute} id = {institute}>Remove Institute</button>
                <InputField 
                    name="institute"
                    label="Institute"
                    type="text"
                    id={institute}
                    onChange={handleChangeEducation}
                />
                <div className = "three-columns grid">
                    <InputField 
                        name="currentlyEnrolled"
                        label="Currently Enrolled"
                        type="checkbox"
                        id={institute}
                        onChange={handleChangeEducation}
                    />
                    
                    <InputField 
                        name="startDate"
                        label="Start Year"
                        type="number"
                        id={institute}
                        onChange={handleChangeEducation}
                    />

                {!FormData.education?.[institute].currentlyEnrolled ? 
                    <InputField 
                        name="endDate"
                        label="End Year"
                        type="number"
                        id={institute}
                        onChange={handleChangeEducation}
                    />
                    :null}
                </div>
                <InputField
                    name="qualificationLevel"
                    label='Qualification Level'
                    type="text"
                    id={institute}
                    onChange={handleChangeEducation}
                />
                <div>
                    <h3>Grades:</h3>
                    {display}
                    <button onClick={addGrade}>Add Grade</button>
                </div>
            
        </>
    )
}