import React from "react"
import InputField from "./InputField"
import { FunctionContext,DataContext } from "../pages/Dataform"

export default function IndividualSkillForm({id,removeSkill,category}){

    const {handleChangeNested} = React.useContext(FunctionContext)
    const{FormData} = React.useContext(DataContext)

    return(
        <div className="form-category-wrapper nested-wrapper">
            <InputField 
                name="skillName"
                label="Skill"
                type="text"
                category={category}
                onChange={handleChangeNested}
                value={FormData.skills[id].skillName}
                id={id}
            />
            
            <InputField 
                name="additionalDetails"
                label="Additional Details"
                type="textarea"
                category={category}
                onChange={handleChangeNested}
                value={FormData.skills[id].additionalDetails}
                id={id}
                maxLength={200}
            />
        </div>
    )
}