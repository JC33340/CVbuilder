import React from 'react'
import {useOutletContext} from "react-router-dom"
import{PDFViewer,PDFDownloadLink} from '@react-pdf/renderer'
import PDF from '../PDFcomponents/PDF'
import {HexColorPicker} from "react-colorful"

export default function Preview(){
    
    const {FormData} = useOutletContext()

    const [sectionColor,setSectionColor] = React.useState("black")

    function handleChange(event){
        const color = event.target.value.toLowerCase()
        setSectionColor(color)
    }


    console.log(sectionColor)
    return(
        <div className='form-category-wrapper pdf-viewer-wrapper'> 
            <PDFDownloadLink className='PDF-download-button' document={<PDF FormData={FormData} sectionColor={sectionColor} />}>Download</PDFDownloadLink>
            <br />
            <div className='grid preview-columns'>
                <div className='grid-item'>
                    <p>Choose title color:</p>
                    <HexColorPicker onChange={setSectionColor} />
                    <p>or enter color/hexcode:</p>
                    <input value = {sectionColor} type="text" placeholder='Hexcolor code' onChange={handleChange}></input>
                </div>
                <div className='grid-item'>
                <PDFViewer style={{width:"100%",height:"40rem"}}>
                    <PDF FormData={FormData} sectionColor={sectionColor}/>
                </PDFViewer>
                </div>
            </div>
           
        </div>
    )
}