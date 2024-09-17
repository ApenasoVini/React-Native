import React from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import Header from './components/header';
import { useRouter } from 'expo-router';

const App = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Header
                link='../'
            />
            <View style={styles.welcome}>
                <Image
                    style={styles.img}
                    source={require('./assets/perfil.png')}
                />
                <Text style={styles.title}>Bem vindo(a) ao meu perfil!</Text>
                <Text style={styles.desc}>Olá, meu nome é Vinícius, sou desenvolvedor frontend e este é meu App</Text>

                <Pressable style={styles.button} onPress={() => router.push('./tecnologias')}>
                    <Text style={styles.buttonText}>Tecnologias</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => router.push('./sobre')}>
                    <Text style={styles.buttonText}>Sobre mim</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    welcome: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
    },
    img: {
        borderRadius: 100,
        height: 120,
        width: 120,
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        fontWeight: '500',
    },
    desc: {
        fontSize: 15,
        marginTop: 20,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#5275ff',
        paddingVertical: 13,
        borderRadius: 30,
        marginVertical: 15,
        width: 190,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontWeight: '600',
    },
});

export default App;
