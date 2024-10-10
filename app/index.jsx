import React from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button}>
                <Link href='./banco'>
                    <Text style={styles.buttonText}>Banco</Text>
                </Link>
            </Pressable>

            <Pressable style={styles.button}>
                <Link href='./cadastro'>
                    <Text style={styles.buttonText}>Cadastro</Text>
                </Link>
            </Pressable>

            <Pressable style={styles.button}>
                <Link href='./calculadora1'>
                    <Text style={styles.buttonText}>Calculadora 1</Text>
                </Link>
            </Pressable>

            <Pressable style={styles.button}>
                <Link href='./calculadora2'>
                    <Text style={styles.buttonText}>Calculadora 2</Text>
                </Link>
            </Pressable>

            <Pressable style={styles.button}>
                <Link href='./lista'>
                    <Text style={styles.buttonText}>Lista</Text>
                </Link>
            </Pressable>

            <Pressable style={styles.button}>
                <Link href='./picker'>
                    <Text style={styles.buttonText}>Picker</Text>
                </Link>
            </Pressable>

            <Pressable style={styles.button}>
                <Link href='./splashscreen'>
                    <Text style={styles.buttonText}>Splashscreen</Text>
                </Link>
            </Pressable>

            <Pressable style={styles.button}>
                <Link href='./perfil'>
                    <Text style={styles.buttonText}>perfil</Text>
                </Link>
            </Pressable>

            <Pressable style={styles.button}>
                <Link href='./ifome'>
                    <Text style={styles.buttonText}>Ifome</Text>
                </Link>
            </Pressable>

            <Pressable style={styles.button}>
                <Link href='./camera'>
                    <Text style={styles.buttonText}>Câmera</Text>
                </Link>
            </Pressable>

            <Pressable style={styles.button}>
                <Link href='./galeria'>
                    <Text style={styles.buttonText}>Galeria</Text>
                </Link>
            </Pressable>

            <Pressable style={styles.button}>
                <Link href='./memorias'>
                    <Text style={styles.buttonText}>Memorias</Text>
                </Link>
            </Pressable>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#272925',
    },
    button: {
        backgroundColor: '#eb4034',
        paddingVertical: 15,
        borderRadius: 30,
        marginBottom: 10,
        width: 175,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});