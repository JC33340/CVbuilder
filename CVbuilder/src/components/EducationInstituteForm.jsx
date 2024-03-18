import React from 'react'
import InputField from './InputField'
import {FunctionContext,DataContext} from "../pages/Dataform"
import useRenderDisplay from '../customHooks/useRenderDisplay'
import GradeForm from './GradeForm'

export default function EducationInstituteForm({institute,removeInstitute}){

    const {handleChangeEducation} = React.useContext(FunctionContext)
    const{FormData,setFormData} = React.useContext(DataContext)
    
    return(
        <div className ="form-category-wrapper grade-wrapper">  
            <button onClick = {removeInstitute} id = {institute}>Remove Institute</button>
                <InputField 
                    name="institute"
                    label="Institute"
                    type="text"
                    id={institute}
                    onChange={handleChangeEducation}
                    value={FormData.education[institute].institute}
                />
                <div className = "three-columns grid">
                    <InputField 
                        name="currentlyEnrolled"
                        label="Currently Enrolled"
                        type="checkbox"
                        id={institute}
                        onChange={handleChangeEducation}
                        value={FormData.education[institute].currentlyEnrolled}
                    />
                    
                    <InputField 
                        name="startDate"
                        label="Start Year"
                        type="month"
                        id={institute}
                        onChange={handleChangeEducation}
                        value={FormData.education[institute].startDate}
                    />

                {!FormData.education?.[institute].currentlyEnrolled ? 
                    <InputField 
                        name="endDate"
                        label="End Year"
                        type="month"
                        id={institute}
                        onChange={handleChangeEducation}
                        value={FormData.education[institute].endDate}
                    />
                    :null}
                </div>
                <InputField
                    name="qualification"
                    label='Qualification'
                    type="text"
                    id={institute}
                    onChange={handleChangeEducation}
                    value={FormData.education[institute].qualification}
                />
                <InputField
                    name="degreeOfStudy"
                    label='Degree of study'
                    type="text"
                    id={institute}
                    onChange={handleChangeEducation}
                    value={FormData.education[institute].degreeOfStudy}
                />
                <InputField
                    name="overallGrade"
                    label='Overall Grade'
                    type="text"
                    id={institute}
                    onChange={handleChangeEducation}
                    value={FormData.education[institute].overallGrade}
                />
                
            
        </div>
    )
}