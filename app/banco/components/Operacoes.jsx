import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Pressable, Modal } from 'react-native';

export default function Operacoes({ saque, deposito }) {
    const [valor, setValor] = useState('');


    const handleValue = (text) => {
        setValor(text);
    };

    const handleSaque = () => {
        const valorNumerico = parseFloat(valor);
        if (!isNaN(valorNumerico)) {
            saque(valorNumerico);
            setValor('');
        } else {
            alert('Digite um valor válido para saque.');
        }
    };

    const handleDeposito = () => {
        const valorNumerico = parseFloat(valor);
        if (!isNaN(valorNumerico)) {
            deposito(valorNumerico);
            setValor('');
        } else {
            alert('Digite um valor válido para depósito.');
        }
    };

    return (
        <View style={styles.container}>

            <Text style={styles.text}>Digite o valor abaixo e escolha uma das operações bancárias:</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    value={valor}
                    onChangeText={handleValue}
                    placeholder="0,00"
                />
            </View>
            <Pressable style={styles.button} onPress={handleSaque}>
                <Text style={styles.textButton}>Sacar</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleDeposito}>
                <Text style={styles.textButton}>Depositar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
    },
    text: {
        width: '80%',
        textAlign: 'center',
        margin: 15
    },
    form: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        margin: 15
    },
    icon: {
        width: 50,
        height: 50,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        backgroundColor: '#EDEFF1',
        paddingHorizontal: 8,
        fontSize: 16,
        width: '100%',
    },
    button: {
        padding: 15,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        width: '80%',
        marginBottom: 15
    },
    textButton: {
        textTransform: 'uppercase',
        color: '#fff',
        textAlign: 'center',
    }
});
