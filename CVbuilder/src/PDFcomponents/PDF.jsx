import React from 'react'
import {Text,Document,Page,View} from '@react-pdf/renderer'
import {PDFstyles} from "./PDFstyles"

export default function PDF({FormData}){

    const styles = PDFstyles
    
    const educationArr = Object.entries(FormData.education)
    const educationDisplay = educationArr.map((item)=>{
        const info = item[1]
        return(
            <View style={styles.subSection}>
                <View style={styles.dateHeader}>
                    <Text><Text style={styles.boldText}>{info.qualification}{info.degreeOfStudy?" "+info.degreeOfStudy:""}</Text>{info.institute?", "+info.institute:""} <Text style={styles.italicText}>{`(${info.location})`}</Text></Text>
                    <Text>{info.startDate} {info.currentlyEnrolled? '~ present':"~ "+info.endDate}</Text>
                </View>
                <Text>{info.additionalDetails}</Text>
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
                    <View style={styles.headerWrapper}><Text style={styles.sectionHeader}>Profile</Text><View style={styles.headerLine} /></View>
                    <Text  style={styles.sectionContent} >{FormData.summaryStatement}</Text>
                </View>
                :null}
                <View style={styles.section}>
                    <View style={styles.headerWrapper}><Text style={styles.sectionHeader}>Education</Text><View style={styles.headerLine} /></View>
                    {educationDisplay}
                </View>
                
            </Page>
        </Document>
    )
}