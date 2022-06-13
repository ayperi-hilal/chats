import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';


const Chats = () => {
    return (
        <SafeAreaView>
            <TouchableOpacity style={styles.row}>
                <Text style={styles.name}>
                    başlık
                </Text>
                <Text style={styles.subtitle}>
                    Chats ekranıdır
                </Text>

                <Ionicons name="chevron-forward-circle-outline"/>
            </TouchableOpacity>
            <View  style={styles.seperator}/>
            <TouchableOpacity style={styles.row}>
                <Text style={styles.name}>
                    başlık
                </Text>
                <Text style={styles.subtitle}>
                    Chats ekranıdır
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 16,
        paddingVertical: 20
    },
    name: {
        fontSize: 16,

    },
    subtitle: {
        marginTop: 2,
        color: '#565656'
    },
    seperator:{
        height:StyleSheet.hairlineWidth,
        backgroundColor:'gray',
        marginStart:16,

    }
})
export default Chats;