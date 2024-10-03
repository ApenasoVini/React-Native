import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.links}>
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
            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272925',
        padding: 26,
    },
    links: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        flexDirection: 'column',
    },
    button: {
        backgroundColor: '#5D159D',
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
