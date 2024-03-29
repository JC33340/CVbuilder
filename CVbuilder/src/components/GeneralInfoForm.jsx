import React from "react"
import InputField from "./InputField"
import {FunctionContext,DataContext} from "../pages/Dataform"


export default function GeneralInfoForm(){
    const{handleChange} = React.useContext(FunctionContext)
    const {FormData} = React.useContext(DataContext)
    return(
        <div className="form-category-wrapper main"> 
            <h3>Name Information</h3>
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
            <h3>Contact Information</h3>
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
            <h3>Profile</h3>
                <InputField 
                    name = "summaryStatement"
                    type = "textarea"
                    onChange={handleChange}
                    value={FormData.summaryStatement}
                    maxLength={500}
                />
        </div>
    )
}