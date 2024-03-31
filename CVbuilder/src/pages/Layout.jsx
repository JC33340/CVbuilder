import React from 'react'
import {Outlet,NavLink} from 'react-router-dom'

export default function Layout(){

    const testObj = {
        "firstName": "Louise ",
        "lastName": "Dong ",
        "email": "louise.dong5396@gmail.com ",
        "contactNumber": "07786914876",
        "linkedin": "www.linkdin.com/random-shit",
        "address": "London ",
        "summaryStatement": "Jason's girlfriend bing bong bing bong weeeeeeeeeeeeeeeeeeeeeee",
        "education": {
            "institute0": {
                "institute": "Queen Mary university of London ",
                "location": "London ",
                "currentlyEnrolled": true,
                "startDate": "2021-09",
                "qualification": "BSc",
                "degreeOfStudy": "Biochemistry ",
                "overallGrade": "1",
                "additionalDetails": "bing bong bang booo pookie wookie princess "
            }
        },
        "workExperience": {
            "workExperience0": {
                "company": "efitter ",
                "location": "London ",
                "role": "Fashion business development intern",
                "currentlyWorking": true,
                "startDate": "2024-03",
                "description": "weeee weee we we we we we we we w eeeeeeeeeee"
            }
        },
        "skills": {
            "skill0": {
                "skillName": "chinese mandarin ",
                "additionalDetails": "fluent "
            },
            "skill1": {
                "skillName": "cantonese ",
                "additionalDetails": "fluent "
            }
        }
    }

    const [FormData,setFormData] = React.useState({})

    return(
        <>
        <header>
            <NavLink className={({isActive})=>isActive?"activeNavbarLink":"NavbarLink"} to="/" >Form</NavLink>
            <NavLink className = {({isActive})=>isActive?"activeNavbarLink":"NavbarLink"} to ="preview" >Preview</NavLink>
        </header>
            <Outlet context={{FormData,setFormData}} />
        </>
    )
}

