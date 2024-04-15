import React from 'react'
import { StyleSheet} from '@react-pdf/renderer'

const PDFstyles = StyleSheet.create({
    page:{
        padding:"15px 25px",
        fontFamily:"Helvetica",
        fontSize:"11px"
    },
    boldText:{
        fontFamily:"Helvetica-Bold"
    },
    obliqueText:{
        fontFamily:"Helvetica-Oblique",
        fontSize:"11px"
    },
    smallerText:{
        fontSize:"11px"
    },
    indentedText:{
        marginLeft:"11px"
    },
    name:{
        fontSize:"40px",
        fontFamily:"Helvetica-Bold",
        marginBottom:"20px"
    },
    section:{
        marginBottom:"5px"
    },
    profileContent:{
        textAlign:"justify",
        fontSize:"11px",
        marginBottom:"10px"
    },
    splitHeader:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:"3px"
    },
    skillWrapper:{
        fontSize:"11px",
        marginBottom:"5px"
    }
})

export {PDFstyles}