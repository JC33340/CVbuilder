import React from 'react'
import {Text,Document,Page,View} from '@react-pdf/renderer'
import {PDFstyles} from "./PDFstyles"
import { Form } from 'react-router-dom'

export default function PDF({FormData}){

    const styles = PDFstyles

    var educationDisplay
    var experienceDisplay
    var skillsDisplay
    
    if(FormData.education){
        const educationArr = Object.entries(FormData.education)
        educationDisplay = educationArr.map((item)=>{
        const info = item[1]
        return(
            <>
            <View style={styles.section}>
                <View style={styles.splitHeader}>
                    <View>
                        <Text style={styles.boldText}>{info.qualification}{info.degreeOfStudy?" "+info.degreeOfStudy:""}</Text>
                        <Text><Text>{info.institute}</Text><Text style={styles.obliqueText}> {`(${info.location})`}</Text></Text>
                    </View>
                    <Text style={styles.smallerText}>{info.startDate} {info.currentlyEnrolled? '~ present':"~ "+info.endDate}</Text>
                </View>
                <View style={styles.smallerText}>
                    <Text>{info.overallGrade ? "- "+info.overallGrade:""}</Text>
                    <Text>{info.additionalDetails}</Text>
                </View>
            </View>
            </>
        )
    })
    }
    
    if(FormData.workExperience){
        const experienceData = Object.entries(FormData.workExperience)
        experienceDisplay = experienceData.map((item)=>{
        const info = item[1]
        return(
            <View style={styles.section}>
                <View style={styles.splitHeader}>
                    <View>
                        <Text style={styles.boldText}>{info.role}</Text>
                        <Text><Text>{info.company}</Text><Text style={styles.obliqueText}> {`(${info.location})`}</Text></Text>
                    </View>
                    <Text style={styles.smallerText}>{info.startDate} {info.currentlyWorking? '~ present':"~ "+info.endDate}</Text>
                </View>
                <Text style={styles.smallerText}>{info.description}</Text>
            </View>
        )
    })
    }
    
    if (FormData.skills){
        const skillsData = Object.entries(FormData.skills)
        skillsDisplay = skillsData.map((item)=>{
            const info = item[1]
            return(
                <View style={styles.skillWrapper}>
                    <Text>{info.skillName}</Text>
                    <Text style={styles.indentedText}>{info.additionalDetails}</Text>
                </View>
            )
        })
    }
   

    return(
        <Document>
            <Page style={styles.page}>
                <View style={styles.splitHeader}>
                    <View>
                        <Text style={styles.name}>{FormData.firstName} {FormData.lastName}</Text>
                    </View>
                    <View style={styles.smallerText}>
                        <Text>{FormData.email}</Text>
                        <Text>{FormData.contactNumber}</Text>
                        <Text>{FormData.linkedin}</Text>
                        <Text>{FormData.address}</Text>
                    </View>

                </View>
                {FormData.summaryStatement?
                <View style={styles.section}>
                    <View style={styles.headerWrapper}><Text>Profile</Text></View>
                    <Text  style={styles.profileContent} >{FormData.summaryStatement}</Text>
                </View>
                :null}
                {educationDisplay && educationDisplay.length!=0?
                    
                    <View>
                        <View style={styles.headerWrapper}><Text>Education</Text></View>
                        {educationDisplay}
                    </View>:null
                }
                {experienceDisplay && experienceDisplay.length!=0?
                    <View style={styles.section}>
                        <View style={styles.headerWrapper}><Text>Experience</Text></View>
                        {experienceDisplay}
                    </View>:null
                }
                {skillsDisplay && skillsDisplay.length!=0?
                    <View style={styles.section}>
                        <View style={styles.headerWrapper}><Text>Skills</Text></View>
                        {skillsDisplay}
                    </View>:null
                }
            </Page>
        </Document>
    )
}