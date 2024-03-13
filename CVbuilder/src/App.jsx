import React from 'react'
import {BrowserRouter,Form,Route, Routes} from "react-router-dom"
import { Page, Text, View, Document, StyleSheet,PDFDownloadLink } from '@react-pdf/renderer';
import './App.css'
import {Dataform} from "./pages/Dataform.jsx"

const DataContext = React.createContext()

function App() {

  const [FormData,setFormData] = React.useState({})
  console.log(FormData)


  return (
    <DataContext.Provider value = {{FormData:FormData, setFormData:setFormData}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dataform />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  )
}

export default App
export {DataContext}
