import React from 'react'
import {Text,Document,Page,View} from '@react-pdf/renderer'
import {PDFstyles} from "./PDFstyles"

export default function PDF({FormData}){

    const styles = PDFstyles
    
    const educationArr = Object.entries(FormData.education)
    const educationDisplay = educationArr.map((item)=>{
        const info = item[1]
        return(
            <View style={styles.section}>
                <View style={styles.dateHeader}>
                    <View>
                        <Text style={styles.boldText}>{info.qualification}{info.degreeOfStudy?" "+info.degreeOfStudy:""}</Text>
                        <Text><Text>{info.institute}</Text><Text style={styles.obliqueText}> {`(${info.location})`}</Text></Text>
                    </View>
                    <Text>{info.startDate} {info.currentlyEnrolled? '~ present':"~ "+info.endDate}</Text>
                </View>
                <View style={styles.smallerText}>
                    <Text>{info.overallGrade ? "- "+info.overallGrade:""}</Text>
                    <Text>{info.additionalDetails}</Text>
                </View>
            </View>
            
        )
    })
    
    const experienceData = Object.entries(FormData.workExperience)
    const experienceDisplay = experienceData.map((item)=>{
        const info = item[1]
        return(
            <View style={styles.section}>
                <View style={styles.dateHeader}>
                    <View>
                        <Text style={styles.boldText}>{info.role}</Text>
                        <Text><Text>{info.company}</Text><Text style={styles.obliqueText}> {`(${info.location})`}</Text></Text>
                    </View>
                    <Text>{info.startDate} {info.currentlyWorking? '~ present':"~ "+info.endDate}</Text>
                </View>
                <Text style={styles.smallerText}>{info.description}</Text>
            </View>
        )
    })

    return(
        <Document>
            <Page style={styles.page}>
                <View style={styles.contactWrapper}>
                    <Text>{FormData.email}</Text>
                    <Text>{FormData.contactNumber}</Text>
                    <Text>{FormData.linkedin}</Text>
                    <Text>{FormData.address}</Text>
                </View>
                <View>
                    <Text style={styles.name}>{FormData.firstName} {FormData.lastName}</Text>
                </View>
                {FormData.summaryStatement?
                <View style={styles.section}>
                    <View style={styles.headerWrapper}><Text>Profile</Text></View>
                    <Text  style={styles.sectionContent} >{FormData.summaryStatement}</Text>
                </View>
                :null}
                <View>
                    <View style={styles.headerWrapper}><Text>Education</Text></View>
                    {educationDisplay}
                </View>
                <View style={styles.section}>
                    <View style={styles.headerWrapper}><Text>Experience</Text></View>
                    {experienceDisplay}
                </View>
                
            </Page>
        </Document>
    )
}