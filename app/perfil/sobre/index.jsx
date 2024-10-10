import React from 'react';
import { ScrollView, StyleSheet, Image, Text } from 'react-native';
import { Link } from 'expo-router';
import Header from '../components/header';
import { View } from 'react-native';

const sm1 = require('../../../assets/sm1.jpg');
const sm2 = require('../../../assets/sm2.jpg');
const sm3 = require('../../../assets/sm3.jpg');

const curiosidades = [
    {
        id: 1,
        title: 'Meu nome é Vinícius, e nasci em 01/02/2007',
        description: 'Nasci em São José, Santa Catarina',
        img: sm1,
    },
    {
        id: 2,
        title: 'Toco violino',
        description: 'O violino é um instrumento musical de cordas friccionadas, que faz parte da família dos cordofones. É o menor e mais agudo instrumento desta família, que também inclui a viola, o violoncelo e o contrabaixo.',
        img: sm2,
    },
    {
        id: 3,
        title: 'Sou cruzeirense desde pequeno',
        description: 'O Cruzeiro Esporte Clube, mais conhecido como Cruzeiro, é uma associação polidesportiva brasileira sediada em Belo Horizonte, Minas Gerais. É considerado um dos maiores clubes de futebol do Brasil e da América do Sul.',
        img: sm3,
    },
];

const Sobre = () => {

    return (
        <ScrollView>
            <Header link='./' />
            {curiosidades.map((curiosidade, index) => (
                <View key={index} style={styles.item}>
                    <Link
                        href={{
                            pathname: `detalhes/${curiosidade.id}`, 
                            params: { data: JSON.stringify(curiosidade) } 
                        }}
                    >
                        <Image source={curiosidade.img} style={styles.img} />
                    </Link>

                    <Text style={styles.title}>{curiosidade.title}</Text>
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
        borderColor: '#ddd',
        display: 'flex',
        alignItems: 'center',
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

export default Sobre;
