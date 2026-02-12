import { TextInput, View, Text, StyleSheet, TouchableOpacity, KeyboardTypeOptions } from "react-native";
import { useState } from "react";

type Props = {
    placeholder: string,
    onChange: (text: string) => void,
    value:string;
    typeInput: 'password' | 'email' | 'numeric' | 'text'
}

export default function CustomInput ({placeholder,onChange,value,typeInput}:Props){

    const keyboardType: KeyboardTypeOptions =
    typeInput === "numeric" ? "numeric" : "default"  

    const getError = () =>{
        if (typeInput === "text" && value.length < 1) 
            return 'Favor ingrese su nombre';
        if (typeInput === "numeric" && value.length < 1 )
            return 'Favor ingrese un valor';
    };

    const error = getError();

return(
    <View style={styles.wrapper}>
        {/* //inputContainer */}
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                keyboardType= {keyboardType}
            />
        
    </View>
    {error && <Text> {error} </Text> }
    </View>
);

}

const styles = StyleSheet.create({
wrapper:{
        marginBottom:15,
        width: "100%",
        paddingHorizontal: 15,
        backgroundColor: "white"
    },
inputContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: "space-between",
        
        
        borderWidth: 5,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 13,
        paddingVertical: 15
    },
input: {
        paddingHorizontal: 10,
        width: "80%"
    }
});