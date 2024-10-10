import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text } from 'react-native';
import { Link } from 'expo-router';
import Header from '../components/header';

const dev1 = require('../../../assets/dev1.png');
const dev2 = require('../../../assets/dev2.png');

const tecnologias = [
    {
        id: 1,
        title: 'Trabalho com react e react native',
        description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        img: dev1,
    },
    {
        id: 2,
        title: 'Também estou estudando VueJS',
        description: 'Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.',
        img: dev2,
    },
];

const Tecnologias = () => {
    return (
        <ScrollView>
            <Header link='./' />
            {tecnologias.map((tecnologia, index) => (
                <View key={index} style={styles.item}>
                    <Link
                        href={{
                            pathname: `detalhes/${tecnologia.id}`,  
                            params: { data: JSON.stringify(tecnologia) }  
                        }}
                    >
                        <Image source={tecnologia.img} style={styles.img} />
                    </Link>

                    <Text style={styles.title}>{tecnologia.title}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        borderColor: '#ddd',
        borderRadius: 8,
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
});

export default Tecnologias;
