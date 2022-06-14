import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../config/constant';
import { Ionicons } from '@expo/vector-icons';

const Cell = ({title,icon,onPress,tintcolor,style}) => {
    return (
        <TouchableOpacity
            style={[styles.cell,style]}
            onPress={onPress}
            >
            <View style={[styles.ıconContainer,{backgroundColor:tintcolor}]}>
                <Ionicons name={icon}
                    size={24}
                    color={'white'}
                />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Ionicons name="chevron-forward-outline" size={20} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
  
    cell: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 16,
        marginStart: 16,
        flex: 1

    },
    ıconContainer: {
        height: 32,
        width: 32,
        backgroundColor: colors.red,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    }
})



export default Cell;
