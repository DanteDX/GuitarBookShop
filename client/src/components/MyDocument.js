import React from "react";
import { Page, View, Text, Document, StyleSheet } from "@react-pdf/renderer";

const MyDocument = (props) => {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>Your order ID is: <Text style={{color:'red'}}>{props.orderId}</Text></Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
