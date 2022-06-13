import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import ContactRow from '../components/ContactRow.js';
import {colors} from '../config/constant';

const Setting=()=>{
    return (
        <View>
            <ContactRow
            name="isim"
            subtitle="mail adresi"
            style={styles.contactRow}
            />
            <TouchableOpacity onPress={()=>{
                alert("uyarı kısmı")
            }}>
            <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}




