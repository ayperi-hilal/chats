import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import ContactRow from '../components/ContactRow';
import Seperator from '../components/Seperator';
// import SingUp from './SingUp';
import firebase from "firebase";
// import Chat from './Chat.js';
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../config/constant';
import { query, where } from "firebase/firestore";

// const chats = [{
//     users: ['me@gmail', 's@gmail.com'],
//     messages: []
// }, {
//     users: ['me@gmail', 'b@gmail.com'],
//     messages: []
// }, {
//     users: ['me@gmail', 'c@gmail.com'],
//     messages: []
// }]

const Chats = ({ navigation }) => {
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                navigation.navigate("SingUp");
            }
        });

    }, []);

    const [chats, setChats] = useState([]);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            firebase
                .firestore().collection('chats')
                // .where('users', 'array-contains', "me@gmail")
                .where('users', 'array-contains', user.email)
                // .where('users', 'array-contains', firebase.auth()?.currentUser?.email)
                .onSnapshot((snapshot) => {
                    setChats(snapshot.docs);
                });
        });
    }, []);

    const handlerFABPress = () => {
        Alert.prompt("Email", "email giriniz", (email) => {
            firebase.firestore().collection("chats").add({
                users: [firebase.auth()?.currentUser?.email, email],
                messages: [],
            }).then((doc) => {
                navigation.navigate("Chat", { id: doc.id });
            })
        });
    };

    // const Chats = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            {chats.map(chat => (
                <React.Fragment key={chat.id}>
                    <ContactRow
                        name={chat.data().users.find((x) => x !== firebase.auth()?.currentUser?.email)}
                        subtitle={chat.data().messages.length===0 ? "Henüz mesaj yok":chat.data().messages[0].text}
                        onPress={() => {
                            navigation.navigate("Chat", { id: chat.id });
                        }}

                    />
                    <Seperator />
                </React.Fragment>
            ))}
            <TouchableOpacity style={styles.fab} onPress={handlerFABPress}>
                <View style={styles.fabContainer}>
                    <Ionicons name="add-circle" size={24} color="white" />
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    fabContainer: {
        width: 56,
        height: 56,
        backgroundColor: colors.pink,
        borderRadius: 28,
        justifyContent: 'center',
        alignContent: 'center',

    },
    container: {
        flex: 1,

    },
    fab: {
        position: 'absolute',
        bottom: 16,
        right: 16,
    }
});
export default Chats;

