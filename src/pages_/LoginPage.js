import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import  styles from '../stylesPages/stylesLogin'
import auth from '@react-native-firebase/auth';

const LoginPage = (props) => {

    const [email, setUserEmail] = useState("");
    const [password, setUserPassword] = useState("");

    const setMail = text => setUserEmail(text);
    const setPassword = text => setUserPassword(text)


    const loginUser = async () => {
        try{
            await auth().signInWithEmailAndPassword(email, password)
            
            AsyncStorage.setItem('@USER_ID', auth().currentUser.uid)
            Alert.alert("Hoş Geldiniz!", "Kullanıcı giriş başarılı şekilde gerçekleşmiştir.")
        }
        catch(error){
            console.log(error)
            Alert.alert("Üzgünüz!", "Bir hata oluştu!")
        }
    }

    return (
        <SafeAreaView style={styles.loginPage.viewBackground}>
            <View style={styles.loginPage.viewPosition}>

                <TextInput
                    style={styles.loginPage.textInputStyle}
                    placeholder="e-mail.."
                    placeholderTextColor="white"
                    onChangeText={setMail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                     style={styles.loginPage.textInputStyle}
                    placeholder="Password"
                    placeholderTextColor="white"
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity style={styles.loginPage.touchableStyle} onPress={loginUser} > 
                        <Text>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginPage.touchableStyle} onPress={() => props.navigation.navigate("Sign")}>
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

export { LoginPage }