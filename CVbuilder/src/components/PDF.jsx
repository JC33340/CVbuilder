import React from 'react'
import {Text,Document,Page,View,StyleSheet} from '@react-pdf/renderer'

export default function PDF({FormData}){

    const styles = StyleSheet.create({
        page:{
            padding:"20px"
        },
        contactWrapper:{
            fontSize:"10px",
            textAlign:"right"
        },
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
                    <Text>{FormData.firstName} {FormData.lastName}</Text>
                </View>
            </Page>
        </Document>
    )
}