import React from "react"
import InputField from "./InputField"
import {FunctionContext,DataContext} from "../pages/Dataform"

export default function WorkExperienceItem({id,removeWorkExperience,category}){

    const {handleChangeNested} = React.useContext(FunctionContext)
    const{FormData} = React.useContext(DataContext)

    return(
        <div className="form-category-wrapper nested-wrapper">
            <button onClick = {removeWorkExperience} id = {id}>Remove Work Experience</button>
            <InputField 
                name="company"
                label="Company"
                type="text"
                id={id}
                onChange={handleChangeNested}
                value={FormData.workExperience[id].company}
                category={category}
            />
            <InputField 
                name="location"
                label="Location"
                type="text"
                id={id}
                onChange={handleChangeNested}
                value={FormData.workExperience[id].location}
                category={category}
            />
            <InputField 
                name="role"
                label="Role"
                type="text"
                id={id}
                onChange={handleChangeNested}
                value={FormData.workExperience[id].role}
                category={category}
            />
            <div className = "three-columns grid">
                    <InputField 
                        name="currentlyWorking"
                        label="Currently working"
                        type="checkbox"
                        id={id}
                        onChange={handleChangeNested}
                        value={FormData.workExperience[id].currentlyWorking}
                        category={category}
                    />
                    
                    <InputField 
                        name="startDate"
                        label="Start Year"
                        type="month"
                        id={id}
                        onChange={handleChangeNested}
                        value={FormData.workExperience[id].startDate}
                        category={category}
                    />

                {!FormData.workExperience?.[id].currentlyWorking ? 
                    <InputField 
                        name="endDate"
                        label="End Year"
                        type="month"
                        id={id}
                        onChange={handleChangeNested}
                        value={FormData.workExperience[id].endDate}
                        category={category}
                    />
                    :null}
                </div>
                <InputField 
                    name="description"
                    label="Description"
                    type="textarea"
                    id={id}
                    onChange={handleChangeNested}
                    value={FormData.workExperience[id].textarea}
                    category={category}
                    maxLength={400}
                />
        </div>
    )
}