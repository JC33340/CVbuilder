import React from 'react'
import InputField from './InputField'
import {FunctionContext,DataContext} from "../pages/Dataform"

export default function EducationInstituteForm({institute,removeInstitute}){

    const {handleChangeEducation} = React.useContext(FunctionContext)
    const{FormData} = React.useContext(DataContext)

    return(
        <>  
            <button onClick = {removeInstitute} id = {institute}>Remove Institute</button>
            <div className="form-section-wrapper">
                <InputField 
                    name="institute"
                    label="Institute"
                    type="text"
                    id={institute}
                    onChange={handleChangeEducation}
                />
                <InputField 
                    name="completed"
                    label="Completed"
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
                <InputField 
                    name="endDate"
                    label="End Year"
                    type="number"
                    id={institute}
                    onChange={handleChangeEducation}
                />
            </div>
            
        </>
    )
}