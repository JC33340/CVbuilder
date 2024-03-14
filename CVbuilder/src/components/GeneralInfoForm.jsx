import React from "react"
import InputField from "./InputField"
import {FunctionContext} from "../pages/Dataform"

export default function GeneralInfoForm({FormData}){
    const{handleChange} = React.useContext(FunctionContext)
    return(
        <div className="form-category-wrapper"> 
            <h3>Name Information</h3>
            <div className = "form-section-wrapper">
                    <InputField 
                        name ="firstName" 
                        label = "First Name" 
                        type = "text" 
                        onChange = {handleChange} 
                        value={FormData.firstName}
                    />
                    <InputField 
                        name ="lastName" 
                        label = "Last Name" 
                        type = "text" 
                        onChange = {handleChange} 
                        value={FormData.lastName}
                    />
            </div> 
            <h3>Contact Information</h3>
            <div className="form-section-wrapper">
                <InputField 
                    name ="email" 
                    label = "Email" 
                    type = "text" 
                    onChange = {handleChange} 
                    value={FormData.email}
                />
                <InputField 
                    name ="contactNumber" 
                    label = "Contact Number" 
                    type = "text" 
                    onChange = {handleChange} 
                    value={FormData.contactNumber}
                />
                <InputField 
                    name ="linkedin" 
                    label = "Linkedin" 
                    type = "text" 
                    onChange = {handleChange} 
                    value={FormData.linkedin}
                />
                <InputField 
                    name ="address" 
                    label = "Address" 
                    type = "text" 
                    onChange = {handleChange} 
                    value={FormData.address}
                />
            </div>
            <h3>Profile</h3>
            <div className = "form-section-wrapper">
                <InputField 
                    name = "summaryStatement"
                    type = "textarea"
                    onChange={handleChange}
                    value={FormData.summaryStatement}
                />
            </div>
        </div>
    )
}