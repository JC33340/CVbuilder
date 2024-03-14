import React from 'react'
import {BrowserRouter,Form,Route, Routes} from "react-router-dom"
import { Page, Text, View, Document, StyleSheet,PDFDownloadLink } from '@react-pdf/renderer';
import './App.css'
import {Dataform} from "./pages/Dataform.jsx"
import Preview from './pages/Preview.jsx';


export default function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dataform />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </BrowserRouter>
  )
}

