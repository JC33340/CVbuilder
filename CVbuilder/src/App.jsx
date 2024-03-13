import React from 'react'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import { Page, Text, View, Document, StyleSheet,PDFDownloadLink } from '@react-pdf/renderer';
import './App.css'
import Dataform from "./components/Dataform.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dataform />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
