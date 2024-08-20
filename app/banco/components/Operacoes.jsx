import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, Pressable } from 'react-native';

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
                <Image
                    style={styles.icon}
                    source={require('../../../assets/money.svg')}
                />
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
        gap: 20
    },
    text: {
        width: '80%',
        textAlign: 'center'
    },
    form: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 10,
    },
    icon: {
        width: 25,
        height: 25,
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        backgroundColor: '#EDEFF1',
        paddingHorizontal: 8,
        fontSize: 16,
        width: '80%',
    },
    button: {
        padding: 10,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        width: '80%',
        shadowOffset: { width: 0, height: 4 },
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 8
    },
    textButton: {
        textTransform: 'uppercase',
        color: '#fff',
        textAlign: 'center',
    }
});
