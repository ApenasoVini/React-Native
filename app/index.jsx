import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página Inicial</Text>
            <View style={styles.links}>
                <Link href='./banco' asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Banco</Text>
                    </TouchableOpacity>
                </Link>
                <Link href='./cadastro' asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cadastro</Text>
                    </TouchableOpacity>
                </Link>
                <Link href='./calculadora1' asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Calculadora 1</Text>
                    </TouchableOpacity>
                </Link>
                <Link href='./calculadora2' asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Calculadora 2</Text>
                    </TouchableOpacity>
                </Link>
                <Link href='./lista' asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Lista</Text>
                    </TouchableOpacity>
                </Link>
                <Link href='./picker' asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Picker</Text>
                    </TouchableOpacity>
                </Link>
                <Link href='./splashscreen' asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Splashscreen</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#272925',
        padding: 20,
    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#5D159D',
        paddingVertical: 15,
        borderRadius: 30,
        marginVertical: 10,
        marginLeft: 15,
        width: 175,
        alignItems: 'center',
    },  
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
