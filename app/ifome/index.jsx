import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Pressable, FlatList } from 'react-native';
import { AppContext } from '../../scripts/AppContext';
import Header from './components/header';
import { Link } from 'expo-router';

const Item = ({ nome, local, preco, img, id }) => {
    const { carrinho, setCarrinho } = useContext(AppContext);

    const adicionar = () => {
        setCarrinho([...carrinho, { id, nome, local, preco }]);
    };

    return (
        <View style={styles.itemContainer}>
            <Image source={{ uri: img }} style={styles.img} />
            <View style={styles.itemDetails}>
                <Text style={styles.nome}>{nome}</Text>
                <Text style={styles.local}>{local}</Text>
                <Text style={styles.preco}>R$ {preco}</Text>
                <Pressable style={styles.buy} onPress={adicionar}>
                    <Text style={styles.buyTxt}>Adicionar ao carrinho</Text>
                </Pressable>
            </View>
        </View>
    );
};

const IFome = () => {
    const { lanches, carrinho } = useContext(AppContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header link='../' header='IFome' />
                <View style={styles.cartArea}>
                    <Image source={require('../../assets/cart.png')} style={styles.cartImg} />
                    <Text style={styles.txtCart}>{carrinho.length} itens</Text>
                    {carrinho.length > 0 && (
                        <Link href='./cart' style={styles.link}>
                            <Text>Carrinho</Text>
                        </Link>
                    )}
                </View>
            </View>
            <View style={styles.carts}>
                <FlatList
                    data={lanches}
                    renderItem={({ item }) => (
                        <Item {...item} />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        marginBottom: 20,
    },
    cartArea: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    txtCart: {
        marginRight: 20,
    },
    carts: {
        padding: 10
    },
    link: {
        backgroundColor: '#ff0000',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        color: '#fff',
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        padding: 20,
    },
    img: {
        width: 150,
        height: 150,
        marginRight: 20,
    },
    itemDetails: {
        flex: 1,
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    local: {
        fontSize: 14,
        marginBottom: 5,
    },
    preco: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    buy: {
        backgroundColor: '#ff0000',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buyTxt: {
        color: '#fff',
    },
    cartImg: {
        width: 30,
        height: 30,
        marginRight: 20,
    },
});

export default IFome;
