import React from 'react';
import { colors } from '../config/constant';
import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
// import {auth, provider} from './firebase';



function SingIn({setUser}){
    const login=()=>{
        auth.signInWithPopup(provider).catch(error=>alert(error.message));
    }
    return (
        <View style={styles.contsiner}>
            <SafeAreaView>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Yeni Hesap Oluştur</Text>
                    <TextInput style={styles.input} placeholder='kullanıcı adını giriniz' />
                    <TextInput style={styles.input} placeholder='Email Adresini Giriniz' />
                    <TextInput style={styles.input} placeholder='Şifre Giriniz' />

                    {/*textlerin yan yana gözükmesi için bir View içerine alınır */}
                    <View style={styles.buttonscontainer}>
                        {/* <Button name="Kaydet" varient="secondary" /> */}
                        <Button 
                        name="Oturum Aç" 
                        //varient="primary" 
                        onPress={()=>{login}}
                        />
                    </View>

                </View>
            </SafeAreaView>
        </View>

    );
}

const styles = StyleSheet.create({
    contsiner: {
        flex: 1,
        backgroundColor: colors.primary
    },
    contentContainer: {
        padding: 16
    },
    title: {
        fontSize: 36,
        color: "white",
        fontWeight: "800",
        marginBottom: 16
    },
    input: {
        backgroundColor: "white",
        fontSize: 15,
        marginTop: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 6
    },
    buttonscontainer: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32
    },
    buttoncontainer: {
        backgroundColor: 'black',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 6
    },
    buttonLabel: {
        color: 'white',
        fontSize: 18
    }
})

export default SingIn;
