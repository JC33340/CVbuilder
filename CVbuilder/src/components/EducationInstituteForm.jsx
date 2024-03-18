import React from 'react'
import InputField from './InputField'
import {FunctionContext,DataContext} from "../pages/Dataform"

export default function EducationInstituteForm({institute,removeInstitute}){

    const {handleChangeNested} = React.useContext(FunctionContext)
    const{FormData} = React.useContext(DataContext)
    
    return(
        <div className ="form-category-wrapper grade-wrapper">  
            <button onClick = {removeInstitute} id = {institute}>Remove Institute</button>
                <InputField 
                    name="institute"
                    label="Institute"
                    type="text"
                    id={institute}
                    onChange={handleChangeNested}
                    value={FormData.education[institute].institute}
                    category='education'
                />
                <div className = "three-columns grid">
                    <InputField 
                        name="currentlyEnrolled"
                        label="Currently Enrolled"
                        type="checkbox"
                        id={institute}
                        onChange={handleChangeNested}
                        value={FormData.education[institute].currentlyEnrolled}
                        category='education'
                    />
                    
                    <InputField 
                        name="startDate"
                        label="Start Year"
                        type="month"
                        id={institute}
                        onChange={handleChangeNested}
                        value={FormData.education[institute].startDate}
                        category='education'
                    />

                {!FormData.education?.[institute].currentlyEnrolled ? 
                    <InputField 
                        name="endDate"
                        label="End Year"
                        type="month"
                        id={institute}
                        onChange={handleChangeNested}
                        value={FormData.education[institute].endDate}
                        category='education'
                    />
                    :null}
                </div>
                <InputField
                    name="qualification"
                    label='Qualification'
                    type="text"
                    id={institute}
                    onChange={handleChangeNested}
                    value={FormData.education[institute].qualification}
                    category='education'
                />
                <InputField
                    name="degreeOfStudy"
                    label='Degree of study'
                    type="text"
                    id={institute}
                    onChange={handleChangeNested}
                    value={FormData.education[institute].degreeOfStudy}
                    category='education'
                />
                <InputField
                    name="overallGrade"
                    label='Overall Grade'
                    type="text"
                    id={institute}
                    onChange={handleChangeNested}
                    value={FormData.education[institute].overallGrade}
                    category='education'
                />
                
            
        </div>
    )
}