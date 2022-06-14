import React, { useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import { colors } from '../config/constant';

const SingUp = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Yeni Hesap Oluştur</Text>
                    <TextInput style={styles.input} placeholder="Adınızı Giriniz" />
                    <TextInput style={styles.input} placeholder="Email Giriniz" />
                    <TextInput style={styles.input} placeholder="Şifre Giriniz" />

                    <View style={styles.buttonsContainer}>
                        <Button title="Oturum Aç" varient="secondary"/>
                        <Button title="Hesap Oluştur" varient="primary"/>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    title: {
        fontSize: 36,
        color: "white",
        fontWeight: "800",
        marginBottom: 16,
    },
    contentContainer: {
        padding: 32,
    },
    input: {
        backgroundColor: 'white',
        fontSize: 15,
        marginTop: 16,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 6,

    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:32,
    },
    buttonContainer:{
backgroundColor:"black",
paddingHorizontal:18,
paddingVertical:12,
borderRadius:6,
    },
    buttonLabel:{
color:"white",
fontSize:18,
    }

});

export default SingUp;