import React from 'react'
import { StyleSheet} from '@react-pdf/renderer'

const PDFstyles = StyleSheet.create({
    page:{
        padding:"15px 25px",
        fontFamily:"Helvetica",
        fontSize:"15px"
    },
    boldText:{
        fontFamily:"Helvetica-Bold"
    },
    obliqueText:{
        fontFamily:"Helvetica-Oblique",
        fontSize:"12px"
    },
    smallerText:{
        fontSize:"12px"
    },
    contactWrapper:{
        fontSize:"10px",
        textAlign:"right"
    },
    name:{
        fontSize:"50px",
        fontFamily:"Helvetica-Bold",
        marginBottom:"20px"
    },
    section:{
        marginBottom:"10px"
    },
    headerWrapper:{
        marginBottom:"10px",
        borderBottom:"2px solid black",
        fontFamily:"Helvetica-Bold",
        fontSize:"20px"
    },
    sectionContent:{
        textAlign:"justify",
    },
    dateHeader:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:"3px"
    },
})

export {PDFstyles}