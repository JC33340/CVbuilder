import React from 'react'
import InputField from './InputField'

export default function EducationInstituteForm({institute}){
    return(
        <>
            <div className="form-section-wrapper">
                <InputField 
                    name="institute"
                    label="Institute"
                    type="text"
                    id={institute}
                />
                <InputField 
                    name="completed"
                    label="Completed"
                    type="checkbox"
                    id={institute}
                />
                <InputField 
                    name="startDate"
                    label="Start Year"
                    type="number"
                    id={institute}
                />
                <InputField 
                    name="endDate"
                    label="End Year"
                    type="number"
                    id={institute}
                />
            </div>
            
        </>
    )
}