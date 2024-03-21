import React from 'react'
import {Text,Document,Page,View,StyleSheet,Font} from '@react-pdf/renderer'

export default function PDF({FormData}){

    const styles = StyleSheet.create({
        page:{
            padding:"20px",
            fontFamily:"Helvetica"
        },
        contactWrapper:{
            fontSize:"10px",
            textAlign:"right"
        },
        name:{
            fontSize:"50px",
            fontFamily:"Helvetica-Bold",
            borderBottom:"2px solid black"
        }
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
            </Page>
        </Document>
    )
}