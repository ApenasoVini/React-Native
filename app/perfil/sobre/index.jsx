import React from 'react';
import { ScrollView, StyleSheet, FlatList, Image, Text } from 'react-native';
import Header from '../components/header';
import { View } from 'react-native';

const sm1 = require('../assets/sm1.jpg');
const sm2 = require('../assets/sm2.jpg');
const sm3 = require('../assets/sm3.jpg');

const data = [
    {
        id: '1',
        title: 'Meu nome é Vinícius, e nasci em 01/02/2007',
        img: sm1,
    },
    {
        id: '2',
        title: 'Toco violino',
        img: sm2,
    },
    {
        id: '3',
        title: 'Sou cruzeirense desde pequeno',
        img: sm3,
    },
];

const Sobre = () => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image
                style={styles.img}
                source={item.img}
            />
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <ScrollView>
            <Header
                link='./'
            />
            <FlatList
                style={styles.container}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
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
