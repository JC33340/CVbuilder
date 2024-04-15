import React from 'react'
import {Outlet,NavLink} from 'react-router-dom'

export default function Layout(){

    const testObj = {
        "education": {
            "institute0": {
                "qualification": "Msci",
                "degreeOfStudy": "Pharmacology",
                "institute": "UCL",
                "location": "london",
                "startDate": "2019-09",
                "endDate": "2023-09",
                "overallGrade": "2:1",
                "additionalDetails": "With modules in immunology, pharmacology, neuroscience, molecular biology, statistics, and physiology. "
            },
            "institute1": {
                "institute": "Abingdon School",
                "location": "Oxford",
                "startDate": "2017-09",
                "endDate": "2019-09",
                "qualification": "A-levels",
                "degreeOfStudy": "Maths, Chemistry, Biology"
            }
        },
        "firstName": "Jason",
        "lastName": "Chan",
        "email": "jasonchanhw0531@gmail.com",
        "contactNumber": "07366329945",
        "linkedin": "www.linkedin.com/in/ho-wa-chan-b207a0213",
        "address": "Central Way, London",
        "summaryStatement": "Recent Msci Pharmacology graduate from UCL. Self-taught in coding, namely Python (Django, Flask) and JavaScript (React) as well as HTML, CSS. Currently producing personal projects to expand and develop my knowledge. Highly motivated, adaptable, and dedicated to personal and professional development. ",
        "workExperience": {
            "workExperience0": {
                "company": "Koya",
                "location": "London",
                "role": "Waiter",
                "currentlyWorking": true,
                "startDate": "2022-10",
                "description": "  • Ensure attentive, quality customer satisfaction \n  • Resolve spontaneous issues throughout the shift\n  • Work collaboratively and effectively in a team, providing smooth service\n"
            },
            "workExperience1": {
                "company": "Note Education Consultancy ",
                "location": "Hong Kong",
                "role": "Tutor, Administrative officer",
                "startDate": "2020-08",
                "endDate": "2022-01",
                "description": "  • Preparation and planning for lessons in advance\n  • Engaging with students ensuring they are focused on tasks\n  • Created and enhanced various aspects of company website\n  • Advised on and managed clients school applications \n"
            },
            "workExperience2": {
                "company": "TopCast Aviation Supplies",
                "location": "Hong Kong",
                "role": "Full-time Internship",
                "startDate": "2017-08",
                "endDate": "2017-09",
                "description": "  • Conduct research and comparison of products of interest \n  • Data entry for various departments \n  • Check warehouse inventories to ensure product quality\n"
            }
        },
        "skills": {
            "skill0": {
                "skillName": "Mandarin, Enlish",
                "additionalDetails": "Fluent"
            },
            "skill1": {
                "skillName": "Canotnese",
                "additionalDetails": "Native"
            },
            "skill2": {
                "skillName": "Proficiency in Microsoft word, excel and powerpoint"
            },
            "skill3": {
                "skillName": "Self taught in coding",
                "additionalDetails": "- Python(Django) JavaScript(React), SQLite, Firebase, HTML,CSS, Git\n  - Notable personal projects:\n  - Web-socket chat application, CV builder\n  - Github: JC33340\n"
            }
        }
    }

    const [FormData,setFormData] = React.useState(testObj)


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

