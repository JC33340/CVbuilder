import React from 'react'
import { Page, Text, View, Document, StyleSheet,PDFDownloadLink } from '@react-pdf/renderer';
import './App.css'

function App() {

  return (
    <>
    <PDFDownloadLink document = {<Document>
          <Page size = "A4">
            <View>
              <Text>YEEnaw</Text>
            </View>
          </Page>
          <Page size = "A4">
            <View>
              <Text>YEEYAW</Text>
            </View>
          </Page>
        </Document>} filename= "Text">
        Download Link
      </PDFDownloadLink>
    </>
  )
}

export default App
