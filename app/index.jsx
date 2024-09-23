import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.links}>
                <Link href='./banco'>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Banco</Text>
                    </Pressable>
                </Link>
                <Link href='./cadastro'>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Cadastro</Text>
                    </Pressable>
                </Link>
                <Link href='./calculadora1'>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Calculadora 1</Text>
                    </Pressable>
                </Link>
                <Link href='./calculadora2'>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Calculadora 2</Text>
                    </Pressable>
                </Link>
                <Link href='./lista'>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Lista</Text>
                    </Pressable>
                </Link>
                <Link href='./picker'>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Picker</Text>
                    </Pressable>
                </Link>
                <Link href='./splashscreen'>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Splashscreen</Text>
                    </Pressable>
                </Link>
                <Link href='./perfil'>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>perfil</Text>
                    </Pressable>
                </Link>
                <Link href='./ifome'>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Ifome</Text>
                    </Pressable>
                </Link>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272925',
        padding: 20,
    },
    links: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    button: {
        backgroundColor: '#5D159D',
        paddingVertical: 15,
        borderRadius: 30,
        marginVertical: 10,
        width: 175,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
