import React from 'react';
import { Text, View} from 'react-native'
import { auth,provider} from './firebase';
import { Alert } from 'react-native'

const Deneme=()=> {
     {setUser}
    const logini = () => {
        auth.signInWithPopup(provider).catch((error) => alert("alert çalışıyor"));
    };
    return (
        <View>
            <Text>deneme sayfasındır</Text>
            <button > google giriş</button>
            <button onClick={logini}> google giriş</button>
        </View>
    );
}



//const login=()=>{
//         auth.signInWithPopup(provider).catch(error=>alert(error.message));
//     }
//     return (
//         <div className="login">
//             <div className="container">
//                 <button onClick={login}> google giriş</button>
//             </div>

//         </div>

export default Deneme;
