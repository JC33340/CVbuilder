import React from 'react'
import InputField from './InputField'
import {FunctionContext,DataContext} from "../pages/Dataform"

export default function EducationInstituteForm({institute,removeInstitute,category}){

    const {handleChangeNested} = React.useContext(FunctionContext)
    const{FormData} = React.useContext(DataContext)
    
    return(
        <div className ="form-category-wrapper nested-wrapper">  
            <button onClick = {removeInstitute} id = {institute}>Remove Institute</button>
                <InputField 
                    name="institute"
                    label="Institute"
                    type="text"
                    id={institute}
                    onChange={handleChangeNested}
                    value={FormData.education[institute].institute}
                    category={category}
                />
                <InputField 
                    name="location"
                    label="Location"
                    type="text"
                    id={institute}
                    onChange={handleChangeNested}
                    value={FormData.education[institute].location}
                    category={category}
                />
                <div className = "three-columns grid">
                    <InputField 
                        name="currentlyEnrolled"
                        label="Currently Enrolled"
                        type="checkbox"
                        id={institute}
                        onChange={handleChangeNested}
                        value={FormData.education[institute].currentlyEnrolled}
                        category={category}
                    />
                    
                    <InputField 
                        name="startDate"
                        label="Start Year"
                        type="month"
                        id={institute}
                        onChange={handleChangeNested}
                        value={FormData.education[institute].startDate}
                        category={category}
                    />

                {!FormData.education?.[institute].currentlyEnrolled ? 
                    <InputField 
                        name="endDate"
                        label="End Year"
                        type="month"
                        id={institute}
                        onChange={handleChangeNested}
                        value={FormData.education[institute].endDate}
                        category={category}
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
                    category={category}
                />
                <InputField
                    name="degreeOfStudy"
                    label='Degree of study'
                    type="text"
                    id={institute}
                    onChange={handleChangeNested}
                    value={FormData.education[institute].degreeOfStudy}
                    category={category}
                />
                <InputField
                    name="overallGrade"
                    label='Overall Grade'
                    type="text"
                    id={institute}
                    onChange={handleChangeNested}
                    value={FormData.education[institute].overallGrade}
                    category={category}
                />
                <InputField
                    name="additionalDetails"
                    type="textarea"
                    label="Additional Details"
                    id={institute}
                    onChange={handleChangeNested}
                    value={FormData.education[institute].additionalDetails}
                    category={category}
                    maxLength={100}
                />
                
            
        </div>
    )
}