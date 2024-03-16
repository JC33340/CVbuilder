import React from 'react'
import InputField from './InputField'
import {FunctionContext,DataContext} from "../pages/Dataform"
import GradeForm from './GradeForm'

export default function EducationInstituteForm({institute,removeInstitute}){

    const {handleChangeEducation} = React.useContext(FunctionContext)
    const{FormData,setFormData} = React.useContext(DataContext)
    
    function addGrade(){
        console.log("YES")
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
                <div className = "three-column-grid">
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
                    <button onClick={addGrade}>Add Grade</button>
                </div>
            
        </>
    )
}