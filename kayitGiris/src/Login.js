import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
///import "./Login.css";
import {auth, provider} from './firebase';


// const Login =()=>{
//     return(
//         <Text>login sayfasıdır</Text>
//     );
// }

function Login(){
    return (
        <View>
        <Text>deneme sayfasındır</Text>
        {/* <View>
            <button>Google giriş</button>
        </View> */}
        </View>
            
    );
}
// function Login({setUser}){
//     const login=()=>{
//         auth.signInWithPopup(provider).catch(error=>alert(error.message));
//     }
//     return (
//         <div className="login">
//             <div className="container">
//                 <button onClick={login}> google giriş</button>
//             </div>

//         </div>

//     );
// }
export default Login;