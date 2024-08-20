import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Pressable } from 'react-native';

export default function Operacoes({ saque, deposito }) {
    const [valor, setValor] = useState('');

    const handleValorChange = (text) => {
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
            <Text>Digite o valor abaixo e escolha uma das operações bancárias:</Text>
            <View style={styles.formContainer}>
                <Image
                    style={styles.icon}
                    source={require('../../../assets/money.svg')}
                />
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    value={valor}
                    onChangeText={handleValorChange}
                    placeholder="0,00"
                />
                <Pressable style={styles.button} onPress={handleSaque}>
                    <Text>Sacar</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={handleDeposito}>
                    <Text>Depositar</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10,
    },
    formContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
        fontSize: 16,
        width: '80%',
    },
    button: {
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
    },
});
