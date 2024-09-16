import React from 'react';
import { ScrollView, StyleSheet, View, FlatList, Image, Text } from 'react-native';
import Header from '../components/header';

const dev1 = require('../assets/dev1.png');
const dev2 = require('../assets/dev2.png');

const data = [
    {
        id: '1',
        title: 'Trabalho com react e react native',
        img: dev1,
    },
    {
        id: '2',
        title: 'Também estou estudando VueJS',
        img: dev2,
    },
];

const Tecnologias = () => {
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
