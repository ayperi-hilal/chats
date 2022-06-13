import React from 'react';
import{Text,TouchableOpacity,StyleSheet} from 'react-native';



const Button=({name,varient})=>{
    return(
           <TouchableOpacity style={[styles.buttoncontainer,{backgroundColor:varient==='primary' ? 'black':'transparent',paddingHorizontal: varient==='primary' ? 16:0,},
        ]}
        >
                <Text style={[styles.buttonLabel,{color:varient==='primary'?'white':'black'}]}>
                    {name}
                </Text>
            </TouchableOpacity>
    )
}


const styles=StyleSheet.create({
     
    buttoncontainer:{
        paddingHorizontal:16,
        paddingVertical:12,
        borderRadius:6
    },
    buttonLabel:{
        fontSize:18
    }
})


export default Button;
