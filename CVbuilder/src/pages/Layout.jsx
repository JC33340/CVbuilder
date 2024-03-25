import React from 'react'
import {Outlet,NavLink} from 'react-router-dom'

export default function Layout(){
    const testObject={
        "firstName": "Jason",
        "lastName": "Chan",
        "email": "jasonchanhw0531@gmail.com",
        "contactNumber": "7366329945",
        "linkedin": "www.linkdin.com/random-shit",
        "address": "London",
        "summaryStatement": "Highly adaptable, fast learning and motivated recent pharmacology graduate. Currently self-learning Python and JavaScript, creating projects to improve my skills. Seeking an entry-level software engineering role with opportunities to further learn and develop skills for my professional career. ",
        "education": {
            "institute0": {
                "institute": "UCL",
                "location": "London",
                "startDate": "2018-09",
                "endDate": "2023-09",
                "qualification": "Msci",
                "degreeOfStudy": "Pharmacology",
                "overallGrade": "2:1",
                "additionalDetails": "-Joined the basket ball, badminton society\n-Head prefect"
            },
            "institute1": {
                "institute": "Abingdon",
                "location": "Oxfordshire",
                "startDate": "2016-09",
                "endDate": "2018-09",
                "qualification": "A-levels",
                "overallGrade": "A*,A,B"
            }
        },
        "workExperience": {
            "workExperience0": {
                "company": "Note Education Consultancy ",
                "location": "Hong Kong",
                "role": "Tutor",
                "startDate": "2016-06",
                "endDate": "2018-06",
                "description": "- Preparation and planning for lessons in advance\n- Engaging with students ensuring they are focused on tasks\n- Created and enhanced various aspects of company website\n- Aided in achieving 100% client entry rate into top HK schools\n- Advised on and managed clients school applications \n"
            },
            "workExperience1": {
                "company": "Koya",
                "location": "London",
                "currentlyWorking": true,
                "role": "Waiter",
                "startDate": "2022-12",
                "description": "- Ensure quality customer satisfaction \n- Resolve spontaneous issues throughout the shift\n- Maintain efficient service\n"
            }
        },
        "skills": {
            "skill0": {
                "skillName": "Self-learning coding",
                "additionalDetails": "- Understanding of python, JS\n- In particular libraries such as React and Django\n- Built personal projects:\n - Weather app\n - CVbuilder\n - Chat appplication\n"
            },
            "skill1": {
                "skillName": "Fluency in Mandarin, English"
            },
            "skill2": {
                "skillName": "Native Cantonese speaker"
            },
            "skill3": {
                "skillName": "Proficiency in Microsoft word, Excel, Powerpoint"
            }
        }
    }

    const [FormData,setFormData] = React.useState(testObject)
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

const education = {"education": {
    "institute0": {
        "institute": "UCL",
        "location": "London",
        "startDate": "2018-09",
        "endDate": "2023-09",
        "qualification": "Msci",
        "degreeOfStudy": "Pharmacology",
        "overallGrade": "2:1"
    },
    "institute1": {
        "institute": "Abingdon",
        "location": "Oxfordshire",
        "startDate": "2016-09",
        "endDate": "2018-09",
        "qualification": "A-levels",
        "overallGrade": "A*,A,B"
    }
}}