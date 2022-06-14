import React from "react";
import { View,StyleSheet } from "react-native";

const Seperator=()=>{
    return(
        <View style={styles.separator}/>
    )
}

const styles=StyleSheet.create({

    separator:{
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'gray',
        marginStart: 88,
    }
})
export default Seperator;