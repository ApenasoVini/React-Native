import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Text, Alert } from 'react-native';
import axios from 'axios';

const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (n) => setName(n);
    const handleEmailChange = (e) => setEmail(e);
    const handlePasswordChange = (p) => setPassword(p);

    const register = async () => {
        if (name && email && password) {
            try {
                const response = await axios.post(
                    'https://taskhub-s37f.onrender.com/auth/signup',
                    { "name": name, "email": email, "password": password }
                );
                if (response.status === 200){
                    console.log('User criado')
                }
            } catch (error) {
                console.log('Error', error);
            }
        } else {
            console.log('Complete todos os dados');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <TextInput
                value={name}
                onChangeText={handleNameChange}
                placeholder='Nome completo'
                style={styles.input}
            />
            <TextInput
                keyboardType='email-address'
                placeholder='Email'
                value={email}
                onChangeText={handleEmailChange}
                style={styles.input}
            />
            <TextInput
                placeholder='Senha'
                secureTextEntry={true}
                value={password}
                onChangeText={handlePasswordChange}
                style={styles.input}
            />
            <Pressable style={styles.button} onPress={register}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        flexDirection: 'column',
        padding: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    input: {
        width: '90%',
        marginTop: 15,
        borderColor: '#000',
        paddingLeft: 4,
        borderStyle: 'solid',
        borderWidth: 1,
        height: 35,
    },
    button: {
        backgroundColor: '#000',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        height: 35,
        borderRadius: 10,
        marginTop: 20,
        width: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFF',
    }
});

export default App;
