import React from 'react'
import {useOutletContext} from "react-router-dom"
import{PDFViewer} from '@react-pdf/renderer'
import PDF from '../components/PDF'

export default function Preview(){

    const {FormData} = useOutletContext()

    return(
        <div className='form-category-wrapper pdf-viewer-wrapper'> 
            <button onClick={()=>{console.log(FormData)}}>Click me!</button>
            <br />
            <PDFViewer style={{width:"80%",height:"40rem"}}>
                <PDF FormData={FormData}/>
            </PDFViewer>
        </div>
    )
}