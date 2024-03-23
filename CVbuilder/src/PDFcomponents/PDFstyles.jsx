import React from 'react'
import { StyleSheet} from '@react-pdf/renderer'

const PDFstyles = StyleSheet.create({
    page:{
        padding:"15px",
        fontFamily:"Helvetica",
        fontSize:"15px"
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
        marginBottom:"20px"
    },
    headerWrapper:{
        display:"flex",
        flexDirection:"row",
        marginBottom:"10px"
    },
    headerLine:{
        borderBottom:"1px solid black",
        width:"100%"
    },
    sectionHeader:{
        fontFamily:"Helvetica-Bold",
        fontSize:"20px",
        marginRight:"10px"
    },
    sectionContent:{
        textAlign:"justify",
    }
})

export {PDFstyles}